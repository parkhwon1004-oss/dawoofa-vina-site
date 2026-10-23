import { FaProductItem, Language } from '../types';
import { DAWOOFA_PRODUCTS } from './dawoofaData';

export interface ProductCategoryDef {
  id: string;
  nameKo: string;
  nameVn: string;
  nameEn: string;
  shortDescKo: string;
  shortDescVn: string;
}

export const OFFICIAL_CATEGORIES: ProductCategoryDef[] = [
  {
    "id": "servo",
    "nameKo": "서보 시스템 (Servo)",
    "nameVn": "Động cơ Servo & Driver (Servo)",
    "nameEn": "Servo System",
    "shortDescKo": "미쓰비시 MR-J5 / MR-J4, DD모터",
    "shortDescVn": "Mitsubishi MR-J5 / MR-J4 & DD Motor"
  },
  {
    "id": "inverter",
    "nameKo": "범용 인버터 (Inverter)",
    "nameVn": "Biến tần công nghiệp (Inverter)",
    "nameEn": "Industrial Inverter (VFD)",
    "shortDescKo": "미쓰비시 FREQROL A800 / E800",
    "shortDescVn": "Mitsubishi FREQROL A800 / E800"
  },
  {
    "id": "plc",
    "nameKo": "PLC 및 제어기기 (PLC & HMI)",
    "nameVn": "Bộ lập trình PLC & Màn hình GOT",
    "nameEn": "PLC & HMI Controls",
    "shortDescKo": "MELSEC iQ-R, iQ-F, GOT2000",
    "shortDescVn": "MELSEC iQ-R, iQ-F, GOT2000"
  },
  {
    "id": "dawoorobot",
    "nameKo": "다우로봇 (Dawoo Robot)",
    "nameVn": "Robot tọa độ Dawoo (Dawoo Robot)",
    "nameEn": "Dawoo Cartesian & Gantry Robots",
    "shortDescKo": "직교좌표 로봇 및 고강성 갠트리 로봇 시스템",
    "shortDescVn": "Robot tọa độ vuông góc & Hệ thống Gantry"
  },
  {
    "id": "robot",
    "nameKo": "산업용 로봇 (Industrial Robot)",
    "nameVn": "Robot công nghiệp (Industrial Robot)",
    "nameEn": "Industrial Articulated Robots",
    "shortDescKo": "6축 수직다관절 및 스카라 산업용 로봇",
    "shortDescVn": "Robot 6 trục đa khớp & Robot SCARA"
  },
  {
    "id": "wtr",
    "nameKo": "웨이퍼로봇 (WTR Robot)",
    "nameVn": "Robot chuyển Wafer (WTR Robot)",
    "nameEn": "Cleanroom Wafer Transfer Robots (WTR)",
    "shortDescKo": "반도체·디스플레이 클린룸 웨이퍼 반송 로봇",
    "shortDescVn": "Robot gắp Wafer phòng sạch Class 1"
  },
  {
    "id": "linear",
    "nameKo": "리니어모듈 (Linear Module)",
    "nameVn": "Mô-đun tuyến tính (Linear Module)",
    "nameEn": "Linear Modules",
    "shortDescKo": "고정밀 볼스크류/벨트 구동 리니어 액추에이터",
    "shortDescVn": "Mô-đun trượt tuyến tính Ball Screw & Belt"
  },
  {
    "id": "lms",
    "nameKo": "LMS 시스템 (LMS System)",
    "nameVn": "Hệ thống vận chuyển từ tính LMS",
    "nameEn": "LMS Magnetic Transfer System",
    "shortDescKo": "초고속 마그네틱 리니어 모션 반송 시스템",
    "shortDescVn": "Hệ thống băng tải từ tính tốc độ cao LMS"
  },
  {
    "id": "reducer",
    "nameKo": "정밀 감속기 (Reducer)",
    "nameVn": "Hộp giảm tốc độ chính xác (Reducer)",
    "nameEn": "Precision Planetary Reducers",
    "shortDescKo": "APEX DYNAMICS 초정밀 유성감속기",
    "shortDescVn": "APEX DYNAMICS planetary gearboxes"
  },
  {
    "id": "safety",
    "nameKo": "안전 솔루션 & 하네스 (Safety & Wiring)",
    "nameVn": "Giải pháp an toàn & Dây nối (Safety)",
    "nameEn": "Safety Solutions & Wiring Harness",
    "shortDescKo": "PILZ 안전 릴레이, 삼원ACT 하네스",
    "shortDescVn": "PILZ Safety Relays & Samwon Cables"
  },
  {
    "id": "other",
    "nameKo": "기타 자동화 기기 (Other FA)",
    "nameVn": "Thiết bị tự động hóa khác (Other)",
    "nameEn": "Other Factory Automation Hardware",
    "shortDescKo": "센서, 전원공급장치 및 악세서리",
    "shortDescVn": "Sensors, power supplies & accessories"
  }
];

export interface RepositoryImageItem {
  id: string;
  label: string;
  category: string;
  path: string;
  modelHint: string;
}

export const REPOSITORY_IMAGES: RepositoryImageItem[] = [
  {
    id: 'repo-servo-main',
    label: 'MR-J5 서보 드라이버 (SERVO.png)',
    category: 'SERVO',
    path: './assets/aistudio/images/SERVO/SERVO.png',
    modelHint: 'MELSERVO MR-J5 Series'
  },
  {
    id: 'repo-servo-j4',
    label: 'MR-J4 서보 드라이버 (j4.png)',
    category: 'SERVO',
    path: './assets/aistudio/images/SERVO/j4.png',
    modelHint: 'MELSERVO MR-J4 Series'
  },
  {
    id: 'repo-servo-nikidenso',
    label: '니키덴소 DD 모터 (nikidenso.png)',
    category: 'SERVO',
    path: './assets/aistudio/images/SERVO/nikidenso.png',
    modelHint: 'NIKKI DENSO DD Motor'
  },
  {
    id: 'repo-servo-yaskawa',
    label: '야스카와 서보 (yskawaservo.png)',
    category: 'SERVO',
    path: './assets/aistudio/images/SERVO/yskawaservo.png',
    modelHint: 'YASKAWA Sigma-7 Servo'
  },
  {
    id: 'repo-inverter',
    label: '범용 인버터 (INVERTER.png)',
    category: 'INVERTER',
    path: './assets/aistudio/images/INVERTER/INVERTER.png',
    modelHint: 'FREQROL FR-A800 / FR-E800'
  },
  {
    id: 'repo-plc-iq',
    label: 'MELSEC iQ-R PLC (IQ_PLC.png)',
    category: 'PLC',
    path: './assets/aistudio/images/PLC/IQ_PLC.png',
    modelHint: 'MELSEC iQ-R / iQ-F PLC'
  },
  {
    id: 'repo-plc-iqf',
    label: 'MELSEC iQ-F PLC (IQ_F.png)',
    category: 'PLC',
    path: './assets/aistudio/images/PLC/IQ_F.png',
    modelHint: 'MELSEC iQ-F FX5U / FX5UC PLC'
  },
  {
    id: 'repo-plc-got',
    label: 'GOT2000 터치패널 (got.png)',
    category: 'PLC',
    path: './assets/aistudio/images/PLC/got.png',
    modelHint: 'GOT2000 GT27/GT25 HMI'
  },
  {
    id: 'repo-dawoorobot-root',
    label: '다우로봇 대표 이미지 (dawoorobot_img.png)',
    category: 'DAWOOROBOT',
    path: './assets/aistudio/images/dawoorobot_img.png',
    modelHint: 'DAWOO DCR / DGR Series'
  },
  {
    id: 'repo-dawoorobot-dsn30',
    label: '다우로봇 DSN30 (DSN30.png)',
    category: 'DAWOOROBOT',
    path: './assets/aistudio/images/DAWOOROBOT/DSN30.png',
    modelHint: 'DAWOO DSN30 Robot'
  },
  {
    id: 'repo-epson-root',
    label: '산업용 로봇 (epson_img.png)',
    category: 'EPSON',
    path: './assets/aistudio/images/epson_img.png',
    modelHint: 'EPSON Industrial Robot'
  },
  {
    id: 'repo-epson-gx1',
    label: 'EPSON 스카라 로봇 (GX1-C-174-225.png)',
    category: 'EPSON',
    path: './assets/aistudio/images/EPSON/GX1-C-174-225.png',
    modelHint: 'EPSON GX1-C SCARA'
  },
  {
    id: 'repo-dkw',
    label: '리니어 모듈 (dkw_img.png)',
    category: 'ROOT',
    path: './assets/aistudio/images/dkw_img.png',
    modelHint: 'DAWOO DKW / DLN Linear Module'
  },
  {
    id: 'repo-lms',
    label: 'LMS 시스템 (lms_img.png)',
    category: 'ROOT',
    path: './assets/aistudio/images/lms_img.png',
    modelHint: 'LMS Magnetic Transfer System'
  },
  {
    id: 'repo-vsw',
    label: '웨이퍼 반송 로봇 WTR (vsw_img.png)',
    category: 'ROOT',
    path: './assets/aistudio/images/vsw_img.png',
    modelHint: 'WTR / VSW Wafer Robot'
  },
  {
    id: 'repo-gear',
    label: '정밀 유성감속기 (gear_img.png)',
    category: 'ROOT',
    path: './assets/aistudio/images/gear_img.png',
    modelHint: 'APEX DYNAMICS Planetary Gearbox'
  },
  {
    id: 'repo-pilz',
    label: 'PILZ 안전 릴레이 (PILZ.png)',
    category: 'PILZ',
    path: './assets/aistudio/images/PILZ/PILZ.png',
    modelHint: 'PILZ PNOZ Safety Relay'
  },
  {
    id: 'repo-samwon',
    label: '삼원ACT 하네스 (SAMWON.png)',
    category: 'SAMWON',
    path: './assets/aistudio/images/SAMWON/SAMWON.png',
    modelHint: 'SAMWON ACT Harness & I/O'
  },
  {
    id: 'repo-advantech',
    label: '어드밴텍 산업용 PC (advantech.png)',
    category: 'ADVANTECH',
    path: './assets/aistudio/images/ADVANTECH/advantech.png',
    modelHint: 'ADVANTECH Industrial PC'
  },
  {
    id: 'repo-logo',
    label: 'DAWOOFA VINA 공식 로고 (logo.png)',
    category: 'ROOT',
    path: './assets/aistudio/images/logo.png',
    modelHint: 'DAWOOFA VINA Logo'
  }
];

export const normalizeImagePath = (rawPath?: string): string => {
  if (!rawPath || typeof rawPath !== 'string') {
    return './assets/aistudio/images/SERVO/SERVO.png';
  }
  const p = rawPath.trim();
  if (!p) return './assets/aistudio/images/SERVO/SERVO.png';

  // Keep data URLs if any
  if (p.startsWith('data:image/')) return p;

  // Preserve any path inside assets/aistudio/images/... and enforce leading "./"
  if (p.startsWith('./assets/aistudio/images/')) return p;
  if (p.startsWith('/assets/aistudio/images/')) return `.${p}`;
  if (p.startsWith('assets/aistudio/images/')) return `./${p}`;

  // Map legacy paths to ./assets/aistudio/images/...
  const lower = p.toLowerCase();
  if (lower.includes('mr_j5') || lower.includes('mr-j5')) return './assets/aistudio/images/SERVO/SERVO.png';
  if (lower.includes('mr_j4') || lower.includes('mr-j4')) return './assets/aistudio/images/SERVO/j4.png';
  if (lower.includes('dd_motor') || lower.includes('dd-motor') || lower.includes('nikidenso')) return './assets/aistudio/images/SERVO/nikidenso.png';
  if (lower.includes('yskawaservo')) return './assets/aistudio/images/SERVO/yskawaservo.png';
  if (lower.includes('fr_a800') || lower.includes('fr-a800') || lower.includes('fr_e800') || lower.includes('fr-e800')) return './assets/aistudio/images/INVERTER/INVERTER.png';
  if (lower.includes('iq_f') || lower.includes('melsec-iqf')) return './assets/aistudio/images/PLC/IQ_F.png';
  if (lower.includes('iq_r') || lower.includes('melsec-iqr')) return './assets/aistudio/images/PLC/IQ_PLC.png';
  if (lower.includes('got2000') || lower.includes('/got.png')) return './assets/aistudio/images/PLC/got.png';
  if (lower.includes('pilz_safety') || lower.includes('pilz-safety')) return './assets/aistudio/images/PILZ/PILZ.png';
  if (lower.includes('samwon_harness') || lower.includes('samwon-harness')) return './assets/aistudio/images/SAMWON/SAMWON.png';
  if (lower.includes('reducer') || lower.includes('apex-reducer') || lower.includes('gear_img')) return './assets/aistudio/images/gear_img.png';
  if (lower.includes('dawoo-robot') || lower.includes('dawoorobot_img')) return './assets/aistudio/images/dawoorobot_img.png';
  if (lower.includes('wtr.jpg') || lower.includes('wtr-robot') || lower.includes('vsw_img')) return './assets/aistudio/images/vsw_img.png';
  if (lower.includes('robot.jpg') || lower.includes('industrial-robot') || lower.includes('epson_img')) return './assets/aistudio/images/epson_img.png';
  if (lower.includes('lms-system') || lower.includes('lms_img')) return './assets/aistudio/images/lms_img.png';
  if (lower.includes('linear.jpg') || lower.includes('linear-module') || lower.includes('dkw_img')) return './assets/aistudio/images/dkw_img.png';

  // Ensure any /assets/... or assets/... path starts with ./ for GitHub Pages subdirectory support
  if (p.startsWith('/assets/')) {
    return `.${p}`;
  }
  if (p.startsWith('assets/')) {
    return `./${p}`;
  }
  if (p.startsWith('./')) {
    return p;
  }

  return `./${p.replace(/^\/+/, '')}`;
};

