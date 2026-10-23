import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { Language } from '../types';
import { CompanyInfo, DEFAULT_COMPANY_INFO } from '../data/companyStore';

interface FooterProps {
  lang: Language;
  companyInfo?: CompanyInfo;
  onOpenAdmin?: () => void;
  onOpenHtmlCode?: () => void;
  onOpenJson?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  companyInfo = DEFAULT_COMPANY_INFO,
  onOpenAdmin,
  onOpenHtmlCode,
  onOpenJson
}) => {
  return (
    <footer className="bg-[#F8FAFC] text-[#475569] border-t border-[#CBD5E1] text-xs py-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 space-y-8">
        
        {/* 4-Column Grid: Corporate Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Col 1: Legal Entity & Certification */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-1 bg-white border border-[#CBD5E1] shadow-2xs">
                <img 
                  src="/assets/aistudio/image_31b58e19.png" 
                  alt="DAWOO FA VINA" 
                  className="h-7 w-auto object-contain" 
                />
              </div>
              <span className="font-black text-[#1E293B] text-sm font-sans tracking-tight">
                DAWOOFA <span className="text-[#2563EB]">VINA</span>
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-relaxed">
              <strong>{companyInfo.companyNameVn}</strong> <br />
              {companyInfo.companyNameKo} • 한국미쓰비시전기 공식 대리점 <br />
              {companyInfo.subTitleVn}
            </p>
            <div className="text-[10px] text-emerald-800 font-mono font-bold pt-1">
              ✓ 100% C/O, C/Q &amp; Hóa Đơn Đỏ VAT hợp pháp
            </div>
          </div>

          {/* Col 2: Vietnam Hub Addresses */}
          <div className="space-y-1.5 text-[11px]">
            <h4 className="font-bold text-[#1E293B] font-mono text-xs uppercase mb-2">
              VIETNAM TECHNICAL HUBS
            </h4>
            <div>
              <strong className="text-[#1E293B] block">
                {lang === 'ko' ? companyInfo.northTitleKo : 'Bắc Ninh (Miền Bắc):'}
              </strong>
              <span className="text-[#64748B]">{companyInfo.northAddress}</span>
            </div>
            <div className="pt-1">
              <strong className="text-[#1E293B] block">
                {lang === 'ko' ? companyInfo.southTitleKo : 'Bình Dương (Miền Nam):'}
              </strong>
              <span className="text-[#64748B]">{companyInfo.southAddress}</span>
            </div>
          </div>

          {/* Col 3: Korea HQ Link */}
          <div className="space-y-1.5 text-[11px]">
            <h4 className="font-bold text-[#1E293B] font-mono text-xs uppercase mb-2">
              KOREA HEADQUARTERS
            </h4>
            <div>
              <strong className="text-[#1E293B] block">{companyInfo.koreaHqName}</strong>
              <span className="text-[#64748B]">{companyInfo.koreaHqAddress}</span>
            </div>
            <div className="pt-2">
              <a
                href={companyInfo.koreaHqUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#2563EB] hover:underline font-mono font-bold flex items-center gap-1"
              >
                <span>dawooservo.co.kr (한국 본사)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Hotlines & Tax */}
          <div className="space-y-1.5 text-[11px] font-mono">
            <h4 className="font-bold text-[#1E293B] text-xs uppercase mb-2">
              CONTACT &amp; TAX ID
            </h4>
            <div>
              <span className="text-[#64748B] block">Hotline Kỹ thuật:</span>
              <a href={`tel:${companyInfo.hotline.replace(/[^0-9+]/g, '')}`} className="text-sm font-bold text-[#2563EB] hover:underline">
                {companyInfo.hotline}
              </a>
            </div>
            <div>
              <span className="text-[#64748B] block">Email tiếp nhận:</span>
              <a href={`mailto:${companyInfo.email}`} className="text-[#1E293B] hover:text-[#2563EB]">
                {companyInfo.email}
              </a>
            </div>
            <div>
              <span className="text-[#64748B] block">Mã số thuế (MST):</span>
              <strong className="text-[#1E293B]">{companyInfo.taxId}</strong>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip & Admin Access Button at very bottom right */}
        <div className="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {companyInfo.companyNameEn || 'DAWOOFA VINA CO., LTD.'} All rights reserved. Powered by DAWOO FA KOREA.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono hidden md:inline text-[10px] text-[#94A3B8]">
              Mitsubishi Electric Tier-1 Official Authorized Distributor in Vietnam
            </span>

            {/* Admin Management Button - Located at the very bottom right corner of homepage */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#2563EB] text-white text-[11px] font-mono font-bold transition-all border border-slate-700 hover:border-blue-500 shadow-xs cursor-pointer group"
              title="관리자 페이지 접속 (ID: DAWOOFAVINA / PW: DAWOO@1234)"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400 group-hover:text-white transition-colors" />
              <span>{lang === 'ko' ? '관리자 모드' : lang === 'vi' ? 'Quản trị viên' : 'Admin Portal'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
