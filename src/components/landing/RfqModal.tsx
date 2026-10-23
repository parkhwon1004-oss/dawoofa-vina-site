import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Send, Loader2 } from 'lucide-react';
import { Language } from '../../types';
import { CompanyInfo, DEFAULT_COMPANY_INFO } from '../../data/companyStore';
import {
  FORMSUBMIT_ACTION_URL,
  DEFAULT_RFQ_SUBJECT,
  buildRfqCcEmails,
  submitRfqViaFormSubmit
} from '../../utils/rfqEmailSender';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetModel?: string;
  lang: Language;
  companyInfo?: CompanyInfo;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  presetModel = '',
  lang,
  companyInfo = DEFAULT_COMPANY_INFO
}) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    model: presetModel,
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (presetModel) {
      setFormData((prev) => ({ ...prev, model: presetModel }));
    }
  }, [presetModel]);

  if (!isOpen) return null;

  const ccEmails = buildRfqCcEmails(companyInfo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const newRefId = `DW-VN-${Math.floor(100000 + Math.random() * 900000)}`;
    const targetModel = formData.model || presetModel || 'FA 부품 문의';

    await submitRfqViaFormSubmit(
      {
        referenceId: newRefId,
        company: formData.company,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        modelInterest: targetModel,
        notes: formData.message,
        source: 'rfq_modal'
      },
      companyInfo
    );

    setReferenceId(newRefId);
    setIsSending(false);
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const i18n = {
    vi: {
      badge: "YÊU CẦU BÁO GIÁ THIẾT BỊ FA - DAWOOFA VINA",
      title: "Yêu Cầu Báo Giá & Thông Số Kỹ Thuật Nhanh",
      desc: presetModel ? `Yêu cầu báo giá cho model: [${presetModel}]` : "Vui lòng nhập mã hiệu hoặc số lượng thiết bị cần báo giá.",
      lblCompany: "Tên công ty / Tên nhà xưởng *",
      lblName: "Họ tên người liên hệ *",
      lblPhone: "Số điện thoại / Zalo *",
      lblEmail: "Email nhận báo giá *",
      lblModel: "Mã hiệu thiết bị (Model) *",
      lblNotes: "Quy cách kỹ thuật hoặc yêu cầu giao hàng gấp",
      btnSubmit: "GỬI YÊU CẦU BÁO GIÁ (SUBMIT RFQ)",
      sendingText: "Đang gửi yêu cầu báo giá...",
      toastMsg: "견적 요청이 정상 접수되었습니다 (Yêu cầu báo giá đã được tiếp nhận)",
      successTitle: "견적 요청이 정상 접수되었습니다",
      successDesc: `Kỹ sư DAWOOFA VINA đã nhận được yêu cầu và sẽ phản hồi bảng giá chính thức qua email (${formData.email}) trong vòng 2 giờ.`,
      btnClose: "Đóng cửa sổ"
    },
    ko: {
      badge: "DAWOOFA VINA FA 견적 요청서",
      title: "공장자동화 하드웨어 신속 견적 요청",
      desc: presetModel ? `선택 모델: [${presetModel}] 사양 및 납기 견적` : "필요하신 형번 및 수량을 입력해 주시면 담당자 메일로 즉시 접수됩니다.",
      lblCompany: "회사명 / 법인명 *",
      lblName: "담당자 성함 *",
      lblPhone: "연락처 (Zalo / 휴대폰) *",
      lblEmail: "업무용 이메일 *",
      lblModel: "형번 및 검토 모델명 *",
      lblNotes: "요구 사양 (출력, 감속비, 통신 등)",
      btnSubmit: "견적 요청서 접수하기",
      sendingText: "담당자 메일로 전송 중...",
      toastMsg: "견적 요청이 정상 접수되었습니다",
      successTitle: "견적 요청이 정상 접수되었습니다",
      successDesc: `다우FA 담당자 메일함으로 견적 문의가 즉시 전달되었으며, 2시간 이내에 기재하신 이메일(${formData.email})로 정식 견적서를 발송합니다.`,
      btnClose: "확인 닫기"
    },
    en: {
      badge: "HARDWARE RFQ - DAWOOFA VINA",
      title: "Fast Commercial Quotation Request",
      desc: presetModel ? `Inquiry for Model: [${presetModel}]` : "Please specify hardware part numbers and quantities required.",
      lblCompany: "Company / Factory Name *",
      lblName: "Contact Name *",
      lblPhone: "Phone / Zalo *",
      lblEmail: "Work Email *",
      lblModel: "Target Model Number *",
      lblNotes: "Detailed Specifications & Notes",
      btnSubmit: "SUBMIT QUOTE REQUEST",
      sendingText: "Submitting quotation request...",
      toastMsg: "견적 요청이 정상 접수되었습니다 (Quotation request submitted)",
      successTitle: "견적 요청이 정상 접수되었습니다",
      successDesc: `Our engineering team has received your inquiry and will send a formal quotation to (${formData.email}) within 2 hours.`,
      btnClose: "Close"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans text-xs">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-[60] bg-emerald-700 text-white px-5 py-3.5 shadow-xl border border-emerald-500 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
          <span className="text-xs font-bold">{i18n.toastMsg}</span>
        </div>
      )}

      <div className="bg-white border-2 border-[#2563EB] max-w-lg w-full p-6 shadow-2xl relative text-[#1E293B]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#64748B] hover:text-black p-1 font-bold text-base cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3.5">
            <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-base font-black text-[#1E293B] font-mono">
              {i18n.successTitle}
            </h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
              {i18n.successDesc}
            </p>
            <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1] text-left text-[11px] font-mono space-y-1 max-w-sm mx-auto">
              <div><strong>접수번호:</strong> <span className="text-emerald-700 font-bold">{referenceId}</span></div>
              <div><strong>회사/담당자:</strong> {formData.company} / {formData.name}</div>
              <div><strong>요청모델:</strong> {formData.model || presetModel}</div>
            </div>
            <button
              type="button"
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-3 px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              {i18n.btnClose}
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-3">
              <div className="p-1 bg-white border border-[#CBD5E1] shadow-2xs shrink-0">
                <img 
                  src="./assets/aistudio/images/logo.png" 
                  alt="Dawoo Logo" 
                  className="h-7 w-auto object-contain" 
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">
                  {i18n.badge}
                </span>
                <h3 className="text-base font-black text-[#1E293B] mt-0.5 font-sans">
                  {i18n.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {i18n.desc}
                </p>
              </div>
            </div>

            <form
              action={FORMSUBMIT_ACTION_URL}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-3 text-xs"
            >
              {/* FormSubmit Automation & Security Hidden Options */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={DEFAULT_RFQ_SUBJECT} />
              <input type="hidden" name="_template" value="table" />
              {ccEmails && <input type="hidden" name="_cc" value={ccEmails} />}

              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblCompany}</label>
                <input
                  required
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Công ty TNHH..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblName}</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblPhone}</label>
                  <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+84 hoặc Zalo"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblEmail}</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="engineer@company.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblModel}</label>
                <input
                  required
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  placeholder="MR-J5-20G, FR-E840, iQ-R..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblNotes}</label>
                <textarea
                  rows={2}
                  name="notes"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Số lượng, điện áp, thời gian giao hàng mong muốn..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{i18n.sendingText}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{i18n.btnSubmit}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
