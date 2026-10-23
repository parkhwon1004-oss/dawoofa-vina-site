import { FaProductItem, PartnerBrandItem } from '../types';

export const DAWOOFA_PARTNER_BRANDS: PartnerBrandItem[] = [
  {
    id: 'mitsubishi',
    name: 'Mitsubishi Electric',
    role: {
      vi: 'Đại lý ủy quyền cấp 1 chính thức / Servo MELSERVO MR-J5/MR-J4, Biến tần FREQROL A800/E800, PLC MELSEC iQ-R/iQ-F, Màn hình GOT2000',
      ko: '미쓰비시 전기 공식 1급 대리점(특약점) / MELSERVO MR-J5·J4 서보, FREQROL A800·E800 인버터, MELSEC iQ-R·F PLC, GOT2000 터치패널',
      en: 'Official Primary Authorized Distributor / MELSERVO MR-J5 & MR-J4 Servos, FREQROL A800 & E800 Inverters, MELSEC iQ-R & iQ-F PLCs, GOT2000 HMIs'
    },
    tier: 'Đại lý ủy quyền chính thức (Primary Authorized Distributor)',
    country: 'Japan',
    specialty: 'Servo, Inverter, PLC, HMI'
  },
  {
    id: 'yaskawa',
    name: 'YASKAWA',
    role: {
      vi: 'Đối tác công nghệ chuyển động & Robot / Động cơ Servo công suất cao Sigma-7, Biến tần công nghiệp GA700, Cánh tay robot tự động hóa',
      ko: '정밀 모션 & 산업용 로봇 파트너 / Sigma-7 초고응답 서보 시스템, GA700 고기능 벡터 인버터, 산업용 다관절 로봇',
      en: 'Precision Motion & Robotics Partner / Sigma-7 High-Response Servos, GA700 Inverters, Industrial Robots'
    },
    tier: 'Đối tác chuyển động & Robot (Motion & Robot)',
    country: 'Japan',
    specialty: 'AC Servo Drives & Industrial Robots'
  },
  {
    id: 'nikki-denso',
    name: 'NIKKI DENSO',
    role: {
      vi: 'Động cơ Direct Drive (DD) & Servo tuyến tính / Khử hoàn toàn độ rơ cơ khí (Zero Backlash), mâm chia độ góc quay siêu chính xác',
      ko: '다이렉트 드라이브(DD) 모터 & 고속 리니어 서보 / 감속기 없는 직접 구동, 백래시 제로 초정밀 인덱스 회전 제어',
      en: 'Direct Drive (DD) Motors & Linear Servos / Zero-backlash direct drive rotary indexing motors and high-speed linear actuators'
    },
    tier: 'Động cơ dẫn động trực tiếp (Direct Drive & Linear)',
    country: 'Japan',
    specialty: 'Direct Drive Motors & Linear Servos'
  },
  {
    id: 'pilz',
    name: 'PILZ',
    role: {
      vi: 'Chuyên gia an toàn máy móc công nghiệp Đức / Rơ-le an toàn PNOZ, bộ điều khiển an toàn mô-đun PNOZ Multi đạt chuẩn PLe / SIL3',
      ko: '독일 프리미엄 세이프티 공인 파트너 / PNOZ 소형 안전 릴레이 및 PNOZ Multi 모듈러 안전 컨트롤러 (최고 등급 PLe / SIL3 지원)',
      en: 'German Machinery Safety Automation / PNOZ Safety Relays & PNOZ Multi Modular Safety Controllers (PLe/SIL3 Certified)'
    },
    tier: 'Giải pháp an toàn máy móc (Safety Solutions)',
    country: 'Germany',
    specialty: 'PNOZ Safety Relays & Controllers'
  },
  {
    id: 'samwon-act',
    name: 'SAMWON ACT',
    role: {
      vi: 'Cáp servo chuyên dụng & Hộp cầu đấu I/O / Dây cáp chống dầu uốn dẻo cao cho Mitsubishi/Yaskawa, khối cầu đấu Relay & PLC',
      ko: '서보 전용 하네스 케이블 & I/O 인터페이스 단자대 / 미쓰비시·야스카와 전용 내유·고굴곡 하네스 케이블 및 PLC 릴레이 단자대',
      en: 'Specialized Servo Cables & I/O Terminal Blocks / Oil-resistant high-flex harness cables for Mitsubishi/Yaskawa and PLC interface blocks'
    },
    tier: 'Phụ kiện 전장 부품 & 배선 (Wiring & Interface)',
    country: 'Korea',
    specialty: 'Servo Harness Cables & I/O Terminal Units'
  },
  {
    id: 'apex-dynamics',
    name: 'APEX DYNAMICS',
    role: {
      vi: 'Hộp giảm tốc hành tinh độ chính xác cao / Tích hợp trực tiếp động cơ servo, độ rơ cực thấp, thanh răng & bánh răng công nghiệp',
      ko: '고정밀 유성 감속기 & 랙 피니언 시스템 / 서보 모터 직결 초정밀 백래시 제어 감속기, 공작기계 및 반송 설비 최적화',
      en: 'High-Precision Planetary Gearboxes & Rack-Pinion / Low-backlash servo reducers engineered for machine tools and transfer equipment'
    },
    tier: 'Hộp số giảm tốc chính xác (Precision Reducers)',
    country: 'Taiwan',
    specialty: 'Precision Planetary Gearboxes'
  }
];

