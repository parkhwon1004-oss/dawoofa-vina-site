import React, { useState } from 'react';
import { CheckCircle2, X, Send } from 'lucide-react';
import { Language } from '../../types';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetModel?: string;
  lang: Language;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  presetModel = '',
  lang
}) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    model: presetModel,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      successTitle: "YÊU CẦU ĐÃ ĐƯỢC TIẾP NHẬN!",
      successDesc: `Kỹ sư DAWOOFA VINA sẽ phản hồi bảng giá chính thức qua email (${formData.email}) trong vòng 2 giờ.`,
      btnClose: "Đóng cửa sổ"
    },
    ko: {
      badge: "DAWOOFA VINA FA 견적 요청서",
      title: "공장자동화 하드웨어 신속 견적 요청",
      desc: presetModel ? `선택 모델: [${presetModel}] 사양 및 납기 견적` : "필요하신 형번 및 수량을 입력해 주시면 신속히 회신드립니다.",
      lblCompany: "회사명 / 법인명 *",
      lblName: "담당자 성함 *",
      lblPhone: "연락처 (Zalo / 휴대폰) *",
      lblEmail: "업무용 이메일 *",
      lblModel: "형번 및 검토 모델명 *",
      lblNotes: "요구 사양 (출력, 감속비, 통신 등)",
      btnSubmit: "견적 요청서 접수하기",
      successTitle: "견적 요청이 접수되었습니다!",
      successDesc: `담당 엔지니어가 2시간 이내에 기재하신 이메일(${formData.email})로 정식 견적서를 발송합니다.`,
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
      successTitle: "REQUEST SUCCESSFULLY RECEIVED!",
      successDesc: `Our engineering team will send formal quotation to (${formData.email}) within 2 hours.`,
      btnClose: "Close"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans text-xs">
      <div className="bg-white border border-[#CBD5E1] max-w-lg w-full p-6 shadow-2xl relative text-[#1E293B]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#64748B] hover:text-black p-1 font-bold text-base"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-base font-black text-[#1E293B] font-mono">
              {i18n.successTitle}
            </h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
              {i18n.successDesc}
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-3 px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-xs"
            >
              {i18n.btnClose}
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-3">
              <div className="p-1 bg-white border border-[#CBD5E1] shadow-2xs shrink-0">
                <img 
                  src="/assets/aistudio/image_31b58e19.png" 
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

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblCompany}</label>
                <input
                  required
                  type="text"
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
                  value={formData.model || presetModel}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  placeholder="MR-J5-20G, FR-E840, iQ-R..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] mb-1 font-mono">{i18n.lblNotes}</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Số lượng, điện áp, thời gian giao hàng mong muốn..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2 text-[#1E293B] focus:bg-white focus:border-[#2563EB] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                {i18n.btnSubmit}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