export interface HeroSlideItem {
  id: string;
  slideNumber: number;
  badge: {
    ko: string;
    vi: string;
    en: string;
  };
  title: {
    ko: string;
    vi: string;
    en: string;
  };
  subtitle: {
    ko: string;
    vi: string;
    en: string;
  };
  image: string;
  ctaText: {
    ko: string;
    vi: string;
    en: string;
  };
  targetModel: string;
  highlightPoints: {
    ko: string[];
    vi: string[];
    en: string[];
  };
}

export interface HeroSliderSettings {
  intervalSeconds: number; // default: 4 (4초)
  autoPlay: boolean;
  slides: HeroSlideItem[];
}

export const DEFAULT_HERO_SLIDES: HeroSlideItem[] = [
  {
    "id": "slide-1",
    "slideNumber": 1,
    "badge": {
      "ko": "한국미쓰비시전기 공식 대리점 1급 특약점 (주)다우에프에이 베트남 법인",
      "vi": "ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC CHÍNH THỨC - DAWOOFA VINA",
      "en": "MITSUBISHI ELECTRIC TIER-1 AUTHORIZED DISTRIBUTOR - DAWOOFA VINA"
    },
    "title": {
      "ko": "MELSERVO MR-J5 & MR-J4 서보 시스템 베트남 보세창고 대량 보유",
      "vi": "Hệ Thống Servo Cao Cấp MELSERVO MR-J5 & MR-J4 Sẵn Kho Việt Nam",
      "en": "Premium MELSERVO MR-J5 & MR-J4 Servo Systems In Stock in Vietnam"
    },
    "subtitle": {
      "ko": "박닌 & 빈증 물류센터에서 24~48시간 이내 긴급 납품 및 기술지원, 현지 A/S 대응 완비",
      "vi": "Kho ngoại quan Bắc Ninh & Bình Dương giao hàng trong 24~48h, hỗ trợ kỹ thuật và dịch vụ A/S tại chỗ.",
      "en": "Bac Ninh & Binh Duong bonded warehouses 24-48h rapid dispatch with resident technical support & local A/S."
    },
    "image": "./assets/aistudio/images/SERVO/SERVO.png",
    "ctaText": {
      "ko": "MR-J5 즉시 견적 확인",
      "vi": "Yêu cầu báo giá MR-J5",
      "en": "Get MR-J5 Instant Quote"
    },
    "targetModel": "MELSERVO MR-J5 Series",
    "highlightPoints": {
      "ko": [
        "26-bit 배터리리스 절대위치 엔코더 탑재",
        "CC-Link IE TSN 1Gbps 초고속 다축 동기 제어",
        "100% 정품 C/O, C/Q 및 세금계산서 발행"
      ],
      "vi": [
        "Bộ mã hóa quang học 26-bit không cần pin dự phòng",
        "Mạng CC-Link IE TSN 1Gbps điều khiển đồng bộ nhiều trục",
        "100% chính hãng C/O, C/Q & Hóa đơn đỏ VAT"
      ],
      "en": [
        "26-bit battery-less absolute encoder",
        "1Gbps CC-Link IE TSN multi-axis synchronization",
        "100% genuine C/O, C/Q & VAT compliance"
      ]
    }
  },
  {
    "id": "slide-2",
    "slideNumber": 2,
    "badge": {
      "ko": "FREQROL A800 / E800 범용 인버터 전 용량 상시 공급 체계",
      "vi": "BIẾN TẦN CÔNG NGHIỆP FREQROL A800 & E800 SERIES CHÍNH HÃNG",
      "en": "GENUINE FREQROL A800 & E800 INDUSTRIAL INVERTER SERIES"
    },
    "title": {
      "ko": "산업용 고성능 벡터 인버터 & 이더넷 내장 컴팩트 인버터 즉시 출고",
      "vi": "Biến Tần Vector Thời Gian Thực & Biến Tần Nhỏ Gọn Tích Hợp Ethernet",
      "en": "High-Performance Real-Time Sensorless Vector & Compact Dual-Ethernet Inverters"
    },
    "subtitle": {
      "ko": "0.1kW ~ 500kW 전 라인업 보유, 크레인/권상기/반송 라인용 최적 단가 공급 및 파라미터 튜닝 지원",
      "vi": "Công suất từ 0.1kW ~ 500kW, chuyên dụng cho cẩu trục, băng chuyền và máy móc tự động hóa.",
      "en": "0.1kW to 500kW full line-up for hoists, extruders, winders and automated conveyor lines."
    },
    "image": "./assets/aistudio/images/INVERTER/INVERTER.png",
    "ctaText": {
      "ko": "인버터 전 모델 견적 문의",
      "vi": "Báo giá biến tần A800/E800",
      "en": "Inverter Quote Request"
    },
    "targetModel": "FREQROL FR-A800 / FR-E800",
    "highlightPoints": {
      "ko": [
        "0.3Hz 200% 강력한 기동 토크 실현",
        "베트남 고온다습 환경 대응 특수 방습 코팅 기판",
        "당일 출고 및 현장 파라미터 셋업"
      ],
      "vi": [
        "Mô-men khởi động 200% ở tần số 0.3Hz siêu thấp",
        "Bo mạch phủ chống ẩm thích ứng khí hậu nhiệt đới Việt Nam",
        "Giao ngay trong ngày & cài đặt tham số tận nơi"
      ],
      "en": [
        "200% starting torque at 0.3Hz low speed",
        "Conformal coated PCB for tropical industrial durability",
        "Same-day dispatch & parameter tuning"
      ]
    }
  },
  {
    "id": "slide-3",
    "slideNumber": 3,
    "badge": {
      "ko": "스마트 팩토리 코어 컨트롤러 MELSEC iQ-R & iQ-F PLC / GOT2000",
      "vi": "HỆ THỐNG PLC MELSEC iQ-R & iQ-F VÀ MÀN HÌNH HMI GOT2000",
      "en": "MELSEC iQ-R & iQ-F PLC & GOT2000 HMI INDUSTRIAL AUTOMATION"
    },
    "title": {
      "ko": "나노초(0.98ns) 시퀀스 처리 PLC 및 고해상도 터치패널 GOT2000",
      "vi": "Bộ Điều Khiển PLC Tốc Độ Nano Giây & Màn Hình Cảm Ứng GOT2000 Sắc Nét",
      "en": "Nanosecond (0.98ns) High-Speed PLC & Crystal Clear GOT2000 HMIs"
    },
    "subtitle": {
      "ko": "멀티 CPU 시퀀스+모션 제어, 베트남 현지 공정 라인 신규 구축 및 개조 기술지원 완비",
      "vi": "Cấu hình đa CPU điều khiển tuần tự và chuyển động, hỗ trợ lập trình cải tiến dây chuyền.",
      "en": "Multi-CPU sequence & motion architecture with resident software engineering support."
    },
    "image": "./assets/aistudio/images/PLC/IQ_PLC.png",
    "ctaText": {
      "ko": "PLC & HMI 견적 확인",
      "vi": "Yêu cầu báo giá PLC / HMI",
      "en": "Request PLC / HMI Quote"
    },
    "targetModel": "MELSEC iQ-R / iQ-F / GOT2000",
    "highlightPoints": {
      "ko": [
        "0.98ns 초고속 시퀀스 명령 실행 처리",
        "GOT2000 원격 VNC 모니터링 기능 기본 내장",
        "다우FA 한국 본사 상주 엔지니어 기술지원"
      ],
      "vi": [
        "Tốc độ xử lý lệnh cơ bản 0.98ns tối ưu nhịp máy",
        "Tính năng giám sát VNC từ xa qua điện thoại/máy tính",
        "Kỹ sư chuyên gia Hàn Quốc thường trực tại Việt Nam"
      ],
      "en": [
        "0.98ns ultra-high sequence execution",
        "Integrated remote VNC diagnostic server",
        "Resident Korea FA senior application engineers"
      ]
    }
  },
  {
    "id": "slide-4",
    "slideNumber": 4,
    "badge": {
      "ko": "다우로봇(DAWOO ROBOT) & 감속기 • 리니어 모듈 토탈 솔루션",
      "vi": "ROBOT DAWOO FA, HỘP GIẢM TỐC APEX VÀ MÔ-ĐUN TUYẾN TÍNH",
      "en": "DAWOO ROBOT, APEX PLANETARY REDUCERS & LINEAR ACTUATORS"
    },
    "title": {
      "ko": "다우 단축로봇 & APEX 감속기, 리니어 모듈 시스템",
      "vi": "Robot giảm tốc Dow & APEX giảm tốc, hệ thống module linear",
      "en": "6-Axis Articulated Robots, Precision Reducers & LMS Transfer Systems"
    },
    "subtitle": {
      "ko": "박닌 기술센터 데모룸 운영, 서보 직결 백래시 제어 감속기 ",
      "vi": "Phòng Demo tại Bắc Ninh, hộp số hành tinh độ rơ dưới ",
      "en": "Bac Ninh demo center, < 1 arcmin low-backlash reducers & Class 1 WTR semiconductor robots."
    },
    "image": "./assets/aistudio/images/dawoorobot_img.png",
    "ctaText": {
      "ko": "로봇 & 감속기 문의",
      "vi": "Tư vấn Robot & Giảm tốc",
      "en": "Robot & Reducer Inquiry"
    },
    "targetModel": "DAWOO ROBOT / APEX Gearbox",
    "highlightPoints": {
      "ko": [
        "반복정밀도 ±0.02mm 6축 다관절 로봇",
        "백래시 1 arcmin 이하 초정밀 유성감속기",
        "현장 티칭, 설치 및 신속 유지보수 사후관리"
      ],
      "vi": [
        "Độ chính xác lặp lại ±0.02mm cho Robot 6 trục",
        "Hộp giảm tốc bánh răng nghiêng độ rơ cực thấp",
        "Chuyển giao công nghệ, dạy học trực tiếp tại xưởng"
      ],
      "en": [
        "±0.02mm precision 6-axis robotics",
        "< 1 arcmin ultra-low backlash planetary reducers",
        "Turnkey on-site teaching and calibration"
      ]
    }
  },
  {
    "id": "slide-1792758888225",
    "slideNumber": 5,
    "badge": {
      "vi": "AD BANNER #05 • DAWOOFA VINA",
      "ko": "광고 배너 #05 • 다우에프에이 비나",
      "en": "AD BANNER #05 • DAWOOFA VINA"
    },
    "title": {
      "vi": "Tốc độ phản ứng nhanh, hoạt động tốc độ cao, độ tin cậy cao và cấu trúc đơn giản.",
      "ko": "빠른 반응 속도와 고속 작동,높은 신뢰성과 단순한 구조",
      "en": "New Main Promotional Banner Title"
    },
    "subtitle": {
      "vi": "Điều khiển lực đẩy lớn, tốc độ cao, gia tốc cao, mật độ cố định, cú đánh dài, trượt đa năng",
      "ko": "큰 추력, 고속, 높은 가속도, 고정밀, 롱 스트로크, 멀티슬라이드 제어",
      "en": "Enter detailed promotional description and featured FA products."
    },
    "image": "./assets/aistudio/images/dkw_img.png",
    "targetModel": "DKW Linear",
    "ctaText": {
      "vi": "Yêu cầu báo giá",
      "ko": "견적 문의하기",
      "en": "Request Quote"
    },
    "highlightPoints": {
      "ko": [
        "100% 정품 C/O, C/Q 보증",
        "박닌 & 빈증 물류센터 24~48h 직송"
      ],
      "vi": [
        "100% chính hãng C/O, C/Q",
        "Giao nhanh 24~48h từ kho Bắc Ninh & Bình Dương"
      ],
      "en": [
        "100% Genuine C/O & C/Q",
        "24-48h dispatch from Bac Ninh & Binh Duong"
      ]
    }
  },
  {
    "id": "slide-1792761529327",
    "slideNumber": 6,
    "badge": {
      "vi": "AD BANNER #06 • DAWOOFA VINA",
      "ko": "광고 배너 #06 • 다우에프에이 비나",
      "en": "AD BANNER #06 • DAWOOFA VINA"
    },
    "title": {
      "vi": "Sản phẩm tích hợp công nghệ tiên tiến trong và ngoài nước của hộp số hành tinh chính xác",
      "ko": "정밀 행성 기어 박스 국내외의 첨단 기술을 통합한 제품",
      "en": "New Main Promotional Banner Title"
    },
    "subtitle": {
      "vi": "1. Tiếng ồn thấp: dưới 65db.\n\n2. Bạch vệ thấp: Đối với một giai đoạn đơn, bạch vệ dưới 3 arcmin. Giai đoạn 2 là dưới 5 arcmin.\n\n3. Hiệu suất cao: trên 95% đối với giai đoạn đơn, trên 92% đối với giai đoạn 2.\n\n4. Tốc độ đầu vào cao: 8.000 vòng/phút.",
      "ko": "1. 낮은 소음: 65db 이하.\n\n2. 낮은 백래시: 단일 단계의 경우 백래시가 3 arcmin 미만입니다. 2단계의 경우 5 arcmin 미만입니다.\n\n3. 높은 효율: 단일 단계의 경우 95% 이상, 2단계의 경우 92% 이상.\n\n4. 높은 입력 속도: 최대 8000RPM.",
      "en": "Enter detailed promotional description and featured FA products."
    },
    "image": "./assets/aistudio/images/gear_img.png",
    "targetModel": "Gear Box",
    "ctaText": {
      "vi": "Yêu cầu báo giá",
      "ko": "견적 문의하기",
      "en": "Request Quote"
    },
    "highlightPoints": {
      "ko": [
        "100% 정품 C/O, C/Q 보증",
        "박닌 & 빈증 물류센터 24~48h 직송"
      ],
      "vi": [
        "100% chính hãng C/O, C/Q",
        "Giao nhanh 24~48h từ kho Bắc Ninh & Bình Dương"
      ],
      "en": [
        "100% Genuine C/O & C/Q",
        "24-48h dispatch from Bac Ninh & Binh Duong"
      ]
    }
  },
  {
    "id": "slide-1792761794419",
    "slideNumber": 7,
    "badge": {
      "vi": "AD BANNER #07 • DAWOOFA VINA",
      "ko": "광고 배너 #07 • 다우에프에이 비나",
      "en": "AD BANNER #07 • DAWOOFA VINA"
    },
    "title": {
      "vi": "Dây chuyền truyền tải circuit tiêu chuẩn chuyển động từ thông minh linh hoạt",
      "ko": "유연한 지능형 자기 구동 표준 서킷 전송라인",
      "en": "New Main Promotional Banner Title"
    },
    "subtitle": {
      "vi": "Nó có thể được áp dụng cho các ngành công nghiệp như 3C, pin lithium, y tế, đồ uống lon.",
      "ko": "3C, 리튬전지, 의료, 캔 음료등 업종에 적용 가능",
      "en": "Enter detailed promotional description and featured FA products."
    },
    "image": "./assets/aistudio/images/lms_img.png",
    "targetModel": "LMS system",
    "ctaText": {
      "vi": "Yêu cầu báo giá",
      "ko": "견적 문의하기",
      "en": "Request Quote"
    },
    "highlightPoints": {
      "ko": [
        "100% 정품 C/O, C/Q 보증",
        "박닌 & 빈증 물류센터 24~48h 직송"
      ],
      "vi": [
        "100% chính hãng C/O, C/Q",
        "Giao nhanh 24~48h từ kho Bắc Ninh & Bình Dương"
      ],
      "en": [
        "100% Genuine C/O & C/Q",
        "24-48h dispatch from Bac Ninh & Binh Duong"
      ]
    }
  }
];

