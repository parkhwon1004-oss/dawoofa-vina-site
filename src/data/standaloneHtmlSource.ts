export const STANDALONE_HTML_SOURCE = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DAWOOFA VINA - Đại Lý Phân Phối Mitsubishi Electric | Servo MR-J5/J4, Biến Tần, PLC, HMI</title>
  <meta name="description" content="CÔNG TY TNHH DAWOOFA VINA - Đại lý ủy quyền chính thức Mitsubishi Electric tại Việt Nam. Phân phối Servo MELSERVO MR-J5/MR-J4, Biến tần FREQROL A800/E800, PLC iQ-R/iQ-F, HMI GOT2000, PILZ, SAMWON ACT sẵn hàng kho Bắc Ninh & Bình Dương.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            steelNavy: '#1E293B',
            pointNavy: '#2563EB',
            catalogDark: '#1E293B',
            catalogText: '#334155',
            borderGray: '#CBD5E1',
            bgWarm: '#F8FAFC'
          },
          fontFamily: {
            sans: ['"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
          }
        }
      }
    }
  </script>

  <!-- Font Awesome 6 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Noto Sans KR & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body { 
      font-family: 'Noto Sans KR', sans-serif; 
      color: #1E293B;
      background-color: #FFFFFF;
    }
    /* Anti-AI & Traditional Korean FA solid engineering borders */
    .b2b-box {
      border: 1px solid #CBD5E1;
      background-color: #FFFFFF;
      border-radius: 0px !important;
    }
    .b2b-btn {
      border-radius: 0px !important;
    }
    /* Compact catalog image container */
    .part-img-box {
      background-color: #FFFFFF;
      border-bottom: 1px solid #CBD5E1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      height: 165px;
    }
    .part-img-box img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  </style>
