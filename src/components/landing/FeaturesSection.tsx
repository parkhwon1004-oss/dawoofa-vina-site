import React from 'react';
import { 
  Warehouse, 
  Wrench, 
  Receipt, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle,
  Truck,
  PhoneCall,
  Check
} from 'lucide-react';
import { Language } from '../../types';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const i18n = {
    vi: {
      badge: "NĂNG LỰC DỊCH VỤ & HỖ TRỢ KỸ THUẬT, BẢO HÀNH A/S TẠI VIỆT NAM",
      title: "4 Trụ Cột Năng Lực Cạnh Tranh Cốt Lõi Của DAWOOFA VINA",
      subtitle: "Không chỉ đơn thuần phân phối thiết bị, chúng tôi đồng hành bảo vệ dây chuyền sản xuất của bạn không bị gián đoạn (Zero Line-Stop) với kho hàng sẵn có tại chỗ và đội ngũ kỹ sư chuyên môn cao.",
      f1Title: "KHO NGOẠI QUAN SẴN HÀNG TẠI BẮC NINH & BÌNH DƯƠNG",
      f1Metric: "GIAO TRONG 24~48H",
      f1Desc: "Duy trì tồn kho lớn các dòng Servo MR-J5/J4, Biến tần A800/E800, PLC và HMI tại 2 trung tâm logistics trọng điểm, sẵn sàng giao khẩn cấp trong ngày cho các tình huống sự cố dây chuyền.",
      f2Title: "ĐỘI NGŨ KỸ SƯ HÀN QUỐC 20 NĂM KINH NGHIỆM THƯỜNG TRỰC",
      f2Metric: "CÓ MẶT TRONG 4H",
      f2Desc: "Kỹ sư chuyên gia từ trụ sở Hàn Quốc (dawooservo.co.kr) thường trực tại Việt Nam hỗ trợ cài đặt thông số servo, lập trình kết nối PLC và xử lý sự cố biến tần tận nơi tại các KCN.",
      f3Title: "100% THIẾT BỊ CHÍNH HÃNG ĐẦY ĐỦ CHỨNG NHẬN C/O & C/Q",
      f3Metric: "C/O, C/Q CHÍNH HÃNG",
      f3Desc: "Cung cấp đầy đủ giấy chứng nhận xuất xứ (C/O) và chứng nhận chất lượng (C/Q) từ nhà sản xuất, cam kết 100% vượt qua các kỳ kiểm toán kỹ thuật khắt khe của các tập đoàn FDI lớn.",
      f4Title: "THANH TOÁN LINH HOẠT VND/USD & XUẤT HÓA ĐƠN VAT HỢP PHÁP",
      f4Metric: "HÓA ĐƠN ĐỎ VAT",
      f4Desc: "Là pháp nhân đăng ký chính thức tại Việt Nam (MST: 2301192888), hỗ trợ công nợ doanh nghiệp, thanh toán linh hoạt VND/USD và xuất hóa đơn đỏ VAT đầy đủ theo quy định.",
      coverageBadge: "PHẠM VI PHỦ SÓNG KỸ THUẬT & GIAO HÀNG KHẨN CẤP",
      coverageTitle: "Mạng Lưới Kỹ Thuật Phản Ứng Nhanh Dưới 4 Giờ Tại Các KCN Trọng Điểm",
      coverageDesc: "Hai trung tâm kỹ thuật Bắc Ninh và Bình Dương đảm bảo thời gian di chuyển và bàn giao thiết bị nhanh nhất đến nhà xưởng của quý khách.",
      northTitle: "Trung tâm Kỹ thuật Miền Bắc (Hà Nội, Bắc Ninh, Hải Phòng, Thái Nguyên)",
      northAddr: "Số 18, Đường 3, KCN VSIP Bắc Ninh, Phường Phù Chẩn, TP. Từ Sơn, Tỉnh Bắc Ninh",
      northLead: "Thời gian tiếp cận: 1 ~ 2.5 giờ đến các KCN VSIP, Yên Bình, Điềm Thụy, Tràng Duệ, Deep C",
      southTitle: "Trung tâm Dịch vụ Miền Nam (Bình Dương, Đồng Nai, TP.HCM)",
      southAddr: "Lô CN-02, KCN VSIP 2, Thị xã Bến Cát, Tỉnh Bình Dương",
      southLead: "Thời gian tiếp cận: 1.5 ~ 3 giờ đến các KCN VSIP 1-2, Mỹ Phước, SHTP, Amata, Nhơn Trạch"
    },
    ko: {
      badge: "베트남 현지 기술지원 및 현지A/S대응 및 물류 서비스 역량",
      title: "베트남 현지 제조사가 DAWOOFA VINA를 선택하는 4대 강점",
      subtitle: "단순한 무역 부품 유통을 넘어, 현지 보세창고 재고 운용과 한국 본사 공인 엔지니어 현장 지원으로 고객사 공장의 비상 정지(Line Stop)를 완벽히 차단합니다.",
      f1Title: "박닌 & 빈증 2대 로컬 보세창고 상시 대량 비축",
      f1Metric: "24~48h 긴급납품",
      f1Desc: "미쓰비시 서보(MR-J5/J4), 인버터(A800/E800), PLC 핵심 규격을 북부(박닌)와 남부(빈증) 물류센터에 상시 보유하여 라인 고장 비상 시 당일 직배송합니다.",
      f2Title: "한국 본사 20년 경력 기술지원 및 현지A/S대응 엔지니어 상주",
      f2Metric: "4시간 현장출동",
      f2Desc: "한국 본사(dawooservo.co.kr) 공인 FA 기술 엔지니어가 현지에 상주하여 서보 게인 튜닝, PLC 통신 파라미터 셋업, 인버터 에러 긴급 복구를 직접 전담합니다.",
      f3Title: "100% 정품 보증 및 정식 C/O, C/Q 성적서 완비",
      f3Metric: "C/O, C/Q 발행",
      f3Desc: "전 품목 공식 대리점 정품 공급 및 제조사 정식 원산지 증명서(C/O), 품질 성적서(C/Q) 동봉으로 삼성·LG 등 글로벌 대기업의 엄격한 설비 감사를 100% 충족합니다.",
      f4Title: "VND/USD 유연한 결제 및 전자세금계산서 정식 발행",
      f4Metric: "Hóa Đơn Đỏ",
      f4Desc: "베트남 정식 법인(MST: 2301192888)으로서 유연한 결제 및 현지 세무 규정에 부합하는 Hóa Đơn Đỏ(전자세금계산서)를 100% 정식 발행합니다.",
      coverageBadge: "베트남 전역 4시간 이내 현장 기술지원 및 직배송 권역",
      coverageTitle: "북부/남부 핵심 공업단지 4시간 긴급 출동 기술지원 및 현지A/S대응 커버리지",
      coverageDesc: "한국계 및 글로벌 제조 대기업 협력사가 밀집한 주요 공단 전역에 즉시 대응 체계를 가동하고 있습니다.",
      northTitle: "북부 테크센터 (하노이, 박닌, 하이퐁, 타이응웬 권역)",
      northAddr: "Số 18, Đường 3, KCN VSIP Bắc Ninh, TP. Từ Sơn, Tỉnh Bắc Ninh",
      northLead: "긴급 출동 소요: VSIP, 대동, 옌빈, 짱주에, Deep C 공단 1.5~2.5시간 이내 도착",
      southTitle: "남부 서비스센터 (호치민, 빈증, 동나이 권역)",
      southAddr: "Lô CN-02, KCN VSIP 2, TX. Bến Cát, Tỉnh Bình Dương",
      southLead: "긴급 출동 소요: VSIP 1·2, 미푹, SHTP, 아마타, 년짝 공단 1.5~3시간 이내 도착"
    },
    en: {
      badge: "LOCAL TECHNICAL SUPPORT & ON-SITE A/S CAPABILITY",
      title: "4 Core Strengths for Industrial Facilities in Vietnam",
      subtitle: "Beyond component distribution, we safeguard manufacturing continuity with localized buffer inventory and certified on-site engineering expertise.",
      f1Title: "LOCAL BONDED BUFFER HUBS IN BAC NINH & BINH DUONG",
      f1Metric: "24-48H DISPATCH",
      f1Desc: "Comprehensive buffer stock of Mitsubishi MR-J5/J4, FREQROL inverters, and PLCs maintained locally for immediate emergency factory delivery.",
      f2Title: "RESIDENT KOREAN ENGINEERS WITH 20+ YEARS EXPERIENCE",
      f2Metric: "4H ON-SITE",
      f2Desc: "Certified FA engineers from Korea HQ (dawooservo.co.kr) stationed in Vietnam provide on-site servo tuning, PLC programming, and diagnostics.",
      f3Title: "100% GENUINE FACTORY HARDWARE WITH OFFICIAL C/O & C/Q",
      f3Metric: "OFFICIAL C/O, C/Q",
      f3Desc: "Full official documentation including Certificate of Origin (C/O) and Certificate of Quality (C/Q) ensuring complete compliance with client audit standards.",
      f4Title: "FLEXIBLE SETTLEMENT IN VND/USD & OFFICIAL VAT INVOICE",
      f4Metric: "OFFICIAL VAT",
      f4Desc: "Officially registered legal entity in Vietnam (Tax ID: 2301192888) supporting corporate terms and issuing official electronic VAT invoices.",
      coverageBadge: "EMERGENCY 4-HOUR ON-SITE DISPATCH COVERAGE",
      coverageTitle: "Rapid Technical Support & Local A/S Coverage Across Major Industrial Zones",
      coverageDesc: "Our dual technical centers in Bac Ninh and Binh Duong guarantee fastest transit and on-site deployment.",
      northTitle: "North Technical Hub (Hanoi, Bac Ninh, Hai Phong, Thai Nguyen)",
      northAddr: "No. 18, Road 3, VSIP Bac Ninh Industrial Park, Tu Son, Bac Ninh",
      northLead: "Transit time: 1.0 to 2.5 hours to VSIP, Yen Binh, Diem Thuy, Trang Due, Deep C",
      southTitle: "South Service Center (Binh Duong, Dong Nai, Ho Chi Minh City)",
      southAddr: "Lot CN-02, VSIP 2 Industrial Park, Ben Cat, Binh Duong",
      southLead: "Transit time: 1.5 to 3.0 hours to VSIP 1-2, My Phuoc, SHTP, Amata, Nhon Trach"
    }
  }[lang];

  return (
    <section id="support" className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-10">
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

        {/* 4 Feature Bento Grid (Dense, solid rectangular borders, bright theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#CBD5E1] p-5 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
                <div className="w-8 h-8 bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center font-bold text-xs">
                  <Warehouse className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#2563EB]">
                  {i18n.f1Metric}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#1E293B] leading-snug">
                {i18n.f1Title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {i18n.f1Desc}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F1F5F9] text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
              <span>✓ Có sẵn kho Bắc Ninh &amp; Bình Dương</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#CBD5E1] p-5 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
                <div className="w-8 h-8 bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center font-bold text-xs">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#2563EB]">
                  {i18n.f2Metric}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#1E293B] leading-snug">
                {i18n.f2Title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {i18n.f2Desc}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F1F5F9] text-[11px] font-mono text-[#2563EB] font-bold flex items-center gap-1">
              <span>✓ Trực tiếp từ dawooservo.co.kr</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#CBD5E1] p-5 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
                <div className="w-8 h-8 bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#2563EB]">
                  {i18n.f3Metric}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#1E293B] leading-snug">
                {i18n.f3Title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {i18n.f3Desc}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F1F5F9] text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
              <span>✓ 100% C/O, C/Q chính hãng</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#CBD5E1] p-5 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
                <div className="w-8 h-8 bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center font-bold text-xs">
                  <Receipt className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#2563EB]">
                  {i18n.f4Metric}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#1E293B] leading-snug">
                {i18n.f4Title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {i18n.f4Desc}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F1F5F9] text-[11px] font-mono text-[#2563EB] font-bold flex items-center gap-1">
              <span>✓ MST: 2301192888 hợp pháp</span>
            </div>
          </div>

        </div>

        {/* Industrial Coverage Box (Technical Hubs & Emergency Dispatch - Bright Theme) */}
        <div className="bg-white border border-[#CBD5E1] p-6 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase">
                {i18n.coverageBadge}
              </span>
              <h3 className="text-base font-bold text-[#1E293B]">
                {i18n.coverageTitle}
              </h3>
            </div>
            <span className="bg-[#2563EB] text-white text-[11px] font-mono font-bold px-3 py-1 self-start sm:self-auto shadow-xs">
              HOTLINE 24/7: +84 222-389-9988
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1E293B]">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span>{i18n.northTitle}</span>
              </div>
              <p className="text-xs text-[#475569]">
                {i18n.northAddr}
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-bold pt-1 border-t border-[#E2E8F0]">
                {i18n.northLead}
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1E293B]">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span>{i18n.southTitle}</span>
              </div>
              <p className="text-xs text-[#475569]">
                {i18n.southAddr}
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-bold pt-1 border-t border-[#E2E8F0]">
                {i18n.southLead}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
