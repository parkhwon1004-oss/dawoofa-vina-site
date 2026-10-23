import { WireframeSchemaRoot, IaComparisonPoint } from '../types';

export const WIREFRAME_JSON_DATA: WireframeSchemaRoot = {
  project: "DAWOO ROBOT VIETNAM - B2B FA One-Page Website",
  version: "1.0.0",
  targetMarket: "Vietnam Manufacturing (Bắc Ninh, Hải Phòng, Bình Dương, Đồng Nai, TP.HCM)",
  architectureType: "Single Page Application (SPA) / B2B Conversion Funnel",
  techStackRecommendation: [
    "React + TypeScript + Tailwind CSS",
    "Multi-lingual (Vietnamese, Korean, English)",
    "Zalo OA (Official Account) API & Hotline Direct Connect",
    "Interactive RFQ (Request for Quote) & CAD Spec Sheet Downloader"
  ],
  sections: {
    hero: {
      id: "hero",
      name: "Hero Section (메인 비주얼 & 가치 제안)",
      title: {
        ko: "베트남 스마트 팩토리의 중심, 검증된 한국 FA 로봇 토탈 솔루션",
        vi: "Giải Pháp Tự Động Hóa & Robot Công Nghiệp Hàn Quốc Hàng Đầu Tại Việt Nam",
        en: "Leading Korean Industrial FA & Robotics Solutions for Smart Factories in Vietnam"
      },
      subtitle: {
        ko: "직교로봇, 리니어모터 모듈, 고정밀 감속기 당일 기술지원 및 베트남 현지 신속 납기 보증",
        vi: "Robot tọa độ Cartesian, Mô-đun Linear Motor, Hộp giảm tốc chính xác cao - Có sẵn kho tại Bắc Ninh & Bình Dương",
        en: "Cartesian Robots, Linear Modules, Precision Reducers - Local inventory in Bac Ninh & Binh Duong"
      },
      wireframeLayout: {
        containerType: "Split-Grid (Left: Copy & Dual CTA, Right: Interactive Product Hero 3D/Visual Showcase)",
        columns: "12-column grid (Col 7 / Col 5 on Desktop, 1 Col on Mobile)",
        hierarchy: [
          "1. Top Trust Badge (다우로봇 베트남 법인 공식 인증)",
          "2. H1 Headline (강력한 가치 제안 & 로컬 강점)",
          "3. Subtitle (핵심 품목 및 현지 재고 보유 강조)",
          "4. Dual CTA Group (즉시 견적 요청 RFQ / 디지털 카탈로그 다운로드)",
          "5. Quick Trust Metrics Bar (150+ 현지 고객사, 48h 납기, 2개 테크센터)"
        ],
        desktopHeight: "min-h-[88vh]",
        mobileBehavior: "Stacked with sticky quick-contact banner"
      },
      components: [
        {
          name: "HeroBadge",
          type: "Badge / Chip",
          purpose: "한국 본사 100% 공식 직영 및 베트남 법인 신뢰도 부여",
          spec: "Bordered pill badge with pulse indicator",
          dataFields: ["badgeText", "partnerStatus", "countryFlag"]
        },
        {
          name: "HeadlineGroup",
          type: "Typography Block",
          purpose: "베트남 현지 공장장 및 설비 엔지니어 대상 즉각적 솔루션 어필",
          spec: "H1 48px/60px, Lead paragraph 18px",
          dataFields: ["titleKo", "titleVi", "titleEn", "subtext"]
        },
        {
          name: "HeroActions",
          type: "CTA Button Group",
          purpose: "B2B 구매 전환(RFQ 문의) 및 기술자료 확보 유도",
          spec: "Primary Button (Orange Accent / RFQ Form modal trigger) + Secondary Button (Download Catalog)",
          dataFields: ["primaryActionLabel", "secondaryActionLabel", "zaloQuickLink"]
        },
        {
          name: "MetricStatsRibbon",
          type: "Key Metrics Counter",
          purpose: "현지 설비 공급 실적 및 신속성 입증",
          spec: "3-column stat boxes (48h 납기 보증, 100% 정품 인증, 2개 로컬 서비스 센터)",
          dataFields: ["statsNumber", "statsLabel", "iconName"]
        }
      ],
      b2bRationale: {
        koreaBenchmark: "dawoorobot.com 한국 본사는 텍스트 위주 슬라이더 배너로 구성되어 모바일에서 가독성이 떨어지고 전환 버튼이 모호함",
        vietnamOptimization: "베트남 구매자들은 '로컬 재고 유무', '신속 견적(RFQ)', '한국 엔지니어 상주 여부'를 최우선으로 보므로 Hero에서 이를 즉시 검증"
      },
      dataPayloadExample: {
        companyName: "DAWOO ROBOT VIETNAM CO., LTD.",
        hotline: "+84 222-389-9988",
        zaloId: "dawoorobot_vn",
        quickStats: [
          { value: "48h", label: "현지 긴급 납기" },
          { value: "100%", label: "한국 본사 정품 공급" },
          { value: "2", label: "하노이 & 호치민 거점" }
        ]
      }
    },

    brands: {
      id: "brands",
      name: "Brands Section (제휴 및 파트너 브랜드 라인업)",
      title: {
        ko: "글로벌 톱티어 FA 파트너 & 공식 공급 브랜드",
        vi: "Thương Hiệu Tự Động Hóa Đối Tác Hàng Đầu Toàn Cầu",
        en: "Global Top-Tier FA Partners & Authorized Brands"
      },
      subtitle: {
        ko: "엄격한 품질 테스트를 통과한 한국 및 글로벌 모션 제어·로봇 솔루션",
        vi: "Các giải pháp điều khiển chuyển động và robot từ Hàn Quốc & Quốc tế đã được kiểm định khắt khe",
        en: "Rigorous quality-tested motion control & robotics solutions from Korea & global leaders"
      },
      wireframeLayout: {
        containerType: "Full-width Infinite Carousel / Grid with verification popovers",
        columns: "6-column brand card layout on desktop, 3x2 on tablet, 2x3 on mobile",
        hierarchy: [
          "1. Section Header (공식 파트너십 안내)",
          "2. Brand Logo & Category Matrix Cards",
          "3. Authorized Distributor Certified Seal",
          "4. Direct Filter Trigger (클릭 시 해당 브랜드 제품 필터링)"
        ],
        mobileBehavior: "Horizontal scroll snap or 2-column compact grid"
      },
      components: [
        {
          name: "BrandCardGrid",
          type: "Interactive Grid / Slider",
          purpose: "공급 브랜드의 공신력 전파 및 브랜드별 취급 품목 안내",
          spec: "Clean monochrome to color hover cards with brand origin flags",
          dataFields: ["brandName", "countryOrigin", "coreProduct", "logoUrl", "isDirectSoleAgency"]
        },
        {
          name: "PartnershipCertificateNotice",
          type: "Trust Banner",
          purpose: "가품/비공식 유통 위험이 높은 베트남 시장에서 공식 정품 보증",
          spec: "Inline badge '100% Genuine Guaranteed with Certificate of Origin (C/O, C/Q)'",
          dataFields: ["coCqGuarantee", "warrantyPeriod"]
        }
      ],
      b2bRationale: {
        koreaBenchmark: "한국 사이트는 메뉴 내 협력사 로고가 분산되어 있어 한눈에 전체 브랜드 스케일을 파악하기 어려움",
        vietnamOptimization: "베트남 현지 공장은 일본/한국 메이커(Nikki Denso, G+, Sanmotion 등) 선호도가 높으므로 전면에 브랜드 권위를 부각"
      },
      dataPayloadExample: {
        brands: [
          { name: "DAWOO ROBOT", origin: "Korea", items: "직교로봇, WTR, 정밀스테이지" },
          { name: "NIKKI DENSO", origin: "Japan/Korea", items: "AC 서보모터, 다이렉트 드라이브" },
          { name: "G-PLUS", origin: "Korea", items: "고정밀 유성기어 감속기, 중공축 로터리" },
          { name: "SANMOTION", origin: "Japan", items: "스테핑 모터, 드라이버" },
          { name: "PHOENIX CONTACT", origin: "Germany", items: "산업용 인터페이스 및 전원" }
        ]
      }
    },

    products: {
      id: "products",
      name: "Products Section (핵심 제품군 카탈로그 & 스펙 뷰어)",
      title: {
        ko: "다우로봇 핵심 자동화 부품 & 로봇 라인업",
        vi: "Danh Mục Sản Phẩm Tự Động Hóa & Robot Cốt Lõi",
        en: "Core Factory Automation & Robotics Lineup"
      },
      subtitle: {
        ko: "반도체, 이차전지, 전자부품, 자동차 생산라인에 최적화된 고정밀 부품",
        vi: "Tối ưu hóa cho dây chuyền sản xuất bán dẫn, pin xe điện, linh kiện điện tử và ô tô",
        en: "Optimized for semiconductor, EV battery, electronics, and automotive manufacturing lines"
      },
      wireframeLayout: {
        containerType: "Filterable Tab Navigation + Product Cards with Technical Specs Table & CAD Drawer",
        columns: "Category Tabs (5 Categories) -> 3-column product cards grid (Responsive: 3 -> 2 -> 1)",
        hierarchy: [
          "1. Sticky Category Filters (직교로봇 / 리니어모듈 / 정밀감속기 / 다관절·협동로봇 / 정밀스테이지)",
          "2. Quick Stock Filter ('베트남 현지 당일 출고 가능' 토글)",
          "3. Product Card (실물 이미지, 모델명, 반복 정밀도, 스트로크, 가반하중)",
          "4. Tech Spec Matrix (한눈에 비교 가능한 테이블 형식)",
          "5. Card Action Suite (RFQ 견적담기, PDF 카탈로그, 3D STEP 도면 요청)"
        ],
        mobileBehavior: "Swipeable category pills + expandable tech spec accordion"
      },
      components: [
        {
          name: "CategoryFilterBar",
          type: "Filter Button Group / Tabs",
          purpose: "방대한 FA 부품군 중 고객이 찾는 설비군으로 신속 이동",
          spec: "Active highlight tab with item count badges",
          dataFields: ["categoryId", "categoryTitle", "itemCount"]
        },
        {
          name: "ProductCard",
          type: "Rich Content Card",
          purpose: "엔지니어의 구매 의사결정에 필요한 핵심 스펙을 즉시 노출",
          spec: "Image container with zoom, model name, key spec tags (±0.005mm 정밀도 등)",
          dataFields: ["model", "category", "specs", "inStockVn", "datasheetUrl", "stepFileAvailable"]
        },
        {
          name: "QuickRfqTrigger",
          type: "Interactive Action Button",
          purpose: "제품 카드에서 원클릭으로 견적서 리스트에 담거나 바로 상담 팝업 호출",
          spec: "Primary action button with shopping-cart / quote-cart icon",
          dataFields: ["productId", "modelName"]
        },
        {
          name: "DatasheetDownloader",
          type: "Action Link",
          purpose: "설계 엔지니어가 CAD 작업에 필요한 사양서 및 도면 즉시 획득",
          spec: "Ghost button with PDF/STEP indicator",
          dataFields: ["downloadType", "fileSize"]
        }
      ],
      b2bRationale: {
        koreaBenchmark: "dawoorobot.com 한국 사이트는 각 제품마다 별도 상세페이지로 이동해야 하고, 모바일에서 스펙 표가 깨져 가독성이 저하됨",
        vietnamOptimization: "원페이지 내에서 탭 전환 및 카드 내 핵심 스펙(가반중량, 반복정밀도, 리드타임)을 즉시 확인하고, 복잡한 회원가입 없이 견적/도면 요청이 가능하도록 간소화"
      },
      dataPayloadExample: {
        categories: [
          { id: "cartesian", name: "직교로봇 (Cartesian Robot)" },
          { id: "linear", name: "리니어 모듈 (Linear Module DLN/DKW)" },
          { id: "reducer", name: "정밀 감속기 (G+ Planetary Reducer)" },
          { id: "robot", name: "다관절/스카라 로봇 (Articulated & SCARA)" },
          { id: "stage", name: "정밀 스테이지 & LMS (Precision Stage)" }
        ]
      }
    },

    features: {
      id: "features",
      name: "Features Section (베트남 현지 특화 경쟁력 & 차별화)",
      title: {
        ko: "베트남 현지 진출 기업이 다우로봇을 선택하는 4가지 이유",
        vi: "4 Lý Do Các Doanh Nghiệp Tại Việt Nam Lựa Chọn Dawoo Robot",
        en: "4 Reasons Manufacturing Giants in Vietnam Choose Dawoo Robot"
      },
      subtitle: {
        ko: "물류 지연 없이, 한국인 전문 엔지니어의 현장 기술지원으로 생산 라인 중단을 방지합니다",
        vi: "Không chậm trễ giao hàng, hỗ trợ kỹ thuật tận nơi từ kỹ sư chuyên nghiệp Hàn Quốc & Việt Nam",
        en: "Zero delivery delay, on-site technical support by Korean & Vietnamese expert engineers"
      },
      wireframeLayout: {
        containerType: "4-Column Feature Grid or 2x2 Feature Bento-Box with Visual Icons",
        columns: "4-column desktop grid / 2-column tablet / 1-column mobile",
        hierarchy: [
          "1. Section Badge ('WHY DAWOO VIETNAM')",
          "2. Main Benefit Headline & Description",
          "3. 4 Feature Cards (로컬 보세창고 / 한국인 엔지니어 상주 / C/O·C/Q 정품 보증 / 현지 세금계산서 발행)",
          "4. Coverage Map Widget (북부 박닌·하이퐁, 중남부 빈증·동나이 지원 범위)"
        ],
        mobileBehavior: "Vertical feature cards with collapsible detail text"
      },
      components: [
        {
          name: "FeatureBentoCard",
          type: "Feature Card with Icon & Highlight",
          purpose: "베트남 공장 운영 시 가장 큰 고충(납기, AS, 세금/통관)에 대한 해결책 제시",
          spec: "Dark slate card with illuminated accent border, Lucide icon, badge",
          dataFields: ["icon", "headline", "description", "statHighlight"]
        },
        {
          name: "RegionalCoverageMap",
          type: "Interactive Industrial Zone Map",
          purpose: "고객사의 베트남 현지 공장(삼성/LG/현대 협력사 공단) 인근 지원 센터 인지도 강화",
          spec: "Map indicator showing Hanoi/Bac Ninh Hub and HCMC/Binh Duong Hub",
          dataFields: ["hubName", "address", "responseTime"]
        }
      ],
      b2bRationale: {
        koreaBenchmark: "한국 본사 사이트는 국내 위주의 납기/설명이어서 해외법인 고객에게 배송 기간과 현지 A/S 가능 여부에 대한 확신을 주기 어려움",
        vietnamOptimization: "베트남 현지 법인의 핵심 구매 결정 요소인 '현지 보세재고 보유(48시간 납품)', '현장 긴급출동 A/S', '현지 VAT 세금계산서(Hóa đơn đỏ)'를 집중 부각"
      },
      dataPayloadExample: {
        features: [
          {
            title: "베트남 현지 보세 창고 보유 (Fast Stock)",
            desc: "박닌 및 빈증 창고에 핵심 규격 모듈 상시 보유, 당일/익일 긴급 출고 가능"
          },
          {
            title: "한국 본사 직영 기술지원 (Tech Support)",
            desc: "한국인 로봇 전문 엔지니어 상주, 4시간 이내 현장 방문 셋업 및 트러블슈팅"
          },
          {
            title: "100% 공식 정품 C/O, C/Q 발급",
            desc: "정품 인증서 및 시험성적서 완비로 베트남 세관 및 설비 검수 통과 100% 보증"
          },
          {
            title: "현지 통화 결제 & 부가세 계산서 (VAT Hóa Đơn)",
            desc: "VND/USD 정식 결제 및 현지 세무 규정에 부합하는 Hóa Đơn Đỏ 즉시 발행"
          }
        ]
      }
    },

    contact: {
      id: "contact",
      name: "Contact Section (B2B 견적 문의 & 현지 거점 안내)",
      title: {
        ko: "빠른 견적 문의 및 기술 상담 (RFQ)",
        vi: "Yêu Cầu Báo Giá Nhanh & Tư Vấn Kỹ Thuật (RFQ)",
        en: "Fast RFQ Quote & Technical Consultation"
      },
      subtitle: {
        ko: "도면이나 품번을 남겨주시면 2시간 이내에 현지 전문 엔지니어가 직접 회신드립니다",
        vi: "Gửi bản vẽ hoặc mã sản phẩm, kỹ sư chuyên môn của chúng tôi sẽ phản hồi trong vòng 2 giờ",
        en: "Submit your drawing or part number; our specialized engineers will respond within 2 hours"
      },
      wireframeLayout: {
        containerType: "Split Grid (Left: Multi-field B2B RFQ Form, Right: Office Info & Instant Zalo/Hotline Channels)",
        columns: "7 cols Form / 5 cols Office & Direct Channels",
        hierarchy: [
          "1. RFQ Form: 회사명, 담당자명, 연락처, 이메일, 제품 분류 선택, 도면 첨부, 메시지",
          "2. Instant Messenger Connect (Zalo Chat Button, WhatsApp, WeChat)",
          "3. Emergency Hotline Card (긴급 기술 지원 24/7 번호)",
          "4. Local Office Details (북부 하노이/박닌 사무소, 남부 호치민/빈증 사무소)",
          "5. Submit Action with GDPR/Data Privacy note"
        ],
        mobileBehavior: "Form first, followed by one-tap call / Zalo floating bar"
      },
      components: [
        {
          name: "B2BRfqForm",
          type: "Interactive Form with Validation",
          purpose: "설비 도입 및 교체용 정밀 견적 정보 획득",
          spec: "Inputs with company name, email, phone, product interest multi-select, specs note",
          dataFields: ["company", "contactPerson", "phone", "email", "category", "targetModel", "notes"]
        },
        {
          name: "ZaloConnectButton",
          type: "Instant Chat Action",
          purpose: "베트남 현지에서 가장 보편적인 비즈니스 메신저인 Zalo를 통한 즉시 채팅 유도",
          spec: "Zalo Blue branded button with QR code popover",
          dataFields: ["zaloOaUrl", "qrCodeImage"]
        },
        {
          name: "OfficeDirectory",
          type: "Location Card List",
          purpose: "실제 현지 법인 주소 및 사업자 등록 번호 표기로 신뢰성 확보",
          spec: "Cards for Hanoi/Bac Ninh and HCMC/Binh Duong with direct call links",
          dataFields: ["branchName", "address", "taxCode", "managerPhone"]
        }
      ],
      b2bRationale: {
        koreaBenchmark: "한국 사이트는 게시판형 Q&A 또는 이메일 문의가 중심이라 베트남 현지 공장의 실시간 긴급 소통 니즈를 충족하지 못함",
        vietnamOptimization: "베트남 국민 메신저인 Zalo 연동 버튼과 원터치 직통 전화, 2시간 견적 보증 약속을 배치하여 문의 이탈률을 최소화"
      },
      dataPayloadExample: {
        northOffice: {
          name: "North Tech Center (Hà Nội / Bắc Ninh)",
          address: "No. 18, VSIP Bac Ninh Industrial Park, Tu Son, Bac Ninh, Vietnam",
          hotline: "+84 222-389-9988"
        },
        southOffice: {
          name: "South Support Center (TP.HCM / Bình Dương)",
          address: "Lot CN-02, VSIP 2 Industrial Park, Ben Cat, Binh Duong, Vietnam",
          hotline: "+84 274-378-8866"
        }
      }
    }
  }
};

