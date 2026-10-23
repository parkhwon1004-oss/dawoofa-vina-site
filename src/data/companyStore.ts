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
    id: 'servo',
    nameKo: '서보 시스템 (Servo)',
    nameVn: 'Động cơ Servo & Driver (Servo)',
    nameEn: 'Servo System',
    shortDescKo: '미쓰비시 MR-J5 / MR-J4, DD모터',
    shortDescVn: 'Mitsubishi MR-J5 / MR-J4 & DD Motor'
  },
  {
    id: 'inverter',
    nameKo: '범용 인버터 (Inverter)',
    nameVn: 'Biến tần công nghiệp (Inverter)',
    nameEn: 'Industrial Inverter (VFD)',
    shortDescKo: '미쓰비시 FREQROL A800 / E800',
    shortDescVn: 'Mitsubishi FREQROL A800 / E800'
  },
  {
    id: 'plc',
    nameKo: 'PLC 및 제어기기 (PLC & HMI)',
    nameVn: 'Bộ lập trình PLC & Màn hình GOT',
    nameEn: 'PLC & HMI Controls',
    shortDescKo: 'MELSEC iQ-R, iQ-F, GOT2000',
    shortDescVn: 'MELSEC iQ-R, iQ-F, GOT2000'
  },
  {
    id: 'dawoorobot',
    nameKo: '다우로봇 (Dawoo Robot)',
    nameVn: 'Robot tọa độ Dawoo (Dawoo Robot)',
    nameEn: 'Dawoo Cartesian & Gantry Robots',
    shortDescKo: '직교좌표 로봇 및 고강성 갠트리 로봇 시스템',
    shortDescVn: 'Robot tọa độ vuông góc & Hệ thống Gantry'
  },
  {
    id: 'robot',
    nameKo: '산업용 로봇 (Industrial Robot)',
    nameVn: 'Robot công nghiệp (Industrial Robot)',
    nameEn: 'Industrial Articulated Robots',
    shortDescKo: '6축 수직다관절 및 스카라 산업용 로봇',
    shortDescVn: 'Robot 6 trục đa khớp & Robot SCARA'
  },
  {
    id: 'wtr',
    nameKo: '웨이퍼로봇 (WTR Robot)',
    nameVn: 'Robot chuyển Wafer (WTR Robot)',
    nameEn: 'Cleanroom Wafer Transfer Robots (WTR)',
    shortDescKo: '반도체·디스플레이 클린룸 웨이퍼 반송 로봇',
    shortDescVn: 'Robot gắp Wafer phòng sạch Class 1'
  },
  {
    id: 'linear',
    nameKo: '리니어모듈 (Linear Module)',
    nameVn: 'Mô-đun tuyến tính (Linear Module)',
    nameEn: 'Linear Modules',
    shortDescKo: '고정밀 볼스크류/벨트 구동 리니어 액추에이터',
    shortDescVn: 'Mô-đun trượt tuyến tính Ball Screw & Belt'
  },
  {
    id: 'lms',
    nameKo: 'LMS 시스템 (LMS System)',
    nameVn: 'Hệ thống vận chuyển từ tính LMS',
    nameEn: 'LMS Magnetic Transfer System',
    shortDescKo: '초고속 마그네틱 리니어 모션 반송 시스템',
    shortDescVn: 'Hệ thống băng tải từ tính tốc độ cao LMS'
  },
  {
    id: 'reducer',
    nameKo: '정밀 감속기 (Reducer)',
    nameVn: 'Hộp giảm tốc độ chính xác (Reducer)',
    nameEn: 'Precision Planetary Reducers',
    shortDescKo: 'APEX DYNAMICS 초정밀 유성감속기',
    shortDescVn: 'APEX DYNAMICS planetary gearboxes'
  },
  {
    id: 'safety',
    nameKo: '안전 솔루션 & 하네스 (Safety & Wiring)',
    nameVn: 'Giải pháp an toàn & Dây nối (Safety)',
    nameEn: 'Safety Solutions & Wiring Harness',
    shortDescKo: 'PILZ 안전 릴레이, 삼원ACT 하네스',
    shortDescVn: 'PILZ Safety Relays & Samwon Cables'
  },
  {
    id: 'other',
    nameKo: '기타 자동화 기기 (Other FA)',
    nameVn: 'Thiết bị tự động hóa khác (Other)',
    nameEn: 'Other Factory Automation Hardware',
    shortDescKo: '센서, 전원공급장치 및 악세서리',
    shortDescVn: 'Sensors, power supplies & accessories'
  }
];

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
    id: 'slide-1',
    slideNumber: 1,
    badge: {
      ko: '한국미쓰비시전기 공식 대리점 1급 특약점 (주)다우에프에이 베트남 법인',
      vi: 'ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC CHÍNH THỨC - DAWOOFA VINA',
      en: 'MITSUBISHI ELECTRIC TIER-1 AUTHORIZED DISTRIBUTOR - DAWOOFA VINA'
    },
    title: {
      ko: 'MELSERVO MR-J5 & MR-J4 서보 시스템 베트남 보세창고 대량 보유',
      vi: 'Hệ Thống Servo Cao Cấp MELSERVO MR-J5 & MR-J4 Sẵn Kho Việt Nam',
      en: 'Premium MELSERVO MR-J5 & MR-J4 Servo Systems In Stock in Vietnam'
    },
    subtitle: {
      ko: '박닌 & 빈증 물류센터에서 24~48시간 이내 긴급 납품 및 기술지원, 현지 A/S 대응 완비',
      vi: 'Kho ngoại quan Bắc Ninh & Bình Dương giao hàng trong 24~48h, hỗ trợ kỹ thuật và dịch vụ A/S tại chỗ.',
      en: 'Bac Ninh & Binh Duong bonded warehouses 24-48h rapid dispatch with resident technical support & local A/S.'
    },
    image: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
    ctaText: {
      ko: 'MR-J5 즉시 견적 확인',
      vi: 'Yêu cầu báo giá MR-J5',
      en: 'Get MR-J5 Instant Quote'
    },
    targetModel: 'MELSERVO MR-J5 Series',
    highlightPoints: {
      ko: ['26-bit 배터리리스 절대위치 엔코더 탑재', 'CC-Link IE TSN 1Gbps 초고속 다축 동기 제어', '100% 정품 C/O, C/Q 및 세금계산서 발행'],
      vi: ['Bộ mã hóa quang học 26-bit không cần pin dự phòng', 'Mạng CC-Link IE TSN 1Gbps điều khiển đồng bộ nhiều trục', '100% chính hãng C/O, C/Q & Hóa đơn đỏ VAT'],
      en: ['26-bit battery-less absolute encoder', '1Gbps CC-Link IE TSN multi-axis synchronization', '100% genuine C/O, C/Q & VAT compliance']
    }
  },
  {
    id: 'slide-2',
    slideNumber: 2,
    badge: {
      ko: 'FREQROL A800 / E800 범용 인버터 전 용량 상시 공급 체계',
      vi: 'BIẾN TẦN CÔNG NGHIỆP FREQROL A800 & E800 SERIES CHÍNH HÃNG',
      en: 'GENUINE FREQROL A800 & E800 INDUSTRIAL INVERTER SERIES'
    },
    title: {
      ko: '산업용 고성능 벡터 인버터 & 이더넷 내장 컴팩트 인버터 즉시 출고',
      vi: 'Biến Tần Vector Thời Gian Thực & Biến Tần Nhỏ Gọn Tích Hợp Ethernet',
      en: 'High-Performance Real-Time Sensorless Vector & Compact Dual-Ethernet Inverters'
    },
    subtitle: {
      ko: '0.1kW ~ 500kW 전 라인업 보유, 크레인/권상기/반송 라인용 최적 단가 공급 및 파라미터 튜닝 지원',
      vi: 'Công suất từ 0.1kW ~ 500kW, chuyên dụng cho cẩu trục, băng chuyền và máy móc tự động hóa.',
      en: '0.1kW to 500kW full line-up for hoists, extruders, winders and automated conveyor lines.'
    },
    image: 'http://www.dawooservo.co.kr/data/product/fr_a800.jpg',
    ctaText: {
      ko: '인버터 전 모델 견적 문의',
      vi: 'Báo giá biến tần A800/E800',
      en: 'Inverter Quote Request'
    },
    targetModel: 'FREQROL FR-A800 / FR-E800',
    highlightPoints: {
      ko: ['0.3Hz 200% 강력한 기동 토크 실현', '베트남 고온다습 환경 대응 특수 방습 코팅 기판', '당일 출고 및 현장 파라미터 셋업'],
      vi: ['Mô-men khởi động 200% ở tần số 0.3Hz siêu thấp', 'Bo mạch phủ chống ẩm thích ứng khí hậu nhiệt đới Việt Nam', 'Giao ngay trong ngày & cài đặt tham số tận nơi'],
      en: ['200% starting torque at 0.3Hz low speed', 'Conformal coated PCB for tropical industrial durability', 'Same-day dispatch & parameter tuning']
    }
  },
  {
    id: 'slide-3',
    slideNumber: 3,
    badge: {
      ko: '스마트 팩토리 코어 컨트롤러 MELSEC iQ-R & iQ-F PLC / GOT2000',
      vi: 'HỆ THỐNG PLC MELSEC iQ-R & iQ-F VÀ MÀN HÌNH HMI GOT2000',
      en: 'MELSEC iQ-R & iQ-F PLC & GOT2000 HMI INDUSTRIAL AUTOMATION'
    },
    title: {
      ko: '나노초(0.98ns) 시퀀스 처리 PLC 및 고해상도 터치패널 GOT2000',
      vi: 'Bộ Điều Khiển PLC Tốc Độ Nano Giây & Màn Hình Cảm Ứng GOT2000 Sắc Nét',
      en: 'Nanosecond (0.98ns) High-Speed PLC & Crystal Clear GOT2000 HMIs'
    },
    subtitle: {
      ko: '멀티 CPU 시퀀스+모션 제어, 베트남 현지 공정 라인 신규 구축 및 개조 기술지원 완비',
      vi: 'Cấu hình đa CPU điều khiển tuần tự và chuyển động, hỗ trợ lập trình cải tiến dây chuyền.',
      en: 'Multi-CPU sequence & motion architecture with resident software engineering support.'
    },
    image: 'http://www.dawooservo.co.kr/data/product/iq_r.jpg',
    ctaText: {
      ko: 'PLC & HMI 견적 확인',
      vi: 'Yêu cầu báo giá PLC / HMI',
      en: 'Request PLC / HMI Quote'
    },
    targetModel: 'MELSEC iQ-R / iQ-F / GOT2000',
    highlightPoints: {
      ko: ['0.98ns 초고속 시퀀스 명령 실행 처리', 'GOT2000 원격 VNC 모니터링 기능 기본 내장', '다우FA 한국 본사 상주 엔지니어 기술지원'],
      vi: ['Tốc độ xử lý lệnh cơ bản 0.98ns tối ưu nhịp máy', 'Tính năng giám sát VNC từ xa qua điện thoại/máy tính', 'Kỹ sư chuyên gia Hàn Quốc thường trực tại Việt Nam'],
      en: ['0.98ns ultra-high sequence execution', 'Integrated remote VNC diagnostic server', 'Resident Korea FA senior application engineers']
    }
  },
  {
    id: 'slide-4',
    slideNumber: 4,
    badge: {
      ko: '다우로봇(DAWOO ROBOT) & 감속기 • 리니어 모듈 토탈 솔루션',
      vi: 'ROBOT DAWOO FA, HỘP GIẢM TỐC APEX VÀ MÔ-ĐUN TUYẾN TÍNH',
      en: 'DAWOO ROBOT, APEX PLANETARY REDUCERS & LINEAR ACTUATORS'
    },
    title: {
      ko: '다우 6축 수직다관절 로봇 & APEX 감속기, 리니어 모듈/LMS 시스템',
      vi: 'Robot Công Nghiệp 6 Trục Đa Khớp & Hộp Giảm Tốc Độ Rơ Siêu Thấp',
      en: '6-Axis Articulated Robots, Precision Reducers & LMS Transfer Systems'
    },
    subtitle: {
      ko: '박닌 기술센터 데모룸 운영, 서보 직결 백래시 제어 감속기 및 웨이퍼 반송 WTR 로봇 공급',
      vi: 'Phòng Demo tại Bắc Ninh, hộp số hành tinh độ rơ dưới 1 arcmin và Robot phòng sạch WTR.',
      en: 'Bac Ninh demo center, < 1 arcmin low-backlash reducers & Class 1 WTR semiconductor robots.'
    },
    image: 'http://www.dawooservo.co.kr/data/product/robot.jpg',
    ctaText: {
      ko: '로봇 & 감속기 문의',
      vi: 'Tư vấn Robot & Giảm tốc',
      en: 'Robot & Reducer Inquiry'
    },
    targetModel: 'DAWOO ROBOT / APEX Gearbox',
    highlightPoints: {
      ko: ['반복정밀도 ±0.02mm 6축 다관절 로봇', '백래시 1 arcmin 이하 초정밀 유성감속기', '현장 티칭, 설치 및 신속 유지보수 사후관리'],
      vi: ['Độ chính xác lặp lại ±0.02mm cho Robot 6 trục', 'Hộp giảm tốc bánh răng nghiêng độ rơ cực thấp', 'Chuyển giao công nghệ, dạy học trực tiếp tại xưởng'],
      en: ['±0.02mm precision 6-axis robotics', '< 1 arcmin ultra-low backlash planetary reducers', 'Turnkey on-site teaching and calibration']
    }
  }
];