export const DAWOOFA_PRODUCTS: FaProductItem[] = [
  // 1-1. Mitsubishi MELSERVO MR-J5 Series
  {
    id: 'prod-mr-j5',
    category: 'servo',
    categoryLabel: {
      vi: 'Động cơ Servo & Driver (Servo)',
      ko: '서보 시스템 (Servo)',
      en: 'Servo System'
    },
    modelName: 'Mitsubishi Electric / MELSERVO MR-J5 Series (MR-J5-G / HG-KR)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Hỗ trợ mạng CC-Link IE TSN tốc độ cao, bộ mã hóa 26-bit, điều khiển vị trí siêu chính xác.',
      ko: '차세대 고속 CC-Link IE TSN 통신 지원, 26bit 광학식 엔코더 탑재, 초정밀 동기 위치 제어.',
      en: 'Next-gen servo system with CC-Link IE TSN, 26-bit optical absolute encoder.'
    },
    specs: {
      powerCapacity: '0.1 kW ~ 22 kW (200V / 400V)',
      inputVoltage: '3-Phase AC 200~240V / 380~480V',
      controlMode: 'CC-Link IE TSN (1Gbps 고속 통신)',
      encoderResolution: '26-bit (67,108,864 p/rev)',
      overloadCapacity: '정격 350% 최대 순시 토크',
      protectionRating: 'Động cơ IP67 chống nước/bụi'
    },
    features: {
      vi: [
        'Hỗ trợ mạng CC-Link IE TSN 1Gbps điều khiển đồng bộ nhiều trục',
        'Bộ mã hóa quang học 26-bit không cần pin dự phòng',
        'Tần số đáp ứng tốc độ 3.5 kHz cao nhất ngành công nghiệp'
      ],
      ko: [
        '초고속 CC-Link IE TSN 1Gbps 통신으로 초정밀 다축 동기 제어 실현',
        '26bit 광학식 배터리리스 절대위치 엔코더 기본 장착',
        '업계 최고 수준 3.5 kHz 속도 주파수 응답성 실현'
      ],
      en: [
        '1Gbps CC-Link IE TSN high-speed multi-axis synchronization',
        '26-bit battery-less absolute optical encoder',
        'Industry-leading 3.5 kHz speed frequency response'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 상시 재고 (24~48h 납기)',
      en: 'Local buffer stock (24-48h delivery)'
    },
    isHot: true
  },

  // 1-2. Mitsubishi MELSERVO MR-J4 Series
  {
    id: 'prod-mr-j4',
    category: 'servo',
    categoryLabel: {
      vi: 'Động cơ Servo & Driver (Servo)',
      ko: '서보 시스템 (Servo)',
      en: 'Servo System'
    },
    modelName: 'Mitsubishi Electric / MELSERVO MR-J4 Series (MR-J4-B / HG-SR)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Tần số đáp ứng 2.5kHz, mạng quang SSCNET III/H, dòng servo tiêu chuẩn độ tin cậy cao.',
      ko: '업계 최고 수준의 속도 응답 주파수(2.5kHz), SSCNET III/H 광통신, 고신뢰성 범용 서보.',
      en: 'Industry-leading 2.5kHz speed frequency response with SSCNET III/H fiber optic bus.'
    },
    specs: {
      powerCapacity: '0.1 kW ~ 55 kW',
      inputVoltage: '3-Phase AC 200~240V / 380~480V',
      controlMode: 'SSCNET III/H (Cáp quang chống nhiễu)',
      encoderResolution: '22-bit (4,194,304 p/rev)',
      overloadCapacity: '300% 정격 토크 (고과부하 대응)',
      protectionRating: 'Động cơ IP67 chống bụi/nước'
    },
    features: {
      vi: [
        'Mạng cáp quang SSCNET III/H triệt tiêu hoàn toàn nhiễu công nghiệp',
        'Bộ mã hóa 22-bit độ phân giải cao định vị mượt mà',
        'Kho dự phòng khẩn cấp dồi dào phục vụ thay thế dây chuyền'
      ],
      ko: [
        'SSCNET III/H 광통신 버스로 설비 노이즈 완벽 차단',
        '22비트 고분해능 엔코더 및 진동 억제 제어 알고리즘',
        '베트남 현지 라인 비상 유지보수용 긴급 재고 다량 확보'
      ],
      en: [
        'SSCNET III/H optical fiber bus for complete noise immunity',
        '22-bit high-resolution encoder with vibration suppression',
        'Abundant local spare parts stock for emergency plant support'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/mr_j4.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 긴급 교체용 보유 (당일 출고)',
      en: 'Emergency stock available (Same-day dispatch)'
    },
    isHot: true
  },

  // 1-3. Nikki Denso Direct Drive (DD) Motor & Linear Servo
  {
    id: 'prod-nikki-dd',
    category: 'servo',
    categoryLabel: {
      vi: 'Động cơ Direct Drive & Linear',
      ko: '서보 시스템 (Servo)',
      en: 'Direct Drive & Linear Servo'
    },
    modelName: 'Nikki Denso / Direct Drive (DD) Motor & Linear Servo',
    brand: 'NIKKI DENSO',
    tagline: {
      vi: 'Động cơ Direct Drive không hộp số, độ rơ bằng không, truyền động tuyến tính tốc độ cao.',
      ko: '감속기 없는 직접 구동 인덱스 모터, 백래시 제로 고정밀 회전, 고속 리니어 액추에이터.',
      en: 'High-precision direct drive rotary motor with zero backlash and linear servo solutions.'
    },
    specs: {
      powerCapacity: 'Torque: 1.2 Nm ~ 500 Nm',
      inputVoltage: '3-Phase AC 200V',
      controlMode: 'Pulse / EtherCAT / MECHATROLINK',
      encoderResolution: '20-bit Absolute (Zero Backlash)',
      overloadCapacity: '300% 순간 최대 토크',
      protectionRating: 'IP55 / Cleanroom Spec'
    },
    features: {
      vi: [
        'Dẫn động trực tiếp tải trọng không qua hộp giảm tốc, triệt tiêu độ rơ',
        'Định vị góc quay chính xác cao cho mâm xoay và bàn chia độ',
        'Giải pháp Linear servo tốc độ cao cho gắp thả linh kiện điện tử'
      ],
      ko: [
        '감속기 배제로 기구적 백래시 0(Zero) 실현 및 마모 방지',
        '고정밀 인덱스 회전 테이블 및 반도체·디스플레이 검사 장비 최적화',
        '고속 리니어 서보 액추에이터로 초고속 픽앤플레이스 구현'
      ],
      en: [
        'Zero mechanical backlash without gearbox wear',
        'Ultra-precise rotary indexing for semiconductor inspection',
        'High-speed linear actuators for high-throughput pick & place'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/dd_motor.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Kho dự án (Giao trong 3~5 ngày hoặc 2 tuần)',
      ko: '프로젝트 전용 재고 및 납기 3~5일 대응',
      en: 'Project stock (3-5 days delivery)'
    }
  },

  // 2-1. Mitsubishi FR-A800 Series Inverter
  {
    id: 'prod-fr-a800',
    category: 'inverter',
    categoryLabel: {
      vi: 'Biến tần công nghiệp (Inverter)',
      ko: '인버터 (Inverter/VFD)',
      en: 'Industrial Inverter'
    },
    modelName: 'Mitsubishi Electric / FR-A800 Series (FR-A820 / FR-A840)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Điều khiển vector không cảm biến thời gian thực, chuyên dụng cho cẩu trục và tải nặng.',
      ko: '리얼 센서리스 벡터 제어, 크레인/권상기 및 중부하 공정용 고성능 플래그십 인버터.',
      en: 'Premium high-performance inverter with advanced real-time sensorless vector control.'
    },
    specs: {
      powerCapacity: '0.4 kW ~ 500 kW (중부하 플래그십)',
      inputVoltage: '3-Phase AC 200~240V / 380~480V',
      controlMode: 'Real Sensorless Vector / V/F / Vector Control',
      encoderResolution: 'Hỗ trợ cạc truyền thông CC-Link, Profibus, EtherCAT',
      overloadCapacity: '200% trong 60 giây (HD Heavy Duty)',
      protectionRating: 'IP20 / IP00 (Công suất lớn)'
    },
    features: {
      vi: [
        'Mô-men khởi động 200% ở 0.3Hz với điều khiển vector không cảm biến',
        'Chức năng chuyên dụng cho tời nâng, cẩu trục, máy đùn và máy cuộn',
        'Hỗ trợ đầy đủ chức năng dừng an toàn STO SIL3'
      ],
      ko: [
        '0.3Hz 극저속에서 200% 고기동 토크 실현 (리얼 센서리스 벡터)',
        '크레인·호이스트, 권상기, 압출기 등 중부하 설비 최적화 파라미터',
        '기능 안전 규격 STO (SIL3 / PLe) 표준 대응'
      ],
      en: [
        '200% starting torque at 0.3Hz with real sensorless vector',
        'Dedicated crane, hoist, winder, and heavy extruder applications',
        'Integrated STO SIL3 / PLe functional safety'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/fr_a800.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 대형 용량 상시 재고 보유',
      en: 'In-stock in Vietnam (24-48h delivery)'
    },
    isHot: true
  },

  // 2-2. Mitsubishi FR-E800 Series Inverter
  {
    id: 'prod-fr-e800',
    category: 'inverter',
    categoryLabel: {
      vi: 'Biến tần công nghiệp (Inverter)',
      ko: '인버터 (Inverter/VFD)',
      en: 'Industrial Inverter'
    },
    modelName: 'Mitsubishi Electric / FR-E800 Series (FR-E820 / FR-E840)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Biến tần nhỏ gọn đa năng, tích hợp Ethernet, tối ưu cho băng tải và máy móc tự động.',
      ko: '컴팩트 고기능 인버터, 이더넷 내장, 소형 반송 설비 및 라인 표준화 최적 모델.',
      en: 'Compact high-performance inverter with built-in Ethernet for versatile automation machinery.'
    },
    specs: {
      powerCapacity: '0.1 kW ~ 30 kW',
      inputVoltage: '1-Phase 100/200V, 3-Phase 200~240V / 380~480V',
      controlMode: 'CC-Link IE TSN / Modbus / Dual Ethernet',
      encoderResolution: 'Dual Port Ethernet (Tích hợp sẵn)',
      overloadCapacity: '150% 60초, 200% 3초',
      protectionRating: 'IP20 / Bo mạch phủ chống ẩm môi trường'
    },
    features: {
      vi: [
        'Tích hợp sẵn 2 cổng Ethernet hỗ trợ CC-Link IE TSN, Modbus-TCP',
        'Kích thước siêu nhỏ gọn, lắp đặt sát nhau tiết kiệm tủ điện',
        'Mạch điện tử sơn phủ chống chịu nhiệt đới ẩm Việt Nam'
      ],
      ko: [
        '듀얼 포트 이더넷 내장 (CC-Link IE TSN, Modbus/TCP 대응)',
        '초소형 컴팩트 사이즈로 제어반 밀착 설치 가능',
        '베트남 고온다습 환경에 대응하는 특수 방습 코팅 기판 적용'
      ],
      en: [
        'Dual Ethernet ports supporting CC-Link IE TSN & Modbus/TCP',
        'Ultra-compact side-by-side mounting for compact enclosures',
        'Conformal coated PCB resistant to tropical industrial humidity'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/fr_e800.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 대량 보유 (당일 즉시 출고)',
      en: 'Bulk stock ready in Vietnam (Immediate delivery)'
    },
    isHot: true
  },

  // 3-1. Mitsubishi MELSEC iQ-R Series PLC
  {
    id: 'prod-iq-r',
    category: 'plc',
    categoryLabel: {
      vi: 'Bộ lập trình PLC & HMI',
      ko: 'PLC 및 제어기기 (PLC & HMI)',
      en: 'PLC & HMI Controller'
    },
    modelName: 'Mitsubishi Electric / MELSEC iQ-R Series (R04CPU / R08CPU)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Tốc độ xử lý nano giây, hỗ trợ cấu hình đa CPU, bộ điều khiển trung tâm cho Smart Factory.',
      ko: '나노초 단위 초고속 연산 처리, 멀티 CPU 시스템 지원, 스마트 팩토리 코어 컨트롤러.',
      en: 'Nanosecond-level high-speed sequence processing, multi-CPU architecture controller.'
    },
    specs: {
      powerCapacity: 'Tốc độ xử lý lệnh cơ bản 0.98ns (LD)',
      inputVoltage: 'AC 100~240V / DC 24V Nguồn Module',
      controlMode: 'CC-Link IE TSN, Ethernet, Motion Bus',
      encoderResolution: 'Dung lượng I/O mở rộng tới 4,096 điểm',
      overloadCapacity: 'Hỗ trợ cấu hình Multi-CPU (Sequence + Motion + Safety + C)',
      protectionRating: 'Chống ồn điện từ công nghiệp cấp cao'
    },
    features: {
      vi: [
        'Xử lý lệnh siêu tốc 0.98ns rút ngắn chu kỳ máy sản xuất',
        'Hỗ trợ kết hợp đồng thời CPU Tuần tự + CPU Chuyển động + CPU An toàn',
        'Ghi nhật ký dữ liệu sản xuất trực tiếp phục vụ chuẩn đoán thông minh'
      ],
      ko: [
        '0.98ns 초고속 시퀀스 처리로 생산 택트 타임(Tact Time) 단축',
        '시퀀스 CPU + 모션 CPU + 세이프티 CPU 멀티 구성 지원',
        '스마트 팩토리 품질 추적용 데이터 로깅 엔진 내장'
      ],
      en: [
        '0.98ns high-speed execution reducing factory tact times',
        'Multi-CPU support: Sequence, Motion, Safety & C-Controller',
        'Built-in data logging for Smart Factory traceability'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/iq_r.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 CPU 및 I/O 모듈 상시 보유',
      en: 'CPU & I/O Modules In-Stock (24-48h delivery)'
    },
    isHot: true
  },

  // 3-2. Mitsubishi MELSEC iQ-F Series PLC
  {
    id: 'prod-iq-f',
    category: 'plc',
    categoryLabel: {
      vi: 'Bộ lập trình PLC & HMI',
      ko: 'PLC 및 제어기기 (PLC & HMI)',
      en: 'PLC & HMI Controller'
    },
    modelName: 'Mitsubishi Electric / MELSEC iQ-F Series (FX5U / FX5UC)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'PLC All-in-one nhỏ gọn, tích hợp sẵn analog và đếm xung tốc độ cao cho máy độc lập.',
      ko: '올인원 컴팩트 PLC, 내장 아날로그 및 고속 카운터, 독립 장비 제어 최적화.',
      en: 'All-in-one compact PLC with built-in analog and high-speed counter for standalone machines.'
    },
    specs: {
      powerCapacity: 'Tốc độ xử lý lệnh cơ bản 34ns (LD)',
      inputVoltage: 'AC 100~240V / DC 24V (FX5UC)',
      controlMode: 'Tích hợp sẵn cổng Ethernet, RS-485, Khe cắm thẻ SD',
      encoderResolution: 'Ngõ ra xung 4 trục tốc độ cao 200kHz',
      overloadCapacity: 'Mở rộng tối đa 512 điểm I/O',
      protectionRating: 'Tiêu chuẩn công nghiệp CE / UL'
    },
    features: {
      vi: [
        'Tích hợp sẵn 2 ngõ vào Analog + 1 ngõ ra Analog',
        'Ngõ ra xung 4 trục điều khiển vị trí trực tiếp không cần module mở rộng',
        'Cổng Ethernet tích hợp hỗ trợ kết nối trực tiếp với HMI GOT và SCADA'
      ],
      ko: [
        '아날로그 입출력(2ch In / 1ch Out) 기본 내장',
        '내장 4축 고속 펄스 출력(200kHz)으로 독립 장비 서보 제어',
        '내장 이더넷 포트로 GOT 터치패널 및 상위 PC 손쉬운 연결'
      ],
      en: [
        'Built-in analog I/O (2 inputs / 1 output)',
        'Built-in 4-axis 200kHz pulse outputs for direct servo positioning',
        'Embedded Ethernet port for seamless GOT & SCADA networking'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/iq_f.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 모델별 다량 보유 (당일 출고)',
      en: 'Bulk stock in Vietnam (Immediate delivery)'
    }
  },

  // 3-3. Mitsubishi GOT2000 Series HMI
  {
    id: 'prod-got2000',
    category: 'plc',
    categoryLabel: {
      vi: 'Bộ lập trình PLC & HMI',
      ko: 'PLC 및 제어기기 (PLC & HMI)',
      en: 'PLC & HMI Controller'
    },
    modelName: 'Mitsubishi Electric / GOT2000 Series (GT27 / GT25 / GS21)',
    brand: 'Mitsubishi Electric',
    tagline: {
      vi: 'Màn hình cảm ứng HMI sắc nét, hỗ trợ đa cổng giao tiếp và giám sát từ xa.',
      ko: '고화질 터치스크린 HMI, 다양한 산업용 통신 인터페이스 및 원격 모니터링 대응.',
      en: 'High-resolution touch screen HMI supporting multiple industrial interfaces & remote monitoring.'
    },
    specs: {
      powerCapacity: 'Kích thước: 7", 8.4", 10.4", 12.1", 15" TFT',
      inputVoltage: 'AC 100~240V / DC 24V',
      controlMode: 'Dual Ethernet, RS-232, RS-422/485, USB Host/Device',
      encoderResolution: 'Độ phân giải 65,536 màu TFT LCD',
      overloadCapacity: 'Tính năng VNC Client/Server, FTP, Web Server',
      protectionRating: 'Mặt trước IP67F kháng dầu kháng nước'
    },
    features: {
      vi: [
        'Hỗ trợ thao tác cảm ứng đa điểm mượt mà và phóng to/thu nhỏ',
        'Chức năng VNC giám sát và điều khiển dây chuyền từ xa qua điện thoại/máy tính',
        'Kết nối trực tiếp không cần cấu hình với PLC Mitsubishi và các hãng thứ ba'
      ],
      ko: [
        '스마트폰과 유사한 직관적 멀티터치 제스처 조작 지원',
        'VNC 서버 내장으로 스마트폰/태블릿 원격 모니터링 및 제어',
        '미쓰비시 PLC 및 이기종 인버터·로봇 통신 드라이버 기본 탑재'
      ],
      en: [
        'Smooth multi-touch gestures and zoom functionality',
        'Integrated VNC server for tablet and mobile remote diagnostics',
        'Seamless communication drivers for Mitsubishi and 3rd party PLCs'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/got2000.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '각 사이즈별 상시 보유 (당일 출고)',
      en: 'All sizes stocked locally (Immediate dispatch)'
    },
    isHot: true
  },

  // 4-1. PILZ PNOZ Multi & PNOZ s Series (Safety Relay)
  {
    id: 'prod-pilz-pnoz',
    category: 'safety',
    categoryLabel: {
      vi: 'Thiết bị an toàn & Dây nối (Safety & Wiring)',
      ko: '안전 솔루션 & 전장 부품 (Safety & Wiring)',
      en: 'Safety & Wiring'
    },
    modelName: 'PILZ / PNOZ Multi & PNOZ s Series (Safety Relay)',
    brand: 'PILZ',
    tagline: {
      vi: 'Đạt tiêu chuẩn an toàn cao nhất PLe / SIL3, rơ le an toàn và bộ điều khiển an toàn mô-đun.',
      ko: '국제 안전 인증 최고 등급(PLe / SIL3) 지원, 소형 세이프티 릴레이 및 모듈러 컨트롤러.',
      en: 'Certified to highest safety standards (PLe/SIL3), modular safety controllers and relays.'
    },
    specs: {
      powerCapacity: 'Chuẩn an toàn: ISO 13849-1 PLe, IEC 62061 SIL CL 3',
      inputVoltage: 'DC 24V Nguồn cấp an toàn',
      controlMode: 'Safety BUS, Ngõ ra Relay an toàn bán dẫn',
      encoderResolution: 'Ứng dụng: Nút dừng khẩn cấp E-STOP, Màn chắn quang, Khóa cửa an toàn',
      overloadCapacity: 'Mô-đun mở rộng đa kênh độc lập',
      protectionRating: 'IP20 Vỏ Din-rail nhỏ gọn chống cháy'
    },
    features: {
      vi: [
        'Chứng nhận an toàn quốc tế cấp cao nhất PLe và SIL CL 3',
        'Cài đặt cấu hình trực quan qua phần mềm PNOZmulti Configurator',
        'Bảo vệ an toàn tối đa cho kỹ sư vận hành máy móc tự động'
      ],
      ko: [
        '국제 공인 안전 최고 등급 EN ISO 13849-1 PLe 및 IEC 62061 SIL 3 인증',
        'PNOZmulti Configurator 소프트웨어로 드래그 앤 드롭 안전 로직 구성',
        '공장 내 로봇 셀, 자동화 라인 긴급정지 및 도어 인터록 표준 적용'
      ],
      en: [
        'Certified to highest international safety levels PLe & SIL 3',
        'Intuitive drag-and-drop safety logic design with PNOZmulti software',
        'Standardized for robotic cell emergency stops and safety interlocking'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/pilz_safety.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay 24~48h)',
      ko: '현지 보세창고 규격별 상시 재고 보유',
      en: 'In-stock in Vietnam (24-48h delivery)'
    }
  },

  // 4-2. SAMWON ACT Servo Harness Cable & I/O Terminal Block
  {
    id: 'prod-samwon-act',
    category: 'safety',
    categoryLabel: {
      vi: 'Thiết bị an toàn & Dây nối (Safety & Wiring)',
      ko: '안전 솔루션 & 전장 부품 (Safety & Wiring)',
      en: 'Safety & Wiring'
    },
    modelName: 'SAMWON ACT / 서보 전용 하네스 케이블 & I/O 인터페이스 단자대',
    brand: 'SAMWON ACT',
    tagline: {
      vi: 'Cáp servo chống dầu uốn dẻo cho Mitsubishi/Yaskawa, hộp cầu đấu I/O và khối giao tiếp PLC.',
      ko: '미쓰비시/야스카와 전용 내유·고굴곡 서보 하네스 케이블, 릴레이 단자대 및 PLC 인터페이스 블록.',
      en: 'High-flex oil-resistant servo harness cables and PLC interface terminal blocks.'
    },
    specs: {
      powerCapacity: 'Kiểm tra uốn uốn gập > 10.000.000 lần (Bending test)',
      inputVoltage: 'Dây lực 서보 600V cấp / Dây Encoder chống nhiễu',
      controlMode: 'Đầu nối MIL Spec, Hirose, Molex, 3M chuẩn xác',
      encoderResolution: 'Khối cầu đấu Push-in lò xo chống lỏng vít',
      overloadCapacity: 'Chống dầu cắt gọt máy CNC, chống cháy UL',
      protectionRating: 'Cáp IP67 / Cầu đấu Din-rail IP20'
    },
    features: {
      vi: [
        'Gia công chính xác 1:1 theo tiêu chuẩn dây dẫn hãng Mitsubishi & Yaskawa',
        'Vỏ ngoài bọc PUR chịu dầu gia công cơ khí và chống gãy gập trong xích dẫn cáp',
        'Hộp cầu đấu I/O Relay rút ngắn 80% thời gian đấu nối tủ điện điều khiển'
      ],
      ko: [
        '미쓰비시(MELSERVO) 및 야스카와(Sigma) 1:1 전용 커넥터 하네스 일체형',
        '케이블 베어 내 1,000만 회 굴곡 시험을 통과한 내유성 PUR 피복 적용',
        '원터치 Push-in I/O 단자대로 제어반 결선 시간 80% 이상 단축'
      ],
      en: [
        'Direct 1:1 harness assembly for Mitsubishi MELSERVO & Yaskawa Sigma',
        'Oil-resistant PUR jacket tested for over 10 million flexing cycles',
        'Push-in I/O interface blocks reducing cabinet wiring time by 80%'
      ]
    },
    image: 'http://www.dawooservo.co.kr/data/product/samwon_harness.jpg',
    inStockVietnam: true,
    leadTime: {
      vi: 'Sẵn hàng tại kho (Giao ngay trong ngày)',
      ko: '표준 길이별 상시 재고 보유 (당일 포장 출고)',
      en: 'Standard lengths in-stock (Same-day dispatch)'
    }
  }
];
