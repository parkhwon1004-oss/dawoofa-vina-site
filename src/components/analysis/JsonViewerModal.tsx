import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, Filter } from 'lucide-react';
import { WIREFRAME_JSON_DATA } from '../../data/wireframeSchema';

interface JsonViewerModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isStandaloneTab?: boolean;
}

export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  isOpen = true,
  onClose,
  isStandaloneTab = false
}) => {
  const [selectedSection, setSelectedSection] = useState<'all' | 'hero' | 'brands' | 'products' | 'features' | 'contact'>('all');
  const [copied, setCopied] = useState(false);

  // Filter JSON if requested
  const displayJson = selectedSection === 'all'
    ? WIREFRAME_JSON_DATA
    : {
        project: WIREFRAME_JSON_DATA.project,
        sectionSelected: selectedSection,
        sectionData: WIREFRAME_JSON_DATA.sections[selectedSection]
      };

  const jsonString = JSON.stringify(displayJson, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dawoorobot_vietnam_wireframe_${selectedSection}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const content = (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
            WIREFRAME ARCHITECTURE SCHEMA
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
            베트남 법인 B2B 원페이지 와이어프레임 구조 (JSON)
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Hero, Brands, Products, Features, Contact 5대 섹션에 대한 표준 컴포넌트, 다국어 텍스트 및 B2B 스키마
          </p>
        </div>

        {/* Action Buttons: Copy & Download */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "클립보드 복사 완료" : "JSON 복사"}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-medium transition-colors"
          >
            <Download className="w-4 h-4 text-neutral-600" />
            <span>.json 다운로드</span>
          </button>

          {!isStandaloneTab && onClose && (
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips by Section */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        <span className="text-neutral-400 flex items-center gap-1 text-[11px] font-sans">
          <Filter className="w-3 h-3 text-neutral-500" />
          <span>섹션 선택:</span>
        </span>
        {(['all', 'hero', 'brands', 'products', 'features', 'contact'] as const).map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSection(sec)}
            className={`px-3 py-1 uppercase transition-all ${
              selectedSection === sec
                ? 'bg-neutral-900 text-white font-medium'
                : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* JSON Code Viewer Container */}
      <div className="border border-neutral-300 bg-neutral-900 text-neutral-100">
        <div className="flex items-center justify-between px-6 py-3 bg-neutral-950 border-b border-neutral-800 text-[11px] font-mono text-neutral-400">
          <span className="text-neutral-200 font-semibold">dawoorobot-vietnam-wireframe.json</span>
          <span className="text-neutral-400">{jsonString.split('\n').length} lines • Valid JSON</span>
        </div>

        <pre className="p-6 overflow-x-auto text-xs font-mono text-neutral-200 leading-relaxed max-h-[65vh] selection:bg-neutral-700 selection:text-white">
          <code>{jsonString}</code>
        </pre>
      </div>
    </div>
  );

  if (isStandaloneTab) {
    return (
      <div className="py-16 bg-[#FAFAFA] min-h-screen text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 bg-white border border-neutral-200 p-8 sm:p-12">
          {content}
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="bg-white border border-neutral-300 max-w-4xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {content}
      </div>
    </div>
  );
};
