import React from 'react';
import { Language } from '../../types';
import { Cpu, PhoneCall } from 'lucide-react';

interface TraditionalGnbProps {
  lang: Language;
  onOpenRfq: () => void;
  onScrollTo: (id: string) => void;
}

export const TraditionalGnb: React.FC<TraditionalGnbProps> = ({
  lang,
  onOpenRfq,
  onScrollTo
}) => {
  const menuLabels = {
    ko: {
      about: '회사소개',
      brands: '취급브랜드',
      catalog: '제품카탈로그',
      solutions: '엔지니어링 솔루션',
      rfq: '온라인 견적문의',
      rfqBtn: '견적 요청 (RFQ)'
    },
    vi: {
      about: 'Giới thiệu',
      brands: 'Thương hiệu',
      catalog: 'Danh mục sản phẩm',
      solutions: 'Giải pháp kỹ thuật',
      rfq: 'Yêu cầu báo giá',
      rfqBtn: 'Báo Giá Trực Tuyến'
    },
    en: {
      about: 'About Us',
      brands: 'Brands',
      catalog: 'Product Catalog',
      solutions: 'FA Solutions',
      rfq: 'Request Quote',
      rfqBtn: 'Request a Quote'
    }
  }[lang];

  return (
    <nav className="bg-white border-b border-[#DEE2E6] sticky top-0 z-40">
      <div className="max-w-[1240px] mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Left: Bold Gothic "DAWOOFA VINA" Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-none bg-[#1E2B37] text-white flex items-center justify-center font-bold font-mono text-sm border border-[#1E2B37]">
              DF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-[#1E2B37] font-sans">
                  DAWOOFA <span className="text-[#2C3E50] font-normal">VINA</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F1F3F5] text-[#495057] border border-[#DEE2E6] font-bold">
                  FA SPECIALIST
                </span>
              </div>
              <p className="text-[10px] text-[#6C757D] font-medium tracking-tight">
                CÔNG TY TNHH DAWOOFA VINA • (주)다우FA 베트남 법인
              </p>
            </div>
          </div>
        </div>

        {/* Center / Right: Horizontal Main GNB Menu (Clean Rectangular Korean FA Style) */}
        <div className="hidden lg:flex items-center gap-1 font-sans text-sm font-semibold text-[#333333]">
          <button
            onClick={() => onScrollTo('about')}
            className="px-4 py-2 hover:text-[#1E2B37] hover:bg-[#F8F9FA] transition-colors border-b-2 border-transparent hover:border-[#1E2B37]"
          >
            {menuLabels.about}
          </button>
          <button
            onClick={() => onScrollTo('brands')}
            className="px-4 py-2 hover:text-[#1E2B37] hover:bg-[#F8F9FA] transition-colors border-b-2 border-transparent hover:border-[#1E2B37]"
          >
            {menuLabels.brands}
          </button>
          <button
            onClick={() => onScrollTo('catalog')}
            className="px-4 py-2 text-[#1E2B37] font-bold bg-[#F8F9FA] border-b-2 border-[#1E2B37]"
          >
            {menuLabels.catalog}
          </button>
          <button
            onClick={() => onScrollTo('solutions')}
            className="px-4 py-2 hover:text-[#1E2B37] hover:bg-[#F8F9FA] transition-colors border-b-2 border-transparent hover:border-[#1E2B37]"
          >
            {menuLabels.solutions}
          </button>
          <button
            onClick={() => onScrollTo('rfq')}
            className="px-4 py-2 hover:text-[#1E2B37] hover:bg-[#F8F9FA] transition-colors border-b-2 border-transparent hover:border-[#1E2B37]"
          >
            {menuLabels.rfq}
          </button>
        </div>

        {/* Right: Sharp Rectangular RFQ Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRfq}
            className="px-4 py-2 bg-[#1E2B37] hover:bg-[#2C3E50] text-white text-xs font-bold rounded-none border border-[#1E2B37] transition-all flex items-center gap-1.5 active:scale-95 shadow-none"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{menuLabels.rfqBtn}</span>
          </button>
        </div>

      </div>
    </nav>
  );
};