export const DEFAULT_SLIDER_SETTINGS: HeroSliderSettings = {
  "intervalSeconds": 4,
  "autoPlay": true,
  "slides": DEFAULT_HERO_SLIDES
};

export interface CompanyInfo {
  // Company Names
  companyNameVn: string;
  companyNameKo: string;
  companyNameEn: string;
  subTitleVn: string;
  subTitleKo: string;
  subTitleEn: string;

  // Addresses
  northAddress: string;
  northTitleVn: string;
  northTitleKo: string;
  southAddress: string;
  southTitleVn: string;
  southTitleKo: string;

  // Korea HQ
  koreaHqName: string;
  koreaHqAddress: string;
  koreaHqUrl: string;

  // Contact Details
  hotline: string;
  email: string;
  salesEmail: string;
  taxId: string;
  zaloOa: string;
  zaloUrl: string;
  businessHoursVn: string;
  businessHoursKo: string;

  // Hero headline & description overrides
  heroTitleVn: string;
  heroTitleKo: string;
  heroSubtitleVn: string;
  heroSubtitleKo: string;
}

export const DEFAULT_COMPANY_INFO: CompanyInfo = {
  "companyNameVn": "CÔNG TY TNHH DAWOOFA VINA",
  "companyNameKo": "(주)다우에프에이 베트남 법인",
  "companyNameEn": "DAWOOFA VINA CO., LTD.",
  "subTitleVn": "Đại lý ủy quyền Mitsubishi Electric • Hệ thống Servo, Biến tần, PLC, HMI công nghiệp",
  "subTitleKo": "한국미쓰비시전기 공식 대리점 • 서보 시스템, 범용 인버터, 제어기기 전문 유통 및 기술지원",
  "subTitleEn": "Mitsubishi Electric Authorized Tier-1 Distributor • Factory Automation Solutions",
  "northTitleVn": "TRUNG TÂM KỸ THUẬT MIỀN BẮC (BẮC NINH)",
  "northTitleKo": "베트남 북부 기술물류 허브 (박닌 본사)",
  "northAddress": "Số 18, Đường 3, KCN VSIP Bắc Ninh, Phường Phù Chẩn, TP. Từ Sơn, Tỉnh Bắc Ninh",
  "southTitleVn": "TRUNG TÂM KỸ THUẬT MIỀN NAM (BÌNH DƯƠNG)",
  "southTitleKo": "베트남 남부 물류영업 허브 (빈증 지사)",
  "southAddress": "Lô CN-02, Đường D1, KCN VSIP 2, Thị xã Bến Cát, Tỉnh Bình Dương",
  "koreaHqName": "(주)다우에프에이 한국 본사",
  "koreaHqAddress": "충남 천안시 서북구 백석공단1로 10, 미래에이스하이테크시티",
  "koreaHqUrl": "http://www.dawooservo.co.kr",
  "hotline": "+84 222-389-9988",
  "email": "h.park@hindikosolution.com",
  "salesEmail": "sales@dawoofavina.com",
  "taxId": "2301192888",
  "zaloOa": "@dawoofavina_official",
  "zaloUrl": "https://zalo.me",
  "businessHoursVn": "08:00 - 17:30 (Thứ 2 ~ Thứ 7) • Hỗ trợ kỹ thuật khẩn cấp 24/7",
  "businessHoursKo": "08:00 - 17:30 (월 ~ 토) • 라인스톱 비상 긴급 대응 24/7",
  "heroTitleVn": "Tổng Đại Lý Phân Phối Thiết Bị Tự Động Hóa FA & Kỹ Thuật, Dịch Vụ A/S Tại Chỗ",
  "heroTitleKo": "베트남 현지 공장자동화(FA) 설비 부품 공식 유통 및 기술지원 및 현지A/S대응",
  "heroSubtitleVn": "Kế thừa hơn 20 năm kinh nghiệm từ trụ sở Dawoo FA Hàn Quốc (dawooservo.co.kr), Dawoofa Vina phân phối chính thức hệ thống Servo MELSERVO (MR-J5, MR-J4), biến tần FREQROL (A800, E800), bộ điều khiển PLC MELSEC và màn hình HMI GOT2000. Cam kết 100% hàng chính hãng, đầy đủ C/O và C/Q, có sẵn kho tại Bắc Ninh & Bình Dương, giao hàng trong 24~48h và kỹ thuật, dịch vụ A/S tại chỗ chuyên nghiệp.",
  "heroSubtitleKo": "한국 다우에프에이(dawooservo.co.kr)의 20년 현장 기술 노하우를 바탕으로, 미쓰비시전기 공식 대리점 정품 MELSERVO 서보 시스템(MR-J5, MR-J4), FREQROL 인버터(A800, E800), MELSEC iQ-R/F PLC를 베트남 현지 보세창고(박닌/빈증)에 상시 보유하여 최적 단가와 24~48시간 신속 직송으로 공급하며, 현지 전문 기술지원 및 현지A/S대응 체계를 완비하고 있습니다."
};

