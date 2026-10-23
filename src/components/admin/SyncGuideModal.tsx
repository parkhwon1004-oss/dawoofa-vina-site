import React, { useState } from 'react';
import {
  X,
  HelpCircle,
  Check,
  Code,
  FileJson,
  Upload,
  RotateCcw,
  GitBranch,
  Sparkles,
  CheckCircle
} from 'lucide-react';

interface SyncGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyCurrentData?: () => Promise<void> | void;
}

const AI_STUDIO_PROMPT_TEXT = `온라인 사이트 관리자에서 추출한 최신 제품/카테고리 데이터야. 이 내용을 src/data/companyStore.ts의 EXTENDED_INITIAL_PRODUCTS 및 OFFICIAL_CATEGORIES 기본값으로 덮어써서 소스 코드에 영구 반영해 줘: [Ctrl+V 붙여넣기]`;

export const SyncGuideModal: React.FC<SyncGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!isOpen) return null;

  const handleCopyPromptClick = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(AI_STUDIO_PROMPT_TEXT);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = AI_STUDIO_PROMPT_TEXT;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 3000);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <div
      className="fixed inset-0 z-[90] bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-white border-2 border-[#1E293B] rounded-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1E293B] text-white px-5 py-4 flex items-center justify-between border-b border-slate-700 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-amber-500 text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-tight flex items-center gap-2">
                <span>온라인 관리자 데이터 영구 동기화 가이드</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded">
                  SYNC GUIDE
                </span>
              </h3>
              <p className="text-[11px] text-slate-300">
                브라우저 설정 내역을 AI 스튜디오 및 GitHub 소스 코드에 영구 반영하는 방법과 상단 관리 버튼 안내
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded hover:bg-slate-800 transition-colors cursor-pointer"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 bg-[#F8FAFC] flex-1">
          {/* Top Section: 3-Step Permanent Synchronization Procedure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#1E293B] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>3단계 영구 동기화 절차 (온라인 관리자 → AI 스튜디오 → GitHub 배포)</span>
              </h4>
              <span className="text-[11px] font-mono text-slate-500">
                STEP 1 ~ STEP 3
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {/* STEP 1 Card */}
              <div className="bg-white border border-slate-200 rounded-md p-4 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-[#2563EB] text-white font-mono font-bold text-xs rounded">
                    STEP 1
                  </span>
                  <h5 className="text-xs sm:text-sm font-extrabold text-[#1E293B]">
                    온라인 데이터 복사
                  </h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  상단의 <strong className="text-[#2563EB]">[현재 제품/카테고리 데이터 복사]</strong> 버튼을 누르면 브라우저의 최신 데이터가 클립보드에 복사됩니다.
                </p>
              </div>

              {/* STEP 2 Card */}
              <div className="bg-white border border-slate-200 rounded-md p-4 shadow-2xs space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-amber-500 text-white font-mono font-bold text-xs rounded">
                      STEP 2
                    </span>
                    <h5 className="text-xs sm:text-sm font-extrabold text-[#1E293B]">
                      AI 스튜디오 코드 파일 영구 반영
                    </h5>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPromptClick}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                      copiedPrompt
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                    }`}
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>안내 프롬프트 복사됨</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>프롬프트 문구 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Google AI Studio 대화창으로 이동해 아래 프롬프트와 함께 복사한 데이터를 붙여넣어 주세요:
                </p>
                <div className="bg-slate-900 text-amber-200 border border-slate-700 rounded p-3 font-mono text-xs leading-relaxed select-all">
                  &quot;{AI_STUDIO_PROMPT_TEXT}&quot;
                </div>
              </div>

              {/* STEP 3 Card */}
              <div className="bg-white border border-slate-200 rounded-md p-4 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-emerald-600 text-white font-mono font-bold text-xs rounded">
                    STEP 3
                  </span>
                  <h5 className="text-xs sm:text-sm font-extrabold text-[#1E293B] flex items-center gap-1.5">
                    <span>GitHub 저장소로 푸시 (Push)</span>
                    <GitBranch className="w-3.5 h-3.5 text-emerald-600" />
                  </h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI 스튜디오의 <strong>&apos;GitHub sync&apos;</strong> 메뉴에서 <strong className="text-emerald-700">[Push changes to GitHub]</strong>를 클릭하면 자동 배포되어 모든 접속 기기에 동일하게 영구 보존됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Detailed Comparison Table for the 4 Top Management Buttons */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-[#1E293B] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>상단 4개 데이터 관리 버튼 상세 안내</span>
            </h4>

            <div className="overflow-x-auto bg-white rounded-md shadow-2xs">
              <table className="w-full border-collapse border border-slate-200 text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-bold text-xs border-b border-slate-200">
                    <th className="py-2.5 px-3.5 border-r border-slate-200 w-52 whitespace-nowrap">
                      관리 버튼명
                    </th>
                    <th className="py-2.5 px-3.5 border-r border-slate-200">
                      주요 기능 및 동작 방식
                    </th>
                    <th className="py-2.5 px-3.5">
                      권장 사용 시점
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs text-slate-600 divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50/70">
                    <td className="py-3 px-3.5 border-r border-slate-200 font-bold text-[#2563EB] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 shrink-0" />
                        <span>[현재 제품/카테고리 데이터 복사]</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5 border-r border-slate-200 leading-relaxed">
                      현재 브라우저에 등록된 제품 및 카테고리 전체 데이터를 컴퓨터 클립보드에 바로 복사합니다.
                    </td>
                    <td className="py-3 px-3.5 leading-relaxed">
                      AI 스튜디오 프롬프트창이나 메모장에 즉시 <code className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[11px] text-slate-800">Ctrl + V</code> 로 붙여넣어 코드를 갱신할 때 사용합니다.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/70">
                    <td className="py-3 px-3.5 border-r border-slate-200 font-bold text-emerald-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <FileJson className="w-3.5 h-3.5 shrink-0" />
                        <span>[JSON 내보내기]</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5 border-r border-slate-200 leading-relaxed">
                      현재 데이터를 <code className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[11px] text-slate-800">.json</code> 형태의 파일로 PC에 다운로드하거나 화면에 텍스트로 출력해 줍니다.
                    </td>
                    <td className="py-3 px-3.5 leading-relaxed">
                      내 컴퓨터에 데이터 백업본 파일을 날짜별로 안전하게 보관해 두고 싶을 때 사용합니다.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/70">
                    <td className="py-3 px-3.5 border-r border-slate-200 font-bold text-[#1E293B] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>[데이터 가져오기 (Import)]</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5 border-r border-slate-200 leading-relaxed">
                      복사해 둔 텍스트나 JSON 데이터를 입력창에 붙여넣어, 현재 사이트의 데이터를 통째로 교체/적용합니다.
                    </td>
                    <td className="py-3 px-3.5 leading-relaxed">
                      다른 브라우저, 이전 백업 파일, 또는 AI 스튜디오의 설정을 현재 화면으로 그대로 덮어씌울 때 사용합니다.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/70">
                    <td className="py-3 px-3.5 border-r border-slate-200 font-bold text-slate-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <RotateCcw className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>[초기값 복원]</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5 border-r border-slate-200 leading-relaxed">
                      브라우저(localStorage)에 저장된 모든 수정 내역을 지우고, 소스 코드에 정의된 최초 기본 데이터 상태로 초기화합니다.
                    </td>
                    <td className="py-3 px-3.5 leading-relaxed">
                      제품 테스트를 하다가 설정이 꼬였거나 원래 기본 제공 목록으로 되돌리고 싶을 때 사용합니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-slate-200 px-5 py-3.5 flex items-center justify-between sticky bottom-0 z-10">
          <span className="text-[11px] text-slate-500 font-mono">
            * 모든 이미지 경로는 GitHub Pages 호환 상대 경로(./assets/...)로 자동 유지됩니다.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#1E293B] hover:bg-slate-800 text-white font-bold text-xs rounded flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>확인 및 닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
