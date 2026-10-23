import React from 'react';
import { Award, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';
import { DAWOOFA_PARTNER_BRANDS } from '../../data/dawoofaData';

interface BrandsSectionProps {
  lang: Language;
  onSelectBrand?: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ lang, onSelectBrand }) => {
  const i18n = {
    vi: {
      badge: "ĐỐI TÁC THƯƠNG HIỆU TỰ ĐỘNG HÓA CHÍNH THỨC",
      title: "Các Thương Hiệu Tự Động Hóa (FA) Phân Phối Trực Tiếp",
      subtitle: "DAWOOFA VINA là đại lý ủy quyền chính thức của Mitsubishi Electric cùng các hãng công nghệ hàng đầu Nhật Bản & Hàn Quốc, cung cấp 100% thiết bị nguyên đai nguyên kiện kèm chứng nhận C/O và C/Q.",
      btnLineup: "Xem danh mục sản phẩm",
      certifiedBadge: "CHỨNG NHẬN ĐẠI LÝ CHÍNH THỨC",
      guaranteeTitle: "Cam kết 100% chính hãng kèm chứng nhận xuất xứ C/O & chất lượng C/Q",
      guaranteeDesc: "Tất cả thiết bị đều có đầy đủ chứng từ xuất nhập khẩu hợp pháp, hỗ trợ nghiệm thu kiểm tra và đáp ứng các tiêu chuẩn khắt khe của các tập đoàn sản xuất lớn tại Việt Nam.",
      vatSupport: "Xuất hóa đơn đỏ VAT đầy đủ theo quy định Bộ Tài Chính"
    },
    ko: {
      badge: "공식 취급 글로벌 FA 자동화 브랜드",
      title: "정품 공식 취급 글로벌 자동화 하드웨어 제조사",
      subtitle: "DAWOOFA VINA는 한국미쓰비시전기 공식 1급 대리점(특약점) 지위를 바탕으로 일본 및 한국 대표 FA 메이커의 정품 부품만을 정식 수입하여 공급합니다.",
      btnLineup: "취급 부품 목록 보기",
      certifiedBadge: "공식 대리점 정식 라이선스",
      guaranteeTitle: "가품 차단 100% 정품 보증 및 정식 C/O, C/Q 발급",
      guaranteeDesc: "전 품목 제조사 정식 수입 통관 및 원산지 증명서(C/O), 공인 시험 성적서(C/Q) 동봉 발행으로 베트남 설비 감사(Audit) 통과를 100% 보증합니다.",
      vatSupport: "베트남 현지 VAT Hóa Đơn Đỏ 100% 정식 발행"
    },
    en: {
      badge: "AUTHORIZED INDUSTRIAL AUTOMATION BRANDS",
      title: "Directly Distributed Global FA Brand Partners",
      subtitle: "DAWOOFA VINA officially distributes Mitsubishi Electric and leading Japanese & Korean FA brands, ensuring 100% authentic hardware with full C/O & C/Q certifications.",
      btnLineup: "View Brand Lineup",
      certifiedBadge: "OFFICIAL AUTHORIZED DISTRIBUTOR",
      guaranteeTitle: "100% Genuine Guaranteed with Official C/O & C/Q Certificates",
      guaranteeDesc: "All products come with official manufacturer Certificate of Origin (C/O) and Certificate of Quality (C/Q) for seamless factory audit compliance.",
      vatSupport: "Official VAT Electronic Invoice (Hóa Đơn Đỏ) Included"
    }
  }[lang];

  return (
    <section id="brands" className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-10">
      <div className="max-w-[1240px] mx-auto px-4 space-y-6">
        
        {/* Section Header */}
        <div className="border-l-4 border-[#2563EB] pl-3 space-y-1">
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

        {/* 6 Authorized Brand Matrix (Traditional Korean FA distributor dense cards - Bright Palette) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DAWOOFA_PARTNER_BRANDS.map((brand) => {
            const isPrimary = brand.id === 'mitsubishi';
            return (
              <div
                key={brand.id}
                className={`bg-white border p-5 flex flex-col justify-between transition-colors shadow-2xs ${
                  isPrimary
                    ? 'border-[#2563EB] shadow-xs relative ring-1 ring-[#2563EB]'
                    : 'border-[#CBD5E1] hover:border-[#2563EB]'
                }`}
              >
                {isPrimary && (
                  <div className="absolute -top-2.5 right-4 bg-[#2563EB] text-white text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase shadow-xs">
                    ★ {lang === 'ko' ? '공식 대리점' : lang === 'vi' ? 'ĐẠI LÝ CHÍNH THỨC' : 'OFFICIAL DISTRIBUTOR'}
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] font-bold">
                      {brand.country}
                    </span>
                    <span className="font-bold text-[#2563EB]">
                      {brand.tier}
                    </span>
                  </div>

                  {/* Brand Title Box */}
                  <div className="py-1">
                    <h3 className="text-lg font-black text-[#1E293B] tracking-tight font-sans">
                      {brand.name}
                    </h3>
                    <div className="text-[11px] font-mono text-[#2563EB] font-bold mt-0.5">
                      {brand.specialty}
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {brand.role[lang]}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    100% C/O, C/Q
                  </span>
                  {onSelectBrand && (
                    <button
                      onClick={() => onSelectBrand(brand.name)}
                      className="text-[11px] font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                    >
                      <span>{i18n.btnLineup}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 100% Genuine Quality Guarantee Strip */}
        <div className="bg-white border border-[#CBD5E1] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <strong className="text-sm font-bold text-[#1E293B] block">
                {i18n.guaranteeTitle}
              </strong>
              <span className="text-xs text-[#64748B]">
                {i18n.guaranteeDesc}
              </span>
            </div>
          </div>

          <div className="shrink-0 bg-blue-50/70 border border-blue-200 px-3 py-1.5 font-mono font-bold text-[#2563EB] text-xs">
            {i18n.vatSupport}
          </div>
        </div>

      </div>
    </section>
  );
};
