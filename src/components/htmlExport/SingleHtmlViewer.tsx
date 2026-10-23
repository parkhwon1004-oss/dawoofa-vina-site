import React, { useState } from 'react';
import { Copy, Check, Download, Code2, ExternalLink, Play } from 'lucide-react';
import { STANDALONE_HTML_SOURCE } from '../../data/standaloneHtmlSource';

export const SingleHtmlViewer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'code' | 'iframe'>('code');

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_SOURCE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_SOURCE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dawoofa_vina_single_page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-8 bg-[#F8F9FA] min-h-screen text-[#212529] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 space-y-4">
        
        {/* Header Bar */}
        <div className="bg-white border border-[#DEE2E6] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[10px] font-bold font-mono mb-2">
              <Code2 className="w-3 h-3" />
              <span>STANDALONE SINGLE HTML SOURCE CODE</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tight">
              Mã Nguồn Đơn HTML (Single Page) Hoàn Chỉnh - DAWOOFA VINA
            </h1>
            <p className="text-xs text-[#475569] mt-1 max-w-3xl leading-relaxed">
              Mã nguồn trang đơn độc lập 100% không cần cài đặt Node.js hay bundler, có thể chạy trực tiếp bằng cách mở file <code className="bg-[#F8FAFC] px-1 border border-[#CBD5E1] text-[#2563EB] font-mono">index.html</code>. Tích hợp đầy đủ Tailwind CSS, Font Awesome, bộ máy đa ngôn ngữ (VI mặc định, KO, EN) và hình ảnh thực tế từ dawooservo.co.kr.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Switcher: Code vs Live Sandbox */}
            <div className="flex bg-[#F1F5F9] border border-[#CBD5E1] p-0.5 text-xs">
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1.5 font-bold transition-all ${
                  viewMode === 'code' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-[#475569] hover:text-[#1E293B]'
                }`}
              >
                Mã nguồn HTML
              </button>
              <button
                onClick={() => setViewMode('iframe')}
                className={`px-3 py-1.5 font-bold transition-all ${
                  viewMode === 'iframe' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-[#475569] hover:text-[#1E293B]'
                }`}
              >
                Chạy thử trực tiếp
              </button>
            </div>

            {/* Action Buttons: Copy & Download */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors shadow-xs uppercase tracking-wider"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Đã sao chép!" : "Sao chép toàn bộ HTML"}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#F8FAFC] text-[#1E293B] border border-[#CBD5E1] text-xs font-bold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Tải file .html</span>
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        {viewMode === 'code' ? (
          <div className="border border-[#CBD5E1] overflow-hidden bg-white shadow-xs">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#F1F5F9] border-b border-[#CBD5E1] text-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 inline-block"></span>
                <span className="w-2.5 h-2.5 bg-amber-500 inline-block"></span>
                <span className="w-2.5 h-2.5 bg-emerald-500 inline-block"></span>
                <span className="ml-2 font-bold text-[#1E293B]">dawoofa_vina_single_page.html</span>
              </div>
              <span className="text-[#64748B] font-mono text-[11px]">
                {STANDALONE_HTML_SOURCE.split('\n').length} lines • Standalone Single HTML5
              </span>
            </div>

            <pre className="p-4 overflow-x-auto text-xs font-mono text-[#1E293B] leading-relaxed max-h-[75vh] selection:bg-[#2563EB] selection:text-white bg-[#FCFCFD]">
              <code>{STANDALONE_HTML_SOURCE}</code>
            </pre>
          </div>
        ) : (
          <div className="border border-[#DEE2E6] overflow-hidden bg-white shadow-xs">
            <div className="bg-[#F8F9FA] px-4 py-2 border-b border-[#DEE2E6] text-xs text-[#495057] flex items-center justify-between font-mono">
              <span>SANDBOX LIVE PREVIEW (srcdoc IFrame)</span>
              <span className="text-emerald-700 font-bold">● Chế độ trang đơn độc lập đang hoạt động</span>
            </div>
            <iframe
              title="DAWOOFA VINA Standalone HTML Preview"
              srcDoc={STANDALONE_HTML_SOURCE}
              className="w-full h-[80vh] border-0"
              sandbox="allow-scripts allow-forms allow-same-origin"
            />
          </div>
        )}

      </div>
    </div>
  );
};
