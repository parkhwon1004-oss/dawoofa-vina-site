import { FaProduct, PartnerBrand } from '../types';

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: { ko: '전체 제품', vi: 'Tất cả sản phẩm', en: 'All Products' } },
  { id: 'dawoorobot', label: { ko: '다우로봇', vi: 'Robot Dawoo', en: 'Cartesian Robot' } },
  { id: 'linear', label: { ko: '리니어모듈', vi: 'Mô-đun Tuyến Tính', en: 'Linear Module' } },
  { id: 'reducer', label: { ko: '감속기', vi: 'Hộp Giảm Tốc', en: 'Reducer' } },
  { id: 'articulated', label: { ko: '다관절로봇', vi: 'Robot Đa Khớp', en: 'Articulated Robot' } },
  { id: 'wtr', label: { ko: 'WTR로봇', vi: 'Robot WTR (Bán Dẫn)', en: 'Wafer Transfer Robot' } },
  { id: 'lms', label: { ko: 'LMS시스템', vi: 'Hệ Thống LMS', en: 'LMS System' } },
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: "dawoo",
    name: "DAWOO ROBOT",
    country: "Korea",
    role: {
      ko: "한국 본사 제조 / 직교로봇 및 차세대 모션 모듈 개발",
      vi: "Trụ sở chính Hàn Quốc / Sản xuất Robot Cartesian & Module chuyển động",
      en: "Headquarters / Cartesian Robots & Advanced Motion"
    },
    logoText: "DAWOO ROBOT",
    badge: "한국 본사",
    category: "Robots & LMS"
  },
  {
    id: "nikki",
    name: "NIKKI DENSO",
    country: "Japan / Korea",
    role: {
      ko: "공식 대리점 / 다이렉트 드라이브 및 AC 서보 시스템",
      vi: "Đại lý ủy quyền / Direct Drive & Động cơ Servo AC",
      en: "Authorized Distributor / Direct Drive & AC Servo Systems"
    },
    logoText: "NIKKI DENSO",
    badge: "공식 대리점",
    category: "Direct Drive / Servo"
  },
  {
    id: "gplus",
    name: "G+ (G-PLUS)",
    country: "Korea / Global",
    role: {
      ko: "공식 파트너 / 고정밀 유성감속기 및 중공축 로터리 감속기",
      vi: "Đối tác chính thức / Hộp giảm tốc hành tinh & Bàn xoay chính xác",
      en: "Official Partner / Precision Planetary Reducers & Hollow Rotary"
    },
    logoText: "G+ MOTION",
    badge: "핵심 파트너",
    category: "Planetary Reducers"
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi Electric",
    country: "Japan",
    role: {
      ko: "공식 특약점 / MELSERVO MR-J5, FREQROL 인버터, MELSEC PLC",
      vi: "Đại lý chính thức / Hệ thống Servo MR-J5, Biến tần & PLC",
      en: "Authorized Partner / Servo MR-J5, Inverters & MELSEC PLC"
    },
    logoText: "MITSUBISHI ELECTRIC",
    badge: "특약점",
    category: "FA Components"
  },
  {
    id: "sanmotion",
    name: "SANMOTION",
    country: "Japan",
    role: {
      ko: "스테핑 모터 및 고응답 드라이버 시스템",
      vi: "Hệ thống động cơ bước & Driver phản hồi tốc độ cao",
      en: "Stepping Motors & High-Response Driver Systems"
    },
    logoText: "SANMOTION",
    badge: "인증 공급사",
    category: "Stepping Motors"
  }
];