export const DEFAULT_SLIDER_SETTINGS: HeroSliderSettings = {
  intervalSeconds: 4, // 4초 단위 회전 (기본값)
  autoPlay: true,
  slides: DEFAULT_HERO_SLIDES
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
  companyNameVn: 'CÔNG TY TNHH DAWOOFA VINA',
  companyNameKo: '(주)다우에프에이 베트남 법인',
  companyNameEn: 'DAWOOFA VINA CO., LTD.',
  subTitleVn: 'Đại lý ủy quyền Mitsubishi Electric • Hệ thống Servo, Biến tần, PLC, HMI công nghiệp',
  subTitleKo: '한국미쓰비시전기 공식 대리점 • 서보 시스템, 범용 인버터, 제어기기 전문 유통 및 기술지원',
  subTitleEn: 'Mitsubishi Electric Authorized Tier-1 Distributor • Factory Automation Solutions',

  northTitleVn: 'TRUNG TÂM KỸ THUẬT MIỀN BẮC (BẮC NINH)',
  northTitleKo: '베트남 북부 기술물류 허브 (박닌 본사)',
  northAddress: 'Số 18, Đường 3, KCN VSIP Bắc Ninh, Phường Phù Chẩn, TP. Từ Sơn, Tỉnh Bắc Ninh',

  southTitleVn: 'TRUNG TÂM KỸ THUẬT MIỀN NAM (BÌNH DƯƠNG)',
  southTitleKo: '베트남 남부 물류영업 허브 (빈증 지사)',
  southAddress: 'Lô CN-02, Đường D1, KCN VSIP 2, Thị xã Bến Cát, Tỉnh Bình Dương',

  koreaHqName: '(주)다우에프에이 한국 본사',
  koreaHqAddress: '충남 천안시 서북구 백석공단1로 10, 미래에이스하이테크시티',
  koreaHqUrl: 'http://www.dawooservo.co.kr',

  hotline: '+84 222-389-9988',
  email: 'contact@dawoofavina.com',
  salesEmail: 'sales@dawoofavina.com',
  taxId: '2301192888',
  zaloOa: '@dawoofavina_official',
  zaloUrl: 'https://zalo.me',
  businessHoursVn: '08:00 - 17:30 (Thứ 2 ~ Thứ 7) • Hỗ trợ kỹ thuật khẩn cấp 24/7',
  businessHoursKo: '08:00 - 17:30 (월 ~ 토) • 라인스톱 비상 긴급 대응 24/7',

  heroTitleVn: 'Tổng Đại Lý Phân Phối Thiết Bị Tự Động Hóa FA & Kỹ Thuật, Dịch Vụ A/S Tại Chỗ',
  heroTitleKo: '베트남 현지 공장자동화(FA) 설비 부품 공식 유통 및 기술지원 및 현지A/S대응',
  heroSubtitleVn: 'Kế thừa hơn 20 năm kinh nghiệm từ trụ sở Dawoo FA Hàn Quốc (dawooservo.co.kr), Dawoofa Vina phân phối chính thức hệ thống Servo MELSERVO (MR-J5, MR-J4), biến tần FREQROL (A800, E800), bộ điều khiển PLC MELSEC và màn hình HMI GOT2000. Cam kết 100% hàng chính hãng, đầy đủ C/O và C/Q, có sẵn kho tại Bắc Ninh & Bình Dương, giao hàng trong 24~48h và kỹ thuật, dịch vụ A/S tại chỗ chuyên nghiệp.',
  heroSubtitleKo: '한국 다우에프에이(dawooservo.co.kr)의 20년 현장 기술 노하우를 바탕으로, 미쓰비시전기 공식 대리점 정품 MELSERVO 서보 시스템(MR-J5, MR-J4), FREQROL 인버터(A800, E800), MELSEC iQ-R/F PLC를 베트남 현지 보세창고(박닌/빈증)에 상시 보유하여 최적 단가와 24~48시간 신속 직송으로 공급하며, 현지 전문 기술지원 및 현지A/S대응 체계를 완비하고 있습니다.'
};