export const EXTENDED_INITIAL_PRODUCTS: FaProductItem[] = [
  {
    "id": "prod-mr-j5",
    "category": "servo",
    "categoryLabel": {
      "ko": "서보 시스템 (Servo)",
      "vi": "Động cơ Servo & Driver (Servo)",
      "en": "Servo System"
    },
    "modelName": "Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "차세대 고속 CC-Link IE TSN 통신 지원, 26bit 광학식 엔코더 탑재, 초정밀 동기 위치 제어.",
      "vi": "Hỗ trợ mạng CC-Link IE TSN tốc độ cao, bộ mã hóa 26-bit, điều khiển vị trí siêu chính xác.",
      "en": "Next-gen servo system with CC-Link IE TSN, 26-bit optical absolute encoder."
    },
    "specs": {
      "powerCapacity": "0.1 kW ~ 22 kW (200V / 400V)",
      "inputVoltage": "3-Phase AC 200~240V / 380~480V",
      "controlMode": "CC-Link IE TSN (1Gbps 고속 통신)",
      "encoderResolution": "26-bit (67,108,864 p/rev)",
      "overloadCapacity": "정격 350% 최대 순시 토크",
      "protectionRating": "Động cơ IP67 chống nước/bụi"
    },
    "features": {
      "vi": [
        "Hỗ trợ mạng CC-Link IE TSN 1Gbps điều khiển đồng bộ nhiều trục",
        "Bộ mã hóa quang học 26-bit không cần pin dự phòng",
        "Tần số đáp ứng tốc độ 3.5 kHz cao nhất ngành công nghiệp"
      ],
      "ko": [
        "초고속 CC-Link IE TSN 1Gbps 통신으로 초정밀 다축 동기 제어 실현",
        "26bit 광학식 배터리리스 절대위치 엔코더 기본 장착",
        "업계 최고 수준 3.5 kHz 속도 주파수 응답성 실현"
      ],
      "en": [
        "1Gbps CC-Link IE TSN high-speed multi-axis synchronization",
        "26-bit battery-less absolute optical encoder",
        "Industry-leading 3.5 kHz speed frequency response"
      ]
    },
    "image": "./assets/aistudio/images/SERVO/SERVO.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 상시 재고 (24~48h 납기)",
      "en": "Local buffer stock (24-48h delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-mr-j4",
    "category": "servo",
    "categoryLabel": {
      "ko": "서보 시스템 (Servo)",
      "vi": "Động cơ Servo & Driver (Servo)",
      "en": "Servo System"
    },
    "modelName": "Mitsubishi Electric / MELSERVO MR-J4 Series (MR-J4-B / HG-SR)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "업계 최고 수준의 속도 응답 주파수(2.5kHz), SSCNET III/H 광통신, 고신뢰성 범용 서보.",
      "vi": "Tần số đáp ứng 2.5kHz, mạng quang SSCNET III/H, dòng servo tiêu chuẩn độ tin cậy cao.",
      "en": "Industry-leading 2.5kHz speed frequency response with SSCNET III/H fiber optic bus."
    },
    "specs": {
      "powerCapacity": "0.1 kW ~ 55 kW",
      "inputVoltage": "3-Phase AC 200~240V / 380~480V",
      "controlMode": "SSCNET III/H (Cáp quang chống nhiễu)",
      "encoderResolution": "22-bit (4,194,304 p/rev)",
      "overloadCapacity": "300% 정격 토크 (고과부하 대응)",
      "protectionRating": "Động cơ IP67 chống bụi/nước"
    },
    "features": {
      "vi": [
        "Mạng cáp quang SSCNET III/H triệt tiêu hoàn toàn nhiễu công nghiệp",
        "Bộ mã hóa 22-bit độ phân giải cao định vị mượt mà",
        "Kho dự phòng khẩn cấp dồi dào phục vụ thay thế dây chuyền"
      ],
      "ko": [
        "SSCNET III/H 광통신 버스로 설비 노이즈 완벽 차단",
        "22비트 고분해능 엔코더 및 진동 억제 제어 알고리즘",
        "베트남 현지 라인 비상 유지보수용 긴급 재고 다량 확보"
      ],
      "en": [
        "SSCNET III/H optical fiber bus for complete noise immunity",
        "22-bit high-resolution encoder with vibration suppression",
        "Abundant local spare parts stock for emergency plant support"
      ]
    },
    "image": "./assets/aistudio/images/SERVO/j4.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 긴급 교체용 보유 (당일 출고)",
      "en": "Emergency stock available (Same-day dispatch)"
    },
    "isHot": true
  },
  {
    "id": "prod-nikki-dd",
    "category": "servo",
    "categoryLabel": {
      "ko": "서보 시스템 (Servo)",
      "vi": "Động cơ Servo & Driver (Servo)",
      "en": "Servo System"
    },
    "modelName": "Nikki Denso / Direct Drive (DD) Motor & Linear Servo",
    "brand": "NIKKI DENSO",
    "tagline": {
      "ko": "감속기 없는 직접 구동 인덱스 모터, 백래시 제로 고정밀 회전, 고속 리니어 액추에이터.",
      "vi": "Động cơ Direct Drive không hộp số, độ rơ bằng không, truyền động tuyến tính tốc độ cao.",
      "en": "High-precision direct drive rotary motor with zero backlash and linear servo solutions."
    },
    "specs": {
      "powerCapacity": "Torque: 1.2 Nm ~ 500 Nm",
      "inputVoltage": "3-Phase AC 200V",
      "controlMode": "Pulse / EtherCAT / MECHATROLINK",
      "encoderResolution": "20-bit Absolute (Zero Backlash)",
      "overloadCapacity": "300% 순간 최대 토크",
      "protectionRating": "IP55 / Cleanroom Spec"
    },
    "features": {
      "vi": [
        "Dẫn động trực tiếp tải trọng không qua hộp giảm tốc, triệt tiêu độ rơ",
        "Định vị góc quay chính xác cao cho mâm xoay và bàn chia độ",
        "Giải pháp Linear servo tốc độ cao cho gắp thả linh kiện điện tử"
      ],
      "ko": [
        "감속기 배제로 기구적 백래시 0(Zero) 실현 및 마모 방지",
        "고정밀 인덱스 회전 테이블 및 반도체·디스플레이 검사 장비 최적화",
        "고속 리니어 서보 액추에이터로 초고속 픽앤플레이스 구현"
      ],
      "en": [
        "Zero mechanical backlash without gearbox wear",
        "Ultra-precise rotary indexing for semiconductor inspection",
        "High-speed linear actuators for high-throughput pick & place"
      ]
    },
    "image": "./assets/aistudio/images/SERVO/nikidenso.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Kho dự án (Giao trong 3~5 ngày hoặc 2 tuần)",
      "ko": "프로젝트 전용 재고 및 납기 3~5일 대응",
      "en": "Project stock (3-5 days delivery)"
    },
    "isHot": false
  },
  {
    "id": "prod-fr-a800",
    "category": "inverter",
    "categoryLabel": {
      "ko": "범용 인버터 (Inverter)",
      "vi": "Biến tần công nghiệp (Inverter)",
      "en": "Industrial Inverter (VFD)"
    },
    "modelName": "Mitsubishi Electric / FR-A800 Series (FR-A820 / FR-A840)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "리얼 센서리스 벡터 제어, 크레인/권상기 및 중부하 공정용 고성능 플래그십 인버터.",
      "vi": "Điều khiển vector không cảm biến thời gian thực, chuyên dụng cho cẩu trục và tải nặng.",
      "en": "Premium high-performance inverter with advanced real-time sensorless vector control."
    },
    "specs": {
      "powerCapacity": "0.4 kW ~ 500 kW (중부하 플래그십)",
      "inputVoltage": "3-Phase AC 200~240V / 380~480V",
      "controlMode": "Real Sensorless Vector / V/F / Vector Control",
      "encoderResolution": "Hỗ trợ cạc truyền thông CC-Link, Profibus, EtherCAT",
      "overloadCapacity": "200% trong 60 giây (HD Heavy Duty)",
      "protectionRating": "IP20 / IP00 (Công suất lớn)"
    },
    "features": {
      "vi": [
        "Mô-men khởi động 200% ở 0.3Hz với điều khiển vector không cảm biến",
        "Chức năng chuyên dụng cho tời nâng, cẩu trục, máy đùn và máy cuộn",
        "Hỗ trợ đầy đủ chức năng dừng an toàn STO SIL3"
      ],
      "ko": [
        "0.3Hz 극저속에서 200% 고기동 토크 실현 (리얼 센서리스 벡터)",
        "크레인·호이스트, 권상기, 압출기 등 중부하 설비 최적화 파라미터",
        "기능 안전 규격 STO (SIL3 / PLe) 표준 대응"
      ],
      "en": [
        "200% starting torque at 0.3Hz with real sensorless vector",
        "Dedicated crane, hoist, winder, and heavy extruder applications",
        "Integrated STO SIL3 / PLe functional safety"
      ]
    },
    "image": "./assets/aistudio/images/INVERTER/INVERTER.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 대형 용량 상시 재고 보유",
      "en": "In-stock in Vietnam (24-48h delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-fr-e800",
    "category": "inverter",
    "categoryLabel": {
      "ko": "범용 인버터 (Inverter)",
      "vi": "Biến tần công nghiệp (Inverter)",
      "en": "Industrial Inverter (VFD)"
    },
    "modelName": "Mitsubishi Electric / FR-E800 Series (FR-E820 / FR-E840)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "컴팩트 고기능 인버터, 이더넷 내장, 소형 반송 설비 및 라인 표준화 최적 모델.",
      "vi": "Biến tần nhỏ gọn đa năng, tích hợp Ethernet, tối ưu cho băng tải và máy móc tự động.",
      "en": "Compact high-performance inverter with built-in Ethernet for versatile automation machinery."
    },
    "specs": {
      "powerCapacity": "0.1 kW ~ 30 kW",
      "inputVoltage": "1-Phase 100/200V, 3-Phase 200~240V / 380~480V",
      "controlMode": "CC-Link IE TSN / Modbus / Dual Ethernet",
      "encoderResolution": "Dual Port Ethernet (Tích hợp sẵn)",
      "overloadCapacity": "150% 60초, 200% 3초",
      "protectionRating": "IP20 / Bo mạch phủ chống ẩm môi trường"
    },
    "features": {
      "vi": [
        "Tích hợp sẵn 2 cổng Ethernet hỗ trợ CC-Link IE TSN, Modbus-TCP",
        "Kích thước siêu nhỏ gọn, lắp đặt sát nhau tiết kiệm tủ điện",
        "Mạch điện tử sơn phủ chống chịu nhiệt đới ẩm Việt Nam"
      ],
      "ko": [
        "듀얼 포트 이더넷 내장 (CC-Link IE TSN, Modbus/TCP 대응)",
        "초소형 컴팩트 사이즈로 제어반 밀착 설치 가능",
        "베트남 고온다습 환경에 대응하는 특수 방습 코팅 기판 적용"
      ],
      "en": [
        "Dual Ethernet ports supporting CC-Link IE TSN & Modbus/TCP",
        "Ultra-compact side-by-side mounting for compact enclosures",
        "Conformal coated PCB resistant to tropical industrial humidity"
      ]
    },
    "image": "./assets/aistudio/images/INVERTER/INVERTER.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 대량 보유 (당일 즉시 출고)",
      "en": "Bulk stock ready in Vietnam (Immediate delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-iq-r",
    "category": "plc",
    "categoryLabel": {
      "ko": "PLC 및 제어기기 (PLC & HMI)",
      "vi": "Bộ lập trình PLC & Màn hình GOT",
      "en": "PLC & HMI Controls"
    },
    "modelName": "Mitsubishi Electric / MELSEC iQ-R Series (R04CPU / R08CPU)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "나노초 단위 초고속 연산 처리, 멀티 CPU 시스템 지원, 스마트 팩토리 코어 컨트롤러.",
      "vi": "Tốc độ xử lý nano giây, hỗ trợ cấu hình đa CPU, bộ điều khiển trung tâm cho Smart Factory.",
      "en": "Nanosecond-level high-speed sequence processing, multi-CPU architecture controller."
    },
    "specs": {
      "powerCapacity": "Tốc độ xử lý lệnh cơ bản 0.98ns (LD)",
      "inputVoltage": "AC 100~240V / DC 24V Nguồn Module",
      "controlMode": "CC-Link IE TSN, Ethernet, Motion Bus",
      "encoderResolution": "Dung lượng I/O mở rộng tới 4,096 điểm",
      "overloadCapacity": "Hỗ trợ cấu hình Multi-CPU (Sequence + Motion + Safety + C)",
      "protectionRating": "Chống ồn điện từ công nghiệp cấp cao"
    },
    "features": {
      "vi": [
        "Xử lý lệnh siêu tốc 0.98ns rút ngắn chu kỳ máy sản xuất",
        "Hỗ trợ kết hợp đồng thời CPU Tuần tự + CPU Chuyển động + CPU An toàn",
        "Ghi nhật ký dữ liệu sản xuất trực tiếp phục vụ chuẩn đoán thông minh"
      ],
      "ko": [
        "0.98ns 초고속 시퀀스 처리로 생산 택트 타임(Tact Time) 단축",
        "시퀀스 CPU + 모션 CPU + 세이프티 CPU 멀티 구성 지원",
        "스마트 팩토리 품질 추적용 데이터 로깅 엔진 내장"
      ],
      "en": [
        "0.98ns high-speed execution reducing factory tact times",
        "Multi-CPU support: Sequence, Motion, Safety & C-Controller",
        "Built-in data logging for Smart Factory traceability"
      ]
    },
    "image": "./assets/aistudio/images/PLC/IQ_PLC.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 CPU 및 I/O 모듈 상시 보유",
      "en": "CPU & I/O Modules In-Stock (24-48h delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-iq-f",
    "category": "plc",
    "categoryLabel": {
      "ko": "PLC 및 제어기기 (PLC & HMI)",
      "vi": "Bộ lập trình PLC & Màn hình GOT",
      "en": "PLC & HMI Controls"
    },
    "modelName": "Mitsubishi Electric / MELSEC iQ-F Series (FX5U / FX5UC)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "올인원 컴팩트 PLC, 내장 아날로그 및 고속 카운터, 독립 장비 제어 최적화.",
      "vi": "PLC All-in-one nhỏ gọn, tích hợp sẵn analog và đếm xung tốc độ cao cho máy độc lập.",
      "en": "All-in-one compact PLC with built-in analog and high-speed counter for standalone machines."
    },
    "specs": {
      "powerCapacity": "Tốc độ xử lý lệnh cơ bản 34ns (LD)",
      "inputVoltage": "AC 100~240V / DC 24V (FX5UC)",
      "controlMode": "Tích hợp sẵn cổng Ethernet, RS-485, Khe cắm thẻ SD",
      "encoderResolution": "Ngõ ra xung 4 trục tốc độ cao 200kHz",
      "overloadCapacity": "Mở rộng tối đa 512 điểm I/O",
      "protectionRating": "Tiêu chuẩn công nghiệp CE / UL"
    },
    "features": {
      "vi": [
        "Tích hợp sẵn 2 ngõ vào Analog + 1 ngõ ra Analog",
        "Ngõ ra xung 4 trục điều khiển vị trí trực tiếp không cần module mở rộng",
        "Cổng Ethernet tích hợp hỗ trợ kết nối trực tiếp với HMI GOT và SCADA"
      ],
      "ko": [
        "아날로그 입출력(2ch In / 1ch Out) 기본 내장",
        "내장 4축 고속 펄스 출력(200kHz)으로 독립 장비 서보 제어",
        "내장 이더넷 포트로 GOT 터치패널 및 상위 PC 손쉬운 연결"
      ],
      "en": [
        "Built-in analog I/O (2 inputs / 1 output)",
        "Built-in 4-axis 200kHz pulse outputs for direct servo positioning",
        "Embedded Ethernet port for seamless GOT & SCADA networking"
      ]
    },
    "image": "./assets/aistudio/images/PLC/IQ_F.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 모델별 다량 보유 (당일 출고)",
      "en": "Bulk stock in Vietnam (Immediate delivery)"
    },
    "isHot": false
  },
  {
    "id": "prod-got2000",
    "category": "plc",
    "categoryLabel": {
      "ko": "PLC 및 제어기기 (PLC & HMI)",
      "vi": "Bộ lập trình PLC & Màn hình GOT",
      "en": "PLC & HMI Controls"
    },
    "modelName": "Mitsubishi Electric / GOT2000 Series (GT27 / GT25 / GS21)",
    "brand": "Mitsubishi Electric",
    "tagline": {
      "ko": "고화질 터치스크린 HMI, 다양한 산업용 통신 인터페이스 및 원격 모니터링 대응.",
      "vi": "Màn hình cảm ứng HMI sắc nét, hỗ trợ đa cổng giao tiếp và giám sát từ xa.",
      "en": "High-resolution touch screen HMI supporting multiple industrial interfaces & remote monitoring."
    },
    "specs": {
      "powerCapacity": "Kích thước: 7\", 8.4\", 10.4\", 12.1\", 15\" TFT",
      "inputVoltage": "AC 100~240V / DC 24V",
      "controlMode": "Dual Ethernet, RS-232, RS-422/485, USB Host/Device",
      "encoderResolution": "Độ phân giải 65,536 màu TFT LCD",
      "overloadCapacity": "Tính năng VNC Client/Server, FTP, Web Server",
      "protectionRating": "Mặt trước IP67F kháng dầu kháng nước"
    },
    "features": {
      "vi": [
        "Hỗ trợ thao tác cảm ứng đa điểm mượt mà và phóng to/thu nhỏ",
        "Chức năng VNC giám sát và điều khiển dây chuyền từ xa qua điện thoại/máy tính",
        "Kết nối trực tiếp không cần cấu hình với PLC Mitsubishi và các hãng thứ ba"
      ],
      "ko": [
        "스마트폰과 유사한 직관적 멀티터치 제스처 조작 지원",
        "VNC 서버 내장으로 스마트폰/태블릿 원격 모니터링 및 제어",
        "미쓰비시 PLC 및 이기종 인버터·로봇 통신 드라이버 기본 탑재"
      ],
      "en": [
        "Smooth multi-touch gestures and zoom functionality",
        "Integrated VNC server for tablet and mobile remote diagnostics",
        "Seamless communication drivers for Mitsubishi and 3rd party PLCs"
      ]
    },
    "image": "./assets/aistudio/images/PLC/got.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "각 사이즈별 상시 보유 (당일 출고)",
      "en": "All sizes stocked locally (Immediate dispatch)"
    },
    "isHot": true
  },
  {
    "id": "prod-pilz-pnoz",
    "category": "safety",
    "categoryLabel": {
      "ko": "안전 솔루션 & 하네스 (Safety & Wiring)",
      "vi": "Giải pháp an toàn & Dây nối (Safety)",
      "en": "Safety Solutions & Wiring Harness"
    },
    "modelName": "PILZ / PNOZ Multi & PNOZ s Series (Safety Relay)",
    "brand": "PILZ",
    "tagline": {
      "ko": "국제 안전 인증 최고 등급(PLe / SIL3) 지원, 소형 세이프티 릴레이 및 모듈러 컨트롤러.",
      "vi": "Đạt tiêu chuẩn an toàn cao nhất PLe / SIL3, rơ le an toàn và bộ điều khiển an toàn mô-đun.",
      "en": "Certified to highest safety standards (PLe/SIL3), modular safety controllers and relays."
    },
    "specs": {
      "powerCapacity": "Chuẩn an toàn: ISO 13849-1 PLe, IEC 62061 SIL CL 3",
      "inputVoltage": "DC 24V Nguồn cấp an toàn",
      "controlMode": "Safety BUS, Ngõ ra Relay an toàn bán dẫn",
      "encoderResolution": "Ứng dụng: Nút dừng khẩn cấp E-STOP, Màn chắn quang, Khóa cửa an toàn",
      "overloadCapacity": "Mô-đun mở rộng đa kênh độc lập",
      "protectionRating": "IP20 Vỏ Din-rail nhỏ gọn chống cháy"
    },
    "features": {
      "vi": [
        "Chứng nhận an toàn quốc tế cấp cao nhất PLe và SIL CL 3",
        "Cài đặt cấu hình trực quan qua phần mềm PNOZmulti Configurator",
        "Bảo vệ an toàn tối đa cho kỹ sư vận hành máy móc tự động"
      ],
      "ko": [
        "국제 공인 안전 최고 등급 EN ISO 13849-1 PLe 및 IEC 62061 SIL 3 인증",
        "PNOZmulti Configurator 소프트웨어로 드래그 앤 드롭 안전 로직 구성",
        "공장 내 로봇 셀, 자동화 라인 긴급정지 및 도어 인터록 표준 적용"
      ],
      "en": [
        "Certified to highest international safety levels PLe & SIL 3",
        "Intuitive drag-and-drop safety logic design with PNOZmulti software",
        "Standardized for robotic cell emergency stops and safety interlocking"
      ]
    },
    "image": "./assets/aistudio/images/PILZ/PILZ.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 규격별 상시 재고 보유",
      "en": "In-stock in Vietnam (24-48h delivery)"
    },
    "isHot": false
  },
  {
    "id": "prod-samwon-act",
    "category": "safety",
    "categoryLabel": {
      "ko": "안전 솔루션 & 하네스 (Safety & Wiring)",
      "vi": "Giải pháp an toàn & Dây nối (Safety)",
      "en": "Safety Solutions & Wiring Harness"
    },
    "modelName": "SAMWON ACT / 서보 전용 하네스 케이블 & I/O 인터페이스 단자대",
    "brand": "SAMWON ACT",
    "tagline": {
      "ko": "미쓰비시/야스카와 전용 내유·고굴곡 서보 하네스 케이블, 릴레이 단자대 및 PLC 인터페이스 블록.",
      "vi": "Cáp servo chống dầu uốn dẻo cho Mitsubishi/Yaskawa, hộp cầu đấu I/O và khối giao tiếp PLC.",
      "en": "High-flex oil-resistant servo harness cables and PLC interface terminal blocks."
    },
    "specs": {
      "powerCapacity": "Kiểm tra uốn uốn gập > 10.000.000 lần (Bending test)",
      "inputVoltage": "Dây lực 서보 600V cấp / Dây Encoder chống nhiễu",
      "controlMode": "Đầu nối MIL Spec, Hirose, Molex, 3M chuẩn xác",
      "encoderResolution": "Khối cầu đấu Push-in lò xo chống lỏng vít",
      "overloadCapacity": "Chống dầu cắt gọt máy CNC, chống cháy UL",
      "protectionRating": "Cáp IP67 / Cầu đấu Din-rail IP20"
    },
    "features": {
      "vi": [
        "Gia công chính xác 1:1 theo tiêu chuẩn dây dẫn hãng Mitsubishi & Yaskawa",
        "Vỏ ngoài bọc PUR chịu dầu gia công cơ khí và chống gãy gập trong xích dẫn cáp",
        "Hộp cầu đấu I/O Relay rút ngắn 80% thời gian đấu nối tủ điện điều khiển"
      ],
      "ko": [
        "미쓰비시(MELSERVO) 및 야스카와(Sigma) 1:1 전용 커넥터 하네스 일체형",
        "케이블 베어 내 1,000만 회 굴곡 시험을 통과한 내유성 PUR 피복 적용",
        "원터치 Push-in I/O 단자대로 제어반 결선 시간 80% 이상 단축"
      ],
      "en": [
        "Direct 1:1 harness assembly for Mitsubishi MELSERVO & Yaskawa Sigma",
        "Oil-resistant PUR jacket tested for over 10 million flexing cycles",
        "Push-in I/O interface blocks reducing cabinet wiring time by 80%"
      ]
    },
    "image": "./assets/aistudio/images/SAMWON/SAMWON.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay trong ngày)",
      "ko": "표준 길이별 상시 재고 보유 (당일 포장 출고)",
      "en": "Standard lengths in-stock (Same-day dispatch)"
    },
    "isHot": false
  },
  {
    "id": "prod-apex-reducer",
    "category": "reducer",
    "categoryLabel": {
      "ko": "정밀 감속기 (Reducer)",
      "vi": "Hộp giảm tốc độ chính xác (Reducer)",
      "en": "Precision Planetary Reducers"
    },
    "modelName": "APEX DYNAMICS / High-Precision Planetary Gearbox (AB / AF Series)",
    "brand": "APEX DYNAMICS",
    "tagline": {
      "ko": "초정밀 백래시 제어 유성 감속기 (< 1 arcmin), 미쓰비시 및 야스카와 서보 모터 완벽 직결.",
      "vi": "Hộp giảm tốc hành tinh độ chính xác cao, độ rơ < 1 arcmin, tối ưu hóa cho động cơ servo.",
      "en": "High-precision low-backlash planetary gearbox engineered for servo motors."
    },
    "specs": {
      "powerCapacity": "Tỷ số truyền: 1/3 ~ 1/100 (1단 / 2단)",
      "inputVoltage": "Tương thích động cơ 서보 50W ~ 15kW",
      "controlMode": "Mặt bích tiêu chuẩn DIN / NEMA 직결",
      "encoderResolution": "Độ rơ cơ khí siêu thấp < 1 arcmin",
      "overloadCapacity": "Hiệu suất truyền động > 97%",
      "protectionRating": "Tiêu chuẩn bảo vệ IP65 kháng nước/bụi"
    },
    "features": {
      "vi": [
        "Răng xoắn nghiêng tôi cao tần truyền mô-men êm ái không tiếng ồn",
        "Mặt bích gia công CNC chính xác tương thích 100% trục servo Mitsubishi MR-J5/J4",
        "Dầu bôi trơn tổng hợp trọn đời không cần bảo dưỡng định kỳ"
      ],
      "ko": [
        "침탄 열처리 헬리컬 기어 적용으로 저소음 및 고효율(97% 이상) 실현",
        "미쓰비시 MR-J5 및 야스카와 서보 모터 규격별 100% 전용 플랜지 공급",
        "합성 윤활유 봉입으로 제품 수명 기간 내 무보수(Maintenance-Free) 운전"
      ],
      "en": [
        "Precision helical gearing for ultra-quiet and smooth torque delivery",
        "100% direct-mount adapter flanges for Mitsubishi & Yaskawa servos",
        "Synthetic grease sealed for lifetime maintenance-free operation"
      ]
    },
    "image": "./assets/aistudio/images/gear_img.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 주요 감속비 상시 보유 (당일 출고)",
      "en": "Popular ratios in-stock in Vietnam (24-48h dispatch)"
    },
    "isHot": true
  },
  {
    "id": "prod-dawoo-cartesian-robot",
    "category": "dawoorobot",
    "categoryLabel": {
      "ko": "다우로봇 (Dawoo Robot)",
      "vi": "Robot tọa độ Dawoo (Dawoo Robot)",
      "en": "Dawoo Cartesian & Gantry Robots"
    },
    "modelName": "DAWOO ROBOT / 3-Axis Cartesian & Heavy Gantry Robot (DCR / DGR Series)",
    "brand": "DAWOO ROBOT",
    "tagline": {
      "ko": "고강성 알루미늄 바디 기반 3~4축 직교좌표 로봇 및 대하중 갠트리 로봇 시스템 (반복정밀도 ±0.01mm).",
      "vi": "Robot tọa độ vuông góc 3~4 trục & hệ thống Gantry khung nhôm độ cứng vững cao, độ lặp lại ±0.01mm.",
      "en": "High-rigidity 3-axis cartesian & heavy gantry robot system with ±0.01mm repeatability."
    },
    "specs": {
      "powerCapacity": "가반하중: 최대 50kg (DCR) ~ 150kg (DGR Gantry)",
      "inputVoltage": "AC 200~240V / 미쓰비시·야스카와 서보 직결 구동",
      "controlMode": "CC-Link IE TSN, SSCNET III/H, EtherCAT 다축 보간 제어",
      "encoderResolution": "반복 위치 정밀도 ±0.01 mm (C5급 연삭 볼스크류)",
      "overloadCapacity": "최대 이송 속도 2,000 ~ 2,500 mm/s",
      "protectionRating": "내장형 케이블베이어 및 방진 실드 구조 (ISO Class 5 대응)"
    },
    "features": {
      "vi": [
        "C5 cấp vít me bi mài chính xác cao kết hợp ray dẫn hướng LM bản rộng",
        "Thiết kế tối ưu cho tự động hóa lắp ráp, Dispensing, bắt vít và chuyển phôi Pin xe điện",
        "Sẵn linh kiện tiêu chuẩn tại kho Bắc Ninh, thiết kế hành trình tùy chỉnh nhanh chóng"
      ],
      "ko": [
        "C5급 초정밀 연삭 볼스크류 및 광폭 LM 가이드 일체형 고강성 직교 로봇",
        "디스펜싱, 스크류 체결, 픽앤플레이스 및 2차전지 배터리 팩 이송 공정 최적화",
        "박닌/빈증 현지 기술진 맞춤 스트로크 설계 및 2D/3D CAD 데이터 즉시 지원"
      ],
      "en": [
        "Class C5 ground ballscrew with wide LM guide for maximum rigidity",
        "Optimized for dispensing, screw fastening, pick-and-place & EV battery handling",
        "Custom stroke engineering and rapid assembly at Vietnam technical center"
      ]
    },
    "image": "./assets/aistudio/images/dawoorobot_img.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Có sẵn kho Bắc Ninh (Giao trong 3~5 ngày)",
      "ko": "베트남 현지 표준 모듈 보유 (3~5일 내 맞춤 출고)",
      "en": "Local modular stock in Vietnam (3-5 days dispatch)"
    },
    "isHot": true
  },
  {
    "id": "prod-dawoo-robot-6axis",
    "category": "robot",
    "categoryLabel": {
      "ko": "산업용 로봇 (Industrial Robot)",
      "vi": "Robot công nghiệp (Industrial Robot)",
      "en": "Industrial Articulated Robots"
    },
    "modelName": "DAWOO FA / 6-Axis Articulated Industrial Robot (DW-R6 Series)",
    "brand": "DAWOO ROBOT",
    "tagline": {
      "ko": "고정밀 6축 수직다관절 산업용 로봇, 가반하중 7~20kg, 반복 정밀도 ±0.02mm, 다우 FA 기술지원.",
      "vi": "Robot công nghiệp 6 trục đa khớp, tải trọng 7~20kg, tầm với 910~1800mm độ lặp lại ±0.02mm.",
      "en": "6-Axis articulated industrial robot with 7~20kg payload and ±0.02mm repeatability."
    },
    "specs": {
      "powerCapacity": "Tải trọng gắp: 7kg / 12kg / 20kg",
      "inputVoltage": "AC 200~240V 3-Phase 50/60Hz",
      "controlMode": "EtherCAT, Modbus-TCP, CC-Link IE Field",
      "encoderResolution": "Độ chính xác lặp lại ±0.02 mm",
      "overloadCapacity": "Tầm với bán kính 910mm ~ 1810mm",
      "protectionRating": "Cấp bảo vệ cổ tay IP67 kháng nước cắt"
    },
    "features": {
      "vi": [
        "Tối ưu hóa cho hàn, gắp thả linh kiện điện tử, bốc xếp Palletizing và sơn phủ",
        "Bộ dạy học Teach Pendant màn hình cảm ứng giao diện trực quan",
        "Đội ngũ kỹ sư DAWOO FA VINA trực tiếp lập trình và hiệu chuẩn tại nhà máy"
      ],
      "ko": [
        "전자부품 조립, 스크류 체결, 팔레타이징 및 검사 공정 전용 티칭 프로그램",
        "직관적인 터치스크린 펜던트 조작으로 초보 엔지니어도 당일 셋업 가능",
        "다우에프에이 베트남 상주 엔지니어가 직접 설치 티칭 및 현장 사후관리"
      ],
      "en": [
        "Engineered for electronics assembly, screw fastening, palletizing & QA",
        "Intuitive touch teach-pendant for rapid operational deployment",
        "Direct on-site teaching and calibration by Dawoo FA Vina engineers"
      ]
    },
    "image": "./assets/aistudio/images/epson_img.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Kho dự án Bắc Ninh (Giao & Chuyển giao 3~5 ngày)",
      "ko": "박닌 데모룸 보유 및 3~5일 현장 납품 셋업 대응",
      "en": "Bac Ninh demo unit ready (3-5 days delivery & setup)"
    },
    "isHot": true
  },
  {
    "id": "prod-linear-module",
    "category": "linear",
    "categoryLabel": {
      "ko": "리니어모듈 (Linear Module)",
      "vi": "Mô-đun tuyến tính (Linear Module)",
      "en": "Linear Modules"
    },
    "modelName": "DAWOO FA / High-Precision Linear Actuator Module (DLN / DKW Series)",
    "brand": "DAWOO FA",
    "tagline": {
      "ko": "고강성 볼스크류 및 벨트 구동 고정밀 리니어 모듈 액추에이터 (반복 정밀도 ±0.005mm).",
      "vi": "Cụm mô-đun trượt tuyến tính Ball Screw & Belt Drive độ cứng vững cao, độ lặp lại ±0.005mm.",
      "en": "High-rigidity precision ball screw & belt drive linear module actuator."
    },
    "specs": {
      "powerCapacity": "Hành trình 유효 스트로크: 100mm ~ 3,000mm",
      "inputVoltage": "Tương thích 서보 모터 100W ~ 1,500W",
      "controlMode": "SSCNET III/H, CC-Link IE TSN, Pulse",
      "encoderResolution": "Độ lặp lại vị trí ±0.005mm (C5 Grade)",
      "overloadCapacity": "최대 가반하중 120kg / 속도 2,000 mm/s",
      "protectionRating": "Dải băng chắn bụi Inox (스테인리스 방진 밴드)"
    },
    "features": {
      "vi": [
        "Thanh ray trượt dẫn hướng LM Guide Nhật Bản chịu tải cao và bền bỉ",
        "Tích hợp sẵn bệ gá động cơ servo Mitsubishi MR-J5 và cảm biến cữ hành trình",
        "Cung cấp kèm bản vẽ CAD 2D/3D phục vụ thiết kế máy tự động"
      ],
      "ko": [
        "고강성 알루미늄 압출 베이스 및 정밀 연삭 C5급 볼스크류/LM 가이드 일체형 구조",
        "미쓰비시 서보 모터 장착용 전용 마운팅 브라켓 및 포토 리미트 센서 표준 장착",
        "장비 설계용 2D/3D CAD 모델링 데이터 전 규격 무상 제공"
      ],
      "en": [
        "Rigid aluminum extrusion base with C5 ground ballscrew and LM guides",
        "Pre-machined motor brackets for Mitsubishi MR-J5 with photo sensors",
        "Full 2D/3D CAD models readily available for machine designers"
      ]
    },
    "image": "./assets/aistudio/images/dkw_img.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng thanh phôi (Lắp ráp giao trong 48h)",
      "ko": "현지 가공 조립 라인 운영 (주문 후 24~48h 신속 납품)",
      "en": "Assembled in Vietnam (24-48h express delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-lms-system",
    "category": "lms",
    "categoryLabel": {
      "ko": "LMS 시스템 (LMS System)",
      "vi": "Hệ thống vận chuyển từ tính LMS",
      "en": "LMS Magnetic Transfer System"
    },
    "modelName": "DAWOO FA / High-Speed LMS Magnetic Linear Transfer System (LMS-M Series)",
    "brand": "DAWOO FA",
    "tagline": {
      "ko": "차세대 초고속 마그네틱 리니어 반송 시스템(LMS), 다중 캐리어 개별 동기/독립 제어 솔루션.",
      "vi": "Hệ thống vận chuyển từ tính tuyến tính LMS tốc độ cao 4.0m/s, điều khiển độc lập từng con trượt.",
      "en": "Next-gen high-speed magnetic linear motion transfer system (LMS) with independent carrier control."
    },
    "specs": {
      "powerCapacity": "최대 이송 속도: 4,000 mm/s (가속도 4G)",
      "inputVoltage": "DC 48V / AC 200~240V 모듈형 트랙 전원",
      "controlMode": "EtherCAT / CC-Link IE TSN 다축 정밀 동기 제어",
      "encoderResolution": "정지 반복 정밀도 ±0.01 mm (고분해능 마그네틱 스케일)",
      "overloadCapacity": "캐리어당 가반하중 1kg ~ 30kg (무접촉/저마찰 구동)",
      "protectionRating": "클린룸 대응 무분진 구조 (2차전지/반도체/디스플레이)"
    },
    "features": {
      "vi": [
        "Điều khiển độc lập vị trí, tốc độ từng con trượt (Shuttle/Carrier) trên cùng đường ray",
        "Tốc độ vận chuyển siêu cao 4m/s, loại bỏ dây cáp chuyển động, không sinh bụi",
        "Tối ưu hóa cho dây chuyền lắp ráp Pin xe điện (EV Battery), bán dẫn và mô-đun 카메라"
      ],
      "ko": [
        "단일 순환 트랙 위 다수의 캐리어(Shuttle)를 개별 가감속 및 초정밀 위치 동기 제어",
        "케이블베이어가 없는 비접촉 자기부상 추진 방식으로 분진 발생 제로 및 초장수명 실현",
        "2차전지 조립 라인, 반도체 패키징 및 스마트폰 카메라 모듈 고속 검사 공정 최적화"
      ],
      "en": [
        "Independent position and velocity control for multiple shuttles on a single track",
        "Cable-free magnetic propulsion eliminating dust generation and mechanical wear",
        "Ideal for EV battery assembly, semiconductor packaging and high-speed inspection"
      ]
    },
    "image": "./assets/aistudio/images/lms_img.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Kho dự án Bắc Ninh (Tư vấn kỹ thuật & Cung cấp 1~2 tuần)",
      "ko": "박닌 기술센터 표준 트랙 보유 및 맞춤 설계 대응",
      "en": "Bac Ninh engineering hub modular track stock available"
    },
    "isHot": true
  },
  {
    "id": "prod-wtr-clean-robot",
    "category": "wtr",
    "categoryLabel": {
      "ko": "웨이퍼로봇 (WTR Robot)",
      "vi": "Robot chuyển Wafer (WTR Robot)",
      "en": "Cleanroom Wafer Transfer Robots (WTR)"
    },
    "modelName": "DAWOO FA / Cleanroom Wafer Transfer Robot (WTR-Class 1 Series)",
    "brand": "DAWOO ROBOT",
    "tagline": {
      "ko": "Class 1 클린룸 인증 고진공 웨이퍼 반송 WTR 로봇, 반도체 및 디스플레이 전공정 특화.",
      "vi": "Robot gắp 웨이퍼 phòng sạch đạt chuẩn Class 1, chuyên dụng cho dây chuyền bán dẫn & FPD.",
      "en": "Class 1 cleanroom wafer transfer robot specialized for semiconductor & display fabs."
    },
    "specs": {
      "powerCapacity": "Tương thích 웨이퍼 200mm (8\") & 300mm (12\")",
      "inputVoltage": "AC 200~220V 50/60Hz Clean Power",
      "controlMode": "SECS/GEM 통신 및 고속 Ethernet 인터페이스",
      "encoderResolution": "Độ lặp lại vị trí siêu cao ±0.01 mm",
      "overloadCapacity": "Thiết kế cánh tay kép (Dual Arm) gắp song song",
      "protectionRating": "Tiêu chuẩn độ sạch ISO Class 1 / FED Class 1"
    },
    "features": {
      "vi": [
        "Cánh tay làm bằng vật liệu Ceramic/Carbon siêu nhẹ triệt tiêu tĩnh điện ESD",
        "Đạt tiêu chuẩn phòng sạch khắt khe ISO Class 1 cho nhà máy bán dẫn",
        "Thuật toán chống rung độc quyền bảo đảm an toàn tuyệt đối cho wafer giá trị cao"
      ],
      "ko": [
        "정전기 방지(ESD) 세라믹/카본 엔드이펙터 적용으로 웨이퍼 스크래치 방지",
        "글로벌 반도체 라인 기준 충족 ISO Class 1 고진공 클린룸 규격",
        "초정밀 진동 억제 궤적 제어로 고가 웨이퍼 낙하 및 미세 크랙 방지"
      ],
      "en": [
        "ESD-safe ceramic/carbon end-effectors preventing wafer contamination",
        "Certified ISO Class 1 ultra-clean design for advanced semiconductor fabs",
        "Proprietary active vibration control safeguarding fragile wafers"
      ]
    },
    "image": "./assets/aistudio/images/vsw_img.png",
    "inStockVietnam": false,
    "leadTime": {
      "vi": "Hàng đặt dự án kỹ thuật (2~3 tuần)",
      "ko": "반도체 프로젝트 전용 엔지니어링 발주 대응 (2~3주)",
      "en": "Project-specific engineering order (2-3 weeks)"
    },
    "isHot": false
  },
  {
    "id": "prod-yaskawa-sigma7",
    "category": "servo",
    "categoryLabel": {
      "ko": "서보 시스템 (Servo)",
      "vi": "Động cơ Servo & Driver (Servo)",
      "en": "Servo System"
    },
    "modelName": "YASKAWA / Sigma-7 AC Servo System (SGD7S / SGM7J Series)",
    "brand": "YASKAWA",
    "tagline": {
      "ko": "초고응답 주파수(3.1kHz) 및 24bit 엔코더 탑재 범용 AC 서보 시스템, 튜닝리스 기능 지원.",
      "vi": "Hệ thống servo AC đa năng tích hợp bộ mã hóa 24-bit đáp ứng tần số siêu cao 3.1kHz.",
      "en": "High-response AC servo system with 24-bit high resolution encoder and tuning-less feature."
    },
    "specs": {
      "powerCapacity": "50W ~ 15kW (200V / 400V)",
      "inputVoltage": "AC 200~240V / 380~480V",
      "controlMode": "MECHATROLINK-III, EtherCAT, Analog/Pulse",
      "encoderResolution": "24-bit (16,777,216 p/rev)",
      "overloadCapacity": "350% 최대 순시 토크",
      "protectionRating": "IP67 방진/방수 등급"
    },
    "features": {
      "vi": [
        "Tần số đáp ứng 3.1kHz hàng đầu ngành công nghiệp",
        "Chức năng Tuning-less tự động điều chỉnh không cần cài đặt phức tạp",
        "Có sẵn kho dự án tại Bắc Ninh & Bình Dương"
      ],
      "ko": [
        "3.1kHz 초고응답 주파수로 설비 택트 타임 극대화",
        "게인 조정 없이 즉시 안정 운전이 가능한 튜닝리스 기능 내장",
        "박닌 및 빈증 기술물류 허브 상시 재고 대응"
      ],
      "en": [
        "3.1kHz industry-leading frequency response",
        "Built-in tuning-less operation for instant commissioning",
        "Ready stock in Bac Ninh & Binh Duong hubs"
      ]
    },
    "image": "./assets/aistudio/images/SERVO/yskawaservo.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "현지 보세창고 상시 재고 보유 (24~48h 납기)",
      "en": "In stock in Vietnam (24-48h delivery)"
    },
    "isHot": false
  },
  {
    "id": "prod-ls-is7",
    "category": "inverter",
    "categoryLabel": {
      "ko": "범용 인버터 (Inverter)",
      "vi": "Biến tần công nghiệp (Inverter)",
      "en": "Industrial Inverter (VFD)"
    },
    "modelName": "LS ELECTRIC / Starvert iS7 High-Torque Inverter Series",
    "brand": "LS ELECTRIC",
    "tagline": {
      "ko": "정밀 센서리스 벡터 제어 및 고기동 토크를 지원하는 고성능 산업용 범용 인버터.",
      "vi": "Biến tần công nghiệp hiệu suất cao điều khiển vector không cảm biến từ Hàn Quốc.",
      "en": "Industrial high-performance inverter with precise sensorless vector control."
    },
    "specs": {
      "powerCapacity": "0.75 kW ~ 160 kW",
      "inputVoltage": "3-Phase AC 200~230V / 380~480V",
      "controlMode": "V/F, Sensorless Vector, Flux Vector",
      "encoderResolution": "RS-485, Modbus-RTU, Profibus-DP, EtherNet/IP",
      "overloadCapacity": "중부하 150% 60초 / 200% 3초",
      "protectionRating": "IP20 / IP54 방진형 옵션"
    },
    "features": {
      "vi": [
        "Đáp ứng mô-men xoắn mạnh mẽ cho tải nặng công nghiệp",
        "Màn hình LCD đa ngôn ngữ dễ dàng cài đặt tham số",
        "Sẵn hàng tại kho Việt Nam, đầy đủ C/O Hàn Quốc"
      ],
      "ko": [
        "강력한 저속 토크 및 정밀 속도/토크 제어 성능 제공",
        "와이드 그래픽 LCD 키패드로 직관적인 파라미터 복사/설정",
        "한국산 정품 원산지 증명(C/O) 및 현지 보세창고 즉시 출고"
      ],
      "en": [
        "Powerful low-speed torque and precise vector control",
        "Wide graphic LCD keypad for easy parameter management",
        "Genuine Korean C/O with immediate Vietnam stock dispatch"
      ]
    },
    "image": "./assets/aistudio/images/INVERTER/INVERTER.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng tại kho (Giao ngay 24~48h)",
      "ko": "박닌/빈증 보세창고 상시 재고 보유",
      "en": "In stock in Vietnam (24-48h delivery)"
    },
    "isHot": false
  },
  {
    "id": "prod-dawoo-dsn30",
    "category": "dawoorobot",
    "categoryLabel": {
      "ko": "다우로봇 (Dawoo Robot)",
      "vi": "Robot tọa độ Dawoo (Dawoo Robot)",
      "en": "Dawoo Cartesian & Gantry Robots"
    },
    "modelName": "DAWOO ROBOT / DSN30 Series High-Speed Precision Cartesian Robot",
    "brand": "DAWOO ROBOT",
    "tagline": {
      "ko": "초정밀 고속 데스크탑/직교 로봇 DSN30 시리즈, 디스펜싱·솔더링·체결 및 정밀 조립 공정 특화.",
      "vi": "Robot bàn tọa độ chính xác cao DSN30 chuyên dụng cho tra keo, hàn chì và lắp ráp linh kiện điện tử.",
      "en": "High-speed precision cartesian robot DSN30 series optimized for dispensing, soldering & micro-assembly."
    },
    "specs": {
      "powerCapacity": "작업 영역: 300×300mm ~ 600×500mm (3축 / 4축)",
      "inputVoltage": "AC 200~240V 단상/삼상 겸용",
      "controlMode": "전용 모션 컨트롤러 내장, 3차원 원호/직선 보간 제어",
      "encoderResolution": "반복 위치 결정 정밀도 ±0.005 mm",
      "overloadCapacity": "최대 가반하중 15kg (고강성 프레임)",
      "protectionRating": "방진 실드 구조 및 클린룸 옵션 지원"
    },
    "features": {
      "vi": [
        "Độ cứng vững cao và độ lặp lại vị trí siêu chính xác ±0.005mm",
        "Tối ưu hóa cho dây chuyền tra keo tự động, bắt vít, hàn điểm linh kiện điện tử",
        "Hỗ trợ kỹ thuật, thiết kế đồ gá và bảo hành trực tiếp tại Bắc Ninh & Bình Dương"
      ],
      "ko": [
        "±0.005mm 초정밀 반복 위치결정 정밀도로 미소 전자부품 조립 공정 완벽 대응",
        "3차원 연속 궤적 보간 제어로 고속 실리콘/에폭시 디스펜싱 및 정밀 스크류 체결 최적화",
        "베트남 박닌·빈증 기술센터 데모 테스트 및 현장 시운전 A/S 완벽 지원"
      ],
      "en": [
        "Ultra-precise ±0.005mm repeatability for micro-electronics assembly",
        "3D continuous path interpolation for high-speed dispensing and fastening",
        "Direct engineering support and local service in Bac Ninh & Binh Duong"
      ]
    },
    "image": "./assets/aistudio/images/DAWOOROBOT/DSN30.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Có sẵn kho Bắc Ninh (Giao ngay 2~3 ngày)",
      "ko": "박닌 기술센터 상시 재고 보유 (2~3일 내 즉시 납품)",
      "en": "In stock at Bac Ninh hub (2-3 days delivery)"
    },
    "isHot": true
  },
  {
    "id": "prod-epson-gx1",
    "category": "robot",
    "categoryLabel": {
      "ko": "산업용 로봇 (Industrial Robot)",
      "vi": "Robot công nghiệp (Industrial Robot)",
      "en": "Industrial Articulated Robots"
    },
    "modelName": "EPSON / GX Series High-Speed SCARA Robot (GX1-C / GX4 / GX8)",
    "brand": "EPSON",
    "tagline": {
      "ko": "독자적인 GYROPLUS 진동 억제 센서 내장 초고속·초정밀 스카라(SCARA) 산업용 로봇.",
      "vi": "Robot SCARA tốc độ siêu cao tích hợp cảm biến GYROPLUS triệt tiêu rung động cho lắp ráp chính xác.",
      "en": "Ultra-high-speed SCARA industrial robot featuring GYROPLUS vibration reduction technology."
    },
    "specs": {
      "powerCapacity": "가반하중: 1kg ~ 20kg (암 길이 175mm ~ 1,000mm)",
      "inputVoltage": "AC 200~240V 50/60Hz",
      "controlMode": "RC700-E 컨트롤러 / EtherCAT, CC-Link, EtherNet/IP, Profinet",
      "encoderResolution": "반복 위치 정밀도 ±0.005mm ~ ±0.01mm",
      "overloadCapacity": "GYROPLUS 자이로 센서 기반 고속 가감속 제진 제어",
      "protectionRating": "표준형 IP20 / 클린룸 ISO Class 3 / 방수 IP65 옵션"
    },
    "features": {
      "vi": [
        "Công nghệ GYROPLUS độc quyền giúp giảm tối đa rung lắc khi dừng ở tốc độ cao",
        "Tối ưu hóa diện tích lắp đặt siêu nhỏ gọn cho dây chuyền bán dẫn và điện tử",
        "Đội ngũ kỹ sư DAWOO FA VINA hỗ trợ tích hợp Vision và lập trình tại chỗ"
      ],
      "ko": [
        "EPSON 독자 기술 GYROPLUS 자이로 센서 탑재로 고속 운전 시 잔류 진동 극소화",
        "슬림 바디 설계로 스마트폰, 카메라 모듈, 2차전지 소형 셀 초고속 픽앤플레이스 최적화",
        "다우에프에이 비나 현지 엔지니어 비전(Vision) 연동 및 턴키 셋업 기술지원"
      ],
      "en": [
        "Proprietary GYROPLUS gyro sensor minimizes residual vibration at high speeds",
        "Ultra-compact footprint ideal for smartphone, camera module & battery assembly",
        "Full Vision system integration and on-site commissioning by Dawoo FA Vina"
      ]
    },
    "image": "./assets/aistudio/images/EPSON/GX1-C-174-225.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Kho dự án Bắc Ninh (Giao trong 3~5 ngày)",
      "ko": "베트남 현지 프로젝트 재고 보유 (3~5일 납품 및 티칭 지원)",
      "en": "Project stock in Vietnam (3-5 days delivery & setup)"
    },
    "isHot": true
  },
  {
    "id": "prod-other-fa-sensor",
    "category": "other",
    "categoryLabel": {
      "ko": "기타 자동화 기기 (Other FA)",
      "vi": "Thiết bị tự động hóa khác (Other)",
      "en": "Other Factory Automation Hardware"
    },
    "modelName": "ADVANTECH & OMRON / 산업용 PC(IPC), 포토·근접 센서 및 SMPS 전원공급장치",
    "brand": "ADVANTECH / OMRON",
    "tagline": {
      "ko": "어드밴텍 산업용 PC(IPC)·엣지 컨트롤러 및 초고신뢰성 근접/포토센서·제어반 SMPS 파워서플라이.",
      "vi": "Máy tính công nghiệp IPC Advantech, cảm biến quang học và bộ nguồn SMPS độ bền cao IP67.",
      "en": "Advantech Industrial PCs (IPC), high-reliability sensors and industrial SMPS power supplies."
    },
    "specs": {
      "powerCapacity": "IPC: Intel Core i5/i7 팬리스 / SMPS: 15W ~ 960W (DC 24V)",
      "inputVoltage": "AC 100~240V Free Voltage / DC 12~24V",
      "controlMode": "Dual LAN, RS-232/422/485, IO-Link 스마트 센서 대응",
      "encoderResolution": "고속 응답 < 0.5ms, 설비 데이터 수집(DAS) 및 비전 검사 PC",
      "overloadCapacity": "과전류/과전압 보호 회로 및 무팬(Fanless) 방열 설계",
      "protectionRating": "센서 IP67 내유성 방수 구조 / IPC 산업용 내환경 인증"
    },
    "features": {
      "vi": [
        "Máy tính công nghiệp Advantech hoạt động bền bỉ 24/7 cho hệ thống Vision & MES",
        "Cảm biến chống nhiễu ánh sáng và bộ nguồn SMPS ổn định trong môi trường nhiệt độ cao",
        "Sẵn hàng số lượng lớn phục vụ bảo trì nhà máy tại Việt Nam"
      ],
      "ko": [
        "24시간 무정지 운전용 어드밴텍 산업용 PC(IPC) 및 비전 검사·MES 게이트웨이 상시 공급",
        "산업용 제어반 표준 DC 24V 파워서플라이, 근접/포토센서 및 브레이크 유닛 완비",
        "베트남 공장 유지보수(MRO)용 전 규격 상시 대량 보유 (당일 즉시 출고)"
      ],
      "en": [
        "Advantech rugged industrial PCs engineered for 24/7 Vision & MES gateways",
        "Industrial standard DC 24V SMPS power supplies, sensors and brake units",
        "Abundant MRO stock ready for immediate plant maintenance in Vietnam"
      ]
    },
    "image": "./assets/aistudio/images/ADVANTECH/advantech.png",
    "inStockVietnam": true,
    "leadTime": {
      "vi": "Sẵn hàng số lượng lớn (Giao ngay trong ngày)",
      "ko": "현지 보세창고 상시 대량 보유 (당일 출고)",
      "en": "Bulk stock ready for same-day delivery"
    },
    "isHot": false
  }
];

