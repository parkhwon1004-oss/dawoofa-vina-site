import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall,
  FileCheck2,
  Building,
  Truck,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  FileDown
} from 'lucide-react';
import { Language } from '../../types';
import { 
  CompanyInfo, 
  DEFAULT_COMPANY_INFO, 
  HeroSliderSettings, 
  DEFAULT_SLIDER_SETTINGS,
  HeroSlideItem
} from '../../data/companyStore';

interface HeroSectionProps {
  lang: Language;
  onOpenRfq: (model?: string) => void;
  onViewCatalog?: () => void;
  companyInfo?: CompanyInfo;
  sliderSettings?: HeroSliderSettings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  lang, 
  onOpenRfq,
  onViewCatalog,
  companyInfo = DEFAULT_COMPANY_INFO,
  sliderSettings = DEFAULT_SLIDER_SETTINGS
}) => {
  const slides: HeroSlideItem[] = (sliderSettings.slides && sliderSettings.slides.length > 0) 
    ? sliderSettings.slides 
    : DEFAULT_SLIDER_SETTINGS.slides;

  const intervalSeconds = (sliderSettings.intervalSeconds && sliderSettings.intervalSeconds > 0)
    ? sliderSettings.intervalSeconds
    : 4;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(sliderSettings.autoPlay !== false);
  const [progress, setProgress] = useState(0);

  // Safety check on currentIndex
  const safeIndex = currentIndex < slides.length ? currentIndex : 0;
  const currentSlide = slides[safeIndex] || slides[0];

  // Timer reference for progress bar and slide advancement
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) {
      setProgress(0);
      return;
    }

    const stepMs = 50;
    const totalMs = intervalSeconds * 1000;
    const stepIncrement = (stepMs / totalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((old) => (old + 1) % slides.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPlaying, intervalSeconds, slides.length, safeIndex]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((old) => (old - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((old) => (old + 1) % slides.length);
  };

  const handleSelectSlide = (idx: number) => {
    setProgress(0);
    setCurrentIndex(idx);
  };

  const currentBadge = currentSlide.badge?.[lang] || currentSlide.badge?.ko || currentSlide.badge?.vi || '';
  const currentTitle = currentSlide.title?.[lang] || currentSlide.title?.ko || currentSlide.title?.vi || '';
  const currentSubtitle = currentSlide.subtitle?.[lang] || currentSlide.subtitle?.ko || currentSlide.subtitle?.vi || '';
  const currentCta = currentSlide.ctaText?.[lang] || currentSlide.ctaText?.ko || currentSlide.ctaText?.vi || 'Yêu cầu báo giá';
  const currentHighlights = currentSlide.highlightPoints?.[lang] || currentSlide.highlightPoints?.ko || currentSlide.highlightPoints?.vi || [];

  return (
    <section id="about" className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-6 sm:py-8 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 space-y-5">
        
        {/* ============================================================== */}
        {/* MAIN PROMOTIONAL ADVERTISING BILLBOARD SLIDER (첫화면 광고 슬라이더) */}
        {/* ============================================================== */}
        <div 
          className="relative bg-white border-2 border-[#2563EB] shadow-md overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(sliderSettings.autoPlay !== false)}
        >
          {/* Top Slider Control Bar: Slide Numbers & Timer Progress */}
          <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
            {/* Slide Number Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-mono">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  HOT PROMO
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-base font-black text-white font-mono">
                  {String(currentSlide.slideNumber || safeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-400 font-mono">/</span>
                <span className="text-xs text-slate-400 font-mono">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* Rolling interval badge */}
              <span className="hidden sm:inline-block px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-mono">
                {intervalSeconds}초 단위 자동 롤링 ({isPlaying ? '자동재생 중' : '일시정지'})
              </span>
            </div>

            {/* Clickable Slide Number Tabs */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center bg-slate-800 border border-slate-700 p-0.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id || idx}
                    onClick={() => handleSelectSlide(idx)}
                    className={`px-2.5 py-1 text-xs font-mono font-bold transition-all ${
                      idx === safeIndex
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                    title={`슬라이드 ${slide.slideNumber || idx + 1}번으로 이동`}
                  >
                    {String(slide.slideNumber || idx + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>

              {/* Prev / Play / Next Controls */}
              <div className="flex items-center gap-1 pl-2 border-l border-slate-700">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700 transition-colors"
                  title="이전 슬라이드"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700 transition-colors"
                  title={isPlaying ? "일시정지" : "자동재생 시작"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleNext}
                  className="w-7 h-7 flex items-center justify-center bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700 transition-colors"
                  title="다음 슬라이드"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar (Visual Indicator of the 4-second cycle) */}
          <div className="w-full h-1 bg-slate-200 overflow-hidden">
            <div 
              className="h-full bg-[#2563EB] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slide Content Body: Compact Text Left (4 Cols) + 2X Enlarged Image Stage Right (8 Cols) */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center bg-gradient-to-r from-white via-white to-blue-50/40">
            
            {/* Left Column: Compact Advertising Headlines & Text (4 Cols - 50% Reduced Font Scale) */}
            <div className="lg:col-span-4 space-y-3">
              
              {/* Badge Strip */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-mono font-bold text-[10px] uppercase">
                  <Sparkles className="w-3 h-3 text-[#2563EB] shrink-0" />
                  <span className="truncate max-w-[210px]">{currentBadge}</span>
                </span>
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[9px] font-bold">
                  ✓ 현지 보세창고 즉시 출고
                </span>
              </div>

              {/* Main Headline (Reduced by 50%: from 36px down to 16~18px) */}
              <h1 className="text-sm sm:text-base lg:text-[18px] font-extrabold text-[#1E293B] tracking-tight leading-snug break-keep">
                {currentTitle}
              </h1>

              {/* Subtitle / Marketing description (Compact 11~12px) */}
              <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed break-keep">
                {currentSubtitle}
              </p>

              {/* Highlights Bullet List (Compact single column) */}
              {currentHighlights.length > 0 && (
                <div className="pt-1">
                  <ul className="grid grid-cols-1 gap-1.5 text-[11px] font-mono">
                    {currentHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 text-[#334155]">
                        <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full shrink-0" />
                        <span className="truncate">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons (Compact) */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenRfq(currentSlide.targetModel || currentTitle)}
                  className="px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[11px] font-black tracking-wider transition-colors shadow-sm flex items-center gap-1.5 uppercase font-mono cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                  <span>{currentCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onViewCatalog}
                  className="px-3.5 py-2.5 bg-white hover:bg-slate-50 text-[#1E293B] border border-[#CBD5E1] text-[11px] font-bold transition-colors flex items-center gap-1.5 uppercase font-mono shadow-2xs cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{lang === 'ko' ? '취급 전 제품 카탈로그 보기' : lang === 'vi' ? 'Xem danh mục sản phẩm' : 'View Catalog'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: 2X Enlarged Product/Ad Image Stage (8 Cols - Full Wide Billboard) */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center">
              <div className="w-full bg-white border border-[#CBD5E1] p-3 sm:p-4 shadow-sm relative group">
                
                {/* Enlarged 2X Product Image Container (h-[340px] ~ h-[480px]) */}
                <div className="h-[340px] sm:h-[420px] lg:h-[480px] w-full flex items-center justify-center p-2 bg-[#FFFFFF] border border-[#E2E8F0]">
                  <img
                    src={currentSlide.image}
                    alt={currentTitle}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'http://www.dawooservo.co.kr/data/product/mr_j5.jpg';
                    }}
                  />
                </div>

                {/* Overlay Badge at Bottom of Image Stage */}
                <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">
                    공식 모델: <strong className="text-[#1E293B]">{currentSlide.targetModel || 'DAWOO FA'}</strong>
                  </span>
                  <span className="text-emerald-700 font-bold">
                    ✓ 24~48h 긴급 직송
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Trust Standards Matrix (Compact 4-cell table with bright accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <Truck className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">KHO NGOẠI QUAN CÓ SẴN</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-tight">
              Bắc Ninh &amp; Bình Dương giao hàng trong 24~48 giờ
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">100% CHÍNH HÃNG C/O &amp; C/Q</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-tight">
              Đầy đủ chứng nhận xuất xứ &amp; chứng nhận chất lượng
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <Building className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">KỸ SƯ HÀN QUỐC THƯỜNG TRỰC</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-tight">
              Hỗ trợ cài đặt tham số, tuning servo &amp; xử lý sự cố tại chỗ
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">HÓA ĐƠN ĐỎ VAT ĐẦY ĐỦ</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-tight">
              Pháp nhân Việt Nam MST: {companyInfo.taxId} thanh toán VND/USD
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
