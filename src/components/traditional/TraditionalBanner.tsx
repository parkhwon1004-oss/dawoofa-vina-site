import React from 'react';
import { ShieldCheck, Warehouse, Wrench, CheckSquare } from 'lucide-react';
import { Language } from '../../types';

interface TraditionalBannerProps {
  lang: Language;
  onOpenRfq: () => void;
}

export const TraditionalBanner: React.FC<TraditionalBannerProps> = ({ lang, onOpenRfq }) => {
  const content = {
    ko: {
      tag: "한국 다우FA(dawooservo.co.kr) 베트남 현지 법인",
      title: "DAWOOFA VINA - 베트남 스마트팩토리 FA 솔루션 파트너",
      desc: "한국미쓰비시전기 공식 대리점 (주)다우FA의 20년 엔지니어링 신뢰를 바탕으로, 베트남 현지 제조공장에 서보 시스템(MR-J5/J4), 인버터(A800/E800), PLC(iQ-R/F)를 최단기 납품 및 기술 지원합니다.",
      badge1Title: "100% 정품 보장 (Chính Hãng)",
      badge1Desc: "공식 대리점 정품 공급 및 정식 C/O, C/Q 제조사 성적서 완비",
      badge2Title: "베트남 현지 창고 보유 (In-Stock)",
      badge2Desc: "박닌 & 빈증 보세물류센터 상시 재고 보유, 24~48h 이내 긴급 출고",
      badge3Title: "한·베 전문 엔지니어 기술 대응",
      badge3Desc: "서보 게인 튜닝, PLC 통신 셋업 및 4시간 이내 현장 긴급 방문 지원",
      rfqBtn: "견적 및 납기 문의 (RFQ)"
    },
    vi: {
      tag: "Trực thuộc Dawoo FA Hàn Quốc (dawooservo.co.kr)",
      title: "DAWOOFA VINA - Đối Tác Tự Động Hóa Nhà Máy Thông Minh",
      desc: "Đại lý ủy quyền chính thức Mitsubishi Electric, cung cấp Servo MR-J5/J4, Biến tần A800/E800 và PLC iQ-R/F với kho hàng có sẵn tại Việt Nam và hỗ trợ kỹ thuật tận nơi.",
      badge1Title: "100% Chính Hãng (Chính Hãng)",
      badge1Desc: "Cung cấp đầy đủ chứng nhận xuất xứ C/O và chất lượng C/Q từ nhà sản xuất",
      badge2Title: "Kho Hàng Sẵn Có Tại Việt Nam (In-Stock)",
      badge2Desc: "Kho ngoại quan tại Bắc Ninh & Bình Dương, giao hàng trong 24~48h",
      badge3Title: "Kỹ Sư Chuyên Nghiệp Hàn - Việt",
      badge3Desc: "Cài đặt thông số servo, lập trình kết nối PLC và có mặt trong 4 giờ",
      rfqBtn: "Yêu Cầu Báo Giá & Tiến Độ"
    },
    en: {
      tag: "Direct Subsidiary of Dawoo FA Korea (dawooservo.co.kr)",
      title: "DAWOOFA VINA - Smart Factory Automation Partner in Vietnam",
      desc: "Official authorized distributor of Mitsubishi Electric, providing genuine MR-J5/J4 servos, A800/E800 inverters, and iQ-R/F PLCs with local buffer stock in Bac Ninh & Binh Duong.",
      badge1Title: "100% Genuine Guaranteed (Chính Hãng)",
      badge1Desc: "Direct supply with official manufacturer Certificate of Origin (C/O) & Quality (C/Q)",
      badge2Title: "Local Vietnam Buffer Stock (In-Stock)",
      badge2Desc: "Bonded warehouses in Bac Ninh & Binh Duong, expedited 24~48h delivery",
      badge3Title: "Certified Korean & Vietnamese Engineers",
      badge3Desc: "On-site servo tuning, PLC diagnostics and 4-hour emergency response",
      rfqBtn: "Request Quote & Delivery (RFQ)"
    }
  }[lang];

  return (
    <div id="about" className="bg-[#F8F9FA] border-b border-[#DEE2E6] py-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-4">
        
        {/* Banner Header Area */}
        <div className="border-l-4 border-[#1E2B37] pl-4 py-1 mb-8">
          <span className="text-[11px] font-mono font-bold text-[#6C757D] block mb-0.5 uppercase tracking-wider">
            {content.tag}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
            {content.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#495057] mt-2 max-w-4xl leading-relaxed">
            {content.desc}
          </p>
        </div>

        {/* 3 Authentic Trust Badges (Sharp 1px Bordered Rectangular Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Badge 1 */}
          <div className="bg-white border border-[#DEE2E6] p-4 rounded-none flex items-start gap-3 shadow-none">
            <div className="w-10 h-10 rounded-none bg-[#F1F3F5] border border-[#CED4DA] flex items-center justify-center shrink-0 text-[#1E2B37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-[#212529] block">
                {content.badge1Title}
              </strong>
              <p className="text-[11px] text-[#6C757D] mt-1 leading-snug">
                {content.badge1Desc}
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="bg-white border border-[#DEE2E6] p-4 rounded-none flex items-start gap-3 shadow-none">
            <div className="w-10 h-10 rounded-none bg-[#F1F3F5] border border-[#CED4DA] flex items-center justify-center shrink-0 text-[#1E2B37]">
              <Warehouse className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-[#212529] block">
                {content.badge2Title}
              </strong>
              <p className="text-[11px] text-[#6C757D] mt-1 leading-snug">
                {content.badge2Desc}
              </p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="bg-white border border-[#DEE2E6] p-4 rounded-none flex items-start gap-3 shadow-none">
            <div className="w-10 h-10 rounded-none bg-[#F1F3F5] border border-[#CED4DA] flex items-center justify-center shrink-0 text-[#1E2B37]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-[#212529] block">
                {content.badge3Title}
              </strong>
              <p className="text-[11px] text-[#6C757D] mt-1 leading-snug">
                {content.badge3Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