const COMPANY_STORAGE_KEY = 'dawoofa_company_info_v6';
const CATEGORIES_STORAGE_KEY = 'dawoofa_categories_v12';
const PRODUCTS_STORAGE_KEY = 'dawoofa_products_v12';
const SLIDER_STORAGE_KEY = 'dawoofa_hero_slider_v7';

export const normalizeCategoryDef = (cat: any): ProductCategoryDef => {
  const id = typeof cat?.id === 'string' && cat.id.trim() ? cat.id.trim().toLowerCase() : `cat-${Date.now()}`;
  return {
    id,
    nameKo: cat?.nameKo || cat?.id || '신규 카테고리',
    nameVn: cat?.nameVn || cat?.nameKo || 'Danh mục mới',
    nameEn: cat?.nameEn || cat?.nameKo || 'New Category',
    shortDescKo: cat?.shortDescKo || cat?.nameKo || '',
    shortDescVn: cat?.shortDescVn || cat?.nameVn || ''
  };
};

export const loadStoredCategories = (): ProductCategoryDef[] => {
  if (typeof window === 'undefined') return OFFICIAL_CATEGORIES;
  try {
    const raw = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const normalized = parsed.map(normalizeCategoryDef);
        // Ensure all default OFFICIAL_CATEGORIES are present so new default categories are never lost
        const existingIds = new Set(normalized.map((c) => c.id));
        const missingDefaults = OFFICIAL_CATEGORIES.filter((c) => !existingIds.has(c.id));
        return [...normalized, ...missingDefaults];
      }
    }
    return OFFICIAL_CATEGORIES;
  } catch (e) {
    console.error('Failed to load categories from localStorage', e);
    return OFFICIAL_CATEGORIES;
  }
};

