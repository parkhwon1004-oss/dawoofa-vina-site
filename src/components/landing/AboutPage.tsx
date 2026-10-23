import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, ExternalLink, Navigation } from 'lucide-react';
import { Language } from '../../types';
import { CompanyInfo, DEFAULT_COMPANY_INFO } from '../../data/companyStore';

interface AboutPageProps {
  lang: Language;
  companyInfo?: CompanyInfo;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  companyInfo = DEFAULT_COMPANY_INFO
}) => {
  // Selected map hub tab: 'north' (Vietnam HQ / Bac Ninh), 'south' (Binh Duong), 'korea' (Korea HQ)
  const [selectedMapHub, setSelectedMapHub] = useState<'north' | 'south' | 'korea'>('north');

  const activeAddress =
    selectedMapHub === 'north'
      ? companyInfo.northAddress
      : selectedMapHub === 'south'
      ? companyInfo.southAddress
      : companyInfo.koreaHqAddress;

  const activeHubTitle =
    selectedMapHub === 'north'
      ? lang === 'ko'
        ? '베트남 북부 거점 (박닌 / 하노이 법인 본사)'
        : lang === 'vi'
        ? 'Trụ Sở Miền Bắc (Bắc Ninh / Hà Nội)'
        : 'Vietnam North Hub (Bac Ninh / Hanoi)'
      : selectedMapHub === 'south'
      ? lang === 'ko'
        ? '베트남 남부 거점 (빈증 / 호치민 서비스센터)'
        : lang === 'vi'
        ? 'Trung Tâm Miền Nam (Bình Dương / TP.HCM)'
        : 'Vietnam South Hub (Binh Duong / HCMC)'
      : lang === 'ko'
      ? `대한민국 본사 (${companyInfo.koreaHqName})`
      : lang === 'vi'
      ? `Trụ Sở Chính Hàn Quốc (${companyInfo.koreaHqName})`
      : `Korea Headquarters (${companyInfo.koreaHqName})`;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeAddress || 'VSIP Bac Ninh, Vietnam'
  )}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;

  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeAddress || 'VSIP Bac Ninh, Vietnam'
  )}`;

  const content = {
    ko: {
      headline1: '투명한 경영',
      headline2: '고객과 더불어 나누는 기업',
      p1_line1: '저희 다우FA VINA를 방문해 주셔서 감사합니다.',
      p1_line2: '다우FA VINA는 고객과 함께 커가는 모범적인 기업이 될 것이며, 귀사의 발전에 초석이 되겠습니다.',
      p1_line3: '저희 회사는 FA 자동화 및 로봇 분야의 풍부한 경험을 갖춘 우수한 전문인력들이 모여서 설립한 회사로서',
      p1_line4: '높은 기술력과 고객 응집력을 보유하고 있습니다.',
      p2_line1: '수 많은 고객 중 한명의 고객이라도 최고의 서비스로 만족할 수 있도록',
      p2_line2: '고객의 입장에서 고객 한분 한분의 의견을 소중히 받아들이며 항상 성실한 자세로 임하겠습니다.',
      p2_line3: '성실하게 일하고 정당한 기업의 이윤을 추구하는 투명한 경영으로 고객과 더불어 나누는 기업이 되겠습니다.',
      mapSectionBadge: 'COMPANY LOCATION & GOOGLE MAPS',
      mapSectionTitle: '다우FA VINA 오시는 길 및 사업장 위치 안내',
      mapSectionSub: '관리자 페이지에서 설정된 회사 주소와 실시간으로 연동되는 구글 지도(Google Maps)입니다.',
      btnNorth: '베트남 북부 법인 (박닌/하노이)',
      btnSouth: '베트남 남부 거점 (빈증/호치민)',
      btnKorea: '대한민국 본사 (다우FA)',
      lblCompanyName: '법인명',
      lblAddress: '상세 주소',
      lblHotline: '대표 연락처',
      lblEmail: '공식 이메일',
      lblTaxId: '사업자등록번호 (MST)',
      openGoogleMaps: '구글 지도 크게 보기'
    },
    vi: {
      headline1: 'Quản Trị Minh Bạch',
      headline2: 'Doanh Nghiệp Đồng Hành & Chia Sẻ Cùng Khách Hàng',
      p1_line1: 'Xin chân thành cảm ơn Quý khách hàng đã ghé thăm DAWOOFA VINA.',
      p1_line2: 'DAWOOFA VINA cam kết trở thành doanh nghiệp kiểu mẫu cùng phát triển với khách hàng và là nền tảng vững chắc cho sự thịnh vượng của Quý công ty.',
      p1_line3: 'Được thành lập bởi đội ngũ chuyên gia và kỹ sư giàu kinh nghiệm trong lĩnh vực Tự động hóa nhà máy (FA) và Robot công nghiệp,',
      p1_line4: 'chúng tôi sở hữu năng lực kỹ thuật chuyên sâu cùng sự gắn kết chặt chẽ với khách hàng.',
      p2_line1: 'Để mỗi khách hàng đều nhận được sự hài lòng cao nhất với dịch vụ tốt nhất,',
      p2_line2: 'chúng tôi luôn lắng nghe, trân trọng từng ý kiến đóng góp trên lập trường của khách hàng và làm việc với thái độ tận tâm nhất.',
      p2_line3: 'Bằng sự làm việc trung thực và quản trị minh bạch hướng tới giá trị bền vững, DAWOOFA VINA sẽ luôn là doanh nghiệp đồng hành và sẻ chia cùng Quý khách hàng.',
      mapSectionBadge: 'BẢN ĐỒ VỊ TRÍ & ĐỊA CHỈ CÔNG TY (GOOGLE MAPS)',
      mapSectionTitle: 'Sơ Đồ Đường Đi & Địa Chỉ Trụ Sở DAWOOFA VINA',
      mapSectionSub: 'Bản đồ Google Maps được đồng bộ trực tiếp theo thời gian thực với địa chỉ công ty cài đặt tại trang Quản trị.',
      btnNorth: 'Trụ Sở Miền Bắc (Bắc Ninh / Hà Nội)',
      btnSouth: 'Trung Tâm Miền Nam (Bình Dương / TP.HCM)',
      btnKorea: 'Trụ Sở Chính Hàn Quốc (DAWOO FA)',
      lblCompanyName: 'Tên pháp nhân',
      lblAddress: 'Địa chỉ chi tiết',
      lblHotline: 'Hotline kỹ thuật',
      lblEmail: 'Email chính thức',
      lblTaxId: 'Mã số thuế (MST)',
      openGoogleMaps: 'Mở trên Google Maps lớn'
    },
    en: {
      headline1: 'Transparent Management',
      headline2: 'A Company That Grows and Shares With Customers',
      p1_line1: 'Thank you very much for visiting DAWOOFA VINA.',
      p1_line2: 'DAWOOFA VINA strives to be an exemplary partner growing alongside our customers and serving as a cornerstone for your company’s success.',
      p1_line3: 'Founded by accomplished engineering professionals with extensive experience in Factory Automation (FA) and Industrial Robotics,',
      p1_line4: 'we possess high technical capability and strong customer dedication.',
      p2_line1: 'To ensure every single customer is satisfied with the highest level of service,',
      p2_line2: 'we sincerely value every customer’s voice from your perspective and always serve with utmost integrity.',
      p2_line3: 'Through honest work and transparent management pursuing fair corporate value, DAWOOFA VINA will continue to share and grow together with our customers.',
      mapSectionBadge: 'COMPANY LOCATION & GOOGLE MAPS',
      mapSectionTitle: 'DAWOOFA VINA Corporate Locations & Directions',
      mapSectionSub: 'Interactive Google Map synchronized in real time with the company addresses configured in the Admin Portal.',
      btnNorth: 'Vietnam North Hub (Bac Ninh / Hanoi)',
      btnSouth: 'Vietnam South Hub (Binh Duong / HCMC)',
      btnKorea: 'Korea Headquarters (DAWOO FA)',
      lblCompanyName: 'Company Name',
      lblAddress: 'Office Address',
      lblHotline: 'Hotline',
      lblEmail: 'Official Email',
      lblTaxId: 'Tax ID (MST)',
      openGoogleMaps: 'Open in Google Maps'
    }
  }[lang];

  return (
    <div className="bg-white min-h-[75vh] font-sans">
      
      {/* =====================================================================
          1. COMPANY INTRODUCTION HERO BANNER (Matches Reference Image Style)
         ===================================================================== */}
      <section className="relative w-full border-b border-[#E2E8F0] overflow-hidden bg-white">
        <div className="max-w-[1240px] mx-auto relative min-h-[460px] sm:min-h-[520px] flex items-center">
          
          {/* Right-side Handshake Background Image with Smooth Left White Fade */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85"
              alt="DAWOOFA VINA Partnership Handshake"
              className="w-full h-full object-cover object-right opacity-90"
            />
            {/* Multi-stop gradient so left text area is crisp bright white and right shows the handshake clearly */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 46%, rgba(255,255,255,0.75) 68%, rgba(255,255,255,0.15) 100%)'
              }}
            />
          </div>

          {/* Left Content Column: Corporate Philosophy & Greeting */}
          <div className="relative z-10 w-full max-w-3xl px-6 sm:px-10 py-14 sm:py-20 space-y-8">
            
            {/* Main Two-Line Bold Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#111827] tracking-tight leading-tight">
                {content.headline1}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#111827] tracking-tight leading-tight">
                {content.headline2}
              </h2>
            </div>

            {/* Greeting Paragraph 1 */}
            <div className="space-y-1.5 text-sm sm:text-[15px] text-[#1F2937] leading-relaxed font-medium">
              <p>{content.p1_line1}</p>
              <p>{content.p1_line2}</p>
              <p>{content.p1_line3}</p>
              <p>{content.p1_line4}</p>
            </div>

            {/* Greeting Paragraph 2 */}
            <div className="space-y-1.5 text-sm sm:text-[15px] text-[#1F2937] leading-relaxed font-medium">
              <p>{content.p2_line1}</p>
              <p>{content.p2_line2}</p>
              <p>{content.p2_line3}</p>
            </div>

            {/* Subtle Signature Bar */}
            <div className="pt-2 flex items-center gap-3">
              <img
                src="/assets/aistudio/image_31b58e19.png"
                alt="DAWOOFA VINA"
                className="h-7 w-auto object-contain"
              />
              <span className="text-xs font-bold text-[#1E293B] tracking-wide">
                {companyInfo.companyNameVn} • {companyInfo.companyNameKo} 임직원 일동
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          2. GOOGLE MAPS LINKED COMPANY LOCATION & ADDRESS SECTION
         ===================================================================== */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 space-y-6">
          
          {/* Section Header & Location Hub Selector */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#CBD5E1] pb-5">
            <div className="border-l-4 border-[#2563EB] pl-3.5 space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wider block">
                {content.mapSectionBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tight">
                {content.mapSectionTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                {content.mapSectionSub}
              </p>
            </div>

            {/* Hub Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedMapHub('north')}
                className={`px-3.5 py-2 text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedMapHub === 'north'
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                    : 'bg-white text-[#334155] border-[#CBD5E1] hover:border-[#2563EB]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{content.btnNorth}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMapHub('south')}
                className={`px-3.5 py-2 text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedMapHub === 'south'
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                    : 'bg-white text-[#334155] border-[#CBD5E1] hover:border-[#2563EB]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{content.btnSouth}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMapHub('korea')}
                className={`px-3.5 py-2 text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedMapHub === 'korea'
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                    : 'bg-white text-[#334155] border-[#CBD5E1] hover:border-[#2563EB]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{content.btnKorea}</span>
              </button>
            </div>
          </div>

          {/* Map & Address Details Split Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Interactive Google Maps Embed (8 cols) */}
            <div className="lg:col-span-8 bg-white border-2 border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 truncate pr-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-bold truncate">{activeHubTitle}</span>
                </div>
                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:text-white flex items-center gap-1 shrink-0 text-[11px] font-bold"
                >
                  <span>{content.openGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-[380px] sm:h-[420px] bg-slate-100 relative">
                <iframe
                  key={activeAddress}
                  title="DAWOOFA VINA Google Maps Location"
                  src={googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Synchronized Company Address & Contact Card (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-[#CBD5E1] p-6 flex flex-col justify-between shadow-sm space-y-6">
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block">
                    OFFICIAL CORPORATE INFORMATION
                  </span>
                  <h4 className="text-base font-black text-[#1E293B] mt-0.5">
                    {companyInfo.companyNameKo}
                  </h4>
                  <p className="text-xs text-[#64748B] font-mono">
                    {companyInfo.companyNameVn}
                  </p>
                </div>

                {/* Selected Address Highlight */}
                <div className="p-3.5 bg-blue-50/60 border border-blue-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{activeHubTitle}</span>
                  </div>
                  <p className="text-xs text-[#1E293B] font-medium leading-relaxed">
                    {activeAddress}
                  </p>
                </div>

                {/* All 3 Hubs Quick Overview */}
                <div className="space-y-2.5 pt-1 text-xs">
                  <div
                    onClick={() => setSelectedMapHub('north')}
                    className={`p-2.5 border transition-colors cursor-pointer ${
                      selectedMapHub === 'north'
                        ? 'border-[#2563EB] bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <strong className="text-[#1E293B] block text-[11px] font-mono">
                      • {content.btnNorth}
                    </strong>
                    <span className="text-[#64748B] text-[11px] block mt-0.5">
                      {companyInfo.northAddress}
                    </span>
                  </div>

                  <div
                    onClick={() => setSelectedMapHub('south')}
                    className={`p-2.5 border transition-colors cursor-pointer ${
                      selectedMapHub === 'south'
                        ? 'border-[#2563EB] bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <strong className="text-[#1E293B] block text-[11px] font-mono">
                      • {content.btnSouth}
                    </strong>
                    <span className="text-[#64748B] text-[11px] block mt-0.5">
                      {companyInfo.southAddress}
                    </span>
                  </div>

                  <div
                    onClick={() => setSelectedMapHub('korea')}
                    className={`p-2.5 border transition-colors cursor-pointer ${
                      selectedMapHub === 'korea'
                        ? 'border-[#2563EB] bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <strong className="text-[#1E293B] block text-[11px] font-mono">
                      • {content.btnKorea}
                    </strong>
                    <span className="text-[#64748B] text-[11px] block mt-0.5">
                      {companyInfo.koreaHqAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Info Footer inside Card */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{content.lblHotline}:</span>
                  </span>
                  <a
                    href={`tel:${companyInfo.hotline.replace(/[^0-9+]/g, '')}`}
                    className="font-bold text-[#2563EB] hover:underline"
                  >
                    {companyInfo.hotline}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{content.lblEmail}:</span>
                  </span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="font-bold text-[#1E293B] hover:text-[#2563EB]"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">{content.lblTaxId}:</span>
                  <strong className="text-[#1E293B]">{companyInfo.taxId}</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
