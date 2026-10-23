import React, { useState } from 'react';
import { 
  Send, 
  Download, 
  Info, 
  X,
  Flame,
  Package
} from 'lucide-react';
import { Language, FaProductItem } from '../../types';
import { EXTENDED_INITIAL_PRODUCTS, OFFICIAL_CATEGORIES, ProductCategoryDef, normalizeCategoryKey } from '../../data/companyStore';

interface ProductsSectionProps {
  lang: Language;
  onOpenRfq: (model?: string) => void;
  searchQuery: string;
  onClearSearch: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  products?: FaProductItem[];
  categories?: ProductCategoryDef[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  lang, 
  onOpenRfq,
  searchQuery,
  onClearSearch,
  selectedCategory = 'all',
  onSelectCategory,
  products = EXTENDED_INITIAL_PRODUCTS,
  categories = OFFICIAL_CATEGORIES
}) => {
  const [selectedProductModal, setSelectedProductModal] = useState<FaProductItem | null>(null);

  const i18n = {
    vi: {
      badge: "DANH MỤC THIẾT BỊ TỰ ĐỘNG HÓA CHÍNH HÃNG (ĐỒNG BỘ 1:1 QUẢN TRỊ)",
      title: "Bảng Thông Số Kỹ Thuật & Danh Mục Sản Phẩm FA Phân Phối",
      subtitle: "Tra cứu thông số kỹ thuật, khả năng đáp ứng tải, phương thức truyền thông và tình trạng sẵn hàng tại kho Bắc Ninh & Bình Dương.",
      inStockBadge: "SẴN HÀNG KHO VIỆT NAM",
      orderBadge: "HÀNG ĐẶT DỰ ÁN",
      btnRfq: "YÊU CẦU BÁO GIÁ",
      btnSpec: "Xem chi tiết & Bản vẽ CAD",
      clearFilter: "Xem tất cả danh mục",
      noResults: "Không tìm thấy sản phẩm trong danh mục hoặc từ khóa này.",
      specPower: "Công suất",
      specVoltage: "Điện áp",
      specControl: "Truyền thông",
      specEncoder: "Độ phân giải",
      specLead: "Thời gian giao hàng",
      closeModal: "Đóng cửa sổ",
      cadReq: "Tải bản vẽ 2D/3D CAD",
      specModalTitle: "BẢNG THÔNG SỐ KỸ THUẬT CHI TIẾT SẢN PHẨM"
    },
    ko: {
      badge: "FA HARDWARE TECHNICAL CATALOG (관리자 페이지 카테고리 1:1 실시간 연동)",
      title: "정품 FA 자동화 하드웨어 기술 규격 및 취급 제품군",
      subtitle: "미쓰비시전기 및 글로벌 파트너의 출력 용량, 정격 전압, 통신 프로토콜 사양과 베트남 현지 보세창고 재고 현황을 실시간으로 확인하십시오.",
      inStockBadge: "베트남 현지 상시 재고",
      orderBadge: "주문 수입 프로젝트",
      btnRfq: "견적 요청 (RFQ)",
      btnSpec: "상세 스펙 / CAD 도면",
      clearFilter: "전체 카테고리 보기 (필터 해제)",
      noResults: "해당 카테고리 또는 검색어에 등록된 제품이 없습니다.",
      specPower: "출력 용량",
      specVoltage: "정격 전압",
      specControl: "통신 방식",
      specEncoder: "엔코더/사양",
      specLead: "납기 일정",
      closeModal: "닫기",
      cadReq: "2D/3D CAD 도면 요청",
      specModalTitle: "하드웨어 상세 기술 제원표"
    },
    en: {
      badge: "GENUINE FA HARDWARE TECHNICAL CATALOG (1:1 SYNCED WITH ADMIN)",
      title: "Industrial FA Automation Hardware Specifications",
      subtitle: "Browse technical specifications, power capacities, communication interfaces, and inventory status across Vietnam warehouses.",
      inStockBadge: "IN-STOCK IN VIETNAM",
      orderBadge: "SPECIAL ORDER",
      btnRfq: "REQUEST QUOTE",
      btnSpec: "Tech Specs & CAD",
      clearFilter: "Show All Categories",
      noResults: "No products found matching your selection.",
      specPower: "Capacity",
      specVoltage: "Voltage",
      specControl: "Network",
      specEncoder: "Encoder",
      specLead: "Delivery",
      closeModal: "Close",
      cadReq: "Request 2D/3D CAD",
      specModalTitle: "DETAILED HARDWARE SPECIFICATION MATRIX"
    }
  }[lang];

  // Check if searchQuery itself is an exact category ID from categories or 'all'
  const cleanSearch = (searchQuery || '').trim();
  const isAllKeyword = cleanSearch.toLowerCase() === 'all';
  const searchQueryAsCategory = categories.find(
    (c) => c.id.toLowerCase() === cleanSearch.toLowerCase()
  );

  const effectiveCategory =
    selectedCategory && selectedCategory !== 'all'
      ? normalizeCategoryKey(selectedCategory, categories)
      : searchQueryAsCategory
      ? searchQueryAsCategory.id
      : 'all';

  const effectiveTextQuery = (searchQueryAsCategory || isAllKeyword) ? '' : cleanSearch;

  // Category order index map for clean sorting
  const categoryOrderMap = new Map<string, number>(
    categories.map((c, idx) => [c.id, idx])
  );

  // Strictly 1:1 Category & Search Filtering (Identical to AdminModal.tsx)
  const filteredProducts = products
    .filter((product) => {
      const productCatId = normalizeCategoryKey(product.category, categories);

      // 1. Strict 1:1 category match when a specific category is selected
      if (effectiveCategory !== 'all' && productCatId !== effectiveCategory) {
        return false;
      }

      // 2. Free-text search query (only when user types in search box)
      if (effectiveTextQuery !== '') {
        const q = effectiveTextQuery.toLowerCase();
        const matchName = (product.modelName || '').toLowerCase().includes(q);
        const matchBrand = (product.brand || '').toLowerCase().includes(q);
        const matchTaglineVi = (product.tagline?.vi || '').toLowerCase().includes(q);
        const matchTaglineKo = (product.tagline?.ko || '').toLowerCase().includes(q);
        const matchTaglineEn = (product.tagline?.en || '').toLowerCase().includes(q);
        const matchSpecs = Object.values(product.specs || {}).some(
          (val) => typeof val === 'string' && val.toLowerCase().includes(q)
        );

        return (
          matchName ||
          matchBrand ||
          matchTaglineVi ||
          matchTaglineKo ||
          matchTaglineEn ||
          matchSpecs
        );
      }

      return true;
    })
    .sort((a, b) => {
      const catA = categoryOrderMap.get(normalizeCategoryKey(a.category, categories)) ?? 99;
      const catB = categoryOrderMap.get(normalizeCategoryKey(b.category, categories)) ?? 99;
      return catA - catB;
    });

  const handleResetFilters = () => {
    onClearSearch();
    if (onSelectCategory) {
      onSelectCategory('all');
    }
  };

  const renderProductCard = (product: FaProductItem) => {
    const catId = normalizeCategoryKey(product.category, categories);
    const matchedCatDef = categories.find((c) => c.id === catId);
    const categoryDisplayTitle = matchedCatDef
      ? lang === 'ko'
        ? matchedCatDef.nameKo
        : lang === 'vi'
        ? matchedCatDef.nameVn
        : matchedCatDef.nameEn
      : product.categoryLabel?.[lang] || product.category;

    return (
      <div
        key={product.id}
        className="bg-white border border-[#CBD5E1] hover:border-[#2563EB] hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group"
      >
        {/* 1. Header strip */}
        <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-4 py-2 flex items-center justify-between text-[10px] font-mono">
          <span className="font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
            {product.brand}
          </span>
          
          <div className="flex items-center gap-1.5">
            {product.isHot && (
              <span className="text-red-700 font-bold bg-red-50 border border-red-200 px-1 py-0.2 flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 fill-red-500 text-red-500" />
                <span>HOT</span>
              </span>
            )}
            {product.inStockVietnam ? (
              <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">
                ✓ {i18n.inStockBadge}
              </span>
            ) : (
              <span className="text-amber-800 font-bold bg-amber-50 border border-amber-200 px-1.5 py-0.5">
                {i18n.orderBadge}
              </span>
            )}
          </div>
        </div>

        {/* 2. Image Box */}
        <div className="p-4 bg-white border-b border-[#E2E8F0] flex items-center justify-center min-h-[170px]">
          <img
            src={product.image}
            alt={product.modelName}
            className="max-h-36 max-w-full object-contain transition-transform group-hover:scale-105 duration-200"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = './assets/aistudio/images/logo.png';
            }}
          />
        </div>

        {/* 3. Product Info & Tagline */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
              {categoryDisplayTitle}
            </span>
            <h3 className="font-bold text-sm text-[#1E293B] leading-snug font-sans group-hover:text-[#2563EB] transition-colors">
              {product.modelName}
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
              {product.tagline?.[lang] || product.tagline?.ko || product.tagline?.vi}
            </p>
          </div>

          {/* 4. Technical Parameter Table */}
          <div className="border border-[#CBD5E1] text-[11px] font-mono divide-y divide-[#E2E8F0] bg-[#F8FAFC]">
            {product.specs?.powerCapacity && (
              <div className="px-2.5 py-1 flex justify-between">
                <span className="text-[#64748B]">{i18n.specPower}:</span>
                <strong className="text-[#1E293B] truncate max-w-[180px] text-right">{product.specs.powerCapacity}</strong>
              </div>
            )}
            {product.specs?.inputVoltage && (
              <div className="px-2.5 py-1 flex justify-between">
                <span className="text-[#64748B]">{i18n.specVoltage}:</span>
                <strong className="text-[#1E293B] truncate max-w-[180px] text-right">{product.specs.inputVoltage}</strong>
              </div>
            )}
            {product.specs?.controlMode && (
              <div className="px-2.5 py-1 flex justify-between">
                <span className="text-[#64748B]">{i18n.specControl}:</span>
                <strong className="text-[#2563EB] truncate max-w-[180px] text-right">{product.specs.controlMode}</strong>
              </div>
            )}
            <div className="px-2.5 py-1 flex justify-between bg-white">
              <span className="text-[#64748B]">{i18n.specLead}:</span>
              <strong className="text-emerald-700 truncate max-w-[180px] text-right">
                {product.leadTime?.[lang] || product.leadTime?.ko || product.leadTime?.vi}
              </strong>
            </div>
          </div>

          {/* 5. Action Buttons (Spec / RFQ) */}
          <div className="pt-2 flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setSelectedProductModal(product)}
              className="flex-1 py-2 bg-[#F8FAFC] hover:bg-blue-50 text-[#1E293B] border border-[#CBD5E1] font-bold text-center transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
            >
              <Info className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{i18n.btnSpec}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenRfq(product.modelName)}
              className="flex-1 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-center transition-colors flex items-center justify-center gap-1 uppercase tracking-wider shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{i18n.btnRfq}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="products" className="bg-white border-b border-[#E2E8F0] py-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-[#2563EB] pl-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-wider block">
              {i18n.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tight">
              {i18n.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] max-w-4xl">
              {i18n.subtitle}
            </p>
          </div>

          <div className="font-mono text-xs text-[#64748B] shrink-0">
            표시 모델: <strong className="text-[#2563EB]">{filteredProducts.length}</strong>종 (전체 등록 {products.length}종)
          </div>
        </div>

        {/* Active Category or Search Status Strip */}
        {(effectiveCategory !== 'all' || effectiveTextQuery !== '') ? (() => {
          const matchedCat = categories.find((c) => c.id === effectiveCategory);
          const displayLabel = matchedCat
            ? lang === 'ko'
              ? matchedCat.nameKo
              : lang === 'vi'
              ? matchedCat.nameVn
              : matchedCat.nameEn
            : `“${effectiveTextQuery}”`;

          return (
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono shadow-2xs">
              <div className="flex items-center gap-2 text-[#1E40AF]">
                <Package className="w-4 h-4 text-[#2563EB]" />
                <span>{matchedCat ? '1:1 선택 카테고리:' : '검색 필터:'}</span>
                <span className="font-bold bg-white px-2.5 py-0.5 border border-[#BFDBFE] text-[#1E293B]">
                  {displayLabel} ({filteredProducts.length}종)
                </span>
                {effectiveTextQuery && matchedCat && (
                  <span className="font-bold bg-white px-2.5 py-0.5 border border-[#BFDBFE] text-[#1E293B]">
                    검색어: “{effectiveTextQuery}”
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-red-600 hover:text-red-800 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                title="전체 제품 보기"
              >
                <X className="w-3.5 h-3.5" />
                <span>{i18n.clearFilter}</span>
              </button>
            </div>
          );
        })() : (
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] border-l-4 border-l-[#2563EB] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#1E293B]">
              <Package className="w-4 h-4 text-[#2563EB]" />
              <span className="font-extrabold">
                {lang === 'ko'
                  ? `전체 취급제품군 보기 (All Categories) • ${categories.length}대 카테고리 등록 전 모델 통합 출력`
                  : lang === 'vi'
                  ? 'Tất cả danh mục sản phẩm FA (All Categories) • Hiển thị toàn bộ sản phẩm'
                  : 'All FA Product Categories • Showing All Registered Models'}
              </span>
            </div>
            <span className="px-2.5 py-0.5 bg-[#2563EB] text-white font-mono font-bold text-[11px]">
              총 {filteredProducts.length}개 전 모델 표시 중
            </span>
          </div>
        )}

        {/* Product Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-10 text-center text-xs text-[#64748B] space-y-3">
            <p className="font-mono text-sm font-bold text-[#1E293B]">{i18n.noResults}</p>
            <p className="text-xs text-[#94A3B8]">
              관리자 페이지에서 해당 카테고리에 신규 모델을 추가하거나 전체 카테고리 보기로 전환할 수 있습니다.
            </p>
            <div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs uppercase tracking-wider font-mono cursor-pointer"
              >
                {i18n.clearFilter}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => renderProductCard(product))}
          </div>
        )}

      </div>

      {/* Technical Spec & CAD Download Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border border-[#CBD5E1] max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4 text-xs font-sans">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase">
                  {selectedProductModal.brand} • {selectedProductModal.categoryLabel?.[lang] || selectedProductModal.category}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#1E293B] mt-0.5">
                  {selectedProductModal.modelName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                className="p-1 text-[#64748B] hover:text-black font-bold text-base cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Image & Tagline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-[#F8FAFC] border border-[#CBD5E1] p-4">
              <div className="sm:col-span-1 bg-white border border-[#CBD5E1] p-3 flex items-center justify-center h-32">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.modelName}
                  className="max-h-28 max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = './assets/aistudio/images/logo.png';
                  }}
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <p className="text-xs text-[#1E293B] font-medium leading-relaxed">
                  {selectedProductModal.tagline?.[lang] || selectedProductModal.tagline?.ko || selectedProductModal.tagline?.vi}
                </p>
                <div className="text-[11px] font-mono text-emerald-700 font-bold">
                  ✓ {selectedProductModal.leadTime?.[lang] || selectedProductModal.leadTime?.ko || selectedProductModal.leadTime?.vi}
                </div>
              </div>
            </div>

            {/* Detailed Spec Table */}
            <div>
              <h4 className="font-bold text-[#1E293B] text-xs uppercase mb-1 font-mono">
                {i18n.specModalTitle}
              </h4>
              <div className="border border-[#CBD5E1] divide-y divide-[#E2E8F0] text-xs font-mono">
                {Object.entries(selectedProductModal.specs || {}).map(([key, val]) => (
                  <div key={key} className="flex px-3 py-1.5 bg-white even:bg-[#F8FAFC]">
                    <span className="w-1/3 text-[#64748B] uppercase font-bold">{key}</span>
                    <span className="w-2/3 text-[#1E293B] font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            {selectedProductModal.features && (
              <div>
                <h4 className="font-bold text-[#1E293B] text-xs uppercase mb-1 font-mono">
                  ƯU THẾ KỸ THUẬT NỔI BẬT (HIGHLIGHTS)
                </h4>
                <ul className="space-y-1 text-xs text-[#334155]">
                  {(selectedProductModal.features[lang] || selectedProductModal.features.ko || selectedProductModal.features.vi || []).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#2563EB] font-bold">▪</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const model = selectedProductModal.modelName;
                  setSelectedProductModal(null);
                  onOpenRfq(model);
                }}
                className="px-4 py-2 bg-[#F8FAFC] hover:bg-blue-50 text-[#2563EB] border border-[#CBD5E1] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{i18n.cadReq}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const model = selectedProductModal.modelName;
                  setSelectedProductModal(null);
                  onOpenRfq(model);
                }}
                className="px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold uppercase tracking-wider shadow-xs cursor-pointer"
              >
                {i18n.btnRfq}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