export const saveStoredCategories = (categories: ProductCategoryDef[]): void => {
  if (typeof window === 'undefined') return;
  try {
    const normalized = categories.map(normalizeCategoryDef);
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(normalized));
  } catch (e) {
    console.error('Failed to save categories to localStorage', e);
  }
};

export const loadStoredCompanyInfo = (): CompanyInfo => {
  if (typeof window === 'undefined') return DEFAULT_COMPANY_INFO;
  try {
    const raw = localStorage.getItem(COMPANY_STORAGE_KEY);
    if (!raw) return DEFAULT_COMPANY_INFO;
    return { ...DEFAULT_COMPANY_INFO, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed to load company info from localStorage', e);
    return DEFAULT_COMPANY_INFO;
  }
};

export const saveStoredCompanyInfo = (info: CompanyInfo): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(info));
  } catch (e) {
    console.error('Failed to save company info to localStorage', e);
  }
};

export const normalizeCategoryKey = (
  rawCategory?: string,
  customCategories: ProductCategoryDef[] = OFFICIAL_CATEGORIES
): string => {
  if (!rawCategory || typeof rawCategory !== 'string') return 'servo';
  const c = rawCategory.toLowerCase().trim();
  const activeCats =
    Array.isArray(customCategories) && customCategories.length > 0
      ? customCategories
      : OFFICIAL_CATEGORIES;

  // Exact match check first against active categories or OFFICIAL_CATEGORIES
  const exactCustom = activeCats.find((cat) => cat.id.toLowerCase() === c);
  if (exactCustom) return exactCustom.id;

  const exactOfficial = OFFICIAL_CATEGORIES.find((cat) => cat.id === c);
  if (exactOfficial) return exactOfficial.id;

  // Keyword fallback normalization for legacy saved items
  if (c.includes('servo') || c.includes('서보') || c.includes('dd')) return 'servo';
  if (c.includes('inverter') || c.includes('인버터') || c.includes('biến tần') || c.includes('vfd')) return 'inverter';
  if (c.includes('plc') || c.includes('hmi') || c.includes('got') || c.includes('제어')) return 'plc';
  if (c.includes('wtr') || c.includes('웨이퍼') || c.includes('wafer')) return 'wtr';
  if (c.includes('dawoorobot') || c.includes('다우로봇') || c.includes('cartesian') || c.includes('직교') || c.includes('갠트리') || c.includes('gantry') || c.includes('dsn')) return 'dawoorobot';
  if (c.includes('robot') || c.includes('산업용') || c.includes('로봇') || c.includes('다관절') || c.includes('articulated') || c.includes('scara') || c.includes('epson')) return 'robot';
  if (c.includes('lms') || c.includes('마그네틱') || c.includes('từ tính')) return 'lms';
  if (c.includes('linear') || c.includes('리니어') || c.includes('tuyến tính')) return 'linear';
  if (c.includes('reducer') || c.includes('감속기') || c.includes('giảm tốc') || c.includes('gearbox')) return 'reducer';
  if (c.includes('safety') || c.includes('안전') || c.includes('하네스') || c.includes('an toàn') || c.includes('wiring')) return 'safety';
  return 'other';
};

