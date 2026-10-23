import React, { useState } from 'react';
import { 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Layers, 
  ArrowRight,
  FileCode
} from 'lucide-react';
import { IA_COMPARISON_DATA } from '../../data/wireframeSchema';
import { WireframeVisualizer } from './WireframeVisualizer';

interface IaAnalysisPanelProps {
  onSwitchToPreview: () => void;
  onOpenJsonView: () => void;
}

export const IaAnalysisPanel: React.FC<IaAnalysisPanelProps> = ({ 
  onSwitchToPreview,
  onOpenJsonView
}) => {
  const [subTab, setSubTab] = useState<'analysis' | 'wireframe'>('analysis');

  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Top Header Banner: Clean Minimalist White */}
        <div className="bg-white border border-neutral-200 p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase block mb-3">
                IA &amp; LAYOUT ARCHITECTURE ANALYSIS
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                한국 FA 유통사(다우로봇) 사이트 분석 &amp; 베트남 B2B 원페이지 전략
              </h1>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                <a 
                  href="https://dawoorobot.com/index" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-900 underline inline-flex items-center gap-1 font-mono font-bold hover:text-black"
                >
                  dawoorobot.com/index <ExternalLink className="w-3 h-3" />
                </a>
                의 다단계 트리형 정보 구조를 분석하고, 베트남 현지 공장 구매 결정권자의 전환율(Conversion)을 높이기 위한 <strong>원페이지(Hero, Brands, Products, Features, Contact)</strong> 구조를 정리했습니다.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenJsonView}
                className="px-5 py-3 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-medium flex items-center gap-2 transition-colors"
              >
                <FileCode className="w-4 h-4 text-neutral-600" />
                <span>JSON 스키마</span>
              </button>
              <button
                onClick={onSwitchToPreview}
                className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-2 transition-all"
              >
                <span>웹사이트 둘러보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-200">
            <button
              onClick={() => setSubTab('analysis')}
              className={`px-4 py-2 text-xs font-semibold tracking-tight transition-colors ${
                subTab === 'analysis'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              1. 한국 사이트 분석 &amp; 비교 매트릭스
            </button>
            <button
              onClick={() => setSubTab('wireframe')}
              className={`px-4 py-2 text-xs font-semibold tracking-tight transition-colors ${
                subTab === 'wireframe'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              2. 5대 섹션 와이어프레임 다이어그램
            </button>
          </div>
        </div>

        {subTab === 'analysis' ? (
          <>
            {/* Part 1: Structural Breakdown of dawoorobot.com (Korea) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Existing Site (Korea) Breakdown Card */}
              <div className="bg-white border border-neutral-200 p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      기존 한국 FA 사이트 (dawoorobot.com) 구조 분석
                    </h3>
                    <span className="text-[11px] text-neutral-500 font-normal">전형적인 한국 B2B 제조·유통 웹사이트 패턴</span>
                  </div>
                  <span className="text-[10px] bg-neutral-100 text-neutral-800 px-2.5 py-1 border border-neutral-200 font-mono">
                    Multi-Page
                  </span>
                </div>

                <div className="space-y-4 text-xs text-neutral-700">
                  <div className="bg-neutral-50 p-4 border border-neutral-200">
                    <strong className="text-neutral-900 block mb-2 font-semibold">1. GNB 네비게이션 구조</strong>
                    <ul className="list-disc list-inside space-y-1 text-neutral-600 font-mono text-[11px]">
                      <li>회사소개 (CEO 인사말, 연혁, 조직도, 오시는 길)</li>
                      <li>제품소개 (직교로봇, 리니어모듈, 감속기, 다관절로봇, WTR로봇, LMS, 정밀스테이지)</li>
                      <li>자료실 (카탈로그, 전용 소프트웨어 프로그램)</li>
                      <li>고객지원 (공지사항, 견적문의, Q&amp;A 게시판)</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 p-4 border border-neutral-200">
                    <strong className="text-neutral-900 block mb-1 font-semibold">2. 메인 페이지 레이아웃 구조</strong>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">
                      상단 헤더 + 와이드 배너 슬라이더 + 하단 제품 썸네일 그리드 + 공지사항 피드 + 푸터. PC 데스크톱 중심의 레이아웃.
                    </p>
                  </div>

                  <div className="p-4 border border-neutral-300 bg-neutral-100/50">
                    <strong className="text-neutral-900 flex items-center gap-1.5 mb-2 font-semibold">
                      <AlertTriangle className="w-4 h-4 text-neutral-700" />
                      베트남 해외 법인 관점에서의 한계점
                    </strong>
                    <ul className="space-y-1.5 text-neutral-600 text-[11px] leading-relaxed">
                      <li>• <strong>모바일/현장 접근성 저하:</strong> 베트남 공장 엔지니어는 모바일 메신저(Zalo)와 스마트폰 검색 위주이나, 기존 사이트는 PC 테이블 위주로 모바일에서 가독성이 떨어짐.</li>
                      <li>• <strong>복잡한 뎁스(Depth):</strong> 제품 하나 보려면 [메인 → 제품소개 → 소분류 → 상세페이지 → PDF 다운]까지 4~5단계 이동 필요.</li>
                      <li>• <strong>리드 전환 수단 부재:</strong> 신속한 RFQ(견적 요청) 폼이나 Zalo 연결이 없고 게시판형 문의라 당일 견적 회신이 어려움.</li>
                      <li>• <strong>현지 신뢰 소구점 누락:</strong> '베트남 보세창고 납기', '한국인 엔지니어 현장 출동', 'VAT 전자세금계산서' 정보가 없음.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Proposed Vietnam Single Page Architecture */}
              <div className="bg-white border border-neutral-200 p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      베트남 법인 최적화: B2B 원페이지(One-Page) 전략
                    </h3>
                    <span className="text-[11px] text-neutral-500 font-normal">전환율 극대화 B2B 세일즈 퍼널 구조</span>
                  </div>
                  <span className="text-[10px] bg-neutral-900 text-white px-2.5 py-1 font-mono">
                    Single Page Funnel
                  </span>
                </div>

                <div className="space-y-4 text-xs text-neutral-700">
                  <div className="bg-neutral-50 p-4 border border-neutral-200">
                    <strong className="text-neutral-900 block mb-2 font-semibold">5대 핵심 섹션 순차 퍼널 (Flow)</strong>
                    <div className="space-y-2 font-mono text-[11px]">
                      <div className="flex items-center gap-2 text-neutral-900">
                        <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                        <strong>Hero:</strong> 한국 본사 정품 인증 + 48h 납기 + 즉시 견적 CTA
                      </div>
                      <div className="flex items-center gap-2 text-neutral-900">
                        <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                        <strong>Brands:</strong> 공식 파트너 (Nikki Denso, G+, Sanmotion) + 100% C/O C/Q 보증
                      </div>
                      <div className="flex items-center gap-2 text-neutral-900">
                        <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                        <strong>Products:</strong> 원클릭 탭 필터링 + 현지 재고 여부 + CAD STEP 도면
                      </div>
                      <div className="flex items-center gap-2 text-neutral-900">
                        <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">4</span>
                        <strong>Features:</strong> 박닌/빈증 보세창고 + 4시간 출동 엔지니어 + Hóa Đơn VAT
                      </div>
                      <div className="flex items-center gap-2 text-neutral-900">
                        <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">5</span>
                        <strong>Contact:</strong> 2시간 견적 회신 B2B RFQ 폼 + Zalo 즉시 1:1 상담
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-neutral-300 bg-neutral-100/50">
                    <strong className="text-neutral-900 flex items-center gap-1.5 mb-2 font-semibold">
                      <CheckCircle className="w-4 h-4 text-neutral-800" />
                      베트남 현지 공장 공략 효과 (B2B Impact)
                    </strong>
                    <ul className="space-y-1.5 text-neutral-600 text-[11px] leading-relaxed">
                      <li>• <strong>이탈률 대폭 감소:</strong> 스크롤 한 번으로 전체 솔루션과 재고 파악 가능.</li>
                      <li>• <strong>Zalo 기반 즉각적 견적 전환:</strong> 베트남 엔지니어가 평소 사용하는 모바일 메신저로 2분 내 부품 문의 접수.</li>
                      <li>• <strong>다국어(베트남어/한국어/영어) 지원:</strong> 한국 주재원과 베트남 현지 엔지니어 모두를 동시 타겟팅.</li>
                      <li>• <strong>삼성/LG 1차 벤더 납품 검증:</strong> C/O, C/Q 인증 및 Hóa Đơn 전자세금계산서 부각으로 감사 신뢰도 획득.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Part 2: Detailed Side-by-Side Comparison Matrix */}
            <div className="bg-white border border-neutral-200 p-8 sm:p-10">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                기존 한국 사이트 vs 베트남 원페이지 핵심 비교 매트릭스
              </h3>
              <p className="text-xs text-neutral-500 mb-6 font-normal">
                글로벌 해외 법인 웹사이트 개편 시 필수적으로 고려해야 할 UX, 전환율, 현지화 비교 지표
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-neutral-200 text-neutral-500 font-mono">
                      <th className="py-3 px-4 w-1/4">비교 항목 (Dimension)</th>
                      <th className="py-3 px-4 w-3/8 text-neutral-800 bg-neutral-100 font-bold">기존 한국 사이트 (dawoorobot.com)</th>
                      <th className="py-3 px-4 w-3/8 text-neutral-900 bg-neutral-50 font-bold">베트남 법인 원페이지 (제안 모델)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {IA_COMPARISON_DATA.map((row, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                        <td className="py-4 px-4 font-bold text-neutral-900 align-top">
                          {row.dimension}
                        </td>
                        <td className="py-4 px-4 text-neutral-600 bg-neutral-100/50 align-top leading-relaxed">
                          <div className="font-semibold text-neutral-800 mb-1">{row.koreaSite.state}</div>
                          <div className="text-[11px] text-neutral-500">{row.koreaSite.limitation}</div>
                        </td>
                        <td className="py-4 px-4 text-neutral-700 bg-neutral-50/50 align-top leading-relaxed">
                          <div className="font-bold text-neutral-900 mb-1">{row.vietnamSinglePage.strategy}</div>
                          <div className="text-[11px] text-neutral-700">{row.vietnamSinglePage.b2bBenefit}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <WireframeVisualizer onOpenJsonView={onOpenJsonView} />
        )}

      </div>
    </div>
  );
};
