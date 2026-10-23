import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ChevronDown
} from 'lucide-react';
import { Language, FaProductItem } from '../types';
import { CompanyInfo, ProductCategoryDef, DEFAULT_COMPANY_INFO, OFFICIAL_CATEGORIES, EXTENDED_INITIAL_PRODUCTS, normalizeCategoryKey } from '../data/companyStore';

interface HeaderProps {
  currentTab: 'preview' | 'htmlCode';
  setCurrentTab: (tab: 'preview' | 'htmlCode') => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenRfq: (modelName?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  products?: FaProductItem[];
  companyInfo?: CompanyInfo;
  categories?: ProductCategoryDef[];
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  onOpenRfq,
  searchQuery,
  setSearchQuery,
  activeSection = 'home',
  onSelectSection,
  selectedCategory = 'all',
  onSelectCategory,
  products = EXTENDED_INITIAL_PRODUCTS,
  companyInfo = DEFAULT_COMPANY_INFO,
  categories = OFFICIAL_CATEGORIES
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const i18n = {
    vi: {
      hqBadge: "ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC HÀN QUỐC",
      hqSub: `${companyInfo.companyNameVn} • KHO NGOẠI QUAN TẠI BẮC NINH & BÌNH DƯƠNG`,
      hotline: "Hotline Kỹ thuật:",
      email: companyInfo.email,
      mst: `MST: ${companyInfo.taxId}`,
      navAbout: "Giới thiệu doanh nghiệp",
      navProducts: "Sản phẩm FA",
      navSupport: "Kỹ thuật & Dịch vụ A/S tại chỗ",
      navContact: "Yêu cầu báo giá (RFQ)",
      navPreview: "Giao diện Web",
      navHtml: "Mã nguồn đơn HTML",
      searchPh: "Tìm mã sản phẩm (MR-J5, E800, iQ-R, PLC...)",
      btnQuote: "BÁO GIÁ NHANH",
      koreaHq: `Trụ sở Hàn Quốc: ${companyInfo.koreaHqUrl.replace(/^https?:\/\//, '')}`,
      allCategoriesLabel: "Tất cả danh mục sản phẩm FA"
    },
    ko: {
      hqBadge: `${companyInfo.companyNameKo} • 한국 미쓰비시전기 공식 대리점`,
      hqSub: `${companyInfo.companyNameVn} • 하노이/박닌 & 호치민/빈증 직영 보세창고 운영`,
      hotline: "베트남 핫라인:",
      email: companyInfo.email,
      mst: `사업자번호: ${companyInfo.taxId}`,
      navAbout: "회사소개",
      navProducts: "취급제품군",
      navSupport: "기술지원 및 현지A/S대응",
      navContact: "온라인 견적문의",
      navPreview: "웹사이트 미리보기",
      navHtml: "단일 HTML 전체 소스코드",
      searchPh: "형명 및 규격 검색 (MR-J5, E800, iQ-R...)",
      btnQuote: "온라인 견적요청",
      koreaHq: `한국 본사: ${companyInfo.koreaHqUrl.replace(/^https?:\/\//, '')}`,
      allCategoriesLabel: "전체 취급제품군 보기 (All Categories)"
    },
    en: {
      hqBadge: "OFFICIAL MITSUBISHI ELECTRIC AUTHORIZED DISTRIBUTOR",
      hqSub: "DAWOOFA VINA CO., LTD • BONDED HUBS IN BAC NINH & BINH DUONG",
      hotline: "Technical Hotline:",
      email: "contact@dawoofavina.com",
      mst: "Tax ID: 2301192888",
      navAbout: "Company Profile",
      navProducts: "FA Products",
      navSupport: "Technical Support & Local A/S",
      navContact: "Request Quote (RFQ)",
      navPreview: "Live Website",
      navHtml: "Standalone Single HTML",
      searchPh: "Search model (MR-J5, E800, iQ-R, PLC...)",
      btnQuote: "REQUEST QUOTE",
      koreaHq: "Korea HQ: dawooservo.co.kr",
      allCategoriesLabel: "View All FA Product Categories"
    }
  }[lang];

  const handleNavClick = (sectionId: string) => {
    setDropdownOpen(false);
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      if (currentTab !== 'preview') {
        setCurrentTab('preview');
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setDropdownOpen(false);
    setSearchQuery('');
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      handleNavClick('products');
    }
  };

  const isNavActive = (id: string) => {
    if (currentTab === 'htmlCode') return false;
    return activeSection === id;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#DEE2E6] text-[#212529] font-sans shadow-xs">
      
      {/* 1. Top Utility Bar with Language Switcher */}
      <div className="bg-[#F8FAFC] text-[#334155] text-xs border-b border-[#E2E8F0] py-1 px-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-end">
          <div className="flex items-center bg-white border border-[#CBD5E1] p-0.5 text-[10px] shadow-2xs">
            <button
              onClick={() => setLang('vi')}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'vi' ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:text-[#2563EB]'
              }`}
              title="Tiếng Việt (Mặc định)"
            >
              VI
            </button>
            <button
              onClick={() => setLang('ko')}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'ko' ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:text-[#2563EB]'
              }`}
              title="한국어 (Korean)"
            >
              KO
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'en' ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:text-[#2563EB]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Header Logo & Corporate Identity Bar */}
      <div className="bg-white border-b border-[#E2E8F0] py-3 px-4">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Brand Logo: Official Dawoo FA Corporate Emblem */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer select-none"
            onClick={() => {
              setCurrentTab('preview');
              if (onSelectSection) {
                onSelectSection('home');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="초기 광고 메인 화면으로 이동"
          >
            <div className="p-1 bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center">
              <img 
                src="./assets/aistudio/images/logo.png" 
                alt="DAWOO FA VINA" 
                className="h-10 w-auto object-contain" 
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-[#1E293B] font-sans">
                  DAWOOFA <span className="text-[#2563EB]">VINA</span>
                </span>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
                  FA SOLUTIONS
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] font-medium leading-tight">
                CÔNG TY TNHH DAWOOFA VINA • (주)다우에프에이 베트남 법인
              </p>
            </div>
          </div>

          {/* Quick Model Search Box */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim() !== '' && activeSection !== 'products' && onSelectSection) {
                    onSelectSection('products');
                  }
                }}
                placeholder={i18n.searchPh}
                className="w-full h-9 pl-8 pr-3 text-xs bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#2563EB] focus:bg-white text-[#1E293B] placeholder-[#94A3B8] outline-none font-mono transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Engineering Navigation Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between text-xs font-bold text-[#334155]">
          
          <nav className="flex items-center overflow-visible">
            {/* 1. 회사소개 */}
            <button
              onClick={() => handleNavClick('about')}
              className={`py-3 px-5 border-r border-[#E2E8F0] transition-colors whitespace-nowrap cursor-pointer ${
                isNavActive('about')
                  ? 'bg-white text-[#2563EB] border-t-2 border-t-[#2563EB] font-bold shadow-xs'
                  : 'hover:bg-white hover:text-[#2563EB] text-[#334155] border-t-2 border-t-transparent'
              }`}
            >
              {i18n.navAbout}
            </button>

            {/* 2. 취급제품군 */}
            <div 
              ref={dropdownRef}
              className="relative inline-block"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => handleCategorySelect('all')}
                className={`py-3 px-5 border-r border-[#E2E8F0] transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  isNavActive('products')
                    ? 'bg-white text-[#2563EB] border-t-2 border-t-[#2563EB] font-bold shadow-xs'
                    : 'hover:bg-white hover:text-[#2563EB] text-[#334155] border-t-2 border-t-transparent'
                }`}
              >
                <span>{i18n.navProducts}</span>
                <ChevronDown className={`w-3 h-3 text-[#64748B] transition-transform ${dropdownOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full w-80 bg-white border border-[#CBD5E1] shadow-xl z-50 py-1 font-normal animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-1.5 bg-blue-50/80 border-b border-blue-100 flex items-center justify-between text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                    <span>FA HARDWARE CATEGORIES</span>
                    <span>관리자 1:1 매칭 ({products.length}종)</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCategorySelect('all')}
                    className={`w-full text-left px-3.5 py-2 hover:bg-blue-50 border-b border-[#F1F5F9] transition-colors flex items-center justify-between group cursor-pointer ${
                      activeSection === 'products' && selectedCategory === 'all'
                        ? 'bg-blue-50/70 text-[#2563EB] font-bold'
                        : 'text-[#334155]'
                    }`}
                  >
                    <span className="text-xs font-bold group-hover:text-[#2563EB]">
                      {i18n.allCategoriesLabel}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 text-slate-700 font-bold">
                      {products.length}
                    </span>
                  </button>

                  {categories.map((cat) => {
                    const catLabel = lang === 'ko' ? cat.nameKo : lang === 'vi' ? cat.nameVn : cat.nameEn;
                    const catDesc = lang === 'ko' ? cat.shortDescKo : cat.shortDescVn;
                    const count = products.filter((p) => normalizeCategoryKey(p.category, categories) === cat.id).length;
                    const isSelected = activeSection === 'products' && selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`w-full text-left px-3.5 py-2 hover:bg-blue-50 border-b border-[#F1F5F9] last:border-0 transition-colors flex items-center justify-between group cursor-pointer ${
                          isSelected ? 'bg-blue-50/70 text-[#2563EB]' : 'text-[#334155]'
                        }`}
                      >
                        <div className="pr-2 truncate">
                          <span className="block text-xs font-bold group-hover:text-[#2563EB] truncate">
                            {catLabel}
                          </span>
                          <span className="block text-[10px] text-[#64748B] font-mono truncate">
                            {catDesc}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 shrink-0 ${
                          isSelected ? 'bg-[#2563EB] text-white font-bold' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. 기술지원 및 현지A/S대응 */}
            <button
              onClick={() => handleNavClick('support')}
              className={`py-3 px-5 border-r border-[#E2E8F0] transition-colors whitespace-nowrap cursor-pointer ${
                isNavActive('support')
                  ? 'bg-white text-[#2563EB] border-t-2 border-t-[#2563EB] font-bold shadow-xs'
                  : 'hover:bg-white hover:text-[#2563EB] text-[#334155] border-t-2 border-t-transparent'
              }`}
            >
              {i18n.navSupport}
            </button>

            {/* 4. 온라인 견적문의 */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-3 px-5 border-r border-[#E2E8F0] transition-colors whitespace-nowrap cursor-pointer ${
                isNavActive('contact')
                  ? 'bg-white text-[#2563EB] border-t-2 border-t-[#2563EB] font-bold shadow-xs'
                  : 'hover:bg-white hover:text-[#2563EB] text-[#334155] border-t-2 border-t-transparent'
              }`}
            >
              {i18n.navContact}
            </button>
          </nav>

        </div>
      </div>

    </header>
  );
};