export const normalizeProductItem = (
  item: any,
  customCategories: ProductCategoryDef[] = OFFICIAL_CATEGORIES
): FaProductItem => {
  const activeCats =
    Array.isArray(customCategories) && customCategories.length > 0
      ? customCategories
      : OFFICIAL_CATEGORIES;
  const catId = normalizeCategoryKey(item?.category, activeCats);
  const catDef =
    activeCats.find((c) => c.id === catId) ||
    OFFICIAL_CATEGORIES.find((c) => c.id === catId) ||
    OFFICIAL_CATEGORIES[0];

  return {
    id: item?.id || `fa-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    category: catDef.id,
    categoryLabel: {
      ko: catDef.nameKo,
      vi: catDef.nameVn,
      en: catDef.nameEn
    },
    modelName: item?.modelName || item?.model || 'NEW-MODEL',
    brand: item?.brand || 'MITSUBISHI ELECTRIC',
    tagline: {
      ko: item?.tagline?.ko || item?.name?.ko || item?.specs?.ko || '',
      vi: item?.tagline?.vi || item?.name?.vi || item?.specs?.vi || '',
      en: item?.tagline?.en || item?.name?.en || item?.specs?.en || ''
    },
    specs: {
      powerCapacity: item?.specs?.powerCapacity || (typeof item?.specs?.ko === 'string' ? item.specs.ko : '표준 사양'),
      inputVoltage: item?.specs?.inputVoltage || 'AC 200~240V / 380~480V',
      controlMode: item?.specs?.controlMode || 'CC-Link IE TSN / SSCNET III/H',
      encoderResolution: item?.specs?.encoderResolution || '고분해능 표준 엔코더',
      overloadCapacity: item?.specs?.overloadCapacity,
      protectionRating: item?.specs?.protectionRating
    },
    features: item?.features && Array.isArray(item?.features?.ko)
      ? item.features
      : {
          ko: ['베트남 현지 보세창고 정품 보유', '100% 정품 C/O, C/Q 발행'],
          vi: ['Sẵn hàng chính hãng tại kho Việt Nam', 'Cung cấp đầy đủ chứng nhận C/O & C/Q'],
          en: ['Genuine stock in Vietnam warehouse', 'Full official C/O & C/Q certificates']
        },
    image: normalizeImagePath(item?.image),
    inStockVietnam: typeof item?.inStockVietnam === 'boolean' ? item.inStockVietnam : item?.stockStatus !== 'HQ_EXPRESS',
    leadTime: item?.leadTime && typeof item?.leadTime?.ko === 'string'
      ? item.leadTime
      : {
          ko: '현지 보세창고 상시 재고 (24~48h 납기)',
          vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
          en: 'In stock in Vietnam (24-48h delivery)'
        },
    isHot: Boolean(item?.isHot)
  };
};

export const loadStoredProducts = (): FaProductItem[] => {
  const activeCategories = loadStoredCategories();
  const defaultNormalized = EXTENDED_INITIAL_PRODUCTS.map((item) =>
    normalizeProductItem(item, activeCategories)
  );
  if (typeof window === 'undefined') return defaultNormalized;
  try {
    const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const storedNormalized = parsed.map((item) => normalizeProductItem(item, activeCategories));
        // Merge any new default products from EXTENDED_INITIAL_PRODUCTS that weren't in localStorage yet
        const storedIds = new Set(storedNormalized.map((p) => p.id));
        const missingDefaultItems = defaultNormalized.filter((d) => !storedIds.has(d.id));
        if (missingDefaultItems.length > 0) {
          const merged = [...storedNormalized, ...missingDefaultItems];
          localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
        return storedNormalized;
      }
    }
    return defaultNormalized;
  } catch (e) {
    console.error('Failed to load products from localStorage', e);
    return defaultNormalized;
  }
};

export const saveStoredProducts = (
  products: FaProductItem[],
  customCategories: ProductCategoryDef[] = loadStoredCategories()
): void => {
  if (typeof window === 'undefined') return;
  try {
    const normalized = products.map((item) => normalizeProductItem(item, customCategories));
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(normalized));
  } catch (e) {
    console.error('Failed to save products to localStorage', e);
  }
};

export const loadStoredSliderSettings = (): HeroSliderSettings => {
  if (typeof window === 'undefined') return DEFAULT_SLIDER_SETTINGS;
  try {
    const raw = localStorage.getItem(SLIDER_STORAGE_KEY);
    if (!raw) return DEFAULT_SLIDER_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.slides) && parsed.slides.length > 0) {
      const normalizedSlides = parsed.slides.map((s: HeroSlideItem) => ({
        ...s,
        image: normalizeImagePath(s.image)
      }));
      const existingIds = new Set(normalizedSlides.map((s: HeroSlideItem) => s.id));
      const missingDefaultSlides = DEFAULT_HERO_SLIDES.filter((d) => !existingIds.has(d.id));
      return {
        intervalSeconds: typeof parsed.intervalSeconds === 'number' && parsed.intervalSeconds > 0 ? parsed.intervalSeconds : 4,
        autoPlay: parsed.autoPlay !== false,
        slides: [...normalizedSlides, ...missingDefaultSlides]
      };
    }
    return DEFAULT_SLIDER_SETTINGS;
  } catch (e) {
    console.error('Failed to load slider settings from localStorage', e);
    return DEFAULT_SLIDER_SETTINGS;
  }
};

export const saveStoredSliderSettings = (settings: HeroSliderSettings): void => {
  if (typeof window === 'undefined') return;
  try {
    const normalized: HeroSliderSettings = {
      ...settings,
      slides: (settings.slides || []).map((s) => ({
        ...s,
        image: normalizeImagePath(s.image)
      }))
    };
    localStorage.setItem(SLIDER_STORAGE_KEY, JSON.stringify(normalized));
  } catch (e) {
    console.error('Failed to save slider settings to localStorage', e);
  }
};

export const resetStoreToFactoryDefaults = (): { 
  categories: ProductCategoryDef[];
  company: CompanyInfo; 
  products: FaProductItem[];
  slider: HeroSliderSettings;
} => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(CATEGORIES_STORAGE_KEY);
      localStorage.removeItem(COMPANY_STORAGE_KEY);
      localStorage.removeItem(PRODUCTS_STORAGE_KEY);
      localStorage.removeItem('dawoofa_products_v6');
      localStorage.removeItem('dawoofa_products_v5');
      localStorage.removeItem(SLIDER_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset storage', e);
    }
  }
  return {
    categories: OFFICIAL_CATEGORIES,
    company: DEFAULT_COMPANY_INFO,
    products: EXTENDED_INITIAL_PRODUCTS,
    slider: DEFAULT_SLIDER_SETTINGS
  };
};

// ============================================================================
// SOURCE CODE SYNCHRONIZATION (EXPORT / IMPORT) UTILITIES
// Ensures 100% parity between AI Studio, localStorage, and GitHub Pages builds
// ============================================================================

export interface StoreSyncPayload {
  version: string;
  exportedAt: string;
  categories: ProductCategoryDef[];
  products: FaProductItem[];
  companyInfo?: CompanyInfo;
  sliderSettings?: HeroSliderSettings;
}

/**
 * Generates ready-to-paste TypeScript code for `src/data/companyStore.ts`
 * containing `OFFICIAL_CATEGORIES` and `EXTENDED_INITIAL_PRODUCTS` with
 * guaranteed `./assets/aistudio/images/...` relative paths.
 */
export const generateTypeScriptSourceSyncCode = (
  categories: ProductCategoryDef[],
  products: FaProductItem[],
  companyInfo?: CompanyInfo,
  sliderSettings?: HeroSliderSettings
): string => {
  const normalizedCategories = (categories && categories.length > 0 ? categories : OFFICIAL_CATEGORIES).map(
    normalizeCategoryDef
  );
  const normalizedProducts = (products || EXTENDED_INITIAL_PRODUCTS).map((item) => {
    const norm = normalizeProductItem(item, normalizedCategories);
    return {
      ...norm,
      image: normalizeImagePath(norm.image)
    };
  });

  const lines: string[] = [
    `// ============================================================================`,
    `// DAWOOFA VINA - SYNCHRONIZED STATIC CATALOG DATA (src/data/companyStore.ts)`,
    `// Generated at: ${new Date().toISOString()}`,
    `// Image paths strictly normalized to ./assets/aistudio/images/... for GitHub Pages`,
    `// ============================================================================`,
    ``,
    `export const OFFICIAL_CATEGORIES: ProductCategoryDef[] = ${JSON.stringify(normalizedCategories, null, 2)};`,
    ``,
    `export const EXTENDED_INITIAL_PRODUCTS: FaProductItem[] = ${JSON.stringify(normalizedProducts, null, 2)};`
  ];

  if (companyInfo) {
    lines.push(
      ``,
      `export const DEFAULT_COMPANY_INFO: CompanyInfo = ${JSON.stringify(companyInfo, null, 2)};`
    );
  }

  if (sliderSettings) {
    const normalizedSlider: HeroSliderSettings = {
      ...sliderSettings,
      slides: (sliderSettings.slides || []).map((s) => ({
        ...s,
        image: normalizeImagePath(s.image)
      }))
    };
    lines.push(
      ``,
      `export const DEFAULT_SLIDER_SETTINGS: HeroSliderSettings = ${JSON.stringify(normalizedSlider, null, 2)};`
    );
  }

  return lines.join('\n');
};