</head>
<body class="antialiased selection:bg-[#2563EB] selection:text-white">

  <!-- Persistent Sticky Top Header (All 3 Tiers Visible on All Pages/Views) -->
  <div class="sticky top-0 z-50 w-full bg-white shadow-xs">
    <!-- 1. Top Utility Header Bar (Bright Clean Theme) -->
    <div class="bg-[#F8FAFC] text-[#334155] text-xs border-b border-[#E2E8F0] py-1 px-4">
      <div class="max-w-[1240px] mx-auto flex items-center justify-end">
        <!-- Language Switcher: VI (Default), KO, EN -->
        <div class="flex items-center bg-white border border-[#CBD5E1] p-0.5 text-[10px]">
          <button onclick="changeLanguage('vi')" id="lang-btn-vi" class="px-2 py-0.5 font-bold bg-[#2563EB] text-white transition-colors">VI</button>
          <button onclick="changeLanguage('ko')" id="lang-btn-ko" class="px-2 py-0.5 font-bold text-[#64748B] hover:text-[#2563EB] transition-colors">KO</button>
          <button onclick="changeLanguage('en')" id="lang-btn-en" class="px-2 py-0.5 font-bold text-[#64748B] hover:text-[#2563EB] transition-colors">EN</button>
        </div>
      </div>
    </div>

    <!-- 2. Main Brand & Identity Bar -->
    <header class="bg-white border-b border-[#CBD5E1] py-3.5 px-4">
      <div class="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Logo: Official Dawoo FA Vina Company Brand Logo -->
        <a href="#about" class="flex items-center gap-3.5 select-none">
          <img src="/assets/aistudio/image_31b58e19.png" alt="DAWOO FA VINA" class="h-11 w-auto object-contain" />
          <div>
            <div class="flex items-center gap-2">
              <span class="text-2xl font-black tracking-tight text-[#1E293B] font-sans">
                DAWOOFA <span class="text-[#2563EB]">VINA</span>
              </span>
              <span class="text-[10px] font-bold font-mono px-2 py-0.5 bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                FA SOLUTIONS
              </span>
            </div>
            <p class="text-[11px] text-[#64748B] font-medium leading-tight">
              CÔNG TY TNHH DAWOOFA VINA • (주)다우에프에이 베트남 법인
            </p>
          </div>
        </a>

        <!-- Quick Search -->
        <div class="flex items-center gap-3">
          <!-- Search Input -->
          <div class="relative w-full sm:w-80">
            <input 
              type="text" 
              id="searchInput" 
              oninput="handleSearch(this.value)" 
              placeholder="Tìm mã sản phẩm (MR-J5, E800, iQ-R...)" 
              data-i18n-ph="search_ph"
              class="w-full h-9 pl-8 pr-3 text-xs bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#2563EB] focus:bg-white text-[#1E293B] placeholder-[#94A3B8] outline-none font-mono"
            >
            <i class="fa-solid fa-magnifying-glass text-[#64748B] text-xs absolute left-2.5 top-1/2 -translate-y-1/2"></i>
          </div>
        </div>

      </div>
    </header>

    <!-- 3. Navigation Links Bar -->
    <div class="bg-[#F8FAFC] border-b border-[#CBD5E1] px-4">
      <div class="max-w-[1240px] mx-auto flex items-center justify-between text-xs font-bold text-[#334155]">
        <nav class="flex items-center overflow-x-auto">
          <a href="#about" class="py-3 px-5 border-r border-[#CBD5E1] hover:bg-white hover:text-[#2563EB] transition-colors whitespace-nowrap" data-i18n="nav_about">
            Giới thiệu doanh nghiệp
          </a>
          <a href="#brands" class="py-3 px-5 border-r border-[#CBD5E1] hover:bg-white hover:text-[#2563EB] transition-colors whitespace-nowrap" data-i18n="nav_brands">
            Thương hiệu ủy quyền
          </a>
          <a href="#products" class="py-3 px-5 border-r border-[#CBD5E1] hover:bg-white hover:text-[#2563EB] transition-colors whitespace-nowrap bg-white text-[#2563EB] border-t-2 border-t-[#2563EB]" data-i18n="nav_products">
            Sản phẩm FA
          </a>
          <a href="#support" class="py-3 px-5 border-r border-[#CBD5E1] hover:bg-white hover:text-[#2563EB] transition-colors whitespace-nowrap" data-i18n="nav_support">
            Kỹ thuật &amp; Dịch vụ A/S tại chỗ
          </a>
          <a href="#contact" class="py-3 px-5 border-r border-[#CBD5E1] hover:bg-white hover:text-[#2563EB] transition-colors whitespace-nowrap text-[#2563EB]" data-i18n="nav_contact">
            Yêu cầu báo giá (RFQ)
          </a>
        </nav>
      </div>
    </div>
  </div>

  <!-- 4. Hero Section (Compact B2B Industrial Grid) -->
  <section id="about" class="bg-white border-b border-[#CBD5E1] py-8">
    <div class="max-w-[1240px] mx-auto px-4 space-y-6">
      
      <!-- Main Overview Grid (8 Cols Left / 4 Cols Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <!-- Left: Corporate Summary & Value Proposition -->
        <div class="lg:col-span-8 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <div class="space-y-3">
            <span class="text-[11px] font-bold font-mono text-[#2563EB] uppercase tracking-wider block" data-i18n="hero_eyebrow">
              B2B INDUSTRIAL FACTORY AUTOMATION DISTRIBUTOR
            </span>
            <h1 class="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight leading-snug" data-i18n="hero_h1">
              Tổng Đại Lý Phân Phối Thiết Bị FA &amp; Hỗ Trợ Kỹ Thuật, Dịch Vụ A/S Tại Chỗ Ở Việt Nam
            </h1>
            <p class="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal text-justify" data-i18n="hero_desc">
              Kế thừa hơn 20 năm kinh nghiệm từ trụ sở Dawoo FA Hàn Quốc (dawooservo.co.kr), Dawoofa Vina phân phối chính thức hệ thống Servo MELSERVO (MR-J5, MR-J4), biến tần FREQROL (A800, E800), bộ điều khiển PLC MELSEC và màn hình HMI GOT2000. Cam kết 100% hàng chính hãng, đầy đủ C/O và C/Q, có sẵn kho tại Bắc Ninh &amp; Bình Dương, giao hàng trong 24~48h và hỗ trợ kỹ thuật tận nơi.
            </p>
          </div>

          <!-- Buttons -->
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <a href="#contact" class="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors b2b-btn uppercase tracking-wider shadow-xs" data-i18n="btn_rfq_hero">
              YÊU CẦU BÁO GIÁ NHANH (RFQ) <i class="fa-solid fa-arrow-right ml-1"></i>
            </a>
            <a href="#products" class="px-5 py-3 bg-[#F8FAFC] hover:bg-white text-[#1E293B] border border-[#CBD5E1] text-xs font-bold transition-colors b2b-btn uppercase" data-i18n="btn_cat_hero">
              <i class="fa-regular fa-file-pdf mr-1 text-[#2563EB]"></i> TẢI CATALOGUE TỔNG HỢP (PDF)
            </a>
          </div>

          <!-- 4 Standards Table Grid -->
          <div class="pt-4 border-t border-[#CBD5E1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div class="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1">
              <div class="text-[#2563EB] font-bold flex items-center gap-1.5 font-mono text-[11px]">
                <i class="fa-solid fa-truck-fast"></i> <span data-i18n="std1_title">KHO NGOẠI QUAN CÓ SẴN</span>
              </div>
              <p class="text-[11px] text-[#64748B]" data-i18n="std1_desc">Bắc Ninh &amp; Bình Dương giao trong 24~48h</p>
            </div>

            <div class="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1">
              <div class="text-[#2563EB] font-bold flex items-center gap-1.5 font-mono text-[11px]">
                <i class="fa-solid fa-certificate"></i> <span data-i18n="std2_title">100% C/O &amp; C/Q</span>
              </div>
              <p class="text-[11px] text-[#64748B]" data-i18n="std2_desc">Đầy đủ chứng nhận xuất xứ &amp; chất lượng</p>
            </div>

            <div class="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1">
              <div class="text-[#2563EB] font-bold flex items-center gap-1.5 font-mono text-[11px]">
                <i class="fa-solid fa-user-gear"></i> <span data-i18n="std3_title">KỸ SƯ HÀN QUỐC THƯỜNG TRỰC</span>
              </div>
              <p class="text-[11px] text-[#64748B]" data-i18n="std3_desc">Tuning servo &amp; xử lý sự cố trong 4h</p>
            </div>

            <div class="bg-[#F8FAFC] border border-[#CBD5E1] p-3 space-y-1">
              <div class="text-[#2563EB] font-bold flex items-center gap-1.5 font-mono text-[11px]">
                <i class="fa-solid fa-receipt"></i> <span data-i18n="std4_title">HÓA ĐƠN ĐỎ VAT</span>
              </div>
              <p class="text-[11px] text-[#64748B]" data-i18n="std4_desc">Pháp nhân MST: 2301192888 VND/USD</p>
            </div>
          </div>
        </div>

        <!-- Right: Core Featured Hardware with Real Image -->
        <div class="lg:col-span-4 bg-[#F8FAFC] border border-[#CBD5E1] p-5 flex flex-col justify-between space-y-4">
          <div>
            <div class="border-b border-[#CBD5E1] pb-2 mb-3 flex items-center justify-between text-[10px] font-mono">
              <span class="font-bold text-[#1E293B]">FEATURED HARDWARE</span>
              <span class="bg-[#2563EB] text-white px-2 py-0.5 font-bold">SẴN HÀNG KHO</span>
            </div>

            <div class="part-img-box mb-3 border border-[#CBD5E1]">
              <img 
                src="http://www.dawooservo.co.kr/data/product/mr_j5.jpg" 
                alt="MELSERVO MR-J5"
                onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'"
              >
            </div>

            <h3 class="font-bold text-[#1E293B] text-sm leading-snug">
              Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)
            </h3>

            <div class="mt-3 border border-[#CBD5E1] bg-white text-xs">
              <div class="px-3 py-1.5 border-b border-[#CBD5E1] bg-[#F8FAFC] text-[11px] font-bold text-[#475569]">
                THÔNG SỐ ĐẶC TÍNH KỸ THUẬT
              </div>
              <ul class="divide-y divide-[#CBD5E1] text-[11px] text-[#334155] font-mono">
                <li class="px-3 py-1.5 flex items-center gap-1.5">
                  <span class="text-[#2563EB] font-bold">▪</span> Công suất: 0.1 kW ~ 22 kW
                </li>
                <li class="px-3 py-1.5 flex items-center gap-1.5">
                  <span class="text-[#2563EB] font-bold">▪</span> Mạng: CC-Link IE TSN (1Gbps)
                </li>
                <li class="px-3 py-1.5 flex items-center gap-1.5">
                  <span class="text-[#2563EB] font-bold">▪</span> Encoder: 26-bit (67,108,864 p/rev)
                </li>
                <li class="px-3 py-1.5 text-emerald-700 font-bold bg-emerald-50/50">
                  <span>✓</span> Có sẵn số lượng lớn tại Bắc Ninh &amp; Bình Dương
                </li>
              </ul>
            </div>
          </div>

          <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)')" class="w-full py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors b2b-btn text-center uppercase font-mono shadow-xs">
            Yêu cầu báo giá model này <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>

      </div>

    </div>
  </section>

  <!-- 5. Brand Matrix (Korean Dawoo FA Authorized Partners) -->
  <section id="brands" class="bg-[#F8FAFC] border-b border-[#CBD5E1] py-8">
    <div class="max-w-[1240px] mx-auto px-4 space-y-4">
      <div class="border-l-4 border-[#2563EB] pl-3">
        <span class="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-wider block" data-i18n="brands_eyebrow">
          AUTHORIZED INDUSTRIAL AUTOMATION BRANDS
        </span>
        <h2 class="text-xl font-black text-[#1E293B] tracking-tight" data-i18n="brands_title">
          Các Thương Hiệu Tự Động Hóa FA Phân Phối Trực Tiếp
        </h2>
      </div>

      <!-- 6 Authorized Brands Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <!-- Brand 1: Mitsubishi Electric (Primary Authorized Highlighted) -->
        <div class="bg-white border border-[#1E3A8A] ring-1 ring-[#1E3A8A] p-5 space-y-2 relative shadow-xs">
          <div class="absolute -top-2.5 right-4 bg-[#1E3A8A] text-white text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase" data-i18n="brand_mitsu_badge">
            ★ ĐẠI LÝ CHÍNH THỨC
          </div>
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">JAPAN</span>
            <span class="font-bold text-[#1E3A8A]" data-i18n="brand_mitsu_tier">Đại lý ủy quyền cấp 1</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">Mitsubishi Electric</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">Servo, Inverter, PLC, HMI</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_mitsu_desc">
            Nhà phân phối ủy quyền chính thức Mitsubishi Electric: Động cơ Servo MR-J5·J4, Biến tần FREQROL A800/E800, PLC iQ-R·F, HMI GOT2000.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#products" onclick="filterCategory('servo')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Xem sản phẩm <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

        <!-- Brand 2: Yaskawa -->
        <div class="bg-white border border-[#DEE2E6] hover:border-[#1E3A8A] p-5 space-y-2 transition-colors">
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">JAPAN</span>
            <span class="font-bold text-[#1E3A8A]">Motion &amp; Robot Partner</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">YASKAWA</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">AC Servo Drives &amp; Industrial Robots</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_yaskawa_desc">
            Đối tác chuyển động &amp; Robot công nghiệp: Hệ thống AC Servo Sigma-7 phản hồi 3.1kHz siêu chính xác, biến tần GA700, cánh tay robot tự động hóa.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#products" onclick="handleSearch('Yaskawa')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Xem sản phẩm <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

        <!-- Brand 3: Nikki Denso -->
        <div class="bg-white border border-[#DEE2E6] hover:border-[#1E3A8A] p-5 space-y-2 transition-colors">
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">JAPAN</span>
            <span class="font-bold text-[#1E3A8A]">Direct Drive &amp; Linear</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">NIKKI DENSO</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">Direct Drive Motors &amp; Linear Servos</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_nikki_desc">
            Động cơ Direct Drive (DD) &amp; Servo tuyến tính: Dẫn động trực tiếp không hộp số, khử hoàn toàn độ rơ cơ khí (Zero Backlash), mâm chia độ góc quay chính xác.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#products" onclick="handleSearch('Nikki')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Xem sản phẩm <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

        <!-- Brand 4: PILZ -->
        <div class="bg-white border border-[#DEE2E6] hover:border-[#1E3A8A] p-5 space-y-2 transition-colors">
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">GERMANY</span>
            <span class="font-bold text-[#1E3A8A]">Safety Automation</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">PILZ</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">PNOZ Safety Relays &amp; Controllers</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_pilz_desc">
            Chuyên gia an toàn máy móc công nghiệp Đức: Rơ-le an toàn PNOZ, bộ điều khiển an toàn mô-đun PNOZ Multi đạt chuẩn quốc tế cao nhất PLe / SIL3.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#products" onclick="filterCategory('safety')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Xem sản phẩm <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

        <!-- Brand 5: SAMWON ACT -->
        <div class="bg-white border border-[#DEE2E6] hover:border-[#1E3A8A] p-5 space-y-2 transition-colors">
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">KOREA</span>
            <span class="font-bold text-[#1E3A8A]">Wiring &amp; Interface Blocks</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">SAMWON ACT</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">Servo Harness Cables &amp; I/O Units</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_samwon_desc">
            Cáp servo chuyên dụng &amp; Hộp cầu đấu I/O: Dây cáp chống dầu uốn dẻo cao cho Mitsubishi/Yaskawa, khối cầu đấu Relay &amp; PLC rút ngắn 80% thời gian đấu nối.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#products" onclick="filterCategory('safety')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Xem sản phẩm <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

        <!-- Brand 6: APEX DYNAMICS -->
        <div class="bg-white border border-[#DEE2E6] hover:border-[#1E3A8A] p-5 space-y-2 transition-colors">
          <div class="flex items-center justify-between border-b border-[#E9ECEF] pb-1.5 text-[10px] font-mono">
            <span class="font-bold bg-[#F8F9FA] px-1.5 py-0.5 border border-[#DEE2E6]">TAIWAN</span>
            <span class="font-bold text-[#1E3A8A]">Precision Planetary Reducers</span>
          </div>
          <h3 class="font-black text-lg text-[#1E2B37]">APEX DYNAMICS</h3>
          <div class="text-[11px] font-mono text-[#1E3A8A] font-bold">High-Precision Planetary Gearboxes</div>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="brand_apex_desc">
            Hộp giảm tốc hành tinh độ chính xác cao: Tích hợp trực tiếp động cơ servo, độ rơ cực thấp, thanh răng &amp; bánh răng công nghiệp cho máy công cụ và robot.
          </p>
          <div class="pt-2 border-t border-[#E9ECEF] flex items-center justify-between text-xs font-mono">
            <span class="text-[10px] text-emerald-700 font-bold">✓ 100% C/O, C/Q</span>
            <a href="#contact" onclick="setPresetModel('APEX DYNAMICS Precision Gearbox')" class="text-[11px] font-bold text-[#1E3A8A] hover:underline">
              Yêu cầu báo giá <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
            </a>
          </div>
        </div>

      </div>

      <!-- Genuine Quality Guarantee Strip -->
      <div class="bg-white border border-[#DEE2E6] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-[#1E2B37] text-white flex items-center justify-center shrink-0">
            <i class="fa-solid fa-shield-halved text-amber-400 text-base"></i>
          </div>
          <div>
            <strong class="text-sm font-bold text-[#1E2B37] block" data-i18n="guarantee_title">
              Cam kết 100% chính hãng kèm chứng nhận xuất xứ C/O &amp; chất lượng C/Q
            </strong>
            <span class="text-xs text-[#6C757D]" data-i18n="guarantee_desc">
              Tất cả thiết bị đều có đầy đủ chứng từ xuất nhập khẩu hợp pháp, hỗ trợ nghiệm thu kiểm tra và đáp ứng các tiêu chuẩn khắt khe của các tập đoàn sản xuất lớn tại Việt Nam.
            </span>
          </div>
        </div>
        <div class="shrink-0 bg-[#F8F9FA] border border-[#DEE2E6] px-3 py-1.5 font-mono font-bold text-[#1E3A8A] text-xs" data-i18n="vat_support">
          Xuất hóa đơn đỏ VAT đầy đủ theo quy định Bộ Tài Chính
        </div>
      </div>

    </div>
  </section>

  <!-- 6. Products Section (Compact Spec Sheets with Real dawooservo URLs) -->
  <section id="products" class="bg-white border-b border-[#DEE2E6] py-10">
    <div class="max-w-[1240px] mx-auto px-4 space-y-6">
      
      <div class="border-l-4 border-[#1E3A8A] pl-3">
        <span class="text-[10px] font-mono font-bold text-[#1E3A8A] uppercase tracking-wider block" data-i18n="prod_eyebrow">
          GENUINE FA HARDWARE TECHNICAL CATALOG
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E2B37] tracking-tight" data-i18n="prod_title">
          Bảng Thông Số Kỹ Thuật &amp; Danh Mục Sản Phẩm FA Phân Phối
        </h2>
        <p class="text-xs text-[#495057] mt-0.5" data-i18n="prod_subtitle">
          Tra cứu thông số kỹ thuật, khả năng đáp ứng tải, phương thức truyền thông và tình trạng sẵn hàng tại kho Bắc Ninh &amp; Bình Dương.
        </p>
      </div>

      <!-- Product Cards Grid (10 Authentic Items across 4 Categories) -->
      <div id="productGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        <!-- Prod 1-1: Mitsubishi MELSERVO MR-J5 -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="servo" data-stock="true" data-name="MELSERVO MR-J5 Mitsubishi Electric HG-KR">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/mr_j5.jpg" alt="MELSERVO MR-J5" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_servo">Hệ thống Servo (Servo System)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p1_1_desc">Hỗ trợ mạng CC-Link IE TSN tốc độ cao, bộ mã hóa 26-bit, điều khiển vị trí siêu chính xác.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Công suất:</span><strong>0.1 kW ~ 22 kW (200V/400V)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Mạng:</span><strong class="text-[#1E3A8A]">CC-Link IE TSN (1Gbps)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Encoder:</span><strong>26-bit (67,108,864 p/rev)</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Giao ngay 24~48h</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 1-2: Mitsubishi MELSERVO MR-J4 -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="servo" data-stock="true" data-name="MELSERVO MR-J4 Mitsubishi Electric HG-SR">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/mr_j4.jpg" alt="MELSERVO MR-J4" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_servo">Hệ thống Servo (Servo System)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / MELSERVO MR-J4 Series (MR-J4-B / HG-SR)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p1_2_desc">Tần số đáp ứng 2.5kHz, mạng quang SSCNET III/H, dòng servo tiêu chuẩn độ tin cậy cao.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Công suất:</span><strong>0.1 kW ~ 55 kW</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Mạng:</span><strong class="text-[#1E3A8A]">SSCNET III/H (Cáp quang)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Encoder:</span><strong>22-bit (4,194,304 p/rev)</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng kho Bắc Ninh</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / MELSERVO MR-J4 Series (MR-J4-B / HG-SR)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 1-3: Nikki Denso DD Motor & Linear -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="servo" data-stock="true" data-name="Nikki Denso Direct Drive Motor Linear Servo">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">NIKKI DENSO</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/dd_motor.jpg" alt="Nikki Denso DD Motor" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_servo">Hệ thống Servo (Servo System)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Nikki Denso / Direct Drive (DD) Motor &amp; Linear Servo</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p1_3_desc">Động cơ Direct Drive không hộp số, độ rơ bằng không, truyền động tuyến tính tốc độ cao.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Mô-men:</span><strong>1.2 Nm ~ 500 Nm</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Điều khiển:</span><strong class="text-[#1E3A8A]">Pulse / EtherCAT / MECHATROLINK</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Đặc tính:</span><strong>Zero Backlash (Độ rơ 0)</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Hàng dự án 3~5 ngày</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Nikki Denso / Direct Drive (DD) Motor & Linear Servo')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 2-1: Mitsubishi FR-A800 Inverter -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="inverter" data-stock="true" data-name="FR-A800 Series Mitsubishi Electric Inverter FR-A820 FR-A840">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/fr_a800.jpg" alt="FR-A800 Inverter" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_inverter">Biến tần (Inverter / VFD)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / FR-A800 Series (FR-A820 / FR-A840)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p2_1_desc">Điều khiển vector không cảm biến thời gian thực, chuyên dụng cho cẩu trục và tải nặng.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Công suất:</span><strong>0.4 kW ~ 500 kW (Heavy Duty)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Điều khiển:</span><strong class="text-[#1E3A8A]">Real Sensorless Vector / V/F</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Quá tải:</span><strong>200% trong 60 giây</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Giao ngay 24~48h</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / FR-A800 Series (FR-A820 / FR-A840)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 2-2: Mitsubishi FR-E800 Inverter -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="inverter" data-stock="true" data-name="FR-E800 Series Mitsubishi Electric Inverter FR-E820 FR-E840">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/fr_e800.jpg" alt="FR-E800 Inverter" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_inverter">Biến tần (Inverter / VFD)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / FR-E800 Series (FR-E820 / FR-E840)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p2_2_desc">Biến tần nhỏ gọn đa năng, tích hợp Ethernet, tối ưu cho băng tải và máy móc tự động.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Công suất:</span><strong>0.1 kW ~ 30 kW</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Truyền thông:</span><strong class="text-[#1E3A8A]">CC-Link IE TSN / Modbus / Dual Eth</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Bảo vệ:</span><strong>Bo mạch phủ chống ẩm nhiệt đới</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Giao ngay trong ngày</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / FR-E800 Series (FR-E820 / FR-E840)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 3-1: Mitsubishi MELSEC iQ-R Series PLC -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="plc" data-stock="true" data-name="MELSEC iQ-R Series R04CPU R08CPU Mitsubishi Electric PLC">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/iq_r.jpg" alt="MELSEC iQ-R PLC" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_plc">PLC &amp; Thiết bị điều khiển (PLC &amp; HMI)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / MELSEC iQ-R Series (R04CPU / R08CPU)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p3_1_desc">Tốc độ xử lý nano giây, hỗ trợ cấu hình đa CPU, bộ điều khiển trung tâm cho Smart Factory.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Tốc độ:</span><strong>0.98 ns / lệnh cơ bản (LD)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Kiến trúc:</span><strong class="text-[#1E3A8A]">Multi-CPU (Seq + Motion + Safety)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>I/O mở rộng:</span><strong>Lên tới 4,096 điểm</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng kho Bắc Ninh</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / MELSEC iQ-R Series (R04CPU / R08CPU)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 3-2: Mitsubishi MELSEC iQ-F Series PLC -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="plc" data-stock="true" data-name="MELSEC iQ-F Series FX5U FX5UC Mitsubishi Electric PLC">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/iq_f.jpg" alt="MELSEC iQ-F PLC" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_plc">PLC &amp; Thiết bị điều khiển (PLC &amp; HMI)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / MELSEC iQ-F Series (FX5U / FX5UC)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p3_2_desc">PLC All-in-one nhỏ gọn, tích hợp sẵn analog và đếm xung tốc độ cao cho máy độc lập.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Tốc độ:</span><strong>34 ns / lệnh cơ bản (LD)</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Tích hợp:</span><strong class="text-[#1E3A8A]">Ethernet, RS-485, Analog 2ch</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Ngõ ra xung:</span><strong>4 trục 200kHz điều khiển servo</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng kho giao ngay</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / MELSEC iQ-F Series (FX5U / FX5UC)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 3-3: Mitsubishi GOT2000 Series HMI -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="plc" data-stock="true" data-name="GOT2000 Series GT27 GT25 GS21 Mitsubishi Electric HMI">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">Mitsubishi Electric</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/got2000.jpg" alt="GOT2000 HMI" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_plc">PLC &amp; Thiết bị điều khiển (PLC &amp; HMI)</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">Mitsubishi Electric / GOT2000 Series (GT27 / GT25 / GS21)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p3_3_desc">Màn hình cảm ứng HMI sắc nét, hỗ trợ đa cổng giao tiếp và giám sát từ xa.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Kích thước:</span><strong>7", 8.4", 10.4", 12.1", 15" TFT</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Giao tiếp:</span><strong class="text-[#1E3A8A]">Dual Ethernet, RS-232/485, USB</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Tính năng:</span><strong>VNC Server giám sát qua Mobile</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng kho Bắc Ninh</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('Mitsubishi Electric / GOT2000 Series (GT27 / GT25 / GS21)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 4-1: PILZ PNOZ Safety Relay -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="safety" data-stock="true" data-name="PILZ PNOZ Multi PNOZ s Series Safety Relay">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">PILZ</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG KHO VN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/pilz_safety.jpg" alt="PILZ PNOZ" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_safety">Giải pháp an toàn &amp; Dây nối</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">PILZ / PNOZ Multi &amp; PNOZ s Series (Safety Relay)</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p4_1_desc">Đạt tiêu chuẩn an toàn cao nhất PLe / SIL3, rơ le an toàn và bộ điều khiển an toàn mô-đun.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Chứng nhận:</span><strong>ISO 13849-1 PLe / SIL CL 3</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Ứng dụng:</span><strong class="text-[#1E3A8A]">E-STOP, Màn chắn quang, Khóa cửa</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Cấu hình:</span><strong>Mô-đun mở rộng đa kênh độc lập</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng kho Bắc Ninh</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('PILZ / PNOZ Multi & PNOZ s Series (Safety Relay)')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

        <!-- Prod 4-2: SAMWON ACT Servo Harness Cable & I/O Terminal Block -->
        <div class="product-item b2b-box flex flex-col justify-between" data-cat="safety" data-stock="true" data-name="SAMWON ACT Servo Harness Cable IO Terminal Block IOLINK">
          <div class="bg-[#F8F9FA] border-b border-[#DEE2E6] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-[#1E2B37]">SAMWON ACT</span>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">✓ SẴN HÀNG SỐ LƯỢNG LỚN</span>
          </div>
          <div class="part-img-box">
            <img src="http://www.dawooservo.co.kr/data/product/samwon_harness.jpg" alt="SAMWON ACT Cable" onerror="this.src='https://placehold.co/400x300/ffffff/1e2b37?text=FA+PART'">
          </div>
          <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono text-[#6C757D] block" data-i18n="cat_label_safety">Giải pháp an toàn &amp; Dây nối</span>
              <h3 class="font-bold text-sm text-[#1E2B37]">SAMWON ACT / 서보 전용 하네스 케이블 &amp; I/O 인터페이스 단자대</h3>
              <p class="text-xs text-[#495057] mt-1 line-clamp-2" data-i18n="p4_2_desc">Cáp servo chống dầu uốn dẻo cho Mitsubishi/Yaskawa, hộp cầu đấu I/O và khối giao tiếp PLC.</p>
            </div>
            <div class="border border-[#DEE2E6] text-[11px] font-mono divide-y divide-[#E9ECEF] bg-[#F8F9FA]">
              <div class="px-2 py-1 flex justify-between"><span>Độ bền:</span><strong>Kiểm tra uốn > 10.000.000 lần</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Quy cách:</span><strong class="text-[#1E3A8A]">Cáp lực 600V + Cáp Encoder</strong></div>
              <div class="px-2 py-1 flex justify-between"><span>Đấu nối:</span><strong>Cầu đấu Push-in lò xo chống lỏng</strong></div>
              <div class="px-2 py-1 flex justify-between bg-white text-emerald-700"><span>Tiến độ:</span><strong>Sẵn hàng giao ngay trong ngày</strong></div>
            </div>
            <div class="pt-2 flex items-center gap-2 text-xs">
              <a href="#contact" onclick="setPresetModel('SAMWON ACT / 서보 전용 하네스 케이블 & I/O 인터페이스 단자대')" class="w-full py-2 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold text-center b2b-btn uppercase">
                Yêu cầu báo giá
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 7. Technical Support & Coverage -->
  <section id="support" class="bg-[#F8F9FA] border-b border-[#DEE2E6] py-10">
    <div class="max-w-[1240px] mx-auto px-4 space-y-6">
      
      <div class="border-l-4 border-[#1E3A8A] pl-3">
        <span class="text-[10px] font-mono font-bold text-[#1E3A8A] uppercase tracking-wider block" data-i18n="supp_eyebrow">
          NĂNG LỰC DỊCH VỤ &amp; HỖ TRỢ KỸ THUẬT TẠI VIỆT NAM
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E2B37] tracking-tight" data-i18n="supp_title">
          4 Trụ Cột Năng Lực Cạnh Tranh Cốt Lõi Của DAWOOFA VINA
        </h2>
        <p class="text-xs text-[#495057] mt-0.5" data-i18n="supp_subtitle">
          Bảo vệ dây chuyền của bạn không bị gián đoạn (Zero Line-Stop) với kho hàng sẵn có tại chỗ và kỹ sư thường trực tại Việt Nam.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="b2b-box p-5 space-y-3">
          <div class="w-10 h-10 bg-[#1E2B37] text-white flex items-center justify-center font-bold text-base">
            <i class="fa-solid fa-warehouse"></i>
          </div>
          <h3 class="font-bold text-sm text-[#1E2B37]" data-i18n="feat1_title">Kho Ngoại Quan &amp; Lưu Kho Sẵn Hàng</h3>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="feat1_desc">
            Duy trì tồn kho lớn các dòng Servo MR-J5/J4, Biến tần A800/E800 và PLC tại Bắc Ninh &amp; Bình Dương, giao hàng trong 24~48h.
          </p>
        </div>

        <div class="b2b-box p-5 space-y-3">
          <div class="w-10 h-10 bg-[#1E2B37] text-white flex items-center justify-center font-bold text-base">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <h3 class="font-bold text-sm text-[#1E2B37]" data-i18n="feat2_title">Kỹ Sư Hàn Quốc Thường Trực</h3>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="feat2_desc">
            Hỗ trợ cài đặt tham số servo, lập trình kết nối PLC và xử lý sự cố biến tần tận nơi tại các KCN trong vòng 4 giờ.
          </p>
        </div>

        <div class="b2b-box p-5 space-y-3">
          <div class="w-10 h-10 bg-[#1E2B37] text-white flex items-center justify-center font-bold text-base">
            <i class="fa-solid fa-file-shield"></i>
          </div>
          <h3 class="font-bold text-sm text-[#1E2B37]" data-i18n="feat3_title">Chứng Nhận Xuất Xứ &amp; Chất Lượng</h3>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="feat3_desc">
            Đầy đủ C/O và C/Q từ nhà sản xuất, đảm bảo vượt qua các kỳ kiểm toán kỹ thuật khắt khe của tập đoàn đa quốc gia.
          </p>
        </div>

        <div class="b2b-box p-5 space-y-3">
          <div class="w-10 h-10 bg-[#1E2B37] text-white flex items-center justify-center font-bold text-base">
            <i class="fa-solid fa-file-invoice-dollar"></i>
          </div>
          <h3 class="font-bold text-sm text-[#1E2B37]" data-i18n="feat4_title">Thanh Toán Linh Hoạt VND/USD</h3>
          <p class="text-xs text-[#495057] leading-relaxed" data-i18n="feat4_desc">
            Pháp nhân đăng ký chính thức tại Việt Nam (MST: 2301192888), hỗ trợ xuất hóa đơn đỏ VAT hợp pháp và điều khoản tín dụng doanh nghiệp.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- 8. Online RFQ Commercial Quotation Form -->
  <section id="contact" class="bg-white border-b border-[#DEE2E6] py-10">
    <div class="max-w-[1240px] mx-auto px-4 space-y-6">
      
      <div class="border-l-4 border-[#1E3A8A] pl-3">
        <span class="text-[10px] font-mono font-bold text-[#1E3A8A] uppercase tracking-wider block" data-i18n="rfq_eyebrow">
          ONLINE RFQ &amp; TECHNICAL INQUIRY
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E2B37] tracking-tight" data-i18n="rfq_title">
          Đăng Ký Nhận Bảng Báo Giá Chính Thức &amp; Bản Vẽ Kỹ Thuật
        </h2>
        <p class="text-xs text-[#495057] mt-0.5" data-i18n="rfq_subtitle">
          Quý khách vui lòng cung cấp mã hiệu thiết bị, quy cách kỹ thuật hoặc tình trạng cần thay thế gấp, đội ngũ kỹ sư sẽ phản hồi báo giá trong vòng 2 giờ.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Form Left -->
        <div class="lg:col-span-8 bg-[#F8F9FA] border border-[#DEE2E6] p-6 sm:p-8">
          <form onsubmit="handleFormSubmit(event)" class="space-y-4 text-xs font-sans">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_company">Tên công ty / Nhà máy *</label>
                <input required type="text" placeholder="Công ty TNHH sản xuất..." class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none">
              </div>
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_name">Họ tên &amp; Chức vụ người liên hệ *</label>
                <input required type="text" placeholder="Nguyễn Văn A - Kỹ sư trưởng" class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_email">Địa chỉ Email nhận báo giá *</label>
                <input required type="email" placeholder="engineer@factory.com" class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none font-mono">
              </div>
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_phone">Số điện thoại / Zalo *</label>
                <input required type="text" placeholder="+84 90-123-4567" class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none font-mono">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_category">Danh mục sản phẩm</label>
                <select class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none cursor-pointer">
                  <option value="servo" data-i18n="cat_opt_servo">Hệ thống Servo (MR-J5, MR-J4, DD Motor)</option>
                  <option value="inverter" data-i18n="cat_opt_inverter">Biến tần (A800, E800 Series)</option>
                  <option value="plc" data-i18n="cat_opt_plc">PLC &amp; HMI (iQ-R, iQ-F, GOT2000)</option>
                  <option value="safety" data-i18n="cat_opt_safety">Giải pháp an toàn &amp; Dây nối (PILZ, SAMWON ACT)</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_urgency">Tiến độ yêu cầu giao hàng</label>
                <select class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none cursor-pointer">
                  <option value="fast" data-i18n="opt_urgency_fast">Khẩn cấp: Cần hàng trong 24~48h (Xử lý dừng chuyền)</option>
                  <option value="standard" data-i18n="opt_urgency_std">Dự án mới: Cần báo giá đấu thầu / Cung ứng theo tiến độ</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_model">Mã sản phẩm / Số lượng yêu cầu (Tự động điền khi chọn ở trên)</label>
              <input type="text" id="rfqModelInput" placeholder="Ví dụ: MR-J5-20G (3 bộ), HG-KR23 (3 cái), FR-E840 (2 cái)..." class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none font-mono">
            </div>

            <div>
              <label class="block font-bold text-[#1E2B37] mb-1 font-mono" data-i18n="form_notes">Thông số kỹ thuật chi tiết hoặc ghi chú thêm</label>
              <textarea rows="3" placeholder="Vui lòng cung cấp công suất (kW), điện áp (220V/380V), tỷ số truyền hoặc mã thiết bị cũ cần thay thế tương đương..." class="w-full bg-white border border-[#CED4DA] p-2.5 text-[#212529] focus:border-[#1E3A8A] outline-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3 bg-[#1E3A8A] hover:bg-[#1E2B37] text-white font-bold transition-colors b2b-btn text-center uppercase tracking-wider font-mono text-sm shadow-xs" data-i18n="btn_submit_rfq">
              GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC (SUBMIT RFQ)
            </button>

          </form>
        </div>

        <!-- Direct Hub Right -->
        <div class="lg:col-span-4 bg-white border border-[#DEE2E6] p-6 space-y-4 text-xs font-sans flex flex-col justify-between">
          <div class="space-y-4">
            <div class="border-b border-[#DEE2E6] pb-2">
              <span class="text-[10px] font-mono text-[#1E3A8A] font-bold uppercase block">DIRECT CONTACT HUBS</span>
              <h3 class="font-black text-sm text-[#1E2B37] uppercase" data-i18n="direct_contact_title">THÔNG TIN LIÊN HỆ TRỰC TIẾP DAWOOFA VINA</h3>
            </div>
            
            <div class="space-y-2 text-xs">
              <div class="flex items-start gap-2.5">
                <i class="fa-solid fa-phone text-[#1E3A8A] mt-0.5"></i>
                <div>
                  <strong class="block text-[#1E2B37]">Hotline Kỹ thuật (24/7):</strong>
                  <span class="font-mono text-[#1E3A8A] font-bold text-sm">+84 222-389-9988</span>
                </div>
              </div>

              <div class="flex items-start gap-2.5">
                <i class="fa-regular fa-envelope text-[#1E3A8A] mt-0.5"></i>
                <div>
                  <strong class="block text-[#1E2B37]">Email tiếp nhận RFQ:</strong>
                  <span class="font-mono text-[#212529]">contact@dawoofavina.com</span>
                </div>
              </div>

              <div class="flex items-start gap-2.5">
                <i class="fa-solid fa-comments text-[#0068FF] mt-0.5"></i>
                <div>
                  <strong class="block text-[#1E2B37]">Kênh Zalo Kỹ thuật:</strong>
                  <span class="font-mono text-[#0068FF] font-bold">+84 90-123-4567</span>
                </div>
              </div>
            </div>

            <div class="border-t border-[#DEE2E6] pt-3 space-y-2 text-xs">
              <div class="bg-[#F8F9FA] border border-[#DEE2E6] p-3 space-y-1">
                <strong class="text-[#1E2B37] font-bold block font-mono text-[11px] text-[#1E3A8A]">
                  <i class="fa-solid fa-location-dot mr-1"></i> KHO BẮC NINH (MIỀN BẮC)
                </strong>
                <p class="text-[#495057] text-[11px] leading-tight">Số 18, Đường 3, KCN VSIP Bắc Ninh, Phù Chẩn, Từ Sơn, Bắc Ninh</p>
              </div>

              <div class="bg-[#F8F9FA] border border-[#DEE2E6] p-3 space-y-1">
                <strong class="text-[#1E2B37] font-bold block font-mono text-[11px] text-[#1E3A8A]">
                  <i class="fa-solid fa-location-dot mr-1"></i> KHO BÌNH DƯƠNG (MIỀN NAM)
                </strong>
                <p class="text-[#495057] text-[11px] leading-tight">Lô CN-02, Đường D1, KCN VSIP 2, Bến Cát, Bình Dương</p>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-[#DEE2E6] text-[11px] font-mono text-[#6C757D] space-y-1">
            <div>MST: <strong>2301192888</strong> • CÔNG TY TNHH DAWOOFA VINA</div>
            <div>Trụ sở Hàn Quốc: <a href="http://www.dawooservo.co.kr" target="_blank" class="text-[#1E3A8A] font-bold hover:underline">www.dawooservo.co.kr</a></div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 9. Footer (Traditional Korean FA Company Style) -->
  <footer class="bg-[#F8F9FA] text-[#495057] border-t border-[#DEE2E6] text-xs py-8 font-sans">
    <div class="max-w-[1240px] mx-auto px-4 space-y-6">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <img src="/assets/aistudio/image_31b58e19.png" alt="DAWOO FA VINA" class="h-7 w-auto object-contain" />
            <span class="font-black text-[#1E293B] text-sm tracking-tight">DAWOOFA <span class="text-[#2563EB]">VINA</span></span>
          </div>
          <p class="text-[11px] text-[#64748B] leading-relaxed">
            <strong>CÔNG TY TNHH DAWOOFA VINA</strong> <br>
            Đại lý ủy quyền cấp 1 Mitsubishi Electric tại Việt Nam. <br>
            Hệ thống Servo, Biến tần, PLC, HMI công nghiệp chính hãng.
          </p>
        </div>

        <div class="space-y-1.5 text-[11px]">
          <h4 class="font-bold text-[#1E293B] font-mono text-xs uppercase mb-2">ĐỊA CHỈ KHO HÀNG</h4>
          <div><strong>Bắc Ninh:</strong> Số 18, KCN VSIP Bắc Ninh, Từ Sơn</div>
          <div class="pt-1"><strong>Bình Dương:</strong> Lô CN-02, KCN VSIP 2, Bến Cát</div>
        </div>

        <div class="space-y-1.5 text-[11px]">
          <h4 class="font-bold text-[#1E293B] font-mono text-xs uppercase mb-2">TRỤ SỞ HÀN QUỐC</h4>
          <div>(주)다우에프에이 한국 본사 (천안시 서북구 백석공단1로 10)</div>
          <div class="pt-1">
            <a href="http://www.dawooservo.co.kr" target="_blank" class="text-[#2563EB] hover:underline font-bold font-mono">
              dawooservo.co.kr <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <div class="space-y-1.5 text-[11px] font-mono">
          <h4 class="font-bold text-[#1E293B] text-xs uppercase mb-2">LIÊN HỆ &amp; MST</h4>
          <div>Hotline: <strong class="text-[#2563EB]">+84 222-389-9988</strong></div>
          <div>Email: contact@dawoofavina.com</div>
          <div>Mã số thuế: 2301192888</div>
        </div>

      </div>

      <div class="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
        <div>© 2026 DAWOOFA VINA CO., LTD. All rights reserved. Powered by DAWOO FA KOREA.</div>
        <div class="font-mono text-[#2563EB]">Mitsubishi Electric Official Distributor in Vietnam</div>
      </div>

    </div>
  </footer>

  <!-- Floating Action Bar (Zalo, Quick RFQ, Scroll to Top) -->
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 text-xs">
    <a href="https://zalo.me" target="_blank" class="flex items-center gap-2 px-3.5 py-2.5 bg-[#0068FF] hover:bg-blue-700 text-white font-bold shadow-md border border-blue-400 transition-colors" title="Chat Zalo Kỹ thuật">
      <span class="w-4 h-4 bg-white text-[#0068FF] font-black text-[10px] flex items-center justify-center">Z</span>
      <span class="font-mono">Zalo Kỹ thuật</span>
    </a>
    <a href="#contact" class="flex items-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold shadow-md border border-blue-400 transition-colors uppercase font-mono tracking-wider">
      <i class="fa-solid fa-phone text-amber-300"></i>
      <span>Báo giá nhanh (RFQ)</span>
    </a>
    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="w-9 h-9 bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB] flex items-center justify-center transition-colors shadow-xs" title="Lên đầu trang">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>

  <!-- Complete Multi-lingual (i18n) Engine & Filter Scripts -->
  <script>
    const i18n = {
      vi: {
        top_badge: "ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC HÀN QUỐC",
        top_sub: "CÔNG TY TNHH DAWOOFA VINA • KHO NGOẠI QUAN TẠI BẮC NINH & BÌNH DƯƠNG",
        nav_about: "Giới thiệu doanh nghiệp",
        nav_brands: "Thương hiệu ủy quyền",
        nav_products: "Sản phẩm FA",
        nav_support: "Kỹ thuật & Dịch vụ A/S tại chỗ",
        nav_contact: "Yêu cầu báo giá (RFQ)",
        search_ph: "Tìm mã sản phẩm (MR-J5, E800, iQ-R, PLC...)",
        btn_quote_top: "BÁO GIÁ NHANH (RFQ)",
        cert_strip: "ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC CHÍNH THỨC - CÔNG TY TNHH DAWOOFA VINA",
        hero_eyebrow: "B2B INDUSTRIAL FACTORY AUTOMATION DISTRIBUTOR",
        hero_h1: "Tổng Đại Lý Phân Phối Thiết Bị Tự Động Hóa FA Hàn Quốc & Nhật Bản Tại Việt Nam",
        hero_desc: "Kế thừa hơn 20 năm kinh nghiệm từ trụ sở Dawoo FA Hàn Quốc (dawooservo.co.kr), Dawoofa Vina phân phối chính thức hệ thống Servo MELSERVO (MR-J5, MR-J4), biến tần FREQROL (A800, E800), bộ điều khiển PLC MELSEC và màn hình HMI GOT2000. Cam kết 100% hàng chính hãng, đầy đủ C/O và C/Q, có sẵn kho tại Bắc Ninh & Bình Dương, giao hàng trong 24~48h và hỗ trợ kỹ thuật tận nơi.",
        btn_rfq_hero: "YÊU CẦU BÁO GIÁ NHANH (RFQ)",
        btn_cat_hero: "TẢI CATALOGUE TỔNG HỢP (PDF)",
        std1_title: "KHO NGOẠI QUAN CÓ SẴN",
        std1_desc: "Bắc Ninh & Bình Dương giao trong 24~48h",
        std2_title: "100% C/O & C/Q",
        std2_desc: "Đầy đủ chứng nhận xuất xứ & chất lượng",
        std3_title: "KỸ SƯ HÀN QUỐC THƯỜNG TRỰC",
        std3_desc: "Tuning servo & xử lý sự cố trong 4h",
        std4_title: "HÓA ĐƠN ĐỎ VAT",
        std4_desc: "Pháp nhân MST: 2301192888 VND/USD",
        brands_eyebrow: "AUTHORIZED INDUSTRIAL AUTOMATION BRANDS",
        brands_title: "Các Thương Hiệu Tự Động Hóa FA Phân Phối Trực Tiếp",
        brand_mitsu_badge: "★ ĐẠI LÝ CHÍNH THỨC",
        brand_mitsu_tier: "Đại lý ủy quyền cấp 1",
        brand_mitsu_desc: "Nhà phân phối ủy quyền chính thức Mitsubishi Electric: Động cơ Servo MR-J5·J4, Biến tần FREQROL A800/E800, PLC iQ-R·F, HMI GOT2000.",
        brand_yaskawa_desc: "Đối tác chuyển động & Robot công nghiệp: Hệ thống AC Servo Sigma-7 phản hồi 3.1kHz siêu chính xác, biến tần GA700, cánh tay robot tự động hóa.",
        brand_nikki_desc: "Động cơ Direct Drive (DD) & Servo tuyến tính: Dẫn động trực tiếp không hộp số, khử hoàn toàn độ rơ cơ khí (Zero Backlash), mâm chia độ góc quay chính xác.",
        brand_pilz_desc: "Chuyên gia an toàn máy móc công nghiệp Đức: Rơ-le an toàn PNOZ, bộ điều khiển an toàn mô-đun PNOZ Multi đạt chuẩn quốc tế cao nhất PLe / SIL3.",
        brand_samwon_desc: "Cáp servo chuyên dụng & Hộp cầu đấu I/O: Dây cáp chống dầu uốn dẻo cao cho Mitsubishi/Yaskawa, khối cầu đấu Relay & PLC rút ngắn 80% thời gian đấu nối.",
        brand_apex_desc: "Hộp giảm tốc hành tinh độ chính xác cao: Tích hợp trực tiếp động cơ servo, độ rơ cực thấp, thanh răng & bánh răng công nghiệp cho máy công cụ và robot.",
        guarantee_title: "Cam kết 100% chính hãng kèm chứng nhận xuất xứ C/O & chất lượng C/Q",
        guarantee_desc: "Tất cả thiết bị đều có đầy đủ chứng từ xuất nhập khẩu hợp pháp, hỗ trợ nghiệm thu kiểm tra và đáp ứng các tiêu chuẩn khắt khe của các tập đoàn sản xuất lớn tại Việt Nam.",
        vat_support: "Xuất hóa đơn đỏ VAT đầy đủ theo quy định Bộ Tài Chính",
        prod_eyebrow: "GENUINE FA HARDWARE TECHNICAL CATALOG",
        prod_title: "Bảng Thông Số Kỹ Thuật & Danh Mục Sản Phẩm FA Phân Phối",
        prod_subtitle: "Tra cứu thông số kỹ thuật, khả năng đáp ứng tải, phương thức truyền thông và tình trạng sẵn hàng tại kho Bắc Ninh & Bình Dương.",
        cat_all: "Tất cả sản phẩm",
        cat_servo: "Hệ thống Servo (Servo System)",
        cat_inverter: "Biến tần (Inverter / VFD)",
        cat_plc: "PLC & HMI (PLC & HMI)",
        cat_safety: "Giải pháp an toàn & Dây nối (Safety & Wiring)",
        cat_label_servo: "Hệ thống Servo (Servo System)",
        cat_label_inverter: "Biến tần (Inverter / VFD)",
        cat_label_plc: "PLC & Thiết bị điều khiển (PLC & HMI)",
        cat_label_safety: "Giải pháp an toàn & Dây nối",
        stock_checkbox: "Chỉ xem thiết bị có sẵn kho VN",
        p1_1_desc: "Hỗ trợ mạng CC-Link IE TSN tốc độ cao, bộ mã hóa 26-bit, điều khiển vị trí siêu chính xác.",
        p1_2_desc: "Tần số đáp ứng 2.5kHz, mạng quang SSCNET III/H, dòng servo tiêu chuẩn độ tin cậy cao.",
        p1_3_desc: "Động cơ Direct Drive không hộp số, độ rơ bằng không, truyền động tuyến tính tốc độ cao.",
        p2_1_desc: "Điều khiển vector không cảm biến thời gian thực, chuyên dụng cho cẩu trục và tải nặng.",
        p2_2_desc: "Biến tần nhỏ gọn đa năng, tích hợp Ethernet, tối ưu cho băng tải và máy móc tự động.",
        p3_1_desc: "Tốc độ xử lý nano giây, hỗ trợ cấu hình đa CPU, bộ điều khiển trung tâm cho Smart Factory.",
        p3_2_desc: "PLC All-in-one nhỏ gọn, tích hợp sẵn analog và đếm xung tốc độ cao cho máy độc lập.",
        p3_3_desc: "Màn hình cảm ứng HMI sắc nét, hỗ trợ đa cổng giao tiếp và giám sát từ xa.",
        p4_1_desc: "Đạt tiêu chuẩn an toàn cao nhất PLe / SIL3, rơ le an toàn và bộ điều khiển an toàn mô-đun.",
        p4_2_desc: "Cáp servo chống dầu uốn dẻo cho Mitsubishi/Yaskawa, hộp cầu đấu I/O và khối giao tiếp PLC.",
        supp_eyebrow: "NĂNG LỰC DỊCH VỤ & HỖ TRỢ KỸ THUẬT TẠI VIỆT NAM",
        supp_title: "4 Trụ Cột Năng Lực Cạnh Tranh Cốt Lõi Của DAWOOFA VINA",
        supp_subtitle: "Bảo vệ dây chuyền của bạn không bị gián đoạn (Zero Line-Stop) với kho hàng sẵn có tại chỗ và kỹ sư thường trực tại Việt Nam.",
        feat1_title: "Kho Ngoại Quan & Lưu Kho Sẵn Hàng",
        feat1_desc: "Duy trì tồn kho lớn các dòng Servo MR-J5/J4, Biến tần A800/E800 và PLC tại Bắc Ninh & Bình Dương, giao hàng trong 24~48h.",
        feat2_title: "Kỹ Sư Hàn Quốc Thường Trực",
        feat2_desc: "Hỗ trợ cài đặt tham số servo, lập trình kết nối PLC và xử lý sự cố biến tần tận nơi tại các KCN trong vòng 4 giờ.",
        feat3_title: "Chứng Nhận Xuất Xứ & Chất Lượng",
        feat3_desc: "Đầy đủ C/O và C/Q từ nhà sản xuất, đảm bảo vượt qua các kỳ kiểm toán kỹ thuật khắt khe của tập đoàn đa quốc gia.",
        feat4_title: "Thanh Toán Linh Hoạt VND/USD",
        feat4_desc: "Pháp nhân đăng ký chính thức tại Việt Nam (MST: 2301192888), hỗ trợ xuất hóa đơn đỏ VAT hợp pháp và điều khoản tín dụng doanh nghiệp.",
        rfq_eyebrow: "ONLINE RFQ & TECHNICAL INQUIRY",
        rfq_title: "Đăng Ký Nhận Bảng Báo Giá Chính Thức & Bản Vẽ Kỹ Thuật",
        rfq_subtitle: "Cung cấp mã hiệu thiết bị hoặc quy cách cần thay thế, đội ngũ kỹ sư sẽ phản hồi báo giá trong vòng 2 giờ.",
        form_company: "Tên công ty / Nhà máy *",
        form_name: "Họ tên & Chức vụ người liên hệ *",
        form_email: "Địa chỉ Email nhận báo giá *",
        form_phone: "Số điện thoại / Zalo *",
        form_category: "Danh mục sản phẩm",
        form_urgency: "Tiến độ yêu cầu giao hàng",
        form_model: "Mã sản phẩm / Số lượng yêu cầu (Tự động điền khi chọn ở trên)",
        form_notes: "Thông số kỹ thuật chi tiết hoặc ghi chú thêm",
        cat_opt_servo: "Hệ thống Servo (MR-J5, MR-J4, DD Motor)",
        cat_opt_inverter: "Biến tần (A800, E800 Series)",
        cat_opt_plc: "PLC & HMI (iQ-R, iQ-F, GOT2000)",
        cat_opt_safety: "Giải pháp an toàn & Dây nối (PILZ, SAMWON ACT)",
        opt_urgency_fast: "Khẩn cấp: Cần hàng trong 24~48h (Xử lý dừng chuyền)",
        opt_urgency_std: "Dự án mới: Cần báo giá đấu thầu / Cung ứng theo tiến độ",
        btn_submit_rfq: "GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC (SUBMIT RFQ)",
        direct_contact_title: "THÔNG TIN LIÊN HỆ TRỰC TIẾP DAWOOFA VINA"
      },
      ko: {
        top_badge: "한국 미쓰비시전기 공식 대리점 (주)다우에프에이 베트남 법인",
        top_sub: "CÔNG TY TNHH DAWOOFA VINA • 하노이/박닌 & 호치민/빈증 직영 보세창고 운영",
        nav_about: "회사소개",
        nav_brands: "공식 파트너 메이커",
        nav_products: "취급제품군",
        nav_support: "기술지원 및 현지A/S대응",
        nav_contact: "온라인 견적문의",
        search_ph: "형명 및 규격 검색 (MR-J5, E800, iQ-R...)",
        btn_quote_top: "온라인 견적요청",
        cert_strip: "한국미쓰비시전기 공식 대리점 (주)다우에프에이 베트남 법인 - DAWOOFA VINA",
        hero_eyebrow: "B2B INDUSTRIAL FACTORY AUTOMATION DISTRIBUTOR",
        hero_h1: "베트남 현지 공장자동화(FA) 설비 부품 공식 유통 및 기술지원 및 현지A/S대응",
        hero_desc: "한국 다우에프에이(dawooservo.co.kr)의 20년 현장 엔지니어링 기술을 바탕으로, 미쓰비시전기 공식 대리점 정품 MELSERVO 서보 시스템(MR-J5, MR-J4), FREQROL 인버터(A800, E800), MELSEC iQ-R/F PLC를 베트남 현지 보세창고(박닌/빈증)에 상시 보유하여 최적 단가와 24~48시간 신속 직송으로 공급합니다.",
        btn_rfq_hero: "온라인 빠른 견적 요청 (RFQ)",
        btn_cat_hero: "미쓰비시 종합 카탈로그 (PDF)",
        std1_title: "현지 보세창고 상시 재고",
        std1_desc: "박닌 & 빈증 거점 24~48시간 긴급 납품",
        std2_title: "100% 정품 C/O, C/Q 완비",
        std2_desc: "제조사 정식 원산지 증명서 및 성적서 동봉",
        std3_title: "한국 본사 엔지니어 상주",
        std3_desc: "서보 튜닝, 파라미터 셋업 및 4시간 출동",
        std4_title: "VAT 전자세금계산서 정식 발행",
        std4_desc: "베트남 현지 법인(MST: 2301192888) 유연한 결제",
        brands_eyebrow: "공식 취급 글로벌 FA 자동화 브랜드",
        brands_title: "정품 공식 취급 글로벌 자동화 하드웨어 제조사",
        brand_mitsu_badge: "★ 공식 1급 대리점",
        brand_mitsu_tier: "공식 1급 특약점",
        brand_mitsu_desc: "미쓰비시 전기 공식 1급 대리점(특약점): MELSERVO MR-J5·J4 서보, FREQROL A800·E800 인버터, MELSEC iQ-R·F PLC, GOT2000 HMI 공급.",
        brand_yaskawa_desc: "정밀 모션 & 산업용 로봇 파트너: Sigma-7 초고응답 서보 시스템, GA700 고기능 벡터 인버터, 산업용 다관절 로봇 공급.",
        brand_nikki_desc: "다이렉트 드라이브(DD) 모터 & 고속 리니어 서보: 감속기 없는 직접 구동, 백래시 제로 초정밀 인덱스 회전 제어 솔루션.",
        brand_pilz_desc: "독일 프리미엄 세이프티 공인 파트너: PNOZ 소형 안전 릴레이 및 PNOZ Multi 모듈러 안전 컨트롤러 (최고 등급 PLe / SIL3 지원).",
        brand_samwon_desc: "서보 전용 하네스 케이블 & I/O 인터페이스 단자대: 미쓰비시·야스카와 전용 내유·고굴곡 하네스 케이블 및 PLC 릴레이 단자대 전문.",
        brand_apex_desc: "고정밀 유성 감속기 & 랙 피니언 시스템: 서보 모터 직결 초정밀 백래시 제어 감속기, 공작기계 및 반송 설비 최적화.",
        guarantee_title: "가품 차단 100% 정품 보증 및 정식 C/O, C/Q 발급",
        guarantee_desc: "전 품목 제조사 정식 수입 통관 및 원산지 증명서(C/O), 공인 시험 성적서(C/Q) 동봉 발행으로 베트남 설비 감사(Audit) 통과를 100% 보증합니다.",
        vat_support: "베트남 현지 VAT Hóa Đơn Đỏ 100% 정식 발행",
        prod_eyebrow: "FA HARDWARE TECHNICAL CATALOG",
        prod_title: "정품 FA 자동화 하드웨어 기술 규격 및 취급 제품군",
        prod_subtitle: "미쓰비시전기 및 글로벌 파트너의 출력 용량, 정격 전압, 통신 프로토콜 사양과 베트남 현지 보세창고 재고 현황을 실시간으로 확인하십시오.",
        cat_all: "전체 제품군",
        cat_servo: "서보 시스템 (Servo System)",
        cat_inverter: "인버터 (Inverter / VFD)",
        cat_plc: "PLC 및 제어기기 (PLC & HMI)",
        cat_safety: "안전 솔루션 & 전장 부품 (Safety & Wiring)",
        cat_label_servo: "서보 시스템 (Servo System)",
        cat_label_inverter: "인버터 (Inverter / VFD)",
        cat_label_plc: "PLC 및 제어기기 (PLC & HMI)",
        cat_label_safety: "안전 솔루션 & 전장 부품",
        stock_checkbox: "베트남 현지 재고 보유 모델만 보기",
        p1_1_desc: "차세대 고속 CC-Link IE TSN 통신 지원, 26bit 광학식 엔코더 탑재, 초정밀 동기 위치 제어.",
        p1_2_desc: "업계 최고 수준의 속도 응답 주파수(2.5kHz), SSCNET III/H 광통신, 고신뢰성 범용 서보.",
        p1_3_desc: "감속기 없는 직접 구동 인덱스 모터, 백래시 제로 고정밀 회전, 고속 리니어 액추에이터.",
        p2_1_desc: "리얼 센서리스 벡터 제어, 크레인/권상기 및 중부하 공정용 고성능 플래그십 인버터.",
        p2_2_desc: "컴팩트 고기능 인버터, 이더넷 내장, 소형 반송 설비 및 라인 표준화 최적 모델.",
        p3_1_desc: "나노초 단위 초고속 연산 처리, 멀티 CPU 시스템 지원, 스마트 팩토리 코어 컨트롤러.",
        p3_2_desc: "올인원 컴팩트 PLC, 내장 아날로그 및 고속 카운터, 독립 장비 제어 최적화.",
        p3_3_desc: "고화질 터치스크린 HMI, 다양한 산업용 통신 인터페이스 및 원격 모니터링 대응.",
        p4_1_desc: "국제 안전 인증 최고 등급(PLe / SIL3) 지원, 소형 세이프티 릴레이 및 모듈러 컨트롤러.",
        p4_2_desc: "미쓰비시/야스카와 전용 내유·고굴곡 서보 하네스 케이블, 릴레이 단자대 및 PLC 인터페이스 블록.",
        supp_eyebrow: "베트남 현지 기술지원 및 현지A/S대응 역량",
        supp_title: "베트남 현지 제조사가 DAWOOFA VINA를 선택하는 4대 강점",
        supp_subtitle: "단순 무역 유통을 넘어, 현지 보세창고 재고 운용과 한국 본사 공인 엔지니어 현장 지원으로 고객사 공장의 비상 정지(Line Stop)를 완벽히 차단합니다.",
        feat1_title: "박닌 & 빈증 2대 로컬 보세창고 운용",
        feat1_desc: "미쓰비시 서보, 인버터, PLC 핵심 규격을 북부(박닌)와 남부(빈증) 물류센터에 상시 대량 보유하여 당일 직배송합니다.",
        feat2_title: "한국 본사 20년 경력 엔지니어 상주",
        feat2_desc: "한국 본사(dawooservo.co.kr) 공인 FA 기술지원 및 현지A/S대응 엔지니어가 현지에 상주하여 서보 게인 튜닝 및 긴급 복구를 직접 전담합니다.",
        feat3_title: "100% 정품 보증 및 정식 C/O, C/Q 완비",
        feat3_desc: "공식 대리점 정품 공급 및 원산지 증명서(C/O), 시험 성적서(C/Q) 동봉으로 고객사 감사를 100% 충족합니다.",
        feat4_title: "VND/USD 유연한 결제 및 세금계산서",
        feat4_desc: "베트남 정식 법인(MST: 2301192888)으로서 Hóa Đơn Đỏ(전자세금계산서)를 100% 정식 발행합니다.",
        rfq_eyebrow: "ONLINE RFQ & TECHNICAL INQUIRY",
        rfq_title: "온라인 정식 견적 요청 및 기술 사양 문의",
        rfq_subtitle: "필요하신 미쓰비시 서보, 인버터, PLC 형번 또는 사양을 입력해 주시면 베트남 현지 공인 엔지니어가 2시간 이내에 회신드립니다.",
        form_company: "회사명 / 법인명 *",
        form_name: "담당자 성함 및 직함 *",
        form_email: "업무용 이메일 *",
        form_phone: "연락처 (Zalo / 휴대폰) *",
        form_category: "관심 제품 분류",
        form_urgency: "납기 희망 일정",
        form_model: "검토 모델명 / 수량 (상단 선택 시 자동 입력)",
        form_notes: "상세 요구 사항 및 기구 사양",
        cat_opt_servo: "서보 시스템 (MELSERVO MR-J5, J4, DD모터)",
        cat_opt_inverter: "인버터 (FREQROL-A800, E800)",
        cat_opt_plc: "PLC 및 제어기기 (MELSEC iQ-R, iQ-F, GOT2000)",
        cat_opt_safety: "안전 솔루션 & 전장 부품 (PILZ, 삼원ACT)",
        opt_urgency_fast: "긴급: 24~48시간 내 필요 (라인 정지 비상 대응)",
        opt_urgency_std: "일반: 신규 프로젝트 / 설비 제작 견적",
        btn_submit_rfq: "정식 견적서 요청하기 (RFQ 접수)",
        direct_contact_title: "DAWOOFA VINA 베트남 공식 거점 안내"
      },
      en: {
        top_badge: "OFFICIAL MITSUBISHI ELECTRIC AUTHORIZED DISTRIBUTOR",
        top_sub: "DAWOOFA VINA CO., LTD • BONDED HUBS IN BAC NINH & BINH DUONG",
        nav_about: "Company Profile",
        nav_brands: "Authorized Brands",
        nav_products: "FA Products",
        nav_support: "Technical Support & Local A/S",
        nav_contact: "Request Quote (RFQ)",
        search_ph: "Search model (MR-J5, E800, iQ-R, PLC...)",
        btn_quote_top: "REQUEST QUOTE (RFQ)",
        cert_strip: "MITSUBISHI ELECTRIC OFFICIAL DISTRIBUTOR - DAWOOFA VINA CO., LTD.",
        hero_eyebrow: "B2B INDUSTRIAL FACTORY AUTOMATION DISTRIBUTOR",
        hero_h1: "Industrial FA Automation Components, Technical Support & Local A/S in Vietnam",
        hero_desc: "Backed by 20+ years of engineering experience from Korea HQ (dawooservo.co.kr), Dawoofa Vina officially distributes Mitsubishi Electric MELSERVO MR-J5/J4, FREQROL A800/E800 inverters, and MELSEC PLCs with buffer inventory at Bac Ninh & Binh Duong bonded warehouses for 24-48h rapid dispatch.",
        btn_rfq_hero: "REQUEST INSTANT QUOTE (RFQ)",
        btn_cat_hero: "DOWNLOAD FULL CATALOG (PDF)",
        std1_title: "LOCAL BUFFER STOCK",
        std1_desc: "Bac Ninh & Binh Duong hubs delivery within 24-48h",
        std2_title: "100% GENUINE C/O & C/Q",
        std2_desc: "Official manufacturer Certificate of Origin & Quality",
        std3_title: "RESIDENT KOREAN ENGINEERS",
        std3_desc: "On-site servo tuning & diagnostics within 4h",
        std4_title: "OFFICIAL VAT INVOICE",
        std4_desc: "Registered legal entity in Vietnam (Tax ID: 2301192888)",
        brands_eyebrow: "AUTHORIZED INDUSTRIAL AUTOMATION BRANDS",
        brands_title: "Directly Distributed Global FA Brand Partners",
        brand_mitsu_badge: "★ OFFICIAL DISTRIBUTOR",
        brand_mitsu_tier: "Primary Authorized Distributor",
        brand_mitsu_desc: "Official Authorized Distributor: MELSERVO MR-J5 & MR-J4 Servos, FREQROL A800 & E800 Inverters, MELSEC iQ-R & iQ-F PLCs, GOT2000 HMIs.",
        brand_yaskawa_desc: "Precision Motion & Robotics Partner: Sigma-7 High-Response Servos, GA700 Inverters, and multi-axis industrial robots.",
        brand_nikki_desc: "Direct Drive (DD) Motors & Linear Servos: Zero-backlash direct drive rotary indexing motors and high-speed linear actuators.",
        brand_pilz_desc: "German Machinery Safety Automation: PNOZ Safety Relays & PNOZ Multi Modular Safety Controllers (PLe/SIL3 Certified).",
        brand_samwon_desc: "Specialized Servo Cables & I/O Terminal Blocks: Oil-resistant high-flex harness cables for Mitsubishi/Yaskawa and PLC interface blocks.",
        brand_apex_desc: "High-Precision Planetary Gearboxes & Rack-Pinion: Low-backlash servo reducers engineered for machine tools and transfer equipment.",
        guarantee_title: "100% Genuine Guaranteed with Official C/O & C/Q Certificates",
        guarantee_desc: "All products come with official manufacturer Certificate of Origin (C/O) and Certificate of Quality (C/Q) for seamless factory audit compliance.",
        vat_support: "Official VAT Electronic Invoice (Hóa Đơn Đỏ) Included",
        prod_eyebrow: "GENUINE FA HARDWARE TECHNICAL CATALOG",
        prod_title: "Industrial FA Automation Hardware Specifications",
        prod_subtitle: "Browse technical specifications, power capacities, communication interfaces, and inventory status across Vietnam warehouses.",
        cat_all: "All Categories",
        cat_servo: "Servo System (Servo)",
        cat_inverter: "Inverter (Inverter / VFD)",
        cat_plc: "PLC & Controls (PLC & HMI)",
        cat_safety: "Safety & Wiring Components",
        cat_label_servo: "Servo System (Servo)",
        cat_label_inverter: "Inverter (Inverter / VFD)",
        cat_label_plc: "PLC & Control Devices (PLC & HMI)",
        cat_label_safety: "Safety & Wiring Components",
        stock_checkbox: "In-Stock in Vietnam only",
        p1_1_desc: "Next-gen servo system with CC-Link IE TSN, 26-bit optical absolute encoder.",
        p1_2_desc: "Industry-leading 2.5kHz speed frequency response with SSCNET III/H fiber optic bus.",
        p1_3_desc: "High-precision direct drive rotary motor with zero backlash and linear servo solutions.",
        p2_1_desc: "Premium high-performance inverter with advanced real-time sensorless vector control.",
        p2_2_desc: "Compact high-performance inverter with built-in Ethernet for versatile automation machinery.",
        p3_1_desc: "Nanosecond-level high-speed sequence processing, multi-CPU architecture controller.",
        p3_2_desc: "All-in-one compact PLC with built-in analog and high-speed counter for standalone machines.",
        p3_3_desc: "High-resolution touch screen HMI supporting multiple industrial interfaces & remote monitoring.",
        p4_1_desc: "Certified to highest safety standards (PLe/SIL3), modular safety controllers and relays.",
        p4_2_desc: "High-flex oil-resistant servo harness cables and PLC interface terminal blocks.",
        supp_eyebrow: "LOCAL SERVICE & TECHNICAL SUPPORT CAPABILITY",
        supp_title: "4 Core Strengths for Industrial Facilities in Vietnam",
        supp_subtitle: "Beyond component distribution, we safeguard manufacturing continuity with localized buffer inventory and certified on-site engineering expertise.",
        feat1_title: "Local Bonded Buffer Warehouses",
        feat1_desc: "Substantial stock of Mitsubishi MR-J5/J4, inverters, and PLCs maintained for immediate emergency factory delivery within 24-48h.",
        feat2_title: "Resident Certified Engineers",
        feat2_desc: "Field engineers from Korea HQ provide on-site servo tuning, PLC programming, and troubleshooting within 4 hours.",
        feat3_title: "100% Genuine with Official C/O & C/Q",
        feat3_desc: "Full official documentation including Certificate of Origin (C/O) and Certificate of Quality (C/Q) standard.",
        feat4_title: "Flexible Settlement & VAT Invoice",
        feat4_desc: "Official legal entity in Vietnam supporting corporate terms and issuing electronic VAT invoices.",
        rfq_eyebrow: "ONLINE RFQ & TECHNICAL INQUIRY",
        rfq_title: "Commercial Quotation & Engineering Request",
        rfq_subtitle: "Submit your required hardware model numbers or machine specifications to receive an official quote within 2 hours.",
        form_company: "Company / Factory Name *",
        form_name: "Contact Name & Title *",
        form_email: "Work Email *",
        form_phone: "Phone / Zalo Number *",
        form_category: "Product Category",
        form_urgency: "Delivery Schedule",
        form_model: "Target Model / Quantity (Autofilled on select)",
        form_notes: "Detailed Specifications & Notes",
        cat_opt_servo: "Servo Systems (MR-J5, MR-J4, DD Motor)",
        cat_opt_inverter: "Inverters (A800, E800 Series)",
        cat_opt_plc: "PLC & HMI Controls (iQ-R, iQ-F, GOT2000)",
        cat_opt_safety: "Safety & Wiring (PILZ, SAMWON ACT)",
        opt_urgency_fast: "Urgent: Within 24-48 hours (Line Stop)",
        opt_urgency_std: "Standard: New project / Tender quotation",
        btn_submit_rfq: "SUBMIT REQUEST FOR QUOTATION (RFQ)",
        direct_contact_title: "DAWOOFA VINA OFFICIAL DIRECT CONTACT"
      }
    };

    let currentLang = 'vi';
    let currentCategory = 'all';

    function changeLanguage(lang) {
      currentLang = lang;
      
      // Update buttons
      ['vi', 'ko', 'en'].forEach(l => {
        const btn = document.getElementById('lang-btn-' + l);
        if (btn) {
          if (l === lang) {
            btn.className = 'px-2 py-0.5 font-bold bg-[#2563EB] text-white transition-colors';
          } else {
            btn.className = 'px-2 py-0.5 font-bold text-[#64748B] hover:text-[#2563EB] transition-colors';
          }
        }
      });

      // Update text nodes
      const dict = i18n[lang];
      if (!dict) return;

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerText = dict[key];
        }
      });

      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key]) {
          el.setAttribute('placeholder', dict[key]);
        }
      });
    }

    function filterCategory(cat) {
      currentCategory = cat;
      document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.classList.remove('bg-[#2563EB]', 'text-white', 'border-[#2563EB]');
        btn.classList.add('bg-white', 'text-[#475569]', 'border-[#CBD5E1]');
      });
      const activeBtn = document.getElementById('btn-cat-' + cat);
      if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-[#475569]', 'border-[#CBD5E1]');
        activeBtn.classList.add('bg-[#2563EB]', 'text-white', 'border-[#2563EB]');
      }
      applyFilters();
    }

    function applyFilters() {
      const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
      const onlyStock = document.getElementById('stockFilter')?.checked || false;

      const items = document.querySelectorAll('.product-item');
      items.forEach(item => {
        const itemCat = item.getAttribute('data-cat') || '';
        const itemStock = item.getAttribute('data-stock') === 'true';
        const itemName = (item.getAttribute('data-name') || '').toLowerCase();
        const itemText = item.innerText.toLowerCase();

        const matchCat = (currentCategory === 'all' || itemCat === currentCategory);
        const matchStock = (!onlyStock || itemStock);
        const matchQuery = (!query || itemName.includes(query) || itemText.includes(query));

        if (matchCat && matchStock && matchQuery) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    function handleSearch(val) {
      applyFilters();
    }

    function setPresetModel(modelName) {
      const input = document.getElementById('rfqModelInput');
      if (input) {
        input.value = modelName;
      }
    }

    function handleFormSubmit(e) {
      e.preventDefault();
      alert(currentLang === 'vi' 
        ? 'Yêu cầu báo giá đã được tiếp nhận thành công! Kỹ sư DAWOOFA VINA sẽ phản hồi báo giá chính thức trong vòng 2 giờ.'
        : currentLang === 'ko'
        ? '견적 문의가 성공적으로 접수되었습니다. 베트남 현지 공인 엔지니어가 2시간 내 정식 견적서를 발송합니다.'
        : 'Quotation request successfully submitted! Our engineers will reply within 2 business hours.');
      e.target.reset();
    }
  </script>
</body>
</html>`;
