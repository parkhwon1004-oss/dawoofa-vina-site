import React from 'react';
import { Phone, Mail, FileCode, Code2, Globe } from 'lucide-react';
import { Language } from '../../types';

interface TraditionalUtilityBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentTab: 'preview' | 'htmlCode';
  setCurrentTab: (tab: 'preview' | 'htmlCode') => void;
}

export const TraditionalUtilityBar: React.FC<TraditionalUtilityBarProps> = ({
  lang,
  setLang,
  currentTab,
  setCurrentTab
}) => {
  return (
    <div className="h-9 bg-[#F1F3F5] border-b border-[#DEE2E6] text-[#495057] text-[11px] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Left: Direct Hotline & Inquiries */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#1E2B37] font-bold">[베트남 법인]</span>
            <Phone className="w-3 h-3 text-[#1E2B37]" />
            <strong className="text-[#212529] font-mono">+84 222-389-9988</strong>
          </span>
          <span className="text-[#CED4DA] hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="text-[#6C757D]">[한국 본사 직통]</span>
            <span className="font-mono text-[#333333]">+82 41-558-1377</span>
          </span>
          <span className="text-[#CED4DA] hidden md:inline">|</span>
          <span className="hidden md:flex items-center gap-1.5 font-mono text-[#495057]">
            <Mail className="w-3 h-3 text-[#1E2B37]" />
            <span>sales@dawoofavina.com</span>
          </span>
        </div>

        {/* Right: Traditional Text-Based Language Switcher & Standalone HTML Tab */}
        <div className="flex items-center gap-4">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 border-r border-[#DEE2E6] pr-4">
            <button
              onClick={() => setCurrentTab('preview')}
              className={`px-2 py-0.5 rounded-none text-[11px] transition-colors ${
                currentTab === 'preview'
                  ? 'bg-[#1E2B37] text-white font-bold'
                  : 'text-[#495057] hover:text-[#212529]'
              }`}
            >
              웹사이트 화면
            </button>
            <button
              onClick={() => setCurrentTab('htmlCode')}
              className={`px-2 py-0.5 rounded-none text-[11px] transition-colors ${
                currentTab === 'htmlCode'
                  ? 'bg-[#1E2B37] text-white font-bold'
                  : 'text-[#495057] hover:text-[#212529]'
              }`}
            >
              단일 HTML 소스코드
            </button>
          </div>

          {/* Language Switcher [ VI | KO | EN ] (Plain Korean Industrial Text Style) */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium">
            <button
              onClick={() => setLang('vi')}
              className={`px-1 py-0.5 transition-colors ${
                lang === 'vi'
                  ? 'text-[#1E2B37] font-extrabold underline underline-offset-2'
                  : 'text-[#6C757D] hover:text-[#212529]'
              }`}
            >
              VI
            </button>
            <span className="text-[#CED4DA]">|</span>
            <button
              onClick={() => setLang('ko')}
              className={`px-1 py-0.5 transition-colors ${
                lang === 'ko'
                  ? 'text-[#1E2B37] font-extrabold underline underline-offset-2'
                  : 'text-[#6C757D] hover:text-[#212529]'
              }`}
            >
              KO
            </button>
            <span className="text-[#CED4DA]">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1 py-0.5 transition-colors ${
                lang === 'en'
                  ? 'text-[#1E2B37] font-extrabold underline underline-offset-2'
                  : 'text-[#6C757D] hover:text-[#212529]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
