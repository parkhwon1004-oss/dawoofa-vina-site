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
  ArrowDown
} from 'lucide-react';
import { FaProductItem, Language } from '../../types';
import {
  CompanyInfo,
  HeroSliderSettings,
  HeroSlideItem,
  OFFICIAL_CATEGORIES,
  DEFAULT_COMPANY_INFO,
  EXTENDED_INITIAL_PRODUCTS,
  DEFAULT_SLIDER_SETTINGS,
  saveStoredCompanyInfo,
  saveStoredProducts,
  saveStoredSliderSettings,
  resetStoreToFactoryDefaults,
  normalizeCategoryKey
} from '../../data/companyStore';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  companyInfo?: CompanyInfo;
  onUpdateCompanyInfo: (newInfo: CompanyInfo) => void;
  products?: FaProductItem[];
  onUpdateProducts: (newProducts: FaProductItem[]) => void;
  sliderSettings?: HeroSliderSettings;
  onUpdateSliderSettings: (newSettings: HeroSliderSettings) => void;
}

const PRESET_IMAGES = [
  { label: 'MR-J5 서보', url: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg' },
  { label: 'MR-J4 서보', url: 'http://www.dawooservo.co.kr/data/product/mr_j4.jpg' },
  { label: 'DD 모터', url: 'http://www.dawooservo.co.kr/data/product/dd_motor.jpg' },
  { label: 'FR-A800 인버터', url: 'http://www.dawooservo.co.kr/data/product/fr_a800.jpg' },
  { label: 'FR-E800 인버터', url: 'http://www.dawooservo.co.kr/data/product/fr_e800.jpg' },
  { label: 'MELSEC iQ-R PLC', url: 'http://www.dawooservo.co.kr/data/product/iq_r.jpg' },
  { label: 'MELSEC iQ-F PLC', url: 'http://www.dawooservo.co.kr/data/product/iq_f.jpg' },
  { label: 'GOT2000 HMI', url: 'http://www.dawooservo.co.kr/data/product/got2000.jpg' },
  { label: 'PILZ 안전 릴레이', url: 'http://www.dawooservo.co.kr/data/product/pilz_safety.jpg' },
  { label: '삼원ACT 하네스', url: 'http://www.dawooservo.co.kr/data/product/samwon_harness.jpg' },
  { label: 'APEX 정밀 감속기', url: 'http://www.dawooservo.co.kr/data/product/reducer.jpg' },
  { label: '다우 6축 로봇', url: 'http://www.dawooservo.co.kr/data/product/robot.jpg' },
  { label: '리니어 모듈', url: 'http://www.dawooservo.co.kr/data/product/linear.jpg' },
  { label: '다우FA 회사 로고', url: '/assets/aistudio/image_31b58e19.png' }
];

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
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

  // Products State inside Admin
  const [adminSearch, setAdminSearch] = useState('');
  const [adminCategoryFilter, setAdminCategoryFilter] = useState('all');
  const [editingProduct, setEditingProduct] = useState<FaProductItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [productSavedToast, setProductSavedToast] = useState(false);

  // Slider State inside Admin
  const [sliderForm, setSliderForm] = useState<HeroSliderSettings>(() => sliderSettings || DEFAULT_SLIDER_SETTINGS);
  const [editingSlide, setEditingSlide] = useState<HeroSlideItem | null>(null);
  const [isCreatingNewSlide, setIsCreatingNewSlide] = useState(false);
  const [sliderSavedToast, setSliderSavedToast] = useState(false);

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
    setAuthId('');
    setAuthPw('');
    try {
      sessionStorage.removeItem('dawoofa_admin_session');
    } catch (err) {
      // Ignore storage errors
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

  // Product Image File Upload Handler (Converts to Base64 Data URL)
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingProduct) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setEditingProduct({
        ...editingProduct,
        image: base64String
      });
    };
    reader.readAsDataURL(file);
  };

  // Slider Image File Upload Handler
  const handleSlideImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingSlide) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setEditingSlide({
        ...editingSlide,
        image: base64String
      });
    };
    reader.readAsDataURL(file);
  };

  // Start Creating New Product (Defaults to currently selected category if not 'all')
  const handleStartAddProduct = (presetCategory?: string) => {
    const defaultCatId =
      presetCategory && presetCategory !== 'all'
        ? presetCategory
        : adminCategoryFilter !== 'all'
        ? adminCategoryFilter
        : OFFICIAL_CATEGORIES[0].id;

    const catDef = OFFICIAL_CATEGORIES.find((c) => c.id === defaultCatId) || OFFICIAL_CATEGORIES[0];

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
      image: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
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

    const catDef = OFFICIAL_CATEGORIES.find((c) => c.id === editingProduct.category);
    const finalizedProduct: FaProductItem = {
      ...editingProduct,
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

    saveStoredProducts(updatedList);
    onUpdateProducts(updatedList);
    setEditingProduct(null);
    setIsCreatingNew(false);
    setProductSavedToast(true);
    setTimeout(() => setProductSavedToast(false), 3000);
  };

  // Delete Product
  const handleDeleteProduct = (id: string) => {
    const updatedList = products.filter((p) => p.id !== id);
    saveStoredProducts(updatedList);
    onUpdateProducts(updatedList);
    if (editingProduct?.id === id) {
      setEditingProduct(null);
      setIsCreatingNew(false);
    }
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
      image: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
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
    onUpdateCompanyInfo(defaults.company);
    onUpdateProducts(defaults.products);
    onUpdateSliderSettings(defaults.slider);
    setEditingProduct(null);
    setEditingSlide(null);
    setCompanySavedToast(true);
    setTimeout(() => setCompanySavedToast(false), 3000);
  };

  // Filtered products in admin list (1:1 matched with OFFICIAL_CATEGORIES)
  const filteredAdminProducts = products.filter((item) => {
    const itemCatId = normalizeCategoryKey(item.category);
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

              <div className="py-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleFactoryReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 border border-slate-300 transition-colors cursor-pointer"
                  title="초기 데이터로 복원"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>초기값 복원</span>
                </button>
              </div>
            </div>

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
                          1:1 HOMEPAGE CATEGORY MATCHING SYSTEM
                        </span>
                        <h3 className="text-sm font-extrabold text-[#1E293B]">
                          홈페이지 취급제품군 {OFFICIAL_CATEGORIES.length}대 카테고리별 1:1 매칭 관리
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleStartAddProduct()}
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>
                          {adminCategoryFilter === 'all'
                            ? '+ 신규 모델 추가'
                            : `+ [${OFFICIAL_CATEGORIES.find((c) => c.id === adminCategoryFilter)?.nameKo || adminCategoryFilter}] 모델 추가`}
                        </span>
                      </button>
                    </div>

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

                      {OFFICIAL_CATEGORIES.map((cat) => {
                        const count = products.filter((p) => normalizeCategoryKey(p.category) === cat.id).length;
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
                            <span>선택된 카테고리: {OFFICIAL_CATEGORIES.find((c) => c.id === adminCategoryFilter)?.nameKo}</span>
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
                          const itemCatId = normalizeCategoryKey(item.category);
                          const matchedCat = OFFICIAL_CATEGORIES.find((c) => c.id === itemCatId);
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
                                      target.src = '/assets/aistudio/image_31b58e19.png';
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
                              {OFFICIAL_CATEGORIES.map((cat) => (
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

                          {/* Image Preview + File Upload + URL + Presets */}
                          <div className="p-3 bg-slate-50 border border-slate-200 space-y-2.5">
                            <label className="block text-[11px] font-bold text-[#1E293B] font-mono">
                              제품 이미지 설정 (파일 업로드 또는 URL 입력)
                            </label>

                            <div className="flex items-center gap-3">
                              <div className="w-20 h-20 bg-white border border-slate-300 p-1.5 flex items-center justify-center shrink-0">
                                <img
                                  src={editingProduct.image}
                                  alt="Preview"
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = '/assets/aistudio/image_31b58e19.png';
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#2563EB] text-white text-[11px] font-mono font-bold cursor-pointer transition-colors">
                                  <Upload className="w-3.5 h-3.5" />
                                  <span>내 PC에서 이미지 파일 업로드</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageFileUpload}
                                    className="hidden"
                                  />
                                </label>
                                <input
                                  type="text"
                                  value={editingProduct.image}
                                  onChange={(e) =>
                                    setEditingProduct({ ...editingProduct, image: e.target.value })
                                  }
                                  placeholder="이미지 URL 주소 입력..."
                                  className="w-full px-2.5 py-1.5 text-[11px] border border-[#CBD5E1] bg-white font-mono"
                                />
                              </div>
                            </div>

                            {/* Quick Preset Image Selector */}
                            <div>
                              <span className="block text-[10px] font-mono text-slate-500 mb-1 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#2563EB]" />
                                다우FA 공식 제품 사진 빠른 선택:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {PRESET_IMAGES.map((preset) => (
                                  <button
                                    key={preset.label}
                                    type="button"
                                    onClick={() =>
                                      setEditingProduct({ ...editingProduct, image: preset.url })
                                    }
                                    className="px-2 py-0.5 text-[10px] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] border border-slate-300 transition-colors cursor-pointer"
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
                                    target.src = '/assets/aistudio/image_31b58e19.png';
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

                          {/* Slide Image Upload + URL + Presets */}
                          <div className="p-3 bg-slate-50 border border-slate-200 space-y-2.5">
                            <label className="block text-[11px] font-bold text-[#1E293B] font-mono">
                              광고 슬라이드 이미지 업데이트 (파일 업로드 또는 URL)
                            </label>

                            <div className="flex items-center gap-3">
                              <div className="w-24 h-20 bg-white border border-slate-300 p-1.5 flex items-center justify-center shrink-0">
                                <img
                                  src={editingSlide.image}
                                  alt="Slide Preview"
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = '/assets/aistudio/image_31b58e19.png';
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#2563EB] text-white text-[11px] font-mono font-bold cursor-pointer transition-colors">
                                  <Upload className="w-3.5 h-3.5" />
                                  <span>광고 이미지 파일 업로드</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleSlideImageUpload}
                                    className="hidden"
                                  />
                                </label>
                                <input
                                  type="text"
                                  value={editingSlide.image}
                                  onChange={(e) =>
                                    setEditingSlide({ ...editingSlide, image: e.target.value })
                                  }
                                  placeholder="이미지 URL 입력..."
                                  className="w-full px-2.5 py-1.5 text-[11px] border border-[#CBD5E1] bg-white font-mono"
                                />
                              </div>
                            </div>

                            <div>
                              <span className="block text-[10px] font-mono text-slate-500 mb-1">
                                다우FA 제품 이미지 빠른 적용:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {PRESET_IMAGES.map((preset) => (
                                  <button
                                    key={preset.label}
                                    type="button"
                                    onClick={() =>
                                      setEditingSlide({ ...editingSlide, image: preset.url })
                                    }
                                    className="px-2 py-0.5 text-[10px] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] border border-slate-300 transition-colors cursor-pointer"
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
    </div>
  );
};
