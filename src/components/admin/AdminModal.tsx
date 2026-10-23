import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  Building,
  Package,
  CheckCircle,
  AlertCircle,
  Upload,
  Search,
  Sparkles,
  Sliders,
  Clock,
  ArrowUp,
  ArrowDown,
  FolderOpen,
  Image as ImageIcon,
  Check,
  Copy,
  Download,
  Code,
  FileJson,
  Database,
  HelpCircle
} from 'lucide-react';
import { FaProductItem, Language } from '../../types';
import {
  CompanyInfo,
  HeroSliderSettings,
  HeroSlideItem,
  ProductCategoryDef,
  OFFICIAL_CATEGORIES,
  DEFAULT_COMPANY_INFO,
  EXTENDED_INITIAL_PRODUCTS,
  DEFAULT_SLIDER_SETTINGS,
  REPOSITORY_IMAGES,
  saveStoredCategories,
  saveStoredCompanyInfo,
  saveStoredProducts,
  saveStoredSliderSettings,
  resetStoreToFactoryDefaults,
  normalizeCategoryKey,
  normalizeImagePath,
  generateTypeScriptSourceSyncCode,
  generateStoreJsonExport,
  parseAndNormalizeImportedData
} from '../../data/companyStore';
import { AistudioImageModal } from './AistudioImageModal';
import { SyncGuideModal } from './SyncGuideModal';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  categories?: ProductCategoryDef[];
  onUpdateCategories?: (newCategories: ProductCategoryDef[]) => void;
  companyInfo?: CompanyInfo;
  onUpdateCompanyInfo: (newInfo: CompanyInfo) => void;
  products?: FaProductItem[];
  onUpdateProducts: (newProducts: FaProductItem[]) => void;
  sliderSettings?: HeroSliderSettings;
  onUpdateSliderSettings: (newSettings: HeroSliderSettings) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  categories = OFFICIAL_CATEGORIES,
  onUpdateCategories,
  companyInfo = DEFAULT_COMPANY_INFO,
  onUpdateCompanyInfo,
  products = EXTENDED_INITIAL_PRODUCTS,
  onUpdateProducts,
  sliderSettings = DEFAULT_SLIDER_SETTINGS,
  onUpdateSliderSettings
}) => {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authId, setAuthId] = useState('');
  const [authPw, setAuthPw] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab: products, slider, company
  const [activeTab, setActiveTab] = useState<'products' | 'slider' | 'company'>('products');

  // Company Edit Form State
  const [companyForm, setCompanyForm] = useState<CompanyInfo>(() => companyInfo || DEFAULT_COMPANY_INFO);
  const [companySavedToast, setCompanySavedToast] = useState(false);

  // Products & Categories State inside Admin
  const [adminSearch, setAdminSearch] = useState('');
  const [adminCategoryFilter, setAdminCategoryFilter] = useState('all');
  const [editingProduct, setEditingProduct] = useState<FaProductItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [productSavedToast, setProductSavedToast] = useState(false);

  // Category Management State
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ProductCategoryDef | null>(null);
  const [isCreatingNewCategory, setIsCreatingNewCategory] = useState(false);

  // Slider State inside Admin
  const [sliderForm, setSliderForm] = useState<HeroSliderSettings>(() => sliderSettings || DEFAULT_SLIDER_SETTINGS);
  const [editingSlide, setEditingSlide] = useState<HeroSlideItem | null>(null);
  const [isCreatingNewSlide, setIsCreatingNewSlide] = useState(false);
  const [sliderSavedToast, setSliderSavedToast] = useState(false);

  // Repository Image Selector Popup Modal State
  const [repoPickerTarget, setRepoPickerTarget] = useState<'product' | 'slide' | null>(null);
  const [repoSearchQuery, setRepoSearchQuery] = useState('');

  // Source Code Sync (Export / Import) Modal & Toast State
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [syncModalTab, setSyncModalTab] = useState<'export' | 'import'>('export');
  const [exportFormat, setExportFormat] = useState<'ts' | 'json'>('ts');
  const [importInputText, setImportInputText] = useState('');
  const [importErrorMsg, setImportErrorMsg] = useState('');
  const [syncToastMsg, setSyncToastMsg] = useState('');

  // Secondary Password Auth State for Sensitive Data Management (PW: DAWOO@1004)
  const [isSensitiveUnlocked, setIsSensitiveUnlocked] = useState<boolean>(false);
  const [isSensitiveAuthModalOpen, setIsSensitiveAuthModalOpen] = useState<boolean>(false);
  const [sensitivePwInput, setSensitivePwInput] = useState<string>('');
  const [sensitivePwError, setSensitivePwError] = useState<string>('');
  const [pendingSensitiveLabel, setPendingSensitiveLabel] = useState<string>('');
  const [pendingSensitiveAction, setPendingSensitiveAction] = useState<(() => void) | null>(null);

  // Sync Guide Help Popup Modal State
  const [isSyncGuideOpen, setIsSyncGuideOpen] = useState<boolean>(false);

  // Check existing session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const sessionLoggedIn = sessionStorage.getItem('dawoofa_admin_session');
        if (sessionLoggedIn === 'true') {
          setIsAuthenticated(true);
        }
      } catch (e) {
        // Ignore sessionStorage errors in restricted iframes
      }
    }
  }, []);

  // Sync incoming props safely
  useEffect(() => {
    if (companyInfo) {
      setCompanyForm(companyInfo);
    }
  }, [companyInfo]);

  useEffect(() => {
    if (sliderSettings && Array.isArray(sliderSettings.slides)) {
      setSliderForm(sliderSettings);
    }
  }, [sliderSettings]);

  if (!isOpen) return null;

  // Login Handler: ID: DAWOOFAVINA, PW: DAWOO@1234 (trimmed & case-insensitive ID)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = authId.trim().toUpperCase();
    const cleanPw = authPw.trim();

    if (cleanId === 'DAWOOFAVINA' && cleanPw === 'DAWOO@1234') {
      setIsAuthenticated(true);
      setAuthError('');
      try {
        sessionStorage.setItem('dawoofa_admin_session', 'true');
      } catch (err) {
        // Ignore storage errors
      }
    } else {
      setAuthError('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsSensitiveUnlocked(false);
    setIsSensitiveAuthModalOpen(false);
    setSensitivePwInput('');
    setSensitivePwError('');
    setPendingSensitiveAction(null);
    setAuthId('');
    setAuthPw('');
    try {
      sessionStorage.removeItem('dawoofa_admin_session');
    } catch (err) {
      // Ignore storage errors
    }
  };

  // Secondary Password Gate Helper for Sensitive Operations (PW: DAWOO@1004)
  const requireSensitiveAuth = (label: string, action: () => void) => {
    if (isSensitiveUnlocked) {
      action();
      return;
    }
    setPendingSensitiveLabel(label);
    setPendingSensitiveAction(() => action);
    setSensitivePwInput('');
    setSensitivePwError('');
    setIsSensitiveAuthModalOpen(true);
  };

  const handleSensitiveAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPw = sensitivePwInput.trim();
    if (cleanPw === 'DAWOO@1004') {
      setIsSensitiveUnlocked(true);
      setIsSensitiveAuthModalOpen(false);
      setSensitivePwInput('');
      setSensitivePwError('');
      const actionToRun = pendingSensitiveAction;
      setPendingSensitiveAction(null);
      if (actionToRun) {
        actionToRun();
      }
    } else {
      setSensitivePwError('보안 비밀번호가 일치하지 않습니다. 승인된 2차 비밀번호를 입력해 주세요.');
    }
  };

  // Company Info Save Handler
  const handleSaveCompanyInfo = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredCompanyInfo(companyForm);
    onUpdateCompanyInfo(companyForm);
    setCompanySavedToast(true);
    setTimeout(() => setCompanySavedToast(false), 3000);
  };

  // AistudioImageModal Selection Handler (Applies relative ./assets/aistudio/images/... path & saves immediately)
  const handleSelectRepositoryImage = (relativePath: string) => {
    const cleanRelativePath = relativePath.startsWith('./')
      ? relativePath
      : relativePath.startsWith('/')
      ? `.${relativePath}`
      : `./${relativePath}`;

    if (repoPickerTarget === 'product' && editingProduct) {
      const updatedEditingProduct: FaProductItem = {
        ...editingProduct,
        image: cleanRelativePath
      };
      setEditingProduct(updatedEditingProduct);

      // Immediately persist to product catalog data if editing an existing product
      if (!isCreatingNew) {
        const updatedList = products.map((p) =>
          p.id === updatedEditingProduct.id ? updatedEditingProduct : p
        );
        saveStoredProducts(updatedList);
        onUpdateProducts(updatedList);
        setProductSavedToast(true);
        setTimeout(() => setProductSavedToast(false), 3000);
      }
    } else if (repoPickerTarget === 'slide' && editingSlide) {
      const updatedEditingSlide: HeroSlideItem = {
        ...editingSlide,
        image: cleanRelativePath
      };
      setEditingSlide(updatedEditingSlide);

      if (!isCreatingNewSlide) {
        const currentSlidesList = sliderForm?.slides || DEFAULT_SLIDER_SETTINGS.slides;
        const updatedSlides = currentSlidesList.map((s) =>
          s.id === updatedEditingSlide.id ? updatedEditingSlide : s
        );
        const updatedSettings: HeroSliderSettings = {
          ...sliderForm,
          slides: updatedSlides
        };
        setSliderForm(updatedSettings);
        saveStoredSliderSettings(updatedSettings);
        onUpdateSliderSettings(updatedSettings);
        setSliderSavedToast(true);
        setTimeout(() => setSliderSavedToast(false), 3000);
      }
    }
    setRepoPickerTarget(null);
  };

  // Start Creating New Product (Defaults to currently selected category if not 'all')
  const handleStartAddProduct = (presetCategory?: string) => {
    const defaultCatId =
      presetCategory && presetCategory !== 'all'
        ? presetCategory
        : adminCategoryFilter !== 'all'
        ? adminCategoryFilter
        : categories[0]?.id || OFFICIAL_CATEGORIES[0].id;

    const catDef = categories.find((c) => c.id === defaultCatId) || categories[0] || OFFICIAL_CATEGORIES[0];

    const newItem: FaProductItem = {
      id: `fa-custom-${Date.now()}`,
      category: catDef.id,
      categoryLabel: {
        ko: catDef.nameKo,
        vi: catDef.nameVn,
        en: catDef.nameEn
      },
      modelName: 'NEW-MODEL-001',
      brand: 'MITSUBISHI ELECTRIC',
      tagline: {
        vi: 'Tên sản phẩm & Mô tả kỹ thuật mới',
        ko: '신규 추가 모델명 및 요약 설명',
        en: 'New Product Model & Summary'
      },
      specs: {
        powerCapacity: '0.1kW ~ 55kW',
        inputVoltage: '3-Phase 200~240V / 380~480V',
        controlMode: 'CC-Link IE TSN / SSCNET III/H',
        encoderResolution: '26-bit Absolute Encoder'
      },
      features: {
        vi: ['Hàng chính hãng 100% có sẵn kho Việt Nam', 'Cung cấp đầy đủ chứng nhận C/O & C/Q'],
        ko: ['베트남 현지 보세창고 정품 보유', '정식 원산지 증명서(C/O) 및 시험성적서(C/Q) 발행'],
        en: ['100% Genuine in Vietnam bonded warehouse', 'Full official C/O & C/Q documentation']
      },
      image: './assets/aistudio/images/SERVO/SERVO.png',
      inStockVietnam: true,
      leadTime: {
        vi: 'Giao ngay 24~48h (Kho Bắc Ninh / Bình Dương)',
        ko: '박닌/빈증 보세창고 즉시 출고 (24~48시간)',
        en: 'Immediate 24-48h dispatch (Bac Ninh / Binh Duong)'
      }
    };
    setEditingProduct(newItem);
    setIsCreatingNew(true);
  };

  // Save Edited or Newly Created Product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    const catDef = categories.find((c) => c.id === editingProduct.category);
    const finalizedProduct: FaProductItem = {
      ...editingProduct,
      image: normalizeImagePath(editingProduct.image),
      categoryLabel: catDef
        ? { ko: catDef.nameKo, vi: catDef.nameVn, en: catDef.nameEn }
        : editingProduct.categoryLabel
    };

    let updatedList: FaProductItem[];
    if (isCreatingNew) {
      updatedList = [finalizedProduct, ...products];
    } else {
      updatedList = products.map((p) => (p.id === finalizedProduct.id ? finalizedProduct : p));
    }

    saveStoredProducts(updatedList, categories);
    onUpdateProducts(updatedList);
    setEditingProduct(null);
    setIsCreatingNew(false);
    setProductSavedToast(true);
    setTimeout(() => setProductSavedToast(false), 3000);
  };

  // Delete Product
  const handleDeleteProduct = (id: string) => {
    const updatedList = products.filter((p) => p.id !== id);
    saveStoredProducts(updatedList, categories);
    onUpdateProducts(updatedList);
    if (editingProduct?.id === id) {
      setEditingProduct(null);
      setIsCreatingNew(false);
    }
  };

  // Category Add / Edit / Delete Handlers
  const handleStartAddCategory = () => {
    setEditingCategory({
      id: `cat-${Date.now().toString(36).slice(-4)}`,
      nameKo: '신규 취급 카테고리',
      nameVn: 'Danh mục sản phẩm mới',
      nameEn: 'New Product Category',
      shortDescKo: '신규 카테고리 주요 취급 품목 설명',
      shortDescVn: 'Mô tả danh mục thiết bị mới'
    });
    setIsCreatingNewCategory(true);
    setShowCategoryManager(true);
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory) return;
    const cleanId = editingCategory.id.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '') || `cat-${Date.now()}`;
    const finalizedCat: ProductCategoryDef = {
      ...editingCategory,
      id: cleanId
    };

    let updatedCats: ProductCategoryDef[];
    if (isCreatingNewCategory) {
      if (categories.some((c) => c.id === cleanId)) {
        updatedCats = categories.map((c) => (c.id === cleanId ? finalizedCat : c));
      } else {
        updatedCats = [...categories, finalizedCat];
      }
    } else {
      updatedCats = categories.map((c) => (c.id === editingCategory.id ? finalizedCat : c));
    }

    saveStoredCategories(updatedCats);
    if (onUpdateCategories) {
      onUpdateCategories(updatedCats);
    }
    setEditingCategory(null);
    setIsCreatingNewCategory(false);
    setSyncToastMsg(`카테고리 [${finalizedCat.nameKo}] 설정이 저장되었습니다.`);
    setTimeout(() => setSyncToastMsg(''), 3500);
  };

  const handleDeleteCategory = (catId: string) => {
    if (categories.length <= 1) return;
    const updatedCats = categories.filter((c) => c.id !== catId);
    saveStoredCategories(updatedCats);
    if (onUpdateCategories) {
      onUpdateCategories(updatedCats);
    }
    if (adminCategoryFilter === catId) {
      setAdminCategoryFilter('all');
    }
    setSyncToastMsg(`카테고리(${catId})가 삭제되었습니다.`);
    setTimeout(() => setSyncToastMsg(''), 3000);
  };

  // =========================================================================
  // SOURCE CODE SYNC: COPY TS CODE, EXPORT JSON, IMPORT OVERWRITE HANDLERS
  // =========================================================================
  const copyTextToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Fallback below
    }
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopyTypeScriptSource = async () => {
    const code = generateTypeScriptSourceSyncCode(categories, products, companyForm, sliderForm);
    await copyTextToClipboard(code);
    setExportFormat('ts');
    setSyncToastMsg(
      '현재 카테고리 및 제품 데이터(OFFICIAL_CATEGORIES & EXTENDED_INITIAL_PRODUCTS) TypeScript 코드가 클립보드에 복사되었습니다!'
    );
    setTimeout(() => setSyncToastMsg(''), 4500);
  };

  const handleExportJsonAndCopy = async (downloadFile = false) => {
    const jsonStr = generateStoreJsonExport(categories, products, companyForm, sliderForm);
    await copyTextToClipboard(jsonStr);
    if (downloadFile) {
      try {
        const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dawoofa-catalog-sync-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error('JSON file download error', e);
      }
    }
    setSyncToastMsg(
      downloadFile
        ? '전체 데이터 JSON 파일 다운로드 및 클립보드 복사가 완료되었습니다!'
        : '현재 제품/카테고리 JSON 데이터가 클립보드에 복사되었습니다!'
    );
    setTimeout(() => setSyncToastMsg(''), 4500);
  };

  const handleExecuteImportOverwrite = (e: React.FormEvent) => {
    e.preventDefault();
    setImportErrorMsg('');
    try {
      const result = parseAndNormalizeImportedData(
        importInputText,
        categories,
        companyForm,
        sliderForm
      );

      // Persist all imported data to localStorage & update parent React states immediately
      saveStoredCategories(result.categories);
      saveStoredProducts(result.products, result.categories);
      saveStoredCompanyInfo(result.companyInfo);
      saveStoredSliderSettings(result.sliderSettings);

      if (onUpdateCategories) {
        onUpdateCategories(result.categories);
      }
      onUpdateProducts(result.products);
      onUpdateCompanyInfo(result.companyInfo);
      onUpdateSliderSettings(result.sliderSettings);

      setCompanyForm(result.companyInfo);
      setSliderForm(result.sliderSettings);
      setEditingProduct(null);
      setEditingSlide(null);
      setImportInputText('');
      setIsSyncModalOpen(false);

      setSyncToastMsg(
        `데이터 가져오기 완료! 카테고리 ${result.categories.length}개, 제품 ${result.products.length}종이 즉시 동기화 반영되었습니다.`
      );
      setTimeout(() => setSyncToastMsg(''), 5000);
    } catch (err: any) {
      setImportErrorMsg(err?.message || '데이터 파싱 중 오류가 발생했습니다. JSON 또는 TS 코드 형식을 확인해 주세요.');
    }
  };

  const handleImportFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        setImportInputText(content);
        setImportErrorMsg('');
      }
    };
    reader.readAsText(file);
  };

  // Slider Handlers
  const currentSlides = sliderForm?.slides || DEFAULT_SLIDER_SETTINGS.slides;

  const handleSaveSliderInterval = (newSeconds: number) => {
    const clamped = Math.max(1, Math.min(30, newSeconds));
    const updated: HeroSliderSettings = {
      ...sliderForm,
      intervalSeconds: clamped,
      slides: currentSlides
    };
    setSliderForm(updated);
    saveStoredSliderSettings(updated);
    onUpdateSliderSettings(updated);
    setSliderSavedToast(true);
    setTimeout(() => setSliderSavedToast(false), 2500);
  };

  const handleStartAddSlide = () => {
    const nextNum = currentSlides.length + 1;
    const newSlide: HeroSlideItem = {
      id: `slide-${Date.now()}`,
      slideNumber: nextNum,
      badge: {
        vi: `AD BANNER #0${nextNum} • DAWOOFA VINA`,
        ko: `광고 배너 #0${nextNum} • 다우에프에이 비나`,
        en: `AD BANNER #0${nextNum} • DAWOOFA VINA`
      },
      title: {
        vi: 'Tiêu đề quảng cáo mới trên màn hình chính',
        ko: '첫화면 신규 프로모션 광고 타이틀 입력',
        en: 'New Main Promotional Banner Title'
      },
      subtitle: {
        vi: 'Mô tả chi tiết chương trình khuyến mãi hoặc giải pháp kỹ thuật FA.',
        ko: '신규 광고 슬라이드의 상세 설명 문구 및 주요 공급 품목 안내를 입력하세요.',
        en: 'Enter detailed promotional description and featured FA products.'
      },
      image: './assets/aistudio/images/SERVO/SERVO.png',
      targetModel: 'MITSUBISHI FA PROMOTION',
      ctaText: {
        vi: 'Yêu cầu báo giá',
        ko: '견적 문의하기',
        en: 'Request Quote'
      },
      highlightPoints: {
        ko: ['100% 정품 C/O, C/Q 보증', '박닌 & 빈증 물류센터 24~48h 직송'],
        vi: ['100% chính hãng C/O, C/Q', 'Giao nhanh 24~48h từ kho Bắc Ninh & Bình Dương'],
        en: ['100% Genuine C/O & C/Q', '24-48h dispatch from Bac Ninh & Binh Duong']
      }
    };
    setEditingSlide(newSlide);
    setIsCreatingNewSlide(true);
  };

  const handleSaveSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlide) return;

    let updatedSlides: HeroSlideItem[];
    if (isCreatingNewSlide) {
      updatedSlides = [...currentSlides, editingSlide];
    } else {
      updatedSlides = currentSlides.map((s) => (s.id === editingSlide.id ? editingSlide : s));
    }

    const updatedSettings: HeroSliderSettings = {
      ...sliderForm,
      slides: updatedSlides
    };

    setSliderForm(updatedSettings);
    saveStoredSliderSettings(updatedSettings);
    onUpdateSliderSettings(updatedSettings);
    setEditingSlide(null);
    setIsCreatingNewSlide(false);
    setSliderSavedToast(true);
    setTimeout(() => setSliderSavedToast(false), 3000);
  };

  const handleDeleteSlide = (id: string) => {
    if (currentSlides.length <= 1) return; // Keep at least 1 slide
    const updatedSlides = currentSlides
      .filter((s) => s.id !== id)
      .map((s, idx) => ({
        ...s,
        slideNumber: idx + 1
      }));

    const updatedSettings: HeroSliderSettings = {
      ...sliderForm,
      slides: updatedSlides
    };

    setSliderForm(updatedSettings);
    saveStoredSliderSettings(updatedSettings);
    onUpdateSliderSettings(updatedSettings);
    if (editingSlide?.id === id) {
      setEditingSlide(null);
      setIsCreatingNewSlide(false);
    }
  };

  const handleMoveSlide = (index: number, direction: 'up' | 'down') => {
    const newSlides = [...currentSlides];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSlides.length) return;

    const temp = newSlides[index];
    newSlides[index] = newSlides[targetIndex];
    newSlides[targetIndex] = temp;

    const renumbered = newSlides.map((s, idx) => ({
      ...s,
      slideNumber: idx + 1
    }));

    const updatedSettings: HeroSliderSettings = {
      ...sliderForm,
      slides: renumbered
    };
    setSliderForm(updatedSettings);
    saveStoredSliderSettings(updatedSettings);
    onUpdateSliderSettings(updatedSettings);
  };

  // Factory Reset Handler
  const handleFactoryReset = () => {
    const defaults = resetStoreToFactoryDefaults();
    setCompanyForm(defaults.company);
    setSliderForm(defaults.slider);
    if (onUpdateCategories) {
      onUpdateCategories(defaults.categories);
    }
    onUpdateCompanyInfo(defaults.company);
    onUpdateProducts(defaults.products);
    onUpdateSliderSettings(defaults.slider);
    setEditingProduct(null);
    setEditingSlide(null);
    setSyncToastMsg('초기 기본 데이터(Factory Defaults)로 복원되었습니다.');
    setTimeout(() => setSyncToastMsg(''), 3000);
  };

  // Filtered products in admin list (1:1 matched with categories)
  const filteredAdminProducts = products.filter((item) => {
    const itemCatId = normalizeCategoryKey(item.category, categories);
    const matchesCat = adminCategoryFilter === 'all' || itemCatId === adminCategoryFilter;
    const q = adminSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      (item.modelName || '').toLowerCase().includes(q) ||
      (item.brand || '').toLowerCase().includes(q) ||
      itemCatId.toLowerCase().includes(q) ||
      (item.tagline?.ko || '').toLowerCase().includes(q) ||
      (item.tagline?.vi || '').toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white border-2 border-[#1E293B] w-full max-w-[1220px] shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        
        {/* Top Modal Header Bar */}
        <div className="bg-[#1E293B] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center font-mono font-bold text-xs">
              FA
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wide flex items-center gap-2">
                <span>DAWOOFA VINA 통합 관리자 시스템 (ADMIN CMS)</span>
                {isAuthenticated && (
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-600 text-white">
                    AUTHENTICATED
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-slate-300 font-mono">
                1:1 취급제품 카테고리 관리 • 첫화면 4초 광고 슬라이더 설정 • 회사 기본정보 실시간 연동
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-red-700 text-slate-200 hover:text-white text-xs font-mono border border-slate-600 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>로그아웃</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 transition-colors cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BODY: 1. Login Screen if Not Authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center bg-[#F8FAFC] flex-1">
            <div className="w-full max-w-md bg-white border border-[#CBD5E1] shadow-md p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-[#EFF6FF] border border-blue-200 text-[#2563EB] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#1E293B]">
                    관리자 로그인 (Admin Login)
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    승인된 다우에프에이 비나 관리자 계정으로 접속하세요.
                  </p>
                </div>
              </div>

              {authError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] font-mono uppercase mb-1.5">
                    관리자 아이디 (ADMIN ID)
                  </label>
                  <input
                    type="text"
                    required
                    value={authId}
                    onChange={(e) => setAuthId(e.target.value)}
                    placeholder="아이디 입력"
                    autoComplete="username"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono bg-[#F8FAFC] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] font-mono uppercase mb-1.5">
                    비밀번호 (PASSWORD)
                  </label>
                  <input
                    type="password"
                    required
                    value={authPw}
                    onChange={(e) => setAuthPw(e.target.value)}
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono bg-[#F8FAFC] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-sm cursor-pointer mt-2"
                >
                  관리자 페이지 접속하기 (LOGIN)
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* BODY: 2. Authenticated Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
            
            {/* Sub-Navigation Bar */}
            <div className="bg-white border-b border-[#CBD5E1] px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-1 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('products')}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'products'
                      ? 'border-[#2563EB] text-[#2563EB] bg-blue-50/50'
                      : 'border-transparent text-[#475569] hover:text-[#1E293B]'
                  }`}
                >
                  <Package className="w-4 h-4" />
                  <span>1. 취급제품 카테고리 관리 (1:1 매칭 • {products.length}종)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('slider')}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'slider'
                      ? 'border-[#2563EB] text-[#2563EB] bg-blue-50/50'
                      : 'border-transparent text-[#475569] hover:text-[#1E293B]'
                  }`}
                >
                  <Sliders className="w-4 h-4" />
                  <span>2. 첫화면 광고 슬라이더 설정 ({sliderForm?.intervalSeconds || 4}초 롤링 • {currentSlides.length}장)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('company')}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'company'
                      ? 'border-[#2563EB] text-[#2563EB] bg-blue-50/50'
                      : 'border-transparent text-[#475569] hover:text-[#1E293B]'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>3. 회사 기본정보 관리 (홈페이지 실시간 연동)</span>
                </button>
              </div>

              <div className="py-2 flex flex-wrap items-center gap-1.5 ml-auto">
                {!isSensitiveUnlocked ? (
                  <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 border border-slate-300 px-2 py-1">
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-1">
                      <Lock className="w-3 h-3 text-amber-700" />
                      <span>민감 데이터 보안잠금</span>
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        requireSensitiveAuth('현재 제품/카테고리 데이터 복사', handleCopyTypeScriptSource)
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-[#1D4ED8] transition-colors cursor-pointer shadow-2xs"
                      title="2차 비밀번호 인증 후 사용 가능: 현재 제품/카테고리 데이터 복사"
                    >
                      <Lock className="w-3 h-3 text-blue-200" />
                      <Code className="w-3.5 h-3.5" />
                      <span>현재 제품/카테고리 데이터 복사</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        requireSensitiveAuth('JSON 내보내기', () => handleExportJsonAndCopy(true))
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-[#1E293B] bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors cursor-pointer"
                      title="2차 비밀번호 인증 후 사용 가능: JSON 내보내기"
                    >
                      <Lock className="w-3 h-3 text-emerald-700" />
                      <FileJson className="w-3.5 h-3.5 text-emerald-700" />
                      <span>JSON 내보내기</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        requireSensitiveAuth('데이터 가져오기(Import)', () => {
                          setSyncModalTab('import');
                          setImportErrorMsg('');
                          setIsSyncModalOpen(true);
                        })
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-[#2563EB] bg-blue-50 hover:bg-blue-100 border border-blue-300 transition-colors cursor-pointer"
                      title="2차 비밀번호 인증 후 사용 가능: 데이터 가져오기(Import)"
                    >
                      <Lock className="w-3 h-3 text-[#2563EB]" />
                      <Upload className="w-3.5 h-3.5" />
                      <span>데이터 가져오기(Import)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        requireSensitiveAuth('초기값 복원', handleFactoryReset)
                      }
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-slate-600 hover:text-red-600 bg-white hover:bg-red-50 border border-slate-300 transition-colors cursor-pointer"
                      title="2차 비밀번호 인증 후 사용 가능: 초기값 복원"
                    >
                      <Lock className="w-3 h-3 text-slate-500" />
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>초기값 복원</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSyncGuideOpen(true)}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1 ml-auto transition-colors cursor-pointer shadow-2xs"
                      title="온라인 관리자 설정 영구 동기화 및 상단 관리 버튼 안내"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>[동기화 가이드 (?)]</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-1.5 bg-emerald-50/70 border border-emerald-300 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSensitiveUnlocked(false);
                        setIsSyncModalOpen(false);
                      }}
                      className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 hover:bg-amber-100 hover:text-amber-900 border border-emerald-300 px-2 py-1 transition-colors cursor-pointer"
                      title="민감 데이터 관리 기능 다시 잠그기"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-700" />
                      <span>보안해제됨 (잠금)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyTypeScriptSource}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-[#1D4ED8] transition-colors cursor-pointer shadow-2xs"
                      title="src/data/companyStore.ts 정적 코드(OFFICIAL_CATEGORIES & EXTENDED_INITIAL_PRODUCTS) 클립보드 복사"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>현재 제품/카테고리 데이터 복사</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleExportJsonAndCopy(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-[#1E293B] bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors cursor-pointer"
                      title="현재 전체 데이터 JSON 복사 및 파일 다운로드"
                    >
                      <FileJson className="w-3.5 h-3.5 text-emerald-700" />
                      <span>JSON 내보내기</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSyncModalTab('import');
                        setImportErrorMsg('');
                        setIsSyncModalOpen(true);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold text-[#2563EB] bg-blue-50 hover:bg-blue-100 border border-blue-300 transition-colors cursor-pointer"
                      title="JSON 또는 TS 데이터를 붙여넣어 전체 데이터 덮어쓰기"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>데이터 가져오기(Import)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFactoryReset}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 border border-slate-300 transition-colors cursor-pointer"
                      title="초기 데이터로 복원"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>초기값 복원</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSyncGuideOpen(true)}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1 ml-auto transition-colors cursor-pointer shadow-2xs"
                      title="온라인 관리자 설정 영구 동기화 및 상단 관리 버튼 안내"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>[동기화 가이드 (?)]</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Global Sync / Action Toast Notification Bar */}
            {syncToastMsg && (
              <div className="bg-emerald-700 text-white px-6 py-2.5 text-xs font-mono font-bold flex items-center justify-between gap-3 shrink-0 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{syncToastMsg}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSyncModalTab('export');
                      setIsSyncModalOpen(true);
                    }}
                    className="px-2.5 py-1 bg-white text-emerald-800 text-[11px] font-bold hover:bg-emerald-50 cursor-pointer"
                  >
                    복사된 소스코드 확인하기
                  </button>
                  <button
                    type="button"
                    onClick={() => setSyncToastMsg('')}
                    className="text-emerald-200 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Scrollable Tab Workspace */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              
              {/* =========================================================
                  TAB 1: PRODUCTS MANAGEMENT (1:1 CATEGORY MATCHED)
                 ========================================================= */}
              {activeTab === 'products' && (
                <div className="space-y-5">
                  
                  {/* 1:1 Homepage Category Filter Bar with Product Counts */}
                  <div className="bg-white border border-[#CBD5E1] p-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-[#2563EB] block">
                          1:1 HOMEPAGE CATEGORY MATCHING &amp; SOURCE SYNC SYSTEM
                        </span>
                        <h3 className="text-sm font-extrabold text-[#1E293B]">
                          홈페이지 취급제품군 {categories.length}대 카테고리별 1:1 매칭 관리
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setShowCategoryManager(!showCategoryManager)}
                          className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-[#1E293B] border border-slate-300 text-xs font-bold font-mono transition-colors cursor-pointer"
                        >
                          <Database className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>{showCategoryManager ? '카테고리 편집 닫기' : '카테고리 추가/편집'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStartAddProduct()}
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer shrink-0"
                        >
                          <Plus className="w-4 h-4" />
                          <span>
                            {adminCategoryFilter === 'all'
                              ? '+ 신규 모델 추가'
                              : `+ [${categories.find((c) => c.id === adminCategoryFilter)?.nameKo || adminCategoryFilter}] 모델 추가`}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Category Manager Panel */}
                    {showCategoryManager && (
                      <div className="mb-4 p-4 bg-slate-50 border border-blue-200 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-extrabold text-[#1E293B] font-mono">
                              취급제품 카테고리 목록 관리 ({categories.length}개)
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              카테고리를 추가/수정하면 상단 [현재 제품/카테고리 데이터 복사] 및 [JSON 내보내기] 코드에 즉시 포함됩니다.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleStartAddCategory}
                            className="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>신규 카테고리 추가</span>
                          </button>
                        </div>

                        {editingCategory && (
                          <form onSubmit={handleSaveCategory} className="p-3.5 bg-white border-2 border-[#2563EB] space-y-3">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                              <span className="text-xs font-bold text-[#2563EB] font-mono">
                                {isCreatingNewCategory ? '신규 카테고리 등록' : `카테고리 수정 (${editingCategory.id})`}
                              </span>
                              <button
                                type="button"
                                onClick={() => setEditingCategory(null)}
                                className="text-slate-400 hover:text-slate-700 cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  카테고리 영문 키 (ID) *
                                </label>
                                <input
                                  type="text"
                                  required
                                  disabled={!isCreatingNewCategory}
                                  value={editingCategory.id}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, id: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 font-mono bg-slate-50"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  한국어 카테고리명 *
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={editingCategory.nameKo}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, nameKo: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  베트남어 카테고리명 (Tiếng Việt) *
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={editingCategory.nameVn}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, nameVn: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  영문명 (English)
                                </label>
                                <input
                                  type="text"
                                  value={editingCategory.nameEn}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, nameEn: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  한국어 요약 설명
                                </label>
                                <input
                                  type="text"
                                  value={editingCategory.shortDescKo}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, shortDescKo: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono font-bold text-slate-700 mb-1">
                                  베트남어 요약 설명
                                </label>
                                <input
                                  type="text"
                                  value={editingCategory.shortDescVn}
                                  onChange={(e) => setEditingCategory({ ...editingCategory, shortDescVn: e.target.value })}
                                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300"
                                />
                              </div>
                            </div>
                            <div className="flex justify-end gap-2">
                              <button
                                type="submit"
                                className="px-4 py-1.5 bg-[#2563EB] text-white text-xs font-mono font-bold cursor-pointer"
                              >
                                카테고리 저장
                              </button>
                            </div>
                          </form>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {categories.map((cat) => (
                            <div
                              key={cat.id}
                              className="p-2.5 bg-white border border-slate-200 flex items-center justify-between gap-2 text-xs"
                            >
                              <div className="truncate">
                                <span className="font-mono text-[10px] font-bold text-[#2563EB] mr-1.5">[{cat.id}]</span>
                                <span className="font-bold text-slate-800">{cat.nameKo}</span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingCategory(cat);
                                    setIsCreatingNewCategory(false);
                                  }}
                                  className="px-2 py-0.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] text-[10px] font-mono border border-slate-300 cursor-pointer"
                                >
                                  수정
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteCategory(cat.id)}
                                  className="px-1.5 py-0.5 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 text-[10px] font-mono border border-slate-300 cursor-pointer"
                                >
                                  삭제
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 1:1 Category Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      <button
                        type="button"
                        onClick={() => setAdminCategoryFilter('all')}
                        className={`px-3 py-2.5 text-left border transition-all cursor-pointer flex items-center justify-between ${
                          adminCategoryFilter === 'all'
                            ? 'bg-[#1E293B] text-white border-[#1E293B] font-bold shadow-2xs'
                            : 'bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:border-[#2563EB]'
                        }`}
                      >
                        <span className="text-xs truncate">전체 카테고리 보기</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 ${
                          adminCategoryFilter === 'all' ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {products.length}
                        </span>
                      </button>

                      {categories.map((cat) => {
                        const count = products.filter((p) => normalizeCategoryKey(p.category, categories) === cat.id).length;
                        const isSelected = adminCategoryFilter === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setAdminCategoryFilter(cat.id)}
                            className={`px-3 py-2.5 text-left border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#2563EB] text-white border-[#2563EB] font-bold shadow-2xs'
                                : 'bg-white text-[#1E293B] border-[#CBD5E1] hover:border-[#2563EB] hover:bg-blue-50/30'
                            }`}
                          >
                            <div className="truncate pr-1">
                              <div className="text-xs font-bold truncate">{cat.nameKo}</div>
                              <div className={`text-[10px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                {cat.nameVn}
                              </div>
                            </div>
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 shrink-0 ${
                              isSelected ? 'bg-white text-[#2563EB] font-bold' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Split Grid: Product List & Product Editor */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left Column: Product List (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-white border border-[#CBD5E1] p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            value={adminSearch}
                            onChange={(e) => setAdminSearch(e.target.value)}
                            placeholder="모델명, 브랜드, 제품명 검색..."
                            className="w-full pl-9 pr-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none bg-[#F8FAFC]"
                          />
                          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        </div>

                        {adminCategoryFilter !== 'all' && (
                          <div className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-3 py-1.5 border border-blue-200 flex items-center gap-2">
                            <span>선택된 카테고리: {categories.find((c) => c.id === adminCategoryFilter)?.nameKo}</span>
                            <button
                              type="button"
                              onClick={() => setAdminCategoryFilter('all')}
                              className="text-slate-500 hover:text-red-600 underline text-[11px] cursor-pointer"
                            >
                              전체 해제
                            </button>
                          </div>
                        )}
                      </div>

                      {productSavedToast && (
                        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>취급제품 카탈로그가 저장되어 홈페이지 카테고리에 즉시 반영되었습니다!</span>
                        </div>
                      )}

                      {/* Product Items Table / List */}
                      <div className="bg-white border border-[#CBD5E1] divide-y divide-slate-200 max-h-[560px] overflow-y-auto">
                        {filteredAdminProducts.map((item) => {
                          const itemCatId = normalizeCategoryKey(item.category, categories);
                          const matchedCat = categories.find((c) => c.id === itemCatId);
                          return (
                            <div
                              key={item.id}
                              className={`p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors ${
                                editingProduct?.id === item.id ? 'bg-blue-50/70 border-l-4 border-l-[#2563EB]' : ''
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-14 h-14 bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                                  <img
                                    src={item.image}
                                    alt={item.modelName}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.onerror = null;
                                      target.src = './assets/aistudio/images/logo.png';
                                    }}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
                                      {matchedCat ? matchedCat.nameKo : item.category}
                                    </span>
                                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-300">
                                      {item.brand}
                                    </span>
                                    <span className="text-xs font-mono font-extrabold text-[#1E293B] truncate">
                                      {item.modelName}
                                    </span>
                                  </div>
                                  <p className="text-xs font-bold text-slate-800 truncate mt-1">
                                    {item.tagline?.ko} <span className="text-slate-400 font-normal">| {item.tagline?.vi}</span>
                                  </p>
                                  <p className="text-[11px] text-slate-500 truncate font-mono">
                                    {item.specs?.powerCapacity || ''} • {item.specs?.controlMode || ''}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingProduct(item);
                                    setIsCreatingNew(false);
                                  }}
                                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#2563EB] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1 border border-slate-300 transition-colors cursor-pointer"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                  <span>편집</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteProduct(item.id)}
                                  className="p-1.5 bg-slate-100 hover:bg-red-600 text-slate-600 hover:text-white border border-slate-300 transition-colors cursor-pointer"
                                  title="삭제"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}

                        {filteredAdminProducts.length === 0 && (
                          <div className="p-8 text-center text-slate-500 text-xs">
                            해당 카테고리에 등록된 제품이 없습니다. 우측 상단의 [+ 모델 추가] 버튼을 눌러 제품을 등록하세요.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Product Editor Form (5 cols) */}
                    <div className="lg:col-span-5">
                      {editingProduct ? (
                        <form
                          onSubmit={handleSaveProduct}
                          className="bg-white border-2 border-[#2563EB] p-5 shadow-md space-y-4 sticky top-0"
                        >
                          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-blue-100 text-[#2563EB]">
                                {isCreatingNew ? 'NEW PRODUCT MODEL' : 'EDIT PRODUCT MODEL'}
                              </span>
                              <h3 className="text-sm font-extrabold text-[#1E293B] mt-1">
                                {isCreatingNew ? '신규 취급제품 모델 등록' : `모델 편집: ${editingProduct.modelName}`}
                              </h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => setEditingProduct(null)}
                              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* 1:1 Matched Category Selection */}
                          <div>
                            <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                              홈페이지 1:1 매칭 카테고리 선택 (Category) *
                            </label>
                            <select
                              value={editingProduct.category}
                              onChange={(e) =>
                                setEditingProduct({ ...editingProduct, category: e.target.value })
                              }
                              className="w-full px-3 py-2 text-xs border-2 border-blue-200 focus:border-[#2563EB] focus:outline-none bg-blue-50/30 font-bold text-[#1E293B]"
                            >
                              {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                  {cat.nameKo} ({cat.nameVn})
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Model & Brand */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                                모델명 (Model Number) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingProduct.modelName}
                                onChange={(e) =>
                                  setEditingProduct({ ...editingProduct, modelName: e.target.value })
                                }
                                className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono font-bold"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                                제조사 브랜드 (Brand) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingProduct.brand}
                                onChange={(e) =>
                                  setEditingProduct({ ...editingProduct, brand: e.target.value })
                                }
                                className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                              />
                            </div>
                          </div>

                          {/* Stock Status */}
                          <div>
                            <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                              베트남 현지 재고 상태 (Stock Status)
                            </label>
                            <select
                              value={editingProduct.inStockVietnam ? 'true' : 'false'}
                              onChange={(e) =>
                                setEditingProduct({
                                  ...editingProduct,
                                  inStockVietnam: e.target.value === 'true'
                                })
                              }
                              className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono bg-white"
                            >
                              <option value="true">베트남 현지 보세창고 상시 재고 보유 (즉시 출고)</option>
                              <option value="false">프로젝트 주문 수입 품목 (한국 본사 항공 직송)</option>
                            </select>
                          </div>

                          {/* Image Preview + AistudioImageModal Button + Relative Path Input */}
                          <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono">
                                제품 이미지 설정 (aistudio/images 폴더 탐색)
                              </label>
                              <span className="text-[10px] font-mono font-bold text-[#2563EB] bg-blue-50 px-1.5 py-0.5 border border-blue-200">
                                ./assets/aistudio/images/...
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-20 h-20 bg-white border border-slate-300 p-1.5 flex items-center justify-center shrink-0">
                                <img
                                  src={editingProduct.image}
                                  alt="Preview"
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = './assets/aistudio/images/logo.png';
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setRepoSearchQuery('');
                                    setRepoPickerTarget('product');
                                  }}
                                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-xs"
                                >
                                  <FolderOpen className="w-4 h-4" />
                                  <span>aistudio/images 폴더 이미지 선택 (모달 열기)</span>
                                </button>
                                <div>
                                  <span className="block text-[10px] font-mono text-slate-500 mb-0.5">
                                    선택된 이미지 상대 경로 (GitHub Pages 호환 `./` 경로):
                                  </span>
                                  <input
                                    type="text"
                                    value={editingProduct.image}
                                    onChange={(e) => {
                                      const raw = e.target.value;
                                      const formatted =
                                        raw.startsWith('./') || raw === ''
                                          ? raw
                                          : raw.startsWith('/')
                                          ? `.${raw}`
                                          : `./${raw}`;
                                      setEditingProduct({ ...editingProduct, image: formatted });
                                    }}
                                    placeholder="./assets/aistudio/images/SERVO/SERVO.png"
                                    className="w-full px-2.5 py-1.5 text-[11px] border border-[#CBD5E1] bg-white font-mono text-[#1E293B]"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Quick Preset Image Selector */}
                            <div>
                              <span className="block text-[10px] font-mono text-slate-500 mb-1 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#2563EB]" />
                                주요 미쓰비시 &amp; 다우FA 부품 빠른 선택:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {REPOSITORY_IMAGES.slice(0, 7).map((preset) => (
                                  <button
                                    key={preset.id}
                                    type="button"
                                    onClick={() =>
                                      setEditingProduct({ ...editingProduct, image: preset.path })
                                    }
                                    className={`px-2 py-0.5 text-[10px] border transition-colors cursor-pointer ${
                                      editingProduct.image === preset.path
                                        ? 'bg-[#2563EB] text-white border-[#2563EB] font-bold'
                                        : 'bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] border-slate-300'
                                    }`}
                                  >
                                    {preset.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Product Tagline / Titles (KO / VI / EN) */}
                          <div className="space-y-2.5">
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                제품 설명 타이틀 (한국어) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingProduct.tagline.ko}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    tagline: { ...editingProduct.tagline, ko: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                제품 설명 타이틀 (베트남어 - Tiếng Việt) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingProduct.tagline.vi}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    tagline: { ...editingProduct.tagline, vi: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                              />
                            </div>
                          </div>

                          {/* Technical Specifications Fields */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                출력 용량 (Power Capacity)
                              </label>
                              <input
                                type="text"
                                value={editingProduct.specs.powerCapacity || ''}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    specs: { ...editingProduct.specs, powerCapacity: e.target.value }
                                  })
                                }
                                className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                정격 전압 (Input Voltage)
                              </label>
                              <input
                                type="text"
                                value={editingProduct.specs.inputVoltage || ''}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    specs: { ...editingProduct.specs, inputVoltage: e.target.value }
                                  })
                                }
                                className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                제어/통신 방식 (Control Mode)
                              </label>
                              <input
                                type="text"
                                value={editingProduct.specs.controlMode || ''}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    specs: { ...editingProduct.specs, controlMode: e.target.value }
                                  })
                                }
                                className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                엔코더/분해능 (Resolution)
                              </label>
                              <input
                                type="text"
                                value={editingProduct.specs.encoderResolution || ''}
                                onChange={(e) =>
                                  setEditingProduct({
                                    ...editingProduct,
                                    specs: { ...editingProduct.specs, encoderResolution: e.target.value }
                                  })
                                }
                                className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                              />
                            </div>
                          </div>

                          <div className="pt-2 flex items-center gap-2">
                            <button
                              type="submit"
                              className="flex-1 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                            >
                              <Save className="w-4 h-4" />
                              <span>{isCreatingNew ? '신규 모델 저장하기' : '변경사항 저장하기'}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingProduct(null)}
                              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-colors cursor-pointer"
                            >
                              취소
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="bg-white border border-[#CBD5E1] p-8 text-center space-y-3">
                          <div className="w-12 h-12 bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center mx-auto">
                            <Package className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-[#1E293B]">
                            편집할 모델을 선택하거나 신규 모델을 추가하세요
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            상단의 <strong>8대 취급제품 카테고리 탭</strong>을 선택해 카테고리별로 모델을 분류하고, 이미지와 사양 텍스트를 자유롭게 편집할 수 있습니다.
                          </p>
                          <button
                            type="button"
                            onClick={() => handleStartAddProduct()}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold transition-colors cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                            <span>신규 모델 추가하기</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  TAB 2: HERO PROMOTIONAL SLIDER MANAGEMENT (4s ROLLING)
                 ========================================================= */}
              {activeTab === 'slider' && (
                <div className="space-y-6">
                  
                  {/* Top Rolling Interval Settings Card */}
                  <div className="bg-white border-2 border-[#1E293B] p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-[#2563EB] block">
                          MAIN BILLBOARD AUTO-ROLLING INTERVAL
                        </span>
                        <h3 className="text-base font-extrabold text-[#1E293B]">
                          홈페이지 첫화면 광고 슬라이더 자동 롤링 시간(초) 설정
                        </h3>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          초기 접속 시 보여지는 첫화면 광고 배너가 몇 초 단위로 자동 회전할지 설정합니다. (기본값: 4초)
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 bg-[#F8FAFC] p-3 border border-[#CBD5E1]">
                      <span className="text-xs font-bold text-[#1E293B] mr-1">롤링 주기:</span>
                      {[2, 3, 4, 5, 6, 8, 10].map((sec) => (
                        <button
                          key={sec}
                          type="button"
                          onClick={() => handleSaveSliderInterval(sec)}
                          className={`px-3 py-1.5 text-xs font-mono font-bold border transition-all cursor-pointer ${
                            sliderForm.intervalSeconds === sec
                              ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-2xs'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-[#2563EB]'
                          }`}
                        >
                          {sec}초 {sec === 4 ? '(기본)' : ''}
                        </button>
                      ))}

                      <div className="flex items-center gap-1 ml-2 pl-2 border-l border-slate-300">
                        <input
                          type="number"
                          min={1}
                          max={30}
                          value={sliderForm.intervalSeconds}
                          onChange={(e) => handleSaveSliderInterval(Number(e.target.value) || 4)}
                          className="w-16 px-2 py-1 text-xs font-mono font-bold border border-[#CBD5E1] text-center bg-white"
                        />
                        <span className="text-xs font-mono text-slate-600">초</span>
                      </div>
                    </div>
                  </div>

                  {sliderSavedToast && (
                    <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>첫화면 광고 슬라이더 이미지, 슬라이드 번호 및 롤링 시간({sliderForm.intervalSeconds}초) 설정이 홈페이지에 즉시 반영되었습니다!</span>
                    </div>
                  )}

                  {/* Slider List & Slide Editor Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: Slides List (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-white border border-[#CBD5E1] p-4 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-extrabold text-[#1E293B]">
                            등록된 첫화면 광고 슬라이드 목록 (총 {currentSlides.length}장)
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            각 슬라이드의 표시 숫자(01, 02, 03...), 광고 이미지, 타이틀 문구를 설정할 수 있습니다.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleStartAddSlide}
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono transition-colors cursor-pointer shrink-0"
                        >
                          <Plus className="w-4 h-4" />
                          <span>+ 광고 슬라이드 추가</span>
                        </button>
                      </div>

                      <div className="bg-white border border-[#CBD5E1] divide-y divide-slate-200">
                        {currentSlides.map((slide, index) => (
                          <div
                            key={slide.id}
                            className={`p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors ${
                              editingSlide?.id === slide.id ? 'bg-blue-50/70 border-l-4 border-l-[#2563EB]' : ''
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              {/* Slide Number Badge */}
                              <div className="w-11 h-11 bg-[#1E293B] text-white font-mono font-black text-base flex flex-col items-center justify-center shrink-0 border border-slate-700">
                                <span className="text-[9px] text-amber-400 font-normal leading-none">NO.</span>
                                <span>{String(slide.slideNumber).padStart(2, '0')}</span>
                              </div>

                              {/* Slide Image Thumbnail */}
                              <div className="w-16 h-14 bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                                <img
                                  src={slide.image}
                                  alt={slide.targetModel}
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = './assets/aistudio/images/logo.png';
                                  }}
                                />
                              </div>

                              {/* Slide Texts */}
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
                                    슬라이드 #{String(slide.slideNumber).padStart(2, '0')}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-slate-600 truncate">
                                    {slide.targetModel}
                                  </span>
                                </div>
                                <h5 className="text-xs font-extrabold text-[#1E293B] truncate mt-1">
                                  {slide.title.ko}
                                </h5>
                                <p className="text-[11px] text-slate-500 truncate">
                                  {slide.title.vi}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <div className="flex flex-col gap-0.5 mr-1">
                                <button
                                  type="button"
                                  disabled={index === 0}
                                  onClick={() => handleMoveSlide(index, 'up')}
                                  className="p-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 border border-slate-300 cursor-pointer"
                                  title="위로 이동"
                                >
                                  <ArrowUp className="w-3 h-3" />
                                </button>
                                <button
                                  type="button"
                                  disabled={index === currentSlides.length - 1}
                                  onClick={() => handleMoveSlide(index, 'down')}
                                  className="p-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 border border-slate-300 cursor-pointer"
                                  title="아래로 이동"
                                >
                                  <ArrowDown className="w-3 h-3" />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => {
                                  setEditingSlide(slide);
                                  setIsCreatingNewSlide(false);
                                }}
                                className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#2563EB] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1 border border-slate-300 transition-colors cursor-pointer"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                                <span>수정</span>
                              </button>

                              <button
                                type="button"
                                disabled={currentSlides.length <= 1}
                                onClick={() => handleDeleteSlide(slide.id)}
                                className="p-1.5 bg-slate-100 hover:bg-red-600 disabled:opacity-30 text-slate-600 hover:text-white border border-slate-300 transition-colors cursor-pointer"
                                title="슬라이드 삭제"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Slide Editor Form (5 cols) */}
                    <div className="lg:col-span-5">
                      {editingSlide ? (
                        <form
                          onSubmit={handleSaveSlide}
                          className="bg-white border-2 border-[#2563EB] p-5 shadow-md space-y-4 sticky top-0"
                        >
                          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-blue-100 text-[#2563EB]">
                                {isCreatingNewSlide ? 'NEW AD SLIDE' : `EDIT SLIDE #0${editingSlide.slideNumber}`}
                              </span>
                              <h3 className="text-sm font-extrabold text-[#1E293B] mt-1">
                                {isCreatingNewSlide ? '신규 첫화면 광고 슬라이드 추가' : `슬라이드 #0${editingSlide.slideNumber} 이미지 및 문구 수정`}
                              </h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => setEditingSlide(null)}
                              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Slide Number & Model Tag */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                                첫화면 표시 번호 (Slide Number) *
                              </label>
                              <input
                                type="number"
                                min={1}
                                max={99}
                                required
                                value={editingSlide.slideNumber}
                                onChange={(e) =>
                                  setEditingSlide({
                                    ...editingSlide,
                                    slideNumber: Number(e.target.value) || 1
                                  })
                                }
                                className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono font-black text-[#2563EB]"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono mb-1">
                                대표 모델 라벨 (Target Model) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingSlide.targetModel}
                                onChange={(e) =>
                                  setEditingSlide({ ...editingSlide, targetModel: e.target.value })
                                }
                                placeholder="MELSERVO-J5 / J4 SERIES"
                                className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                              />
                            </div>
                          </div>

                          {/* Slide Image Selector + Relative Path Input */}
                          <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <label className="block text-[11px] font-bold text-[#1E293B] font-mono">
                                광고 슬라이드 이미지 설정 (저장소 이미지 선택)
                              </label>
                              <span className="text-[10px] font-mono font-bold text-[#2563EB] bg-blue-50 px-1.5 py-0.5 border border-blue-200">
                                상대 경로(./) 적용
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-24 h-20 bg-white border border-slate-300 p-1.5 flex items-center justify-center shrink-0">
                                <img
                                  src={editingSlide.image}
                                  alt="Slide Preview"
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = './assets/aistudio/images/logo.png';
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setRepoSearchQuery('');
                                    setRepoPickerTarget('slide');
                                  }}
                                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-xs"
                                >
                                  <FolderOpen className="w-4 h-4" />
                                  <span>aistudio/images 폴더 이미지 선택 (모달 열기)</span>
                                </button>
                                <input
                                  type="text"
                                  value={editingSlide.image}
                                  onChange={(e) =>
                                    setEditingSlide({ ...editingSlide, image: e.target.value })
                                  }
                                  placeholder="./assets/aistudio/images/SERVO/SERVO.png"
                                  className="w-full px-2.5 py-1.5 text-[11px] border border-[#CBD5E1] bg-white font-mono"
                                />
                              </div>
                            </div>

                            <div>
                              <span className="block text-[10px] font-mono text-slate-500 mb-1">
                                주요 미쓰비시 &amp; 다우FA 이미지 빠른 적용:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {REPOSITORY_IMAGES.slice(0, 7).map((preset) => (
                                  <button
                                    key={preset.id}
                                    type="button"
                                    onClick={() =>
                                      setEditingSlide({ ...editingSlide, image: preset.path })
                                    }
                                    className={`px-2 py-0.5 text-[10px] border transition-colors cursor-pointer ${
                                      editingSlide.image === preset.path
                                        ? 'bg-[#2563EB] text-white border-[#2563EB] font-bold'
                                        : 'bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] border-slate-300'
                                    }`}
                                  >
                                    {preset.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Slide Title & Subtitle (KO / VI) */}
                          <div className="space-y-2.5">
                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                상단 배지 문구 (한국어 / 베트남어)
                              </label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  value={editingSlide.badge.ko}
                                  onChange={(e) =>
                                    setEditingSlide({
                                      ...editingSlide,
                                      badge: { ...editingSlide.badge, ko: e.target.value }
                                    })
                                  }
                                  placeholder="한국어 배지"
                                  className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                                />
                                <input
                                  type="text"
                                  value={editingSlide.badge.vi}
                                  onChange={(e) =>
                                    setEditingSlide({
                                      ...editingSlide,
                                      badge: { ...editingSlide.badge, vi: e.target.value }
                                    })
                                  }
                                  placeholder="베트남어 배지"
                                  className="w-full px-2.5 py-1.5 text-xs border border-[#CBD5E1] font-mono"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                광고 메인 헤드라인 (한국어) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingSlide.title.ko}
                                onChange={(e) =>
                                  setEditingSlide({
                                    ...editingSlide,
                                    title: { ...editingSlide.title, ko: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] font-bold"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                광고 메인 헤드라인 (베트남어 - Tiếng Việt) *
                              </label>
                              <input
                                type="text"
                                required
                                value={editingSlide.title.vi}
                                onChange={(e) =>
                                  setEditingSlide({
                                    ...editingSlide,
                                    title: { ...editingSlide.title, vi: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1] font-bold"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                광고 상세 설명 (한국어)
                              </label>
                              <textarea
                                rows={2}
                                value={editingSlide.subtitle.ko}
                                onChange={(e) =>
                                  setEditingSlide({
                                    ...editingSlide,
                                    subtitle: { ...editingSlide.subtitle, ko: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1]"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-[#1E293B] mb-1">
                                광고 상세 설명 (베트남어 - Tiếng Việt)
                              </label>
                              <textarea
                                rows={2}
                                value={editingSlide.subtitle.vi}
                                onChange={(e) =>
                                  setEditingSlide({
                                    ...editingSlide,
                                    subtitle: { ...editingSlide.subtitle, vi: e.target.value }
                                  })
                                }
                                className="w-full px-3 py-1.5 text-xs border border-[#CBD5E1]"
                              />
                            </div>
                          </div>

                          <div className="pt-2 flex items-center gap-2">
                            <button
                              type="submit"
                              className="flex-1 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                            >
                              <Save className="w-4 h-4" />
                              <span>슬라이드 저장 및 홈페이지 반영</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingSlide(null)}
                              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-colors cursor-pointer"
                            >
                              취소
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="bg-white border border-[#CBD5E1] p-8 text-center space-y-3">
                          <div className="w-12 h-12 bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center mx-auto">
                            <Sliders className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-[#1E293B]">
                            첫화면 광고 슬라이드를 선택하거나 추가하세요
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            상단에서 <strong>롤링 주기(초 단위, 기본 4초)</strong>를 즉시 변경할 수 있으며, 좌측 목록에서 슬라이드별 표시 숫자(01, 02...)와 이미지를 업데이트할 수 있습니다.
                          </p>
                          <button
                            type="button"
                            onClick={handleStartAddSlide}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold transition-colors cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                            <span>신규 광고 슬라이드 추가</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  TAB 3: COMPANY BASIC INFO MANAGEMENT
                 ========================================================= */}
              {activeTab === 'company' && (
                <form onSubmit={handleSaveCompanyInfo} className="max-w-4xl mx-auto space-y-6">
                  {companySavedToast && (
                    <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 shadow-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>회사 기본정보가 성공적으로 저장되어 홈페이지 상단/본문/하단에 실시간 연동되었습니다!</span>
                    </div>
                  )}

                  {/* Section 1: Corporate Identity */}
                  <div className="bg-white border border-[#CBD5E1] p-6 space-y-4">
                    <h3 className="text-sm font-extrabold text-[#1E293B] pb-2.5 border-b border-slate-200 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#2563EB]" />
                      <span>1. 법인명 및 기본 인증 정보 (Corporate Identity)</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          회사명 (한국어)
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.companyNameKo}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, companyNameKo: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          회사명 (베트남어)
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.companyNameVn}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, companyNameVn: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          회사명 (영문 법인명)
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.companyNameEn}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, companyNameEn: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          상단 슬로건 (한국어)
                        </label>
                        <input
                          type="text"
                          value={companyForm.subTitleKo}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, subTitleKo: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          상단 슬로건 (베트남어)
                        </label>
                        <input
                          type="text"
                          value={companyForm.subTitleVn}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, subTitleVn: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Contact & Tax Info */}
                  <div className="bg-white border border-[#CBD5E1] p-6 space-y-4">
                    <h3 className="text-sm font-extrabold text-[#1E293B] pb-2.5 border-b border-slate-200">
                      2. 대표 연락처 및 사업자 번호 (Contact & Tax ID)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          대표 직통 전화번호 (Hotline)
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.hotline}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, hotline: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono font-bold text-[#2563EB]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          공식 견적 접수 이메일 (Email)
                        </label>
                        <input
                          type="email"
                          required
                          value={companyForm.email}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, email: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          베트남 사업자 등록번호 (Mã số thuế / Tax ID)
                        </label>
                        <input
                          type="text"
                          value={companyForm.taxId}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, taxId: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1E293B] mb-1">
                          Zalo 상담 연결 URL
                        </label>
                        <input
                          type="text"
                          value={companyForm.zaloUrl}
                          onChange={(e) =>
                            setCompanyForm({ ...companyForm, zaloUrl: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Vietnam & Korea Office Addresses (Google Maps Linked) */}
                  <div className="bg-white border-2 border-[#2563EB] p-6 space-y-4 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block">
                          GOOGLE MAPS REAL-TIME SYNC
                        </span>
                        <h3 className="text-sm font-extrabold text-[#1E293B]">
                          3. 회사 소개 페이지 구글맵(Google Maps) 실시간 연동 주소 설정
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 bg-blue-50 text-[#2563EB] border border-blue-200 text-[11px] font-mono font-bold">
                        ✓ 주소 입력 시 회사소개 하단 구글지도 자동 갱신
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                      <div className="lg:col-span-7 space-y-3">
                        <div>
                          <label className="block text-xs font-bold text-[#1E293B] mb-1">
                            베트남 북부 법인 본사 주소 (박닌 / 하노이 - 기본 구글맵 표시 위치) *
                          </label>
                          <input
                            type="text"
                            value={companyForm.northAddress}
                            onChange={(e) =>
                              setCompanyForm({ ...companyForm, northAddress: e.target.value })
                            }
                            placeholder="예: Số 18, Đường 3, KCN VSIP Bắc Ninh, TP. Từ Sơn, Tỉnh Bắc Ninh"
                            className="w-full px-3 py-2 text-xs border-2 border-blue-200 focus:border-[#2563EB] focus:outline-none bg-blue-50/20 font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#1E293B] mb-1">
                            베트남 남부 거점 주소 (빈증 / 호치민 서비스센터)
                          </label>
                          <input
                            type="text"
                            value={companyForm.southAddress}
                            onChange={(e) =>
                              setCompanyForm({ ...companyForm, southAddress: e.target.value })
                            }
                            placeholder="예: Lô CN-02, KCN VSIP 2, TX. Bến Cát, Tỉnh Bình Dương"
                            className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <label className="block text-xs font-bold text-[#1E293B] mb-1">
                              한국 본사명
                            </label>
                            <input
                              type="text"
                              value={companyForm.koreaHqName}
                              onChange={(e) =>
                                setCompanyForm({ ...companyForm, koreaHqName: e.target.value })
                              }
                              className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#1E293B] mb-1">
                              한국 본사 홈페이지 URL
                            </label>
                            <input
                              type="text"
                              value={companyForm.koreaHqUrl}
                              onChange={(e) =>
                                setCompanyForm({ ...companyForm, koreaHqUrl: e.target.value })
                              }
                              className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#1E293B] mb-1">
                            한국 본사 주소 및 대표번호
                          </label>
                          <input
                            type="text"
                            value={companyForm.koreaHqAddress}
                            onChange={(e) =>
                              setCompanyForm({ ...companyForm, koreaHqAddress: e.target.value })
                            }
                            className="w-full px-3 py-2 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Live Google Map Preview inside Admin */}
                      <div className="lg:col-span-5 bg-slate-50 border border-[#CBD5E1] overflow-hidden">
                        <div className="bg-[#1E293B] text-white px-3 py-2 text-[11px] font-mono font-bold flex items-center justify-between">
                          <span>구글맵 실시간 미리보기 (북부 본사 기준)</span>
                          <span className="text-amber-300">LIVE MAP</span>
                        </div>
                        <div className="h-56 w-full bg-slate-200">
                          <iframe
                            key={companyForm.northAddress}
                            title="Admin Google Map Preview"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(
                              companyForm.northAddress || 'VSIP Bac Ninh, Vietnam'
                            )}&t=m&z=15&ie=UTF8&iwloc=&output=embed`}
                            className="w-full h-full border-0"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2.5 text-[11px] text-slate-600 bg-white border-t border-slate-200 font-mono truncate">
                          표시 주소: {companyForm.northAddress}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pb-6">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>회사 기본정보 저장 및 홈페이지 즉시 반영</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          AISTUDIO/IMAGES FOLDER EXPLORER POPUP MODAL (AistudioImageModal)
         ===================================================================== */}
      <AistudioImageModal
        isOpen={repoPickerTarget !== null}
        onClose={() => setRepoPickerTarget(null)}
        currentImagePath={
          repoPickerTarget === 'product'
            ? editingProduct?.image
            : editingSlide?.image
        }
        onSelectImage={handleSelectRepositoryImage}
      />

      {/* =====================================================================
          SOURCE CODE SYNC & DATA IMPORT / EXPORT MODAL
         ===================================================================== */}
      {isSyncModalOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white border-2 border-[#1E293B] w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#1E293B] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center font-mono font-bold text-xs">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wide">
                    현재 데이터 소스코드 동기화 (내보내기 / JSON 가져오기)
                  </h3>
                  <p className="text-[11px] text-slate-300 font-mono">
                    AI 스튜디오 &amp; GitHub Pages 배포 사이트 간 카테고리/제품/이미지(./assets/aistudio/images/...) 100% 일치 동기화
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSyncModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Sub-Tabs */}
            <div className="bg-slate-100 border-b border-slate-300 px-5 flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSyncModalTab('export')}
                className={`px-4 py-3 text-xs font-bold font-mono border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  syncModalTab === 'export'
                    ? 'border-[#2563EB] text-[#2563EB] bg-white'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>1. 현재 데이터 복사 / JSON 내보내기 (Export)</span>
              </button>
              <button
                type="button"
                onClick={() => setSyncModalTab('import')}
                className={`px-4 py-3 text-xs font-bold font-mono border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  syncModalTab === 'import'
                    ? 'border-[#2563EB] text-[#2563EB] bg-white'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>2. 데이터 가져오기 / 전체 덮어쓰기 (Import)</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4 bg-[#F8FAFC]">
              {syncModalTab === 'export' ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-3.5 text-xs text-slate-700 space-y-1.5">
                    <p className="font-bold text-[#1E293B]">
                      • 현재 화면에 세팅된 모든 카테고리({categories.length}개) 및 제품({products.length}종) 데이터가 상대 경로(<code>./assets/aistudio/images/...</code>)로 정규화되어 생성되었습니다.
                    </p>
                    <p className="text-[11px] text-slate-600">
                      • <strong>TypeScript 코드 복사</strong>: <code>src/data/companyStore.ts</code> 파일의 <code>OFFICIAL_CATEGORIES</code> 및 <code>EXTENDED_INITIAL_PRODUCTS</code>에 그대로 붙여넣어 정적 소스코드를 영구 업데이트할 수 있습니다.
                    </p>
                    <p className="text-[11px] text-slate-600">
                      • <strong>JSON 내보내기</strong>: 온라인 배포 사이트나 다른 PC의 관리자 페이지 <strong>[데이터 가져오기(Import)]</strong> 탭에 붙여넣어 즉시 동일한 데이터를 적용할 수 있습니다.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setExportFormat('ts')}
                        className={`px-3 py-1.5 text-xs font-mono font-bold border cursor-pointer ${
                          exportFormat === 'ts'
                            ? 'bg-[#1E293B] text-white border-[#1E293B]'
                            : 'bg-white text-slate-700 border-slate-300'
                        }`}
                      >
                        TypeScript 코드 (src/data/companyStore.ts)
                      </button>
                      <button
                        type="button"
                        onClick={() => setExportFormat('json')}
                        className={`px-3 py-1.5 text-xs font-mono font-bold border cursor-pointer ${
                          exportFormat === 'json'
                            ? 'bg-[#1E293B] text-white border-[#1E293B]'
                            : 'bg-white text-slate-700 border-slate-300'
                        }`}
                      >
                        JSON 포맷 (전체 데이터)
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          exportFormat === 'ts'
                            ? handleCopyTypeScriptSource()
                            : handleExportJsonAndCopy(false)
                        }
                        className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>클립보드에 전체 복사</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleExportJsonAndCopy(true)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>JSON 파일(.json) 다운로드</span>
                      </button>
                    </div>
                  </div>

                  <textarea
                    readOnly
                    value={
                      exportFormat === 'ts'
                        ? generateTypeScriptSourceSyncCode(categories, products, companyForm, sliderForm)
                        : generateStoreJsonExport(categories, products, companyForm, sliderForm)
                    }
                    rows={16}
                    className="w-full p-3.5 font-mono text-[11px] bg-slate-900 text-emerald-300 border border-slate-700 focus:outline-none leading-relaxed"
                  />
                </div>
              ) : (
                <form onSubmit={handleExecuteImportOverwrite} className="space-y-4">
                  <div className="bg-amber-50 border border-amber-300 p-3.5 text-xs text-amber-900 space-y-1">
                    <p className="font-bold">
                      • [데이터 가져오기(Import)] 기능 안내
                    </p>
                    <p className="text-[11px]">
                      복사한 <strong>JSON 데이터</strong> 또는 <strong>TypeScript 코드(OFFICIAL_CATEGORIES / EXTENDED_INITIAL_PRODUCTS)</strong>를 아래 입력창에 붙여넣고 <strong>[즉시 전체 데이터 덮어쓰기 적용]</strong> 버튼을 누르면 현재 브라우저 및 화면의 모든 카테고리와 제품 목록이 즉시 동기화됩니다. (모든 이미지 경로는 자동으로 <code>./assets/aistudio/images/...</code> 상대 경로로 정규화됩니다.)
                    </p>
                  </div>

                  {importErrorMsg && (
                    <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{importErrorMsg}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label className="text-xs font-bold text-[#1E293B] font-mono">
                      JSON 또는 TypeScript 데이터 붙여넣기 *
                    </label>
                    <div className="flex items-center gap-2">
                      <label className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-mono font-bold cursor-pointer flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>.json 파일 불러오기</span>
                        <input
                          type="file"
                          accept=".json,application/json,text/plain"
                          onChange={handleImportFileUpload}
                          className="hidden"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setImportInputText(
                            generateStoreJsonExport(categories, products, companyForm, sliderForm)
                          );
                          setImportErrorMsg('');
                        }}
                        className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-mono font-bold cursor-pointer"
                      >
                        현재 데이터 JSON 불러오기(예시)
                      </button>
                    </div>
                  </div>

                  <textarea
                    required
                    value={importInputText}
                    onChange={(e) => {
                      setImportInputText(e.target.value);
                      if (importErrorMsg) setImportErrorMsg('');
                    }}
                    placeholder='{"categories": [...], "products": [...]} 형식의 JSON 데이터 또는 복사한 TypeScript 코드를 여기에 붙여넣으세요...'
                    rows={14}
                    className="w-full p-3.5 font-mono text-[11px] bg-white text-[#1E293B] border-2 border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none leading-relaxed"
                  />

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSyncModalOpen(false)}
                      className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-mono font-bold cursor-pointer"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold uppercase flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>즉시 전체 데이터 덮어쓰기 적용 (Import)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SECONDARY PASSWORD AUTH MODAL FOR SENSITIVE DATA ACTIONS               */}
      {/* ===================================================================== */}
      {isSensitiveAuthModalOpen && (
        <div className="fixed inset-0 z-[80] bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#1E293B] w-full max-w-md shadow-2xl overflow-hidden">
            <div className="bg-[#1E293B] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs sm:text-sm font-bold font-mono">
                  민감 데이터 관리 • 2차 보안 비밀번호 인증
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSensitiveAuthModalOpen(false);
                  setSensitivePwInput('');
                  setSensitivePwError('');
                  setPendingSensitiveAction(null);
                }}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSensitiveAuthSubmit} className="p-6 space-y-4 bg-[#F8FAFC]">
              <div className="bg-amber-50 border border-amber-300 p-3 text-xs text-amber-900 space-y-1">
                <p className="font-bold">
                  요청 작업: <span className="text-[#2563EB] font-mono">[{pendingSensitiveLabel || '민감 데이터 동기화/초기화'}]</span>
                </p>
                <p className="text-[11px] text-amber-800">
                  데이터 소스코드 복사, JSON 내보내기, 데이터 가져오기(덮어쓰기) 및 초기값 복원은 관리자 페이지 내 민감 기능이므로 별도의 2차 비밀번호가 필요합니다.
                </p>
              </div>

              {sensitivePwError && (
                <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{sensitivePwError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#1E293B] font-mono uppercase mb-1.5">
                  2차 보안 비밀번호 (SECURITY PASSWORD) *
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  value={sensitivePwInput}
                  onChange={(e) => {
                    setSensitivePwInput(e.target.value);
                    if (sensitivePwError) setSensitivePwError('');
                  }}
                  placeholder="2차 보안 비밀번호 입력"
                  className="w-full px-3.5 py-2.5 text-sm border-2 border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none font-mono bg-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSensitiveAuthModalOpen(false);
                    setSensitivePwInput('');
                    setSensitivePwError('');
                    setPendingSensitiveAction(null);
                  }}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-mono font-bold cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold uppercase flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>잠금 해제 및 실행</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SYNC GUIDE HELP MODAL ([동기화 가이드 (?)])                             */}
      {/* ===================================================================== */}
      <SyncGuideModal
        isOpen={isSyncGuideOpen}
        onClose={() => setIsSyncGuideOpen(false)}
        onCopyCurrentData={handleCopyTypeScriptSource}
      />
    </div>
  );
};
