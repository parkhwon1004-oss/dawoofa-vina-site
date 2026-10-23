import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Loader2,
  X
} from 'lucide-react';
import { Language } from '../../types';
import { 
  CompanyInfo, 
  DEFAULT_COMPANY_INFO, 
  ProductCategoryDef, 
  OFFICIAL_CATEGORIES 
} from '../../data/companyStore';
import { 
  FORMSUBMIT_ACTION_URL,
  DEFAULT_RFQ_SUBJECT,
  buildRfqCcEmails,
  submitRfqViaFormSubmit
} from '../../utils/rfqEmailSender';

interface ContactSectionProps {
  lang: Language;
  presetModel?: string;
  companyInfo?: CompanyInfo;
  categories?: ProductCategoryDef[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  lang, 
  presetModel,
  companyInfo = DEFAULT_COMPANY_INFO,
  categories = OFFICIAL_CATEGORIES
}) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: categories[0]?.id || 'servo',
    modelInterest: presetModel || '',
    urgency: 'fast',
    notes: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (presetModel) {
      setFormData((prev) => ({ ...prev, modelInterest: presetModel }));
    }
  }, [presetModel]);

  const ccEmails = buildRfqCcEmails(companyInfo);

  const i18n = {
    vi: {
      badge: "YÊU CẦU BÁO GIÁ TRỰC TUYẾN & TƯ VẤN KỸ THUẬT",
      title: "Đăng Ký Nhận Bảng Báo Giá Chính Thức & Bản Vẽ Kỹ Thuật",
      subtitle: "Quý khách vui lòng cung cấp mã hiệu thiết bị, quy cách kỹ thuật hoặc tình trạng cần thay thế gấp, đội ngũ kỹ sư của DAWOOFA VINA sẽ phản hồi báo giá thương mại chính thức trong vòng 2 giờ.",
      lblCompany: "Tên công ty / Tên nhà xưởng",
      phCompany: "Ví dụ: Công ty TNHH Dawoo Tech Vina",
      lblName: "Họ tên & Chức vụ người liên hệ",
      phName: "Ví dụ: Nguyễn Văn A - Kỹ sư trưởng thiết bị",
      lblEmail: "Địa chỉ Email nhận báo giá",
      phEmail: "engineer@company.com",
      lblPhone: "Số điện thoại / Số Zalo nhận tư vấn",
      phPhone: "+84 90-123-4567 hoặc +84 222-...",
      lblCategory: "Danh mục sản phẩm quan tâm",
      lblModel: "Mã sản phẩm / Số lượng yêu cầu (Nếu có)",
      phModel: "Ví dụ: MR-J5-20G (3 bộ), HG-KR23 (3 cái), FR-E840-0060 (2 cái)",
      lblUrgency: "Tiến độ yêu cầu giao hàng",
      urgencyFast: "Khẩn cấp: Cần hàng trong 24~48h (Xử lý dừng chuyền)",
      urgencyStandard: "Dự án mới: Cần báo giá đấu thầu / Cung ứng theo tiến độ",
      lblNotes: "Thông số kỹ thuật chi tiết hoặc ghi chú thêm",
      phNotes: "Vui lòng cung cấp công suất (kW), điện áp (220V/380V), tỷ số truyền hoặc mã thiết bị cũ cần thay thế tương đương...",
      btnSubmit: "GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC (SUBMIT RFQ)",
      sendingText: "Đang gửi yêu cầu báo giá...",
      toastMsg: "견적 요청이 정상 접수되었습니다 (Yêu cầu báo giá đã được tiếp nhận)",
      successTitle: "견적 요청이 정상 접수되었습니다!",
      successDesc: "Kỹ sư phụ trách khu vực của DAWOOFA VINA đã nhận được yêu cầu và sẽ gửi bảng báo giá chính thức kèm chứng chỉ C/O & C/Q qua email của quý khách trong vòng 2 giờ làm việc.",
      btnAnother: "Gửi thêm yêu cầu báo giá khác",
      hubBoxTitle: "THÔNG TIN LIÊN HỆ TRỰC TIẾP DAWOOFA VINA",
      hotlineLabel: "HOTLINE KỸ THUẬT KHẨN CẤP (24/7):",
      emailLabel: "EMAIL TIẾP NHẬN RFQ:",
      zaloLabel: "KÊNH CHAT ZALO KỸ THUẬT:",
      taxLabel: "MÃ SỐ THUẾ (MST):",
      northHubTitle: "TRUNG TÂM KỸ THUẬT MIỀN BẮC (BẮC NINH)",
      southHubTitle: "TRUNG TÂM KỸ THUẬT MIỀN NAM (BÌNH DƯƠNG)",
      hqLink: "Trụ sở chính tại Hàn Quốc: www.dawooservo.co.kr"
    },
    ko: {
      badge: "ONLINE RFQ & TECHNICAL INQUIRY",
      title: "온라인 정식 견적 요청 및 기술 사양 문의",
      subtitle: "필요하신 미쓰비시 서보, 인버터, PLC, 로봇 형번 또는 사양을 입력해 주시면 다우FA 담당자 메일로 즉시 전송되며, 2시간 이내에 정식 견적서와 도면을 회신해 드립니다.",
      lblCompany: "회사명 / 법인명",
      phCompany: "예: (주)다우테크 비나 사업장 / 협력사",
      lblName: "담당자명 및 직함",
      phName: "예: 박현우 팀장 / 공정설비팀",
      lblEmail: "업무용 이메일",
      phEmail: "engineer@company.com",
      lblPhone: "연락처 (Zalo / 휴대폰)",
      phPhone: "+84 90-123-4567 또는 010-0000-0000",
      lblCategory: "관심 제품 분류",
      lblModel: "검토 모델명 / 수량 (선택 사항)",
      phModel: "예: MR-J5-20G 3대, HG-KR23 3대, FR-E840 2대",
      lblUrgency: "납기 희망 일정",
      urgencyFast: "긴급: 24~48시간 내 필요 (라인 정지 비상 대응)",
      urgencyStandard: "일반: 신규 프로젝트 / 설비 제작 견적",
      lblNotes: "상세 요구 사항 및 기구 사양",
      phNotes: "모터 출력(kW), 정격전압, 감속비, 통신 프로토콜, 기존 설비 호환 여부를 기재해 주세요.",
      btnSubmit: "정식 견적서 요청하기 (RFQ 접수)",
      sendingText: "담당자 메일로 견적 요청서 전송 중...",
      toastMsg: "견적 요청이 정상 접수되었습니다",
      successTitle: "견적 요청이 정상 접수되었습니다",
      successDesc: "다우FA 담당자 메일함으로 견적 문의 요청서가 즉시 배달되었습니다. 기재하신 이메일과 연락처로 2시간 이내(영업시간 기준) 정식 견적서와 C/O 성적서를 송부드립니다.",
      btnAnother: "추가 견적 요청하기",
      hubBoxTitle: "DAWOOFA VINA 베트남 공식 거점 안내",
      hotlineLabel: "긴급 기술 핫라인 (24/7):",
      emailLabel: "대표 이메일 접수처:",
      zaloLabel: "베트남 현지 Zalo 상담:",
      taxLabel: "사업자등록번호 (MST):",
      northHubTitle: "북부 테크센터 (하노이 / 박닌)",
      southHubTitle: "남부 서비스센터 (호치민 / 빈증)",
      hqLink: "한국 본사: www.dawooservo.co.kr"
    },
    en: {
      badge: "ONLINE RFQ & TECHNICAL INQUIRY",
      title: "Commercial Quotation & Engineering Request",
      subtitle: "Submit your required hardware model numbers or machine specifications to receive an official formal commercial quote within 2 business hours.",
      lblCompany: "Company / Factory Name",
      phCompany: "e.g. Dawoo Tech Vina Co., Ltd.",
      lblName: "Contact Name & Title",
      phName: "e.g. Alex Park - Equipment Lead",
      lblEmail: "Work Email",
      phEmail: "engineer@company.com",
      lblPhone: "Phone / Zalo Number",
      phPhone: "+84 90-123-4567",
      lblCategory: "Product Category",
      lblModel: "Target Model / Quantity",
      phModel: "e.g. MR-J5-20G (3 pcs), HG-KR23 (3 pcs)",
      lblUrgency: "Required Delivery Schedule",
      urgencyFast: "Urgent: Within 24-48 hours (Line Stop)",
      urgencyStandard: "Standard: New project / Tender quotation",
      lblNotes: "Detailed Specifications & Requirements",
      phNotes: "Please specify motor output (kW), voltage, reduction ratio, communication network...",
      btnSubmit: "SUBMIT REQUEST FOR QUOTATION (RFQ)",
      sendingText: "Submitting quotation request...",
      toastMsg: "견적 요청이 정상 접수되었습니다 (Quotation request submitted)",
      successTitle: "QUOTATION REQUEST SUCCESSFULLY RECEIVED!",
      successDesc: "Your quotation request has been delivered directly to our engineering representative. We will respond with an official quotation within 2 business hours.",
      btnAnother: "Submit Another Inquiry",
      hubBoxTitle: "DAWOOFA VINA OFFICIAL DIRECT CONTACT",
      hotlineLabel: "EMERGENCY HOTLINE (24/7):",
      emailLabel: "OFFICIAL RFQ EMAIL:",
      zaloLabel: "ZALO OFFICIAL CHAT:",
      taxLabel: "TAX IDENTIFICATION (MST):",
      northHubTitle: "NORTH TECHNICAL HUB (BAC NINH)",
      southHubTitle: "SOUTH SERVICE CENTER (BINH DUONG)",
      hqLink: "Korea Headquarters: www.dawooservo.co.kr"
    }
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const newRefId = `DW-VN-${Math.floor(100000 + Math.random() * 900000)}`;
    const selectedCat = categories.find((c) => c.id === formData.category);
    const categoryLabel = selectedCat
      ? `${selectedCat.nameKo} (${selectedCat.nameVn})`
      : formData.category;
    const urgencyLabel =
      formData.urgency === 'fast' ? i18n.urgencyFast : i18n.urgencyStandard;

    await submitRfqViaFormSubmit(
      {
        referenceId: newRefId,
        company: formData.company,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        categoryLabel,
        modelInterest: formData.modelInterest,
        urgencyLabel,
        notes: formData.notes,
        source: 'contact_page'
      },
      companyInfo
    );

    setReferenceId(newRefId);
    setIsSending(false);
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section id="contact" className="bg-white border-b border-[#E2E8F0] py-10 relative">
      {/* In-site Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-700 text-white px-5 py-3.5 shadow-xl border border-emerald-500 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
          <div className="text-xs font-bold font-sans">
            {i18n.toastMsg}
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="text-emerald-200 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

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

        {/* 2-Column Grid: Left RFQ Sheet / Right Direct Contact Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: RFQ Sheet (8 Cols, dense, table-like border container) */}
          <div className="lg:col-span-8 bg-white border border-[#CBD5E1] p-6 shadow-2xs">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-base font-black text-[#1E293B]">
                  {i18n.successTitle}
                </h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  {i18n.successDesc}
                </p>
                <div className="p-3.5 bg-[#F8FAFC] border border-[#CBD5E1] max-w-md mx-auto text-left text-xs font-mono space-y-1">
                  <div><strong>회사명 (Công ty):</strong> {formData.company || 'Doanh nghiệp FDI'}</div>
                  <div><strong>담당자 (Người liên hệ):</strong> {formData.name || 'Kỹ sư'} ({formData.phone})</div>
                  <div><strong>회신 이메일 (Email):</strong> {formData.email}</div>
                  <div><strong>검토 모델 (Mã sản phẩm):</strong> {formData.modelInterest || 'Servo / Inverter / PLC'}</div>
                  <div className="text-emerald-700 font-bold"><strong>접수 번호 (Mã tiếp nhận):</strong> {referenceId}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  {i18n.btnAnother}
                </button>
              </div>
            ) : (
              <form
                action={FORMSUBMIT_ACTION_URL}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 text-xs font-sans"
              >
                {/* FormSubmit Automation & Security Hidden Options */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value={DEFAULT_RFQ_SUBJECT} />
                <input type="hidden" name="_template" value="table" />
                {ccEmails && <input type="hidden" name="_cc" value={ccEmails} />}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblCompany} <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={i18n.phCompany}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblName} <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={i18n.phName}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblEmail} <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={i18n.phEmail}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblPhone} <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={i18n.phPhone}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblCategory}
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {lang === 'ko'
                            ? `${cat.nameKo} - ${cat.shortDescKo}`
                            : lang === 'vi'
                            ? `${cat.nameVn} - ${cat.shortDescVn}`
                            : `${cat.nameEn} - ${cat.shortDescVn}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                      {i18n.lblUrgency}
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none cursor-pointer"
                    >
                      <option value="fast">{i18n.urgencyFast}</option>
                      <option value="standard">{i18n.urgencyStandard}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                    {i18n.lblModel}
                  </label>
                  <input
                    type="text"
                    name="modelInterest"
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    placeholder={i18n.phModel}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1E293B] mb-1 font-mono">
                    {i18n.lblNotes}
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={i18n.phNotes}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white font-black text-xs transition-colors shadow-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{i18n.sendingText}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{i18n.btnSubmit}</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Right: Direct Contact & Vietnam Hub Information (4 Cols) */}
          <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#CBD5E1] p-5 space-y-4 text-xs font-sans shadow-2xs">
            
            <h3 className="font-black text-[#1E293B] border-b border-[#E2E8F0] pb-2 text-xs uppercase font-mono">
              {i18n.hubBoxTitle}
            </h3>

            {/* Direct Hotline Box */}
            <div className="p-3 bg-white border border-[#CBD5E1] space-y-1 shadow-2xs">
              <span className="text-[10px] font-mono text-[#64748B] block uppercase">
                {i18n.hotlineLabel}
              </span>
              <a 
                href={`tel:${companyInfo.hotline.replace(/[^0-9+]/g, '')}`} 
                className="text-base font-black text-[#2563EB] hover:underline font-mono block"
              >
                {companyInfo.hotline}
              </a>
              <span className="text-[10px] text-[#475569]">
                {lang === 'ko' ? companyInfo.businessHoursKo : companyInfo.businessHoursVn}
              </span>
            </div>

            {/* Official Email Box */}
            <div className="p-3 bg-white border border-[#CBD5E1] space-y-1 shadow-2xs">
              <span className="text-[10px] font-mono text-[#64748B] block uppercase">
                {i18n.emailLabel}
              </span>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="text-xs font-bold text-[#1E293B] hover:text-[#2563EB] font-mono block"
              >
                {companyInfo.email}
              </a>
              {companyInfo.salesEmail && (
                <a 
                  href={`mailto:${companyInfo.salesEmail}`} 
                  className="text-xs font-bold text-[#1E293B] hover:text-[#2563EB] font-mono block"
                >
                  {companyInfo.salesEmail}
                </a>
              )}
            </div>

            {/* Zalo Direct Chat */}
            <a
              href={companyInfo.zaloUrl || "https://zalo.me"}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white border border-[#CBD5E1] hover:border-[#2563EB] flex items-center justify-between transition-colors block shadow-2xs"
            >
              <div>
                <span className="text-[10px] font-mono text-[#64748B] block uppercase">
                  {i18n.zaloLabel}
                </span>
                <strong className="text-xs text-[#2563EB]">Zalo: {companyInfo.zaloOa}</strong>
              </div>
              <span className="px-2 py-1 bg-[#2563EB] text-white text-[10px] font-bold font-mono shadow-xs">
                CHAT NGAY
              </span>
            </a>

            {/* Hub Addresses */}
            <div className="space-y-3 pt-2 border-t border-[#E2E8F0]">
              <div>
                <strong className="text-[#1E293B] block font-mono text-[11px] mb-0.5">
                  {lang === 'ko' ? companyInfo.northTitleKo : companyInfo.northTitleVn}
                </strong>
                <p className="text-[#475569] text-[11px] leading-tight">
                  {companyInfo.northAddress}
                </p>
              </div>

              <div>
                <strong className="text-[#1E293B] block font-mono text-[11px] mb-0.5">
                  {lang === 'ko' ? companyInfo.southTitleKo : companyInfo.southTitleVn}
                </strong>
                <p className="text-[#475569] text-[11px] leading-tight">
                  {companyInfo.southAddress}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">
                <div>{i18n.taxLabel} <strong>{companyInfo.taxId}</strong></div>
                <div>
                  <a href={companyInfo.koreaHqUrl} target="_blank" rel="noreferrer" className="hover:text-[#2563EB] hover:underline">
                    {companyInfo.koreaHqName}: {companyInfo.koreaHqUrl}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