export const FA_PRODUCTS: FaProduct[] = [
  // 1. 다우로봇 (Cartesian / Gantry)
  {
    id: "p-cart-01",
    category: "dawoorobot",
    categoryName: {
      ko: "다우로봇 (직교로봇)",
      vi: "Robot Dawoo (Cartesian)",
      en: "Dawoo Cartesian Robot"
    },
    modelName: "DCR-1200 S-Series",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "고강성 알루미늄 압출 바디 기반 3축 갠트리 직교로봇 (볼스크류 구동)",
      vi: "Robot tọa độ 3 trục khung nhôm cứng vững cao dẫn động vít me bi",
      en: "High-rigidity aluminum body 3-axis gantry cartesian robot with ballscrew"
    },
    specs: {
      payload: "최대 50 kg",
      stroke: "100 ~ 2,500 mm",
      repeatability: "±0.01 mm",
      maxSpeed: "2,000 mm/s",
      cleanClass: "ISO Class 5"
    },
    highlights: {
      ko: [
        "C5급 초정밀 연삭 볼스크류 및 광폭 LM 가이드",
        "내장형 케이블베이어 적용으로 미려한 외관 및 배선 보호",
        "베트남 현지 박닌/빈증 보세창고 48시간 내 신속 공급"
      ],
      vi: [
        "Vít me bi mài cấp C5 và ray dẫn hướng LM bản rộng",
        "Xích dẫn cáp âm thân bảo vệ dây tín hiệu",
        "Tiêu chuẩn Hàn Quốc - Giao ngay tại Việt Nam"
      ],
      en: [
        "Class C5 ground ballscrew with wide LM guide",
        "Integrated cable carrier for clean wire routing",
        "Korean standard stock ready for fast dispatch in Vietnam"
      ]
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "베트남 현지 재고 보유 (3일 내 출고)",
      vi: "Có sẵn kho Bắc Ninh (Giao trong 3 ngày)",
      en: "Local Stock (Dispatch in 3 days)"
    },
    badge: "베스트셀러"
  },
  {
    id: "p-cart-02",
    category: "dawoorobot",
    categoryName: {
      ko: "다우로봇 (갠트리)",
      vi: "Robot Dawoo (Gantry)",
      en: "Dawoo Gantry System"
    },
    modelName: "DGR-2000 Heavy Gantry",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "자동차·2차전지 배터리 팩 이송 전용 대형 갠트리 로봇 시스템",
      vi: "Hệ thống robot gantry khổ lớn chuyên dụng chuyển pin xe điện & ô tô",
      en: "Heavy-duty gantry robot system for EV battery & automotive assembly"
    },
    specs: {
      payload: "최대 150 kg",
      stroke: "500 ~ 4,000 mm",
      repeatability: "±0.02 mm",
      maxSpeed: "2,500 mm/s",
      cleanClass: "Industrial standard"
    },
    highlights: {
      ko: [
        "고강성 트윈 볼스크류 동기 제어",
        "헤비 듀티 기어드 랙 & 피니언 옵션",
        "현지 엔지니어 맞춤 스트로크 설계 및 시운전 지원"
      ],
      vi: [
        "Điều khiển đồng bộ trục vít me bi kép cứng vững cao",
        "Tùy chọn thanh răng bánh răng chính xác cao",
        "Kỹ sư hỗ trợ thiết kế theo yêu cầu và chạy thử tại xưởng"
      ],
      en: [
        "Dual ballscrew synchronization with rigid frame",
        "Precision rack & pinion option for extended stroke",
        "Local engineering design and on-site commissioning"
      ]
    },
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "상시 부품 보유 (1주 납기)",
      vi: "Sẵn linh kiện (Giao trong 1 tuần)",
      en: "Ready parts (1 week dispatch)"
    },
    badge: "대하중 150kg"
  },

  // 2. 리니어모듈 (Linear Module)
  {
    id: "p-linear-01",
    category: "linear",
    categoryName: {
      ko: "리니어모듈",
      vi: "Mô-đun Tuyến Tính",
      en: "Linear Motor Module"
    },
    modelName: "DLN-80 Ironless Linear Motor",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "코깅 없는 무철심 코어 적용 반도체·디스플레이용 초정밀 리니어 모터 모듈",
      vi: "Mô-đun động cơ tuyến tính không lõi sắt không lực cản cogging cho bán dẫn",
      en: "Coreless ironless linear motor module with zero cogging for semiconductor"
    },
    specs: {
      payload: "최대 30 kg",
      stroke: "150 ~ 3,000 mm",
      repeatability: "±0.001 mm (1 µm)",
      maxSpeed: "3,500 mm/s",
      cleanClass: "ISO Class 3 Cleanroom"
    },
    highlights: {
      ko: [
        "광학 리니어 스케일 탑재 (분해능 0.1µm)",
        "반도체 웨이퍼 검사 및 초정밀 계측 표준 탑재",
        "다중 슬라이더(Multi-Carrier) 독립 제어 지원"
      ],
      vi: [
        "Tích hợp thước quang tuyến tính độ phân giải 0.1µm",
        "Lắp đặt tiêu chuẩn máy kiểm tra bán dẫn/wafer",
        "Hỗ trợ nhiều con trượt điều khiển độc lập"
      ],
      en: [
        "Built-in optical linear encoder (0.1µm resolution)",
        "Standard equipment for semiconductor wafer inspection",
        "Multi-carrier independent motion control"
      ]
    },
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "상시 보유 (48시간 내 납기)",
      vi: "Sẵn hàng tại kho (Giao trong 48h)",
      en: "In-Stock (Delivery in 48h)"
    },
    badge: "초정밀 1µm"
  },
  {
    id: "p-linear-02",
    category: "linear",
    categoryName: {
      ko: "리니어모듈 (볼스크류)",
      vi: "Mô-đun Vít Me",
      en: "Ballscrew Linear Module"
    },
    modelName: "DKW Series Heavy Duty Module",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "대하중 이송용 듀얼 LM 가이드 일체형 고강성 액추에이터",
      vi: "Cơ cấu truyền động ray đôi tải trọng nặng tích hợp vít me bi",
      en: "Heavy-duty dual LM guide integrated ballscrew actuator"
    },
    specs: {
      payload: "최대 120 kg",
      stroke: "200 ~ 2,000 mm",
      repeatability: "±0.005 mm",
      maxSpeed: "1,500 mm/s",
      cleanClass: "Industrial standard"
    },
    highlights: {
      ko: [
        "듀얼 LM 가이드 배치로 모멘트 하중 극대화",
        "스테인리스 방진 밴드 실드 기본 적용",
        "미쓰비시/파나소닉 서보 모터 브라켓 완비"
      ],
      vi: [
        "Bố trí ray dẫn hướng LM kép chịu tải mô-men cực đại",
        "Tấm chắn bụi bằng inox chống rỉ",
        "Mặt bích tương thích hoàn toàn servo Nhật/Hàn"
      ],
      en: [
        "Dual LM guides for maximum pitch/roll/yaw rigidity",
        "Stainless steel dust-proof cover standard",
        "Universal motor mount for major servo brands"
      ]
    },
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "현지 보세창고 보유 (당일 출고)",
      vi: "Có sẵn kho ngoại quan (Giao trong ngày)",
      en: "Bonded stock ready (Same-day dispatch)"
    },
    badge: "고강성 대하중"
  },

  // 3. 감속기 (Reducer)
  {
    id: "p-reducer-01",
    category: "reducer",
    categoryName: {
      ko: "감속기 (유성감속기)",
      vi: "Hộp Giảm Tốc Hành Tinh",
      en: "Planetary Reducer"
    },
    modelName: "G+ Planetary Reducer GS-090",
    brand: "G+ (G-PLUS)",
    tagline: {
      ko: "백래시 3 arcmin 이하 초정밀 헬리컬 유성치차 감속기 (모터 직결형)",
      vi: "Hộp giảm tốc hành tinh răng xoắn độ rơ dưới 3 arcmin độ chính xác siêu cao",
      en: "Backlash <= 3 arcmin ultra-precision helical planetary reducer"
    },
    specs: {
      ratio: "1:3 ~ 1:100",
      repeatability: "<= 3 arcmin 백래시",
      maxSpeed: "6,000 rpm 입력속도",
      payload: "정격 토크 180 Nm",
      cleanClass: "IP65 밀폐형 방수/방진"
    },
    highlights: {
      ko: [
        "헬리컬 기어 침탄 열처리 정밀 연삭으로 저소음 운전",
        "장수명 합성 그리스 봉입 (완전 유지보수 프리)",
        "서보모터 입력 플랜지 무상 맞춤 가공 제공"
      ],
      vi: [
        "Bánh răng xoắn thấm cacbon mài chính xác cao êm ái",
        "Bôi trơn mỡ tổng hợp tuổi thọ cao (không cần bảo trì)",
        "Gia công mặt bích servo tùy chỉnh miễn phí"
      ],
      en: [
        "Carburized ground helical gears for low-noise operation",
        "Sealed long-life synthetic grease (Maintenance-free)",
        "Customized motor adapter flange included"
      ]
    },
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "베트남 창고 상시 재고 (24h 납기)",
      vi: "Sẵn hàng tại kho Việt Nam (Giao trong 24h)",
      en: "Ready stock in Vietnam (24h delivery)"
    },
    badge: "정밀 3 arcmin"
  },
  {
    id: "p-reducer-02",
    category: "reducer",
    categoryName: {
      ko: "감속기 (중공축 로터리)",
      vi: "Bàn Xoay Rỗng (Hollow Rotary)",
      en: "Hollow Rotary Actuator"
    },
    modelName: "GBX-130 Hollow Rotary Table",
    brand: "G+ (G-PLUS)",
    tagline: {
      ko: "배선·배관 관통용 대구경 중공축 고토크 인덱스 회전 플랫폼",
      vi: "Bàn xoay chỉ mục lỗ rỗng tải mô-men xoắn cao luồn dây cáp",
      en: "Hollow bore high-torque index rotary platform for cable routing"
    },
    specs: {
      ratio: "1:10, 1:18, 1:30",
      repeatability: "±15 arcsec",
      maxSpeed: "200 rpm",
      payload: "허용 관성 50 kg-m²",
      cleanClass: "IP54 방진"
    },
    highlights: {
      ko: [
        "Ø62mm 대구경 중공축으로 공압 배관 및 센서선 관통 용이",
        "초정밀 크로스 롤러 베어링 탑재로 축/라디얼 하중 대응",
        "레이저 마킹기, 부품 검사 인덱스 테이블 다수 적용"
      ],
      vi: [
        "Lỗ rỗng lớn Ø62mm dễ dàng luồn ống khí nén và dây điện",
        "Tích hợp ổ bi chéo Cross Roller chính xác cao",
        "Ứng dụng rộng rãi máy khắc laser và bàn xoay kiểm tra"
      ],
      en: [
        "Large Ø62mm center aperture for air hoses and wires",
        "Integrated cross-roller bearing for heavy axial/radial loads",
        "Widely applied in laser marking & inspection tables"
      ]
    },
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "현지 재고 보유 (3일 내 납품)",
      vi: "Có sẵn kho (Giao trong 3 ngày)",
      en: "In-Stock (Delivery in 3 days)"
    },
    badge: "인덱스 최적화"
  },

  // 4. 다관절로봇 (Articulated Robot)
  {
    id: "p-art-01",
    category: "articulated",
    categoryName: {
      ko: "다관절로봇",
      vi: "Robot Đa Khớp (6 Trục)",
      en: "6-Axis Articulated Robot"
    },
    modelName: "DAR-607 6축 다관절 로봇",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "반복 정밀도 ±0.02mm 초고속 조립·핸들링 전용 6축 산업용 다관절 로봇",
      vi: "Robot công nghiệp 6 trục tốc độ cao chuyên lắp ráp & bốc dỡ linh kiện",
      en: "High-speed 6-axis industrial articulated robot for assembly & handling"
    },
    specs: {
      payload: "7 kg",
      reach: "910 mm 작업반경",
      repeatability: "±0.02 mm",
      axes: "6축 독립 서보 구동",
      cleanClass: "IP67 방진/방수 옵션"
    },
    highlights: {
      ko: [
        "콤팩트 슬림 암 설계로 협소한 설비 내부 자유자재 접근",
        "비전 카메라 연동 및 자동 캘리브레이션 지원",
        "베트남 현지 티칭 펜던트 한국어/베트남어/영어 다국어 지원"
      ],
      vi: [
        "Thiết kế cánh tay thanh mảnh linh hoạt trong không gian hẹp",
        "Tích hợp camera thị giác máy tính và tự động căn chỉnh",
        "Tay dạy học Teach Pendant hỗ trợ đa ngôn ngữ Việt/Hàn/Anh"
      ],
      en: [
        "Compact slim arm design for tight automation cells",
        "Machine vision integration and auto-calibration support",
        "Multi-language teach pendant (KR, VI, EN)"
      ]
    },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "하노이 테크센터 데모 보유 (즉시 공급)",
      vi: "Có sẵn máy demo tại Hà Nội (Giao ngay)",
      en: "Demo unit ready at Hanoi Tech Center (Instant delivery)"
    },
    badge: "고속 정밀 핸들링"
  },
  {
    id: "p-art-02",
    category: "articulated",
    categoryName: {
      ko: "다관절로봇 (협동로봇)",
      vi: "Robot Cộng Tác (Cobot)",
      en: "Collaborative Robot"
    },
    modelName: "DCR-Cobot 10 Safety Robot",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "안전 펜스 없이 작업자와 공존하는 충돌 감지 안전 협동로봇",
      vi: "Robot cộng tác an toàn cảm biến va chạm làm việc cạnh con người",
      en: "Safety collaborative robot with direct collision detection"
    },
    specs: {
      payload: "10 kg",
      reach: "1,300 mm 작업반경",
      repeatability: "±0.03 mm",
      safety: "ISO 10218-1 / ISO/TS 15066 인증",
      cleanClass: "IP54 산업용 등급"
    },
    highlights: {
      ko: [
        "토크 센서 기반 정밀 충돌 감지 및 즉각 정지 안전 기능",
        "다이렉트 핸드 가이딩(직접 교시) 기능으로 빠른 셋업",
        "팔레타이징, 스크류 체결, 머신 텐딩 솔루션 패키지 완비"
      ],
      vi: [
        "Cảm biến mô-men xoắn phát hiện va chạm dừng tức thì",
        "Dạy học trực tiếp bằng tay Hand-Guiding cài đặt cực nhanh",
        "Gói giải pháp đóng thùng pallet, siết ốc, nạp phôi CNC"
      ],
      en: [
        "Torque sensor based collision detection & safe instant stop",
        "Direct hand-guiding for rapid program setup",
        "Turnkey packages for palletizing, screwdriving & machine tending"
      ]
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "현지 시연 및 1주 납품 가능",
      vi: "Trình diễn trực tiếp & giao trong 1 tuần",
      en: "On-site demo & delivery in 1 week"
    },
    badge: "안전펜스 프리"
  },

  // 5. WTR로봇 (Wafer Transfer Robot)
  {
    id: "p-wtr-01",
    category: "wtr",
    categoryName: {
      ko: "WTR로봇 (반도체 웨이퍼 로봇)",
      vi: "Robot WTR (Chuyển Wafer Bán Dẫn)",
      en: "Wafer Transfer Robot (WTR)"
    },
    modelName: "VSAC Wafer Transfer Robot (WTR)",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "반도체 클린룸 웨이퍼(300mm/450mm) 및 글라스 이송 전용 진공 클린 로봇",
      vi: "Robot phòng sạch chuyên dụng vận chuyển wafer & kính bán dẫn",
      en: "Semiconductor cleanroom wafer & glass substrate transfer vacuum robot"
    },
    specs: {
      payload: "2 ~ 10 kg (Wafer 300mm/450mm)",
      stroke: "Z축 400mm / R축 800mm",
      repeatability: "±0.02 mm",
      cleanClass: "ISO Class 1 Cleanroom Standard"
    },
    highlights: {
      ko: [
        "마모 파티클 제로 특수 마그네틱 씰링 메커니즘",
        "진공 척 및 엣지 그립(Edge-Grip) 엔드이펙터 적용",
        "EFEM 및 진공 챔버 로드락 시스템 완벽 연동"
      ],
      vi: [
        "Niêm phong từ tính đặc biệt không phát sinh bụi ma sát",
        "Đầu kẹp chân không và kẹp mép an toàn tuyệt đối",
        "Tương thích hoàn hảo hệ thống EFEM và buồng chân không"
      ],
      en: [
        "Zero-particle magnetic ferrofluid sealing mechanism",
        "Vacuum chuck & edge-grip end effectors",
        "Seamless integration with EFEM and load-lock chambers"
      ]
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: false,
    leadTime: {
      ko: "기술 컨설팅 후 맞춤 프로젝트 제작 (2~3주)",
      vi: "Tư vấn kỹ thuật & cung ứng dự án (2~3 tuần)",
      en: "Project-based custom delivery (2~3 weeks)"
    },
    badge: "클린룸 Class 1"
  },

  // 6. LMS시스템 (Linear Motion Track System)
  {
    id: "p-lms-01",
    category: "lms",
    categoryName: {
      ko: "LMS시스템 (스마트 모션 트랙)",
      vi: "Hệ Thống LMS (Đường Ray Tuyến Tính)",
      en: "Linear Motion System (LMS)"
    },
    modelName: "LMS-Flex Modular Track Conveyor",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "차세대 스마트 팩토리 물류 이송을 위한 모듈식 리니어 모션 트랙 시스템",
      vi: "Hệ thống đường ray chuyển động tuyến tính mô-đun cho nhà máy thông minh",
      en: "Next-gen modular linear motion conveyor system for smart factories"
    },
    specs: {
      payload: "최대 100 kg / 캐리어",
      stroke: "무한 확장형 모듈 (1m ~ 50m+)",
      repeatability: "±0.01 mm",
      maxSpeed: "4,000 mm/s",
      cleanClass: "클린룸 ISO Class 4 대응"
    },
    highlights: {
      ko: [
        "개별 무버(Mover) 독립 가속/감속 및 동기 제어",
        "곡선(90°/180°) 및 직선 모듈 자유 조합 (한국 디자인 실물 적용)",
        "2차전지 배터리 팩, 스마트폰 및 반도체 후공정 물류 혁신"
      ],
      vi: [
        "Điều khiển gia tốc/giảm tốc độc lập từng con trượt",
        "Kết hợp tự do các mô-đun thẳng và cong theo layout nhà máy",
        "Tối ưu cho dây chuyền pin xe điện, điện thoại và bán dẫn"
      ],
      en: [
        "Individual mover independent acceleration & precision sync",
        "Flexible curved (90°/180°) and straight module layout",
        "Breakthrough transport for EV battery, smartphone & packaging"
      ]
    },
    image: "./assets/aistudio/images/lms_img.png",
    inStockVietnam: true,
    leadTime: {
      ko: "모듈 조합 및 하노이 테스트 후 1주일 내 납품",
      vi: "Lắp ráp mô-đun & kiểm tra giao trong 1 tuần",
      en: "Module assembled & tested in 1 week"
    },
    badge: "차세대 스마트 트랙"
  },
  {
    id: "p-lms-02",
    category: "lms",
    categoryName: {
      ko: "LMS시스템 (마그네틱 무버)",
      vi: "Con Trượt LMS (Magnetic Mover)",
      en: "LMS Magnetic Mover Carrier"
    },
    modelName: "LMC-40 High-Speed Magnetic Carrier",
    brand: "DAWOO ROBOT",
    tagline: {
      ko: "자기 부상 및 비접촉 리니어 드라이브 기반 초고속 정밀 캐리어",
      vi: "Con trượt từ tính không tiếp xúc tốc độ siêu cao độ chính xác cao",
      en: "Non-contact linear magnetic mover for high-speed transfer"
    },
    specs: {
      payload: "최대 40 kg",
      maxSpeed: "5,000 mm/s",
      acceleration: "최대 5G (50 m/s²)",
      repeatability: "±0.005 mm",
      cleanClass: "비접촉 무분진 제로 마모"
    },
    highlights: {
      ko: [
        "비접촉 마그네틱 구동으로 분진 발생 제로 (클린룸 최적)",
        "최대 5G 급가속으로 사이클 타임 60% 단축",
        "실시간 위치 피드백 센서 내장"
      ],
      vi: [
        "Dẫn động từ tính không tiếp xúc không phát sinh bụi",
        "Gia tốc cực đại 5G rút ngắn 60% chu kỳ thao tác",
        "Tích hợp cảm biến phản hồi vị trí thời gian thực"
      ],
      en: [
        "Zero friction non-contact magnetic propulsion",
        "Max 5G acceleration reduces cycle time by 60%",
        "Embedded high-resolution position feedback"
      ]
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    inStockVietnam: true,
    leadTime: {
      ko: "상시 보유 (48시간 내 납품)",
      vi: "Có sẵn kho (Giao trong 48h)",
      en: "In-Stock (Delivery in 48h)"
    },
    badge: "최대 5G 가속"
  }
];
