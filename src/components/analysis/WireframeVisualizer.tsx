import React from 'react';
import { 
  FileCode, 
  ArrowDown, 
  Layout
} from 'lucide-react';
import { WIREFRAME_JSON_DATA } from '../../data/wireframeSchema';

interface WireframeVisualizerProps {
  onOpenJsonView: () => void;
}

export const WireframeVisualizer: React.FC<WireframeVisualizerProps> = ({ onOpenJsonView }) => {
  const sections = [
    {
      key: 'hero',
      data: WIREFRAME_JSON_DATA.sections.hero,
      accent: 'border-neutral-300 bg-neutral-100 text-neutral-800',
      tag: 'SECTION 1'
    },
    {
      key: 'brands',
      data: WIREFRAME_JSON_DATA.sections.brands,
      accent: 'border-neutral-300 bg-neutral-100 text-neutral-800',
      tag: 'SECTION 2'
    },
    {
      key: 'products',
      data: WIREFRAME_JSON_DATA.sections.products,
      accent: 'border-neutral-300 bg-neutral-100 text-neutral-800',
      tag: 'SECTION 3'
    },
    {
      key: 'features',
      data: WIREFRAME_JSON_DATA.sections.features,
      accent: 'border-neutral-300 bg-neutral-100 text-neutral-800',
      tag: 'SECTION 4'
    },
    {
      key: 'contact',
      data: WIREFRAME_JSON_DATA.sections.contact,
      accent: 'border-neutral-300 bg-neutral-100 text-neutral-800',
      tag: 'SECTION 5'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Intro info bar */}
      <div className="bg-white border border-neutral-200 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
            <Layout className="w-5 h-5 text-neutral-700" />
            <span>베트남 B2B 원페이지 5대 섹션 와이어프레임 청사진</span>
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            각 섹션별 화면 분할(Layout), 컴포넌트 계층, 데이터 필드 및 B2B 전환 의도를 시각화한 구조입니다.
          </p>
        </div>

        <button
          onClick={onOpenJsonView}
          className="self-start sm:self-auto px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-2 transition-all"
        >
          <FileCode className="w-4 h-4" />
          <span>전체 JSON 스키마</span>
        </button>
      </div>

      {/* 5 Stacked Wireframe Cards with Flow Arrows */}
      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <div key={sec.key} className="relative">
            <div className="bg-white border border-neutral-200 p-8 hover:border-neutral-400 transition-colors">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 border ${sec.accent}`}>
                    {sec.tag} : {sec.key.toUpperCase()}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900">
                    {sec.data.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <span className="hidden sm:inline">레이아웃 타입:</span>
                  <span className="bg-neutral-100 px-2.5 py-1 border border-neutral-200 text-neutral-800 font-medium">
                    {sec.data.wireframeLayout.containerType}
                  </span>
                </div>
              </div>

              {/* Wireframe Box Representation (Schematic Preview in Clean Monochrome) */}
              <div className="my-6 p-6 bg-neutral-50 border border-neutral-200">
                <div className="text-[10px] font-mono text-neutral-400 uppercase mb-4 flex items-center justify-between font-semibold">
                  <span>[Wireframe Layout Schematic]</span>
                  <span>Grid: {sec.data.wireframeLayout.columns}</span>
                </div>

                {/* Specific mockup block by section */}
                {sec.key === 'hero' && (
                  <div className="grid grid-cols-12 gap-4 h-36 text-[11px] font-mono">
                    <div className="col-span-7 border border-neutral-300 p-4 bg-white flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="h-3 w-1/4 bg-neutral-200" />
                        <div className="h-5 w-4/5 bg-neutral-800" />
                        <div className="h-3 w-2/3 bg-neutral-300" />
                      </div>
                      <div className="flex gap-3">
                        <div className="h-7 w-28 bg-neutral-900 flex items-center justify-center text-white text-[10px]">
                          [CTA: RFQ Form]
                        </div>
                        <div className="h-7 w-28 bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-700 text-[10px]">
                          [Catalog PDF]
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 border border-neutral-300 p-4 bg-white flex flex-col items-center justify-center text-neutral-500">
                      <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center mb-2 text-neutral-400">
                        3D/CAD
                      </div>
                      <span className="text-[10px] font-semibold text-neutral-700">Product Spotlight Specs</span>
                    </div>
                  </div>
                )}

                {sec.key === 'brands' && (
                  <div className="space-y-3 text-[11px] font-mono">
                    <div className="grid grid-cols-5 gap-3">
                      {['DAWOO (HQ)', 'NIKKI DENSO', 'G+ MOTION', 'SANMOTION', 'PHOENIX'].map((b, i) => (
                        <div key={i} className="h-16 border border-neutral-300 bg-white p-2 flex flex-col items-center justify-center text-center">
                          <span className="text-[10px] text-neutral-900 font-bold">{b}</span>
                          <span className="text-[8px] text-neutral-400 mt-1">Authorized Agency</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-9 border border-neutral-300 bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-800 font-medium">
                      [100% Genuine Certified Guarantee with C/O &amp; C/Q Documentation]
                    </div>
                  </div>
                )}

                {sec.key === 'products' && (
                  <div className="space-y-4 text-[11px] font-mono">
                    <div className="flex gap-2">
                      {['All', '직교로봇', '리니어모듈', '감속기', '로봇', '스테이지'].map((t, i) => (
                        <div key={i} className={`px-2.5 py-1 text-[10px] border ${i === 0 ? 'bg-neutral-900 text-white border-neutral-900 font-bold' : 'bg-white border-neutral-300 text-neutral-600'}`}>
                          {t}
                        </div>
                      ))}
                      <div className="ml-auto text-[10px] text-neutral-800 font-medium flex items-center">
                        ☑ 현지 보세 재고 보유
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="border border-neutral-300 p-3 bg-white space-y-2">
                          <div className="h-16 bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[9px] text-neutral-400">
                            [Photo / Stock Status]
                          </div>
                          <div className="h-3 w-3/4 bg-neutral-300" />
                          <div className="h-8 bg-neutral-50 border border-neutral-200 p-1 text-[8px] text-neutral-500">
                            Specs: Payload | Stroke | ±0.01mm | LeadTime
                          </div>
                          <div className="flex gap-1.5">
                            <div className="flex-1 h-6 bg-neutral-900 flex items-center justify-center text-[8px] text-white">
                              [RFQ Quote]
                            </div>
                            <div className="w-10 h-6 bg-neutral-100 border border-neutral-300 flex items-center justify-center text-[8px] text-neutral-700">
                              [CAD]
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {sec.key === 'features' && (
                  <div className="space-y-3 text-[11px] font-mono">
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { title: '1. 보세창고 상시재고', metric: '48H 납품' },
                        { title: '2. 한국인 엔지니어 상주', metric: '4H 출동' },
                        { title: '3. 정품 C/O, C/Q 발급', metric: '100% 보증' },
                        { title: '4. 전자세금계산서 발행', metric: 'Hóa Đơn' }
                      ].map((f, i) => (
                        <div key={i} className="border border-neutral-300 p-4 bg-white space-y-1.5">
                          <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800 font-bold block w-fit">
                            {f.metric}
                          </span>
                          <span className="text-[10px] text-neutral-900 font-bold block pt-1">{f.title}</span>
                          <span className="text-[8px] text-neutral-400 block">Vietnam Value</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-9 border border-neutral-200 bg-white flex items-center justify-between px-4 text-[10px] text-neutral-700">
                      <span>Service Hub Coverage:</span>
                      <span className="text-neutral-900 font-bold">Hà Nội • Bắc Ninh (VSIP) • Hải Phòng • Bình Dương • TP.HCM</span>
                    </div>
                  </div>
                )}

                {sec.key === 'contact' && (
                  <div className="grid grid-cols-12 gap-4 text-[11px] font-mono">
                    <div className="col-span-7 border border-neutral-300 p-4 bg-white space-y-2.5">
                      <div className="text-[10px] text-neutral-900 font-bold">[B2B RFQ Form]</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-6 bg-neutral-50 border border-neutral-200 text-[8px] text-neutral-400 flex items-center px-2">회사명 *</div>
                        <div className="h-6 bg-neutral-50 border border-neutral-200 text-[8px] text-neutral-400 flex items-center px-2">담당자 성함 *</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-6 bg-neutral-50 border border-neutral-200 text-[8px] text-neutral-400 flex items-center px-2">이메일 *</div>
                        <div className="h-6 bg-neutral-50 border border-neutral-200 text-[8px] text-neutral-400 flex items-center px-2">전화번호 / Zalo *</div>
                      </div>
                      <div className="h-10 bg-neutral-50 border border-neutral-200 text-[8px] text-neutral-400 p-2">요구 사양 / 품번 / 도면 메모...</div>
                      <div className="h-7 bg-neutral-900 text-white font-medium flex items-center justify-center text-[10px]">
                        [Submit RFQ: 2시간 내 회신 보증]
                      </div>
                    </div>
                    <div className="col-span-5 border border-neutral-300 p-4 bg-white space-y-2.5">
                      <div className="h-9 bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
                        [Zalo OA 1:1 Instant Chat]
                      </div>
                      <div className="h-8 bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[9px] text-neutral-800 font-bold">
                        Hotline: +84 222-389-9988
                      </div>
                      <div className="p-2 bg-neutral-50 text-[8px] text-neutral-500 space-y-0.5">
                        <div>• Bắc Ninh VSIP Center</div>
                        <div>• Bình Dương VSIP 2 Hub</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hierarchy and Components Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <span className="text-[11px] font-bold text-neutral-700 block mb-3 font-mono">
                    계층 구조 (Visual Hierarchy)
                  </span>
                  <ul className="space-y-2 text-neutral-600">
                    {sec.data.wireframeLayout.hierarchy.map((item: string, hIdx: number) => (
                      <li key={hIdx} className="flex items-start gap-2 text-[11px]">
                        <span className="text-neutral-400 shrink-0 font-mono">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <span className="text-[11px] font-bold text-neutral-800 block mb-3 font-mono">
                    베트남 시장 최적화 Rationale
                  </span>
                  <div className="text-[11px] text-neutral-600 leading-relaxed mb-3">
                    <strong className="text-neutral-800">기존 한국 대비:</strong> {sec.data.b2bRationale.koreaBenchmark}
                  </div>
                  <div className="text-[11px] text-neutral-800 leading-relaxed">
                    <strong>베트남 전략:</strong> {sec.data.b2bRationale.vietnamOptimization}
                  </div>
                </div>
              </div>

            </div>

            {/* Down flow arrow between sections */}
            {idx < sections.length - 1 && (
              <div className="flex justify-center my-3">
                <div className="w-8 h-8 bg-white border border-neutral-300 flex items-center justify-center text-neutral-500 shadow-xs">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
