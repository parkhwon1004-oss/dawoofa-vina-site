import { Language } from '../types';

export interface TraditionalProduct {
  id: string;
  category: 'servo' | 'inverter' | 'plc' | 'sensor';
  brand: string;
  model: string;
  code: string;
  image: string;
  fallbackImage: string;
  desc: Record<Language, string>;
  specs: {
    spec1: string;
    spec2: string;
    origin: string;
    leadTime: Record<Language, string>;
  };
  inStock: boolean;
  pdfUrl?: string;
}

export const TRADITIONAL_CATEGORIES = [
  { id: 'all', count: 8, label: { ko: '전체 제품군', vi: 'Tất cả sản phẩm', en: 'All Categories' } },
  { id: 'servo', count: 3, label: { ko: '서보 시스템 (Servo)', vi: 'Hệ thống Servo', en: 'Servo Systems' } },
  { id: 'inverter', count: 2, label: { ko: '인버터 (Inverter/VFD)', vi: 'Biến tần (Inverter/VFD)', en: 'Inverter / VFD' } },
  { id: 'plc', count: 2, label: { ko: '제어기기 (PLC / HMI)', vi: 'Thiết bị điều khiển (PLC / HMI)', en: 'PLC & HMI Controls' } },
  { id: 'sensor', count: 1, label: { ko: '센서 및 안전기기', vi: 'Cảm biến & Thiết bị an toàn', en: 'Sensors & Safety' } },
];