/**
 * Generates a complete JSON string of all current store data (categories, products, companyInfo, sliderSettings)
 * with normalized `./assets/aistudio/images/...` relative image paths.
 */
export const generateStoreJsonExport = (
  categories: ProductCategoryDef[],
  products: FaProductItem[],
  companyInfo: CompanyInfo = DEFAULT_COMPANY_INFO,
  sliderSettings: HeroSliderSettings = DEFAULT_SLIDER_SETTINGS
): string => {
  const normalizedCategories = (categories && categories.length > 0 ? categories : OFFICIAL_CATEGORIES).map(
    normalizeCategoryDef
  );
  const normalizedProducts = (products || EXTENDED_INITIAL_PRODUCTS).map((item) => {
    const norm = normalizeProductItem(item, normalizedCategories);
    return {
      ...norm,
      image: normalizeImagePath(norm.image)
    };
  });
  const normalizedSlider: HeroSliderSettings = {
    ...sliderSettings,
    slides: (sliderSettings.slides || []).map((s) => ({
      ...s,
      image: normalizeImagePath(s.image)
    }))
  };

  const payload: StoreSyncPayload = {
    version: 'dawoofa-sync-v7',
    exportedAt: new Date().toISOString(),
    categories: normalizedCategories,
    products: normalizedProducts,
    companyInfo,
    sliderSettings: normalizedSlider
  };

  return JSON.stringify(payload, null, 2);
};

/**
 * Parses either a JSON string (StoreSyncPayload, { OFFICIAL_CATEGORIES, EXTENDED_INITIAL_PRODUCTS }, or FaProductItem[])
 * OR a pasted TypeScript code snippet from `generateTypeScriptSourceSyncCode`,
 * normalizes all categories and `./assets/aistudio/images/...` paths, and returns the synchronized state.
 */
export const parseAndNormalizeImportedData = (
  rawText: string,
  fallbackCategories: ProductCategoryDef[] = OFFICIAL_CATEGORIES,
  fallbackCompany: CompanyInfo = DEFAULT_COMPANY_INFO,
  fallbackSlider: HeroSliderSettings = DEFAULT_SLIDER_SETTINGS
): {
  categories: ProductCategoryDef[];
  products: FaProductItem[];
  companyInfo: CompanyInfo;
  sliderSettings: HeroSliderSettings;
} => {
  const trimmed = rawText.trim();
  if (!trimmed) {
    throw new Error('가져올 데이터(JSON 또는 TypeScript 코드)를 입력해 주세요.');
  }

  let parsedObj: any = null;

  // 1. Try direct JSON.parse first
  try {
    parsedObj = JSON.parse(trimmed);
  } catch {
    // 2. If user pasted TypeScript code (e.g. from [현재 제품/카테고리 데이터 복사]), extract arrays/objects
    const extracted: any = {};
    const catMatch = trimmed.match(/OFFICIAL_CATEGORIES(?:\s*:\s*[^=]+)?\s*=\s*(\[[\s\S]*?\]);/);
    const prodMatch = trimmed.match(/EXTENDED_INITIAL_PRODUCTS(?:\s*:\s*[^=]+)?\s*=\s*(\[[\s\S]*?\]);/);
    const compMatch = trimmed.match(/DEFAULT_COMPANY_INFO(?:\s*:\s*[^=]+)?\s*=\s*(\{[\s\S]*?\});/);
    const slideMatch = trimmed.match(/DEFAULT_SLIDER_SETTINGS(?:\s*:\s*[^=]+)?\s*=\s*(\{[\s\S]*?\});/);

    if (catMatch) {
      extracted.categories = JSON.parse(catMatch[1]);
    }
    if (prodMatch) {
      extracted.products = JSON.parse(prodMatch[1]);
    }
    if (compMatch) {
      try {
        extracted.companyInfo = JSON.parse(compMatch[1]);
      } catch {
        // ignore optional company parse error
      }
    }
    if (slideMatch) {
      try {
        extracted.sliderSettings = JSON.parse(slideMatch[1]);
      } catch {
        // ignore optional slider parse error
      }
    }

    if (extracted.products || extracted.categories) {
      parsedObj = extracted;
    } else {
      throw new Error('유효한 JSON 형식 또는 복사된 TypeScript 데이터 코드가 아닙니다.');
    }
  }

  // Normalize categories
  const rawCategories =
    parsedObj?.categories ||
    parsedObj?.OFFICIAL_CATEGORIES ||
    fallbackCategories;
  const normalizedCategories: ProductCategoryDef[] =
    Array.isArray(rawCategories) && rawCategories.length > 0
      ? rawCategories.map(normalizeCategoryDef)
      : fallbackCategories;

  // Normalize products
  const rawProducts = Array.isArray(parsedObj)
    ? parsedObj
    : parsedObj?.products || parsedObj?.EXTENDED_INITIAL_PRODUCTS;

  if (!Array.isArray(rawProducts) || rawProducts.length === 0) {
    throw new Error('제품 목록(products) 배열 데이터를 찾을 수 없습니다.');
  }

  const normalizedProducts: FaProductItem[] = rawProducts.map((item: any) => {
    const norm = normalizeProductItem(item, normalizedCategories);
    return {
      ...norm,
      image: normalizeImagePath(norm.image)
    };
  });

  // Normalize optional companyInfo & sliderSettings
  const rawCompany = parsedObj?.companyInfo || parsedObj?.DEFAULT_COMPANY_INFO;
  const normalizedCompany: CompanyInfo =
    rawCompany && typeof rawCompany === 'object'
      ? { ...fallbackCompany, ...rawCompany }
      : fallbackCompany;

  const rawSlider = parsedObj?.sliderSettings || parsedObj?.DEFAULT_SLIDER_SETTINGS;
  const normalizedSlider: HeroSliderSettings =
    rawSlider && Array.isArray(rawSlider.slides) && rawSlider.slides.length > 0
      ? {
          intervalSeconds:
            typeof rawSlider.intervalSeconds === 'number' && rawSlider.intervalSeconds > 0
              ? rawSlider.intervalSeconds
              : fallbackSlider.intervalSeconds,
          autoPlay: rawSlider.autoPlay !== false,
          slides: rawSlider.slides.map((s: HeroSlideItem) => ({
            ...s,
            image: normalizeImagePath(s.image)
          }))
        }
      : fallbackSlider;

  return {
    categories: normalizedCategories,
    products: normalizedProducts,
    companyInfo: normalizedCompany,
    sliderSettings: normalizedSlider
  };
};