export const EXTENDED_INITIAL_PRODUCTS: FaProductItem[] = [
  ...DAWOOFA_PRODUCTS,
  // APEX DYNAMICS Reducer
  {
    id: 'prod-apex-reducer',
    category: 'reducer',
    categoryLabel: {
      vi: 'Hộp giảm tốc độ chính xác (Reducer)',
      ko: '정밀 감속기 (Reducer)',
      en: 'Precision Planetary Reducers'
    },
    modelName: 'APEX DYNAMICS / High-Precision Planetary Gearbox (AB / AF Series)',
    brand: 'APEX DYNAMICS',
    tagline: {
      vi: 'Hộp giảm tốc hành tinh độ chính xác cao, độ rơ < 1 arcmin, tối ưu hóa cho động cơ servo.',
      ko: '초정밀 백래시 제어 유성 감속기 (< 1 arcmin), 미쓰비시 및 야스카와 서보 모터 완벽 직결.',
      en: 'High-precision low-backlash planetary gearbox engineered for servo motors.'
    },
    specs: {
      powerCapacity: 'Tỷ số truyền: 1/3 ~ 1/100 (1단 / 2단)',
      inputVoltage: 'Tương thích động cơ 서보 50W ~ 15kW',
      controlMode: 'Mặt bích tiêu chuẩn DIN / NEMA 직결',
      encoderResolution: 'Độ rơ cơ khí siêu thấp < 1 arcmin',
      overloadCapacity: 'Hiệu suất truyền động > 97%',
      protectionRating: 'Tiêu chuẩn bảo vệ IP65 kháng nước/bụi'
    },
    features: {
      vi: [
        'Răng xoắn nghiêng tôi cao tần truyền mô-men êm ái không tiếng ồn',
        'Mặt bích gia công CNC chính xác tương thích 100% trục servo Mitsubishi MR-J5/J4',
        'Dầu bôi trơn tổng hợp trọn đời không cần bảo dưỡng định kỳ'
      ],
      ko: [
        '침탄 열처리 헬리컬 기어 적용으로 저소음 및 고효율(97% 이상) 실현',
        '미쓰비시 MR-J5 및 야스카와 서보 모터 규격별 100% 전용 플랜지 공급',
        '합성 윤활유 봉입으로 제품 수명 기간 내 무보수(Maintenance-Free) 운전'
      ],
      en: [
        'Precision helical gearing for ultra-quiet and smooth torque delivery',
        '100% direct-mount adapter flanges for Mitsubishi & Yaskawa servos',
        'Synthetic grease sealed for lifetime maintenance-free operation'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/reducer.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 주요 감속비 상시 보유 (당일 출고)',
      en: 'Popular ratios in-stock in Vietnam (24-48h dispatch)'
    },
    isHot: true
  },
  // 1. Dawoo Robot (Cartesian / Gantry - Dedicated 'dawoorobot' category)
  {
    id: 'prod-dawoo-cartesian-robot',
    category: 'dawoorobot',
    categoryLabel: {
      vi: 'Robot tọa độ Dawoo (Dawoo Robot)',
      ko: '다우로봇 (Dawoo Robot)',
      en: 'Dawoo Cartesian & Gantry Robots'
    },
    modelName: 'DAWOO ROBOT / 3-Axis Cartesian & Heavy Gantry Robot (DCR / DGR Series)',
    brand: 'DAWOO ROBOT',
    tagline: {
      vi: 'Robot tọa độ vuông góc 3~4 trục & hệ thống Gantry khung nhôm độ cứng vững cao, độ lặp lại ±0.01mm.',
      ko: '고강성 알루미늄 바디 기반 3~4축 직교좌표 로봇 및 대하중 갠트리 로봇 시스템 (반복정밀도 ±0.01mm).',
      en: 'High-rigidity 3-axis cartesian & heavy gantry robot system with ±0.01mm repeatability.'
    },
    specs: {
      powerCapacity: '가반하중: 최대 50kg (DCR) ~ 150kg (DGR Gantry)',
      inputVoltage: 'AC 200~240V / 미쓰비시·야스카와 서보 직결 구동',
      controlMode: 'CC-Link IE TSN, SSCNET III/H, EtherCAT 다축 보간 제어',
      encoderResolution: '반복 위치 정밀도 ±0.01 mm (C5급 연삭 볼스크류)',
      overloadCapacity: '최대 이송 속도 2,000 ~ 2,500 mm/s',
      protectionRating: '내장형 케이블베이어 및 방진 실드 구조 (ISO Class 5 대응)'
    },
    features: {
      vi: [
        'C5 cấp vít me bi mài chính xác cao kết hợp ray dẫn hướng LM bản rộng',
        'Thiết kế tối ưu cho tự động hóa lắp ráp, Dispensing, bắt vít và chuyển phôi Pin xe điện',
        'Sẵn linh kiện tiêu chuẩn tại kho Bắc Ninh, thiết kế hành trình tùy chỉnh nhanh chóng'
      ],
      ko: [
        'C5급 초정밀 연삭 볼스크류 및 광폭 LM 가이드 일체형 고강성 직교 로봇',
        '디스펜싱, 스크류 체결, 픽앤플레이스 및 2차전지 배터리 팩 이송 공정 최적화',
        '박닌/빈증 현지 기술진 맞춤 스트로크 설계 및 2D/3D CAD 데이터 즉시 지원'
      ],
      en: [
        'Class C5 ground ballscrew with wide LM guide for maximum rigidity',
        'Optimized for dispensing, screw fastening, pick-and-place & EV battery handling',
        'Custom stroke engineering and rapid assembly at Vietnam technical center'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/linear.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Có sẵn kho Bắc Ninh (Giao trong 3~5 ngày)',
      ko: '베트남 현지 표준 모듈 보유 (3~5일 내 맞춤 출고)',
      en: 'Local modular stock in Vietnam (3-5 days dispatch)'
    },
    isHot: true
  },
  // 2. Industrial Articulated Robot (Dedicated 'robot' category)
  {
    id: 'prod-dawoo-robot-6axis',
    category: 'robot',
    categoryLabel: {
      vi: 'Robot công nghiệp (Industrial Robot)',
      ko: '산업용 로봇 (Industrial Robot)',
      en: 'Industrial Articulated Robots'
    },
    modelName: 'DAWOO FA / 6-Axis Articulated Industrial Robot (DW-R6 Series)',
    brand: 'DAWOO ROBOT',
    tagline: {
      vi: 'Robot công nghiệp 6 trục đa khớp, tải trọng 7~20kg, tầm với 910~1800mm độ lặp lại ±0.02mm.',
      ko: '고정밀 6축 수직다관절 산업용 로봇, 가반하중 7~20kg, 반복 정밀도 ±0.02mm, 다우 FA 기술지원.',
      en: '6-Axis articulated industrial robot with 7~20kg payload and ±0.02mm repeatability.'
    },
    specs: {
      powerCapacity: 'Tải trọng gắp: 7kg / 12kg / 20kg',
      inputVoltage: 'AC 200~240V 3-Phase 50/60Hz',
      controlMode: 'EtherCAT, Modbus-TCP, CC-Link IE Field',
      encoderResolution: 'Độ chính xác lặp lại ±0.02 mm',
      overloadCapacity: 'Tầm với bán kính 910mm ~ 1810mm',
      protectionRating: 'Cấp bảo vệ cổ tay IP67 kháng nước cắt'
    },
    features: {
      vi: [
        'Tối ưu hóa cho hàn, gắp thả linh kiện điện tử, bốc xếp Palletizing và sơn phủ',
        'Bộ dạy học Teach Pendant màn hình cảm ứng giao diện trực quan',
        'Đội ngũ kỹ sư DAWOO FA VINA trực tiếp lập trình và hiệu chuẩn tại nhà máy'
      ],
      ko: [
        '전자부품 조립, 스크류 체결, 팔레타이징 및 검사 공정 전용 티칭 프로그램',
        '직관적인 터치스크린 펜던트 조작으로 초보 엔지니어도 당일 셋업 가능',
        '다우에프에이 베트남 상주 엔지니어가 직접 설치 티칭 및 현장 사후관리'
      ],
      en: [
        'Engineered for electronics assembly, screw fastening, palletizing & QA',
        'Intuitive touch teach-pendant for rapid operational deployment',
        'Direct on-site teaching and calibration by Dawoo FA Vina engineers'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/robot.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Kho dự án Bắc Ninh (Giao & Chuyển giao 3~5 ngày)',
      ko: '박닌 데모룸 보유 및 3~5일 현장 납품 셋업 대응',
      en: 'Bac Ninh demo unit ready (3-5 days delivery & setup)'
    },
    isHot: true
  },
  // 1. Linear Module (Dedicated 'linear' category)
  {
    id: 'prod-linear-module',
    category: 'linear',
    categoryLabel: {
      vi: 'Mô-đun tuyến tính (Linear Module)',
      ko: '리니어모듈 (Linear Module)',
      en: 'Linear Modules'
    },
    modelName: 'DAWOO FA / High-Precision Linear Actuator Module (DLN / DKW Series)',
    brand: 'DAWOO FA',
    tagline: {
      vi: 'Cụm mô-đun trượt tuyến tính Ball Screw & Belt Drive độ cứng vững cao, độ lặp lại ±0.005mm.',
      ko: '고강성 볼스크류 및 벨트 구동 고정밀 리니어 모듈 액추에이터 (반복 정밀도 ±0.005mm).',
      en: 'High-rigidity precision ball screw & belt drive linear module actuator.'
    },
    specs: {
      powerCapacity: 'Hành trình 유효 스트로크: 100mm ~ 3,000mm',
      inputVoltage: 'Tương thích 서보 모터 100W ~ 1,500W',
      controlMode: 'SSCNET III/H, CC-Link IE TSN, Pulse',
      encoderResolution: 'Độ lặp lại vị trí ±0.005mm (C5 Grade)',
      overloadCapacity: '최대 가반하중 120kg / 속도 2,000 mm/s',
      protectionRating: 'Dải băng chắn bụi Inox (스테인리스 방진 밴드)'
    },
    features: {
      vi: [
        'Thanh ray trượt dẫn hướng LM Guide Nhật Bản chịu tải cao và bền bỉ',
        'Tích hợp sẵn bệ gá động cơ servo Mitsubishi MR-J5 và cảm biến cữ hành trình',
        'Cung cấp kèm bản vẽ CAD 2D/3D phục vụ thiết kế máy tự động'
      ],
      ko: [
        '고강성 알루미늄 압출 베이스 및 정밀 연삭 C5급 볼스크류/LM 가이드 일체형 구조',
        '미쓰비시 서보 모터 장착용 전용 마운팅 브라켓 및 포토 리미트 센서 표준 장착',
        '장비 설계용 2D/3D CAD 모델링 데이터 전 규격 무상 제공'
      ],
      en: [
        'Rigid aluminum extrusion base with C5 ground ballscrew and LM guides',
        'Pre-machined motor brackets for Mitsubishi MR-J5 with photo sensors',
        'Full 2D/3D CAD models readily available for machine designers'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/linear.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng thanh phôi (Lắp ráp giao trong 48h)',
      ko: '현지 가공 조립 라인 운영 (주문 후 24~48h 신속 납품)',
      en: 'Assembled in Vietnam (24-48h express delivery)'
    },
    isHot: true
  },
  // 2. LMS System (Dedicated 'lms' category)
  {
    id: 'prod-lms-system',
    category: 'lms',
    categoryLabel: {
      vi: 'Hệ thống vận chuyển từ tính LMS',
      ko: 'LMS 시스템 (LMS System)',
      en: 'LMS Magnetic Transfer System'
    },
    modelName: 'DAWOO FA / High-Speed LMS Magnetic Linear Transfer System (LMS-M Series)',
    brand: 'DAWOO FA',
    tagline: {
      vi: 'Hệ thống vận chuyển từ tính tuyến tính LMS tốc độ cao 4.0m/s, điều khiển độc lập từng con trượt.',
      ko: '차세대 초고속 마그네틱 리니어 반송 시스템(LMS), 다중 캐리어 개별 동기/독립 제어 솔루션.',
      en: 'Next-gen high-speed magnetic linear motion transfer system (LMS) with independent carrier control.'
    },
    specs: {
      powerCapacity: '최대 이송 속도: 4,000 mm/s (가속도 4G)',
      inputVoltage: 'DC 48V / AC 200~240V 모듈형 트랙 전원',
      controlMode: 'EtherCAT / CC-Link IE TSN 다축 정밀 동기 제어',
      encoderResolution: '정지 반복 정밀도 ±0.01 mm (고분해능 마그네틱 스케일)',
      overloadCapacity: '캐리어당 가반하중 1kg ~ 30kg (무접촉/저마찰 구동)',
      protectionRating: '클린룸 대응 무분진 구조 (2차전지/반도체/디스플레이)'
    },
    features: {
      vi: [
        'Điều khiển độc lập vị trí, tốc độ từng con trượt (Shuttle/Carrier) trên cùng đường ray',
        'Tốc độ vận chuyển siêu cao 4m/s, loại bỏ dây cáp chuyển động, không sinh bụi',
        'Tối ưu hóa cho dây chuyền lắp ráp Pin xe điện (EV Battery), bán dẫn và mô-đun 카메라'
      ],
      ko: [
        '단일 순환 트랙 위 다수의 캐리어(Shuttle)를 개별 가감속 및 초정밀 위치 동기 제어',
        '케이블베이어가 없는 비접촉 자기부상 추진 방식으로 분진 발생 제로 및 초장수명 실현',
        '2차전지 조립 라인, 반도체 패키징 및 스마트폰 카메라 모듈 고속 검사 공정 최적화'
      ],
      en: [
        'Independent position and velocity control for multiple shuttles on a single track',
        'Cable-free magnetic propulsion eliminating dust generation and mechanical wear',
        'Ideal for EV battery assembly, semiconductor packaging and high-speed inspection'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/dd_motor.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Kho dự án Bắc Ninh (Tư vấn kỹ thuật & Cung cấp 1~2 tuần)',
      ko: '박닌 기술센터 표준 트랙 보유 및 맞춤 설계 대응',
      en: 'Bac Ninh engineering hub modular track stock available'
    },
    isHot: true
  },
  // 3. Cleanroom WTR Robot (Dedicated 'wtr' category)
  {
    id: 'prod-wtr-clean-robot',
    category: 'wtr',
    categoryLabel: {
      vi: 'Robot chuyển Wafer (WTR Robot)',
      ko: '웨이퍼로봇 (WTR Robot)',
      en: 'Cleanroom Wafer Transfer Robots (WTR)'
    },
    modelName: 'DAWOO FA / Cleanroom Wafer Transfer Robot (WTR-Class 1 Series)',
    brand: 'DAWOO ROBOT',
    tagline: {
      vi: 'Robot gắp 웨이퍼 phòng sạch đạt chuẩn Class 1, chuyên dụng cho dây chuyền bán dẫn & FPD.',
      ko: 'Class 1 클린룸 인증 고진공 웨이퍼 반송 WTR 로봇, 반도체 및 디스플레이 전공정 특화.',
      en: 'Class 1 cleanroom wafer transfer robot specialized for semiconductor & display fabs.'
    },
    specs: {
      powerCapacity: 'Tương thích 웨이퍼 200mm (8") & 300mm (12")',
      inputVoltage: 'AC 200~220V 50/60Hz Clean Power',
      controlMode: 'SECS/GEM 통신 및 고속 Ethernet 인터페이스',
      encoderResolution: 'Độ lặp lại vị trí siêu cao ±0.01 mm',
      overloadCapacity: 'Thiết kế cánh tay kép (Dual Arm) gắp song song',
      protectionRating: 'Tiêu chuẩn độ sạch ISO Class 1 / FED Class 1'
    },
    features: {
      vi: [
        'Cánh tay làm bằng vật liệu Ceramic/Carbon siêu nhẹ triệt tiêu tĩnh điện ESD',
        'Đạt tiêu chuẩn phòng sạch khắt khe ISO Class 1 cho nhà máy bán dẫn',
        'Thuật toán chống rung độc quyền bảo đảm an toàn tuyệt đối cho wafer giá trị cao'
      ],
      ko: [
        '정전기 방지(ESD) 세라믹/카본 엔드이펙터 적용으로 웨이퍼 스크래치 방지',
        '글로벌 반도체 라인 기준 충족 ISO Class 1 고진공 클린룸 규격',
        '초정밀 진동 억제 궤적 제어로 고가 웨이퍼 낙하 및 미세 크랙 방지'
      ],
      en: [
        'ESD-safe ceramic/carbon end-effectors preventing wafer contamination',
        'Certified ISO Class 1 ultra-clean design for advanced semiconductor fabs',
        'Proprietary active vibration control safeguarding fragile wafers'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/wtr.jpg',
    inStockVietnam: false,
    leadTime: {
      vi: 'Hàng đặt dự án kỹ thuật (2~3 tuần)',
      ko: '반도체 프로젝트 전용 엔지니어링 발주 대응 (2~3주)',
      en: 'Project-specific engineering order (2-3 weeks)'
    }
  },
  // Yaskawa Sigma-7 Servo (Servo)
  {
    id: 'prod-yaskawa-sigma7',
    category: 'servo',
    categoryLabel: {
      vi: 'Động cơ Servo & Driver (Servo)',
      ko: '서보 시스템 (Servo)',
      en: 'Servo System'
    },
    modelName: 'YASKAWA / Sigma-7 AC Servo System (SGD7S / SGM7J Series)',
    brand: 'YASKAWA',
    tagline: {
      vi: 'Hệ thống servo AC đa năng tích hợp bộ mã hóa 24-bit đáp ứng tần số siêu cao 3.1kHz.',
      ko: '초고응답 주파수(3.1kHz) 및 24bit 엔코더 탑재 범용 AC 서보 시스템, 튜닝리스 기능 지원.',
      en: 'High-response AC servo system with 24-bit high resolution encoder and tuning-less feature.'
    },
    specs: {
      powerCapacity: '50W ~ 15kW (200V / 400V)',
      inputVoltage: 'AC 200~240V / 380~480V',
      controlMode: 'MECHATROLINK-III, EtherCAT, Analog/Pulse',
      encoderResolution: '24-bit (16,777,216 p/rev)',
      overloadCapacity: '350% 최대 순시 토크',
      protectionRating: 'IP67 방진/방수 등급'
    },
    features: {
      vi: [
        'Tần số đáp ứng 3.1kHz hàng đầu ngành công nghiệp',
        'Chức năng Tuning-less tự động điều chỉnh không cần cài đặt phức tạp',
        'Có sẵn kho dự án tại Bắc Ninh & Bình Dương'
      ],
      ko: [
        '3.1kHz 초고응답 주파수로 설비 택트 타임 극대화',
        '게인 조정 없이 즉시 안정 운전이 가능한 튜닝리스 기능 내장',
        '박닌 및 빈증 기술물류 허브 상시 재고 대응'
      ],
      en: [
        '3.1kHz industry-leading frequency response',
        'Built-in tuning-less operation for instant commissioning',
        'Ready stock in Bac Ninh & Binh Duong hubs'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/mr_j4.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 상시 재고 보유 (24~48h 납기)',
      en: 'In stock in Vietnam (24-48h delivery)'
    }
  },
  // LS Electric Starvert iS7 Inverter (Inverter)
  {
    id: 'prod-ls-is7',
    category: 'inverter',
    categoryLabel: {
      vi: 'Biến tần công nghiệp (Inverter)',
      ko: '범용 인버터 (Inverter)',
      en: 'Industrial Inverter (VFD)'
    },
    modelName: 'LS ELECTRIC / Starvert iS7 High-Torque Inverter Series',
    brand: 'LS ELECTRIC',
    tagline: {
      vi: 'Biến tần công nghiệp hiệu suất cao điều khiển vector không cảm biến từ Hàn Quốc.',
      ko: '정밀 센서리스 벡터 제어 및 고기동 토크를 지원하는 고성능 산업용 범용 인버터.',
      en: 'Industrial high-performance inverter with precise sensorless vector control.'
    },
    specs: {
      powerCapacity: '0.75 kW ~ 160 kW',
      inputVoltage: '3-Phase AC 200~230V / 380~480V',
      controlMode: 'V/F, Sensorless Vector, Flux Vector',
      encoderResolution: 'RS-485, Modbus-RTU, Profibus-DP, EtherNet/IP',
      overloadCapacity: '중부하 150% 60초 / 200% 3초',
      protectionRating: 'IP20 / IP54 방진형 옵션'
    },
    features: {
      vi: [
        'Đáp ứng mô-men xoắn mạnh mẽ cho tải nặng công nghiệp',
        'Màn hình LCD đa ngôn ngữ dễ dàng cài đặt tham số',
        'Sẵn hàng tại kho Việt Nam, đầy đủ C/O Hàn Quốc'
      ],
      ko: [
        '강력한 저속 토크 및 정밀 속도/토크 제어 성능 제공',
        '와이드 그래픽 LCD 키패드로 직관적인 파라미터 복사/설정',
        '한국산 정품 원산지 증명(C/O) 및 현지 보세창고 즉시 출고'
      ],
      en: [
        'Powerful low-speed torque and precise vector control',
        'Wide graphic LCD keypad for easy parameter management',
        'Genuine Korean C/O with immediate Vietnam stock dispatch'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/fr_e800.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '박닌/빈증 보세창고 상시 재고 보유',
      en: 'In stock in Vietnam (24-48h delivery)'
    }
  },
  // Other FA Hardware: Omron / Autonics Industrial Sensors & Power Supplies
  {
    id: 'prod-other-fa-sensor',
    category: 'other',
    categoryLabel: {
      vi: 'Thiết bị tự động hóa khác (Other)',
      ko: '기타 자동화 기기 (Other FA)',
      en: 'Other Factory Automation Hardware'
    },
    modelName: 'OMRON & AUTONICS / 포토·근접 센서 및 산업용 SMPS 파워서플라이 (E2E / E3Z / S8VK)',
    brand: 'OMRON / AUTONICS',
    tagline: {
      vi: 'Cảm biến tiệm cận, cảm biến quang học và bộ nguồn công nghiệp SMPS độ bền cao IP67.',
      ko: '초고신뢰성 근접센서, 포토센서 및 산업용 제어반 SMPS 전원공급장치, 방진/방수 IP67.',
      en: 'High-reliability proximity sensors, photoelectric sensors and industrial SMPS power supplies.'
    },
    specs: {
      powerCapacity: 'SMPS 용량: 15W ~ 960W (DC 24V 출력)',
      inputVoltage: 'AC 100~240V Free Voltage / DC 12~24V',
      controlMode: 'NPN / PNP 출력, IO-Link 스마트 센서 대응',
      encoderResolution: '고속 응답 < 0.5ms, 장거리 검출',
      overloadCapacity: '과전류/과전압 보호 회로 내장',
      protectionRating: '센서 IP67 내유성 방수 구조'
    },
    features: {
      vi: [
        'Chống nhiễu ánh sáng và chống dầu cắt gọt đạt chuẩn IP67',
        'Bộ nguồn SMPS S8VK hoạt động ổn định trong môi trường nhiệt độ cao',
        'Sẵn hàng số lượng lớn phục vụ bảo trì nhà máy tại Việt Nam'
      ],
      ko: [
        '내유성 IP67 보호구조로 열악한 가공·조립 라인 장수명 보장',
        '산업용 제어반 표준 DC 24V 파워서플라이 및 브레이크 유닛 상시 구비',
        '베트남 공장 유지보수(MRO)용 전 규격 상시 대량 보유'
      ],
      en: [
        'Oil-resistant IP67 enclosure for harsh manufacturing lines',
        'Industrial standard DC 24V SMPS power supplies and brake units',
        'Abundant MRO stock ready for immediate plant maintenance'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/pilz_safety.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng số lượng lớn (Giao ngay trong ngày)',
      ko: '현지 보세창고 상시 대량 보유 (당일 출고)',
      en: 'Bulk stock ready for same-day delivery'
    }
  }
];

const COMPANY_STORAGE_KEY = 'dawoofa_company_info_v1';
const PRODUCTS_STORAGE_KEY = 'dawoofa_products_v5';
const SLIDER_STORAGE_KEY = 'dawoofa_hero_slider_v1';

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

export const normalizeCategoryKey = (rawCategory?: string): string => {
  if (!rawCategory || typeof rawCategory !== 'string') return 'servo';
  const c = rawCategory.toLowerCase().trim();
  // Exact match check first
  const exact = OFFICIAL_CATEGORIES.find((cat) => cat.id === c);
  if (exact) return exact.id;

  // Keyword fallback normalization for legacy saved items
  if (c.includes('servo') || c.includes('서보') || c.includes('dd')) return 'servo';
  if (c.includes('inverter') || c.includes('인버터') || c.includes('biến tần') || c.includes('vfd')) return 'inverter';
  if (c.includes('plc') || c.includes('hmi') || c.includes('got') || c.includes('제어')) return 'plc';
  if (c.includes('wtr') || c.includes('웨이퍼') || c.includes('wafer')) return 'wtr';
  if (c.includes('dawoorobot') || c.includes('다우로봇') || c.includes('cartesian') || c.includes('직교') || c.includes('갠트리') || c.includes('gantry')) return 'dawoorobot';
  if (c.includes('robot') || c.includes('산업용') || c.includes('로봇') || c.includes('다관절') || c.includes('articulated')) return 'robot';
  if (c.includes('lms') || c.includes('마그네틱') || c.includes('từ tính')) return 'lms';
  if (c.includes('linear') || c.includes('리니어') || c.includes('tuyến tính')) return 'linear';
  if (c.includes('reducer') || c.includes('감속기') || c.includes('giảm tốc') || c.includes('gearbox')) return 'reducer';
  if (c.includes('safety') || c.includes('안전') || c.includes('하네스') || c.includes('an toàn') || c.includes('wiring')) return 'safety';
  return 'other';
};

export const normalizeProductItem = (item: any): FaProductItem => {
  const catId = normalizeCategoryKey(item?.category);
  const catDef = OFFICIAL_CATEGORIES.find((c) => c.id === catId) || OFFICIAL_CATEGORIES[0];

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
    image: item?.image || 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
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
  const defaultNormalized = EXTENDED_INITIAL_PRODUCTS.map(normalizeProductItem);
  if (typeof window === 'undefined') return defaultNormalized;
  try {
    const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(normalizeProductItem);
      }
    }
    // Check legacy v4, v3 or v2 storage for any custom user-created items
    const legacyRaw =
      localStorage.getItem('dawoofa_products_v4') ||
      localStorage.getItem('dawoofa_products_v3') ||
      localStorage.getItem('dawoofa_products_v2');
    if (legacyRaw) {
      const legacyParsed = JSON.parse(legacyRaw);
      if (Array.isArray(legacyParsed)) {
        const customItems = legacyParsed
          .filter((item: any) => item && typeof item.id === 'string' && item.id.startsWith('fa-custom-'))
          .map(normalizeProductItem);
        if (customItems.length > 0) {
          const merged = [...customItems, ...defaultNormalized];
          localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
      }
    }
    return defaultNormalized;
  } catch (e) {
    console.error('Failed to load products from localStorage', e);
    return defaultNormalized;
  }
};

export const saveStoredProducts = (products: FaProductItem[]): void => {
  if (typeof window === 'undefined') return;
  try {
    const normalized = products.map(normalizeProductItem);
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
      return {
        intervalSeconds: typeof parsed.intervalSeconds === 'number' && parsed.intervalSeconds > 0 ? parsed.intervalSeconds : 4,
        autoPlay: parsed.autoPlay !== false,
        slides: parsed.slides
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
    localStorage.setItem(SLIDER_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save slider settings to localStorage', e);
  }
};

export const resetStoreToFactoryDefaults = (): { 
  company: CompanyInfo; 
  products: FaProductItem[];
  slider: HeroSliderSettings;
} => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(COMPANY_STORAGE_KEY);
      localStorage.removeItem(PRODUCTS_STORAGE_KEY);
      localStorage.removeItem(SLIDER_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset storage', e);
    }
  }
  return {
    company: DEFAULT_COMPANY_INFO,
    products: EXTENDED_INITIAL_PRODUCTS,
    slider: DEFAULT_SLIDER_SETTINGS
  };
};