export const TRADITIONAL_PRODUCTS: TraditionalProduct[] = [
  // 1. 서보 모터 & 드라이브 (MR-J5)
  {
    id: 'prod-01',
    category: 'servo',
    brand: 'Mitsubishi Electric',
    model: 'MELSERVO MR-J5 Series',
    code: 'MR-J5-G / HG-KR Series',
    image: 'http://www.dawooservo.co.kr/data/product/mr_j5.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '초고속 CC-Link IE TSN 통신 대응, 26bit 광학식 엔코더 탑재로 초정밀 위치 제어 실현.',
      vi: 'Hỗ trợ truyền thông CC-Link IE TSN tốc độ cao, tích hợp bộ mã hóa 26-bit cho độ chính xác siêu cao.',
      en: 'CC-Link IE TSN compatible, high-response AC Servo with 26-bit optical encoder.'
    },
    specs: {
      spec1: '용량: 0.1kW ~ 22kW (200V/400V)',
      spec2: '분해능: 26-bit (67,108,864 p/rev)',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '보세창고 상시보유 (당일출고)', vi: 'Sẵn hàng tại kho (Giao ngay)', en: 'In-Stock (Same-day dispatch)' }
    },
    inStock: true
  },

  // 2. 범용 인버터 (FR-A800 / E800)
  {
    id: 'prod-02',
    category: 'inverter',
    brand: 'Mitsubishi Electric',
    model: 'FR-A800 & FR-E800 Series',
    code: 'FR-A820 / FR-E820 Series',
    image: 'http://www.dawooservo.co.kr/data/product/fr_a800.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '실시간 센서리스 벡터 제어, 안전 규격 대응, 공정 모터 구동 및 에너지 절감 최적화.',
      vi: 'Điều khiển vector không cảm biến thời gian thực, đáp ứng tiêu chuẩn an toàn, tối ưu hóa tiết kiệm điện.',
      en: 'Advanced real-time sensorless vector control with built-in safety stop function.'
    },
    specs: {
      spec1: '출력: 0.4kW ~ 55kW 고토크 제어',
      spec2: '네트워크: CC-Link IE, 이더넷, Modbus',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '현지 보세창고 24시간 내 배송', vi: 'Giao trong 24 giờ tại KCN', en: '24H Delivery in Vietnam' }
    },
    inStock: true
  },

  // 3. 고속 연산 PLC & 모듈 (iQ-R & iQ-F)
  {
    id: 'prod-03',
    category: 'plc',
    brand: 'Mitsubishi Electric',
    model: 'MELSEC iQ-R & iQ-F Series',
    code: 'R04CPU / FX5U Series',
    image: 'http://www.dawooservo.co.kr/data/product/iq_r.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '나노초 단위 고속 시퀀스 처리, 멀티 CPU 시스템 지원, 스마트 팩토리 데이터 통합 제어.',
      vi: 'Xử lý tuần tự tốc độ cao nano giây, hỗ trợ đa CPU, tích hợp thu thập dữ liệu nhà máy thông minh.',
      en: 'High-speed sequence execution, multi-CPU architecture, factory data integration.'
    },
    specs: {
      spec1: '처리속도: 0.98ns LD 명령어 연산',
      spec2: 'I/O 용량: 최대 4,096점 분산 제어',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '기본 베이스 및 I/O 상시 재고', vi: 'Có sẵn CPU và Module I/O', en: 'CPU & I/O Modules In-Stock' }
    },
    inStock: true
  },

  // 4. 서보 시스템 (MR-J4)
  {
    id: 'prod-04',
    category: 'servo',
    brand: 'Mitsubishi Electric',
    model: 'MELSERVO MR-J4 Series',
    code: 'MR-J4-B / HG-SR Series',
    image: 'http://www.dawooservo.co.kr/data/product/mr_j4.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '신뢰성 높은 광통신 SSCNET III/H 기반 22bit 엔코더 서보 시스템, 라인 교체 및 유지보수용.',
      vi: 'Hệ thống servo 22-bit truyền thông quang SSCNET III/H độ tin cậy cao cho dây chuyền.',
      en: 'High-reliability SSCNET III/H optical bus servo with 22-bit encoder for line maintenance.'
    },
    specs: {
      spec1: '통신: SSCNET III/H 광케이블 직결',
      spec2: '용량: 0.1kW ~ 15kW 범용',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '라인 긴급 교체용 재고 보유', vi: 'Sẵn hàng thay thế khẩn cấp', en: 'Emergency replacement stock' }
    },
    inStock: true
  },

  // 5. 터치패널 HMI (GOT2000)
  {
    id: 'prod-05',
    category: 'plc',
    brand: 'Mitsubishi Electric',
    model: 'GOT2000 Series (HMI)',
    code: 'GT27 / GT25 Series',
    image: 'http://www.dawooservo.co.kr/data/product/got2000.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '고해상도 멀티터치 디스플레이, 다양한 FA 통신 인터페이스 내장 스마트 오퍼레이션 패널.',
      vi: 'Màn hình cảm ứng HMI đa điểm độ phân giải cao tích hợp đa cổng truyền thông công nghiệp.',
      en: 'High-resolution multi-touch display with versatile industrial communication ports.'
    },
    specs: {
      spec1: '화면: 8.4" ~ 15" TFT 65,536 컬러',
      spec2: '포트: 이더넷, RS-422/485, USB Host',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '주요 사이즈 당일 출고', vi: 'Sẵn hàng các kích thước chuẩn', en: 'Standard sizes in-stock' }
    },
    inStock: true
  },

  // 6. 야스카와 서보 (YASKAWA SIGMA-7)
  {
    id: 'prod-06',
    category: 'servo',
    brand: 'Yaskawa Electric',
    model: 'Sigma-7 AC Servo System',
    code: 'SGD7S / SGM7J Series',
    image: 'http://www.dawooservo.co.kr/data/product/sigma7.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '초고응답 주파수 특성 및 24bit 엔코더 탑재 범용 AC 서보 시스템, 튜닝리스 기능 지원.',
      vi: 'Hệ thống servo AC đa năng tích hợp bộ mã hóa 24-bit đáp ứng tần số siêu cao.',
      en: 'High-response AC servo system with 24-bit high resolution encoder and tuning-less feature.'
    },
    specs: {
      spec1: '주파수응답: 3.1kHz 고속 응답',
      spec2: '프로토콜: MECHATROLINK-III, EtherCAT',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '협력사 전용 재고 보유', vi: 'Có sẵn cho đối tác dự án', en: 'Partner project inventory' }
    },
    inStock: true
  },

  // 7. LS ELECTRIC 인버터 (iS7)
  {
    id: 'prod-07',
    category: 'inverter',
    brand: 'LS ELECTRIC',
    model: 'Starvert iS7 Inverter',
    code: 'SV-iS7 Series',
    image: 'http://www.dawooservo.co.kr/data/product/is7.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '정밀 센서리스 벡터 제어 및 고기동 토크를 지원하는 한국 대표 고성능 산업용 인버터.',
      vi: 'Biến tần công nghiệp hiệu suất cao điều khiển vector không cảm biến từ Hàn Quốc.',
      en: 'Industrial high-performance inverter with precise sensorless vector control.'
    },
    specs: {
      spec1: '정격: 0.75kW ~ 160kW 폭넓은 라인업',
      spec2: '기능: 세이프티 STO 기본 내장',
      origin: 'Korea (C/O 완비)',
      leadTime: { ko: '한국 본사 직발송 및 현지재고', vi: 'Sẵn hàng tại kho Việt Nam', en: 'In-stock in Bac Ninh' }
    },
    inStock: true
  },

  // 8. 오므론 센서 및 안전기기
  {
    id: 'prod-08',
    category: 'sensor',
    brand: 'Omron Automation',
    model: 'Industrial Sensor & Safety Series',
    code: 'E2E / E3Z / F3SG Series',
    image: 'http://www.dawooservo.co.kr/data/product/omron_sensor.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80',
    desc: {
      ko: '초고신뢰성 근접센서, 포토센서 및 산업용 안전 라이트 커튼 제어 모듈, 방진/방수 IP67.',
      vi: 'Cảm biến tiệm cận, cảm biến quang và màn chắn quang an toàn công nghiệp chống nước IP67.',
      en: 'High-reliability proximity sensors, photoelectric sensors and safety light curtains with IP67.'
    },
    specs: {
      spec1: '보호등급: IP67 내유성 구조',
      spec2: '인증: CE, UL, ISO 13849-1 안전규격',
      origin: 'Japan (C/O 완비)',
      leadTime: { ko: '상시 다량 보유 (당일 포장출고)', vi: 'Sẵn hàng số lượng lớn (Giao ngay)', en: 'Bulk stock ready for delivery' }
    },
    inStock: true
  }
];