export const IA_COMPARISON_DATA: IaComparisonPoint[] = [
  {
    dimension: "정보 구조 & 뎁스 (Navigation & Depth)",
    koreaSite: {
      state: "전형적인 다단계 계층형 (GNB 4개 대분류 > 중분류 > 소분류 > 제품상세 > 카탈로그 다운로드)",
      limitation: "모바일 환경에서 클릭 수가 많고 탐색 피로도가 높음. 베트남 현장 담당자가 신속히 부품을 찾기 어려움"
    },
    vietnamSinglePage: {
      strategy: "고효율 B2B 단일 페이지(One-Page) + 스티키 섹션 네비게이션 & 카테고리 탭 필터링",
      b2bBenefit: "스크롤만으로 [Hero(신뢰) -> Brands(공식인증) -> Products(스펙확인) -> Features(현지강점) -> Contact(견적)]까지 1분 내 파악 가능"
    }
  },
  {
    dimension: "전환 목표 & 리드 수집 (Conversion & CTA)",
    koreaSite: {
      state: "단순 회사 소개 및 PDF 카탈로그 조회/다운로드 위주의 정보 제공형",
      limitation: "방문자 리드(이름, 회사, 필요한 품번)를 수집하는 자동화 퍼널이 취약함"
    },
    vietnamSinglePage: {
      strategy: "각 제품 카드마다 '즉시 견적 요청(RFQ)' & '원클릭 Zalo 상담' 직결",
      b2bBenefit: "실제 구매 결정권자(설비팀장, 구매팀원)의 견적 문의율(Conversion Rate) 대폭 향상"
    }
  },
  {
    dimension: "현지화 소통 채널 (Localization & Channels)",
    koreaSite: {
      state: "한국 유선전화 번호 및 이메일 폼(게시판)",
      limitation: "베트남 현지 공장에서 국제전화나 한국어 이메일 문의 시 언어 및 시차 장벽 발생"
    },
    vietnamSinglePage: {
      strategy: "Zalo 공식 비즈니스 채널(OA), 현지 핫라인, 다국어(한국어/베트남어/영어) 실시간 전환",
      b2bBenefit: "베트남 현지 엔지니어와 한국 주재원 모두 모국어로 편안하게 즉각 소통 가능"
    }
  },
  {
    dimension: "핵심 소구점 (Value Proposition)",
    koreaSite: {
      state: "국내 제조사 레퍼런스 및 제품 기술 규격 자체에 집중",
      limitation: "베트남 제조 공장의 가장 큰 불안 요소인 '수입 통관 지연'과 '현지 A/S 불가'를 해소하지 못함"
    },
    vietnamSinglePage: {
      strategy: "베트남 보세창고 48시간 납품, 한국인 엔지니어 현장 출동, 공식 C/O 발급 및 Hóa Đơn(세금계산서) 전면 배치",
      b2bBenefit: "외국계 및 한국 진출 대기업 협력사의 외주 검증 기준(Audit)을 한 번에 충족"
    }
  }
];
