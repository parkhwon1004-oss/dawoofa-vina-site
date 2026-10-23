import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { X, FolderOpen, Folder, Image as ImageIcon, Search, Check, RefreshCw } from 'lucide-react';

export interface AistudioImageFile {
  id: string;
  fileName: string;
  label: string;
  folder: string;
  relatedFolders?: string[];
  path: string;
  modelHint: string;
  mtimeMs?: number;
  isDynamic?: boolean;
}

export interface AistudioFolderTab {
  id: string;
  name: string;
  displayPath: string;
  description: string;
}

export const AISTUDIO_FOLDER_TABS: AistudioFolderTab[] = [
  {
    id: 'ALL',
    name: '전체 (ALL)',
    displayPath: './assets/aistudio/images/*',
    description: 'aistudio/images 내 전체 폴더 및 기본 이미지 통합 보기'
  },
  {
    id: 'ROOT',
    name: '기본 폴더 (images/)',
    displayPath: './assets/aistudio/images/',
    description: '루트 기본 이미지 (dawoorobot_img, dkw_img, epson_img, gear_img, lms_img, logo, vsw_img 등)'
  },
  {
    id: 'ADVANTECH',
    name: 'ADVANTECH',
    displayPath: './assets/aistudio/images/ADVANTECH/',
    description: '어드밴텍 산업용 PC 및 자동화 솔루션'
  },
  {
    id: 'DAWOOROBOT',
    name: 'DAWOOROBOT',
    displayPath: './assets/aistudio/images/DAWOOROBOT/',
    description: '다우로봇 직교/데스크탑 로봇 및 리니어·LMS·WTR 시리즈'
  },
  {
    id: 'EPSON',
    name: 'EPSON',
    displayPath: './assets/aistudio/images/EPSON/',
    description: '엡손 스카라(SCARA) 및 6축 산업용 로봇'
  },
  {
    id: 'INVERTER',
    name: 'INVERTER',
    displayPath: './assets/aistudio/images/INVERTER/',
    description: '미쓰비시 FREQROL 및 산업용 범용 인버터'
  },
  {
    id: 'PILZ',
    name: 'PILZ',
    displayPath: './assets/aistudio/images/PILZ/',
    description: '필츠(PILZ) 안전 릴레이 및 세이프티 컨트롤러'
  },
  {
    id: 'PLC',
    name: 'PLC',
    displayPath: './assets/aistudio/images/PLC/',
    description: '미쓰비시 MELSEC iQ-R/iQ-F PLC 및 GOT 터치패널'
  },
  {
    id: 'SAMWON',
    name: 'SAMWON',
    displayPath: './assets/aistudio/images/SAMWON/',
    description: '삼원ACT 서보 전용 하네스 케이블 및 I/O 단자대'
  },
  {
    id: 'SERVO',
    name: 'SERVO',
    displayPath: './assets/aistudio/images/SERVO/',
    description: '미쓰비시·야스카와 서보 드라이버 및 니키덴소 DD모터'
  }
];

export const AISTUDIO_IMAGE_FILES: AistudioImageFile[] = [
  // 1. ROOT (./assets/aistudio/images/*.png)
  {
    id: 'img-root-dawoorobot',
    fileName: 'dawoorobot_img.png',
    label: '다우로봇 대표 이미지 (dawoorobot_img)',
    folder: 'ROOT',
    relatedFolders: ['DAWOOROBOT'],
    path: './assets/aistudio/images/dawoorobot_img.png',
    modelHint: 'DAWOO Cartesian & Gantry Robot'
  },
  {
    id: 'img-root-dkw',
    fileName: 'dkw_img.png',
    label: 'DKW 리니어 모듈 액추에이터 (dkw_img)',
    folder: 'ROOT',
    relatedFolders: ['DAWOOROBOT'],
    path: './assets/aistudio/images/dkw_img.png',
    modelHint: 'DAWOO DKW / DLN Linear Module'
  },
  {
    id: 'img-root-epson',
    fileName: 'epson_img.png',
    label: 'EPSON 산업용 로봇 (epson_img)',
    folder: 'ROOT',
    relatedFolders: ['EPSON'],
    path: './assets/aistudio/images/epson_img.png',
    modelHint: 'EPSON SCARA & 6-Axis Robot'
  },
  {
    id: 'img-root-gear',
    fileName: 'gear_img.png',
    label: '정밀 유성 감속기 (gear_img)',
    folder: 'ROOT',
    relatedFolders: ['SERVO'],
    path: './assets/aistudio/images/gear_img.png',
    modelHint: 'APEX / Precision Planetary Reducer'
  },
  {
    id: 'img-root-lms',
    fileName: 'lms_img.png',
    label: 'LMS 마그네틱 이송 시스템 (lms_img)',
    folder: 'ROOT',
    relatedFolders: ['DAWOOROBOT'],
    path: './assets/aistudio/images/lms_img.png',
    modelHint: 'DAWOO LMS Magnetic Transfer System'
  },
  {
    id: 'img-root-logo',
    fileName: 'logo.png',
    label: 'DAWOOFA VINA 공식 로고 (logo)',
    folder: 'ROOT',
    relatedFolders: [],
    path: './assets/aistudio/images/logo.png',
    modelHint: 'DAWOOFA VINA Corporate Emblem'
  },
  {
    id: 'img-root-vsw',
    fileName: 'vsw_img.png',
    label: '클린룸 웨이퍼 반송 로봇 WTR (vsw_img)',
    folder: 'ROOT',
    relatedFolders: ['DAWOOROBOT'],
    path: './assets/aistudio/images/vsw_img.png',
    modelHint: 'VSW / WTR Wafer Transfer Robot'
  },

  // 2. ADVANTECH (./assets/aistudio/images/ADVANTECH/*)
  {
    id: 'img-advantech-main',
    fileName: 'advantech.png',
    label: 'ADVANTECH 산업용 PC & 제어 솔루션',
    folder: 'ADVANTECH',
    path: './assets/aistudio/images/ADVANTECH/advantech.png',
    modelHint: 'ADVANTECH Industrial PC & Automation'
  },

  // 3. DAWOOROBOT (./assets/aistudio/images/DAWOOROBOT/*)
  {
    id: 'img-dawoorobot-dsn30',
    fileName: 'DSN30.png',
    label: '다우로봇 DSN30 직교/정밀 로봇',
    folder: 'DAWOOROBOT',
    path: './assets/aistudio/images/DAWOOROBOT/DSN30.png',
    modelHint: 'DAWOO ROBOT DSN30 Series'
  },

  // 4. EPSON (./assets/aistudio/images/EPSON/*)
  {
    id: 'img-epson-gx1',
    fileName: 'GX1-C-174-225.png',
    label: 'EPSON GX 시리즈 스카라 로봇 (GX1-C)',
    folder: 'EPSON',
    path: './assets/aistudio/images/EPSON/GX1-C-174-225.png',
    modelHint: 'EPSON GX1-C-174-225 SCARA Robot'
  },

  // 5. INVERTER (./assets/aistudio/images/INVERTER/*)
  {
    id: 'img-inverter-main',
    fileName: 'INVERTER.png',
    label: '미쓰비시 FREQROL 범용 인버터 (INVERTER)',
    folder: 'INVERTER',
    path: './assets/aistudio/images/INVERTER/INVERTER.png',
    modelHint: 'FREQROL FR-A800 / FR-E800 Inverter'
  },

  // 6. PILZ (./assets/aistudio/images/PILZ/*)
  {
    id: 'img-pilz-main',
    fileName: 'PILZ.png',
    label: 'PILZ PNOZ 안전 릴레이 컨트롤러 (PILZ)',
    folder: 'PILZ',
    path: './assets/aistudio/images/PILZ/PILZ.png',
    modelHint: 'PILZ PNOZ Multi / PNOZ s Safety Relay'
  },

  // 7. PLC (./assets/aistudio/images/PLC/*)
  {
    id: 'img-plc-iqf',
    fileName: 'IQ_F.png',
    label: '미쓰비시 MELSEC iQ-F PLC (IQ_F)',
    folder: 'PLC',
    path: './assets/aistudio/images/PLC/IQ_F.png',
    modelHint: 'MELSEC iQ-F FX5U / FX5UC Series PLC'
  },
  {
    id: 'img-plc-iq',
    fileName: 'IQ_PLC.png',
    label: '미쓰비시 MELSEC iQ-R / iQ-F PLC (IQ_PLC)',
    folder: 'PLC',
    path: './assets/aistudio/images/PLC/IQ_PLC.png',
    modelHint: 'MELSEC iQ-R / iQ-F Series PLC'
  },
  {
    id: 'img-plc-got',
    fileName: 'got.png',
    label: '미쓰비시 GOT2000 HMI 터치패널 (got)',
    folder: 'PLC',
    path: './assets/aistudio/images/PLC/got.png',
    modelHint: 'GOT2000 GT27 / GT25 HMI'
  },

  // 8. SAMWON (./assets/aistudio/images/SAMWON/*)
  {
    id: 'img-samwon-main',
    fileName: 'SAMWON.png',
    label: '삼원ACT 서보 하네스 & I/O 단자대 (SAMWON)',
    folder: 'SAMWON',
    path: './assets/aistudio/images/SAMWON/SAMWON.png',
    modelHint: 'SAMWON ACT Harness Cable & I/O Block'
  },

  // 9. SERVO (./assets/aistudio/images/SERVO/*)
  {
    id: 'img-servo-main',
    fileName: 'SERVO.png',
    label: '미쓰비시 MELSERVO MR-J5 서보 (SERVO)',
    folder: 'SERVO',
    path: './assets/aistudio/images/SERVO/SERVO.png',
    modelHint: 'MELSERVO MR-J5 Series Servo'
  },
  {
    id: 'img-servo-j4',
    fileName: 'j4.png',
    label: '미쓰비시 MELSERVO MR-J4 서보 (j4)',
    folder: 'SERVO',
    path: './assets/aistudio/images/SERVO/j4.png',
    modelHint: 'MELSERVO MR-J4 Series Servo'
  },
  {
    id: 'img-servo-nikidenso',
    fileName: 'nikidenso.png',
    label: '니키덴소 DD모터 & 리니어 서보 (nikidenso)',
    folder: 'SERVO',
    path: './assets/aistudio/images/SERVO/nikidenso.png',
    modelHint: 'NIKKI DENSO Direct Drive Motor'
  },
  {
    id: 'img-servo-yaskawa',
    fileName: 'yskawaservo.png',
    label: '야스카와 Sigma-7 AC 서보 (yskawaservo)',
    folder: 'SERVO',
    path: './assets/aistudio/images/SERVO/yskawaservo.png',
    modelHint: 'YASKAWA Sigma-7 AC Servo'
  }
];

// Build-time / bundle-time auto-discovery of all images in /public/assets/aistudio/images/**
const GLOB_DISCOVERED_PATHS = Object.keys(
  import.meta.glob('/public/assets/aistudio/images/**/*.{png,jpg,jpeg,webp,gif,svg,PNG,JPG,JPEG,WEBP,GIF,SVG}')
);

function parseRelativeImageEntry(rawPath: string, mtimeMs?: number): AistudioImageFile | null {
  // Normalize "/public/assets/aistudio/images/..." or "./assets/aistudio/images/..."
  const normalized = rawPath
    .trim()
    .replace(/^\/public\//, './')
    .replace(/^public\//, './')
    .replace(/^\/assets\//, './assets/');

  const prefix = './assets/aistudio/images/';
  if (!normalized.startsWith(prefix)) return null;

  const subPath = normalized.slice(prefix.length);
  if (!subPath || subPath.includes('images-manifest.json')) return null;

  const segments = subPath.split('/').filter(Boolean);
  let folder = 'ROOT';
  let fileName = subPath;

  if (segments.length === 1) {
    folder = 'ROOT';
    fileName = segments[0];
  } else if (segments.length >= 2) {
    folder = segments[0];
    fileName = segments.slice(1).join('/');
  }

  const canonicalPath =
    folder === 'ROOT'
      ? `./assets/aistudio/images/${fileName}`
      : `./assets/aistudio/images/${folder}/${fileName}`;

  const known = AISTUDIO_IMAGE_FILES.find(
    (item) => item.path.toLowerCase() === canonicalPath.toLowerCase()
  );

  if (known) {
    return {
      ...known,
      path: canonicalPath,
      fileName,
      folder,
      mtimeMs
    };
  }

  const baseName = fileName.replace(/\.[^/.]+$/, '');
  return {
    id: `img-dyn-${folder.toLowerCase()}-${baseName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    fileName,
    label:
      folder === 'ROOT'
        ? `기본 폴더 이미지 (${baseName})`
        : `${folder} 부품 이미지 (${baseName})`,
    folder,
    path: canonicalPath,
    modelHint: folder === 'ROOT' ? `aistudio/images/${fileName}` : `${folder} / ${baseName}`,
    mtimeMs,
    isDynamic: true
  };
}

function mergeDiscoveredImages(
  manifestEntries?: { folder: string; fileName: string; path: string; mtimeMs?: number }[]
): AistudioImageFile[] {
  const byPath = new Map<string, AistudioImageFile>();

  // 1. Seed from known static presets
  for (const item of AISTUDIO_IMAGE_FILES) {
    byPath.set(item.path.toLowerCase(), { ...item });
  }

  // 2. Merge Vite import.meta.glob discovered files
  for (const globPath of GLOB_DISCOVERED_PATHS) {
    const parsed = parseRelativeImageEntry(globPath);
    if (parsed) {
      byPath.set(parsed.path.toLowerCase(), parsed);
    }
  }

  // 3. If live manifest was fetched, sync with actual disk state
  if (manifestEntries && manifestEntries.length > 0) {
    const liveMap = new Map<string, AistudioImageFile>();
    for (const entry of manifestEntries) {
      const parsed = parseRelativeImageEntry(entry.path, entry.mtimeMs);
      if (parsed) {
        liveMap.set(parsed.path.toLowerCase(), parsed);
      }
    }
    if (liveMap.size > 0) {
      return Array.from(liveMap.values());
    }
  }

  return Array.from(byPath.values());
}

interface AistudioImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImagePath?: string;
  onSelectImage: (relativePath: string) => void;
  initialFolder?: string;
}

export const AistudioImageModal: React.FC<AistudioImageModalProps> = ({
  isOpen,
  onClose,
  currentImagePath = '',
  onSelectImage,
  initialFolder = 'ALL'
}) => {
  const [selectedFolder, setSelectedFolder] = useState<string>(initialFolder);
  const [searchQuery, setSearchQuery] = useState('');
  const [manifestFiles, setManifestFiles] = useState<
    { folder: string; fileName: string; path: string; mtimeMs?: number }[] | undefined
  >(undefined);
  const [manifestFolders, setManifestFolders] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshTick, setRefreshTick] = useState<number>(() => Date.now());

  const fetchLiveManifest = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`./assets/aistudio/images-manifest.json?t=${Date.now()}`, {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.files)) {
          setManifestFiles(data.files);
        }
        if (data && Array.isArray(data.folders)) {
          setManifestFolders(data.folders);
        }
        setRefreshTick(Date.now());
      }
    } catch {
      // Fallback to import.meta.glob + static list on network/offline error
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchLiveManifest();
    }
  }, [isOpen, fetchLiveManifest]);

  const allImages = useMemo(() => {
    return mergeDiscoveredImages(manifestFiles);
  }, [manifestFiles]);

  const folderTabs = useMemo(() => {
    const tabs: AistudioFolderTab[] = [...AISTUDIO_FOLDER_TABS];
    const existingIds = new Set(tabs.map((t) => t.id.toUpperCase()));

    // Add any newly created subfolders discovered from disk or images
    const discoveredFolders = new Set<string>(manifestFolders);
    for (const img of allImages) {
      if (img.folder && img.folder !== 'ROOT') {
        discoveredFolders.add(img.folder);
      }
    }

    for (const folderName of Array.from(discoveredFolders).sort()) {
      if (!existingIds.has(folderName.toUpperCase())) {
        tabs.push({
          id: folderName,
          name: folderName,
          displayPath: `./assets/aistudio/images/${folderName}/`,
          description: `${folderName} 폴더 내 등록된 이미지 목록`
        });
        existingIds.add(folderName.toUpperCase());
      }
    }

    return tabs;
  }, [allImages, manifestFolders]);

  if (!isOpen) return null;

  // Ensure path always begins with "./" for GitHub Pages compatibility
  const ensureDotSlashPath = (rawPath: string): string => {
    const trimmed = rawPath.trim();
    if (trimmed.startsWith('./')) return trimmed;
    if (trimmed.startsWith('/')) return `.${trimmed}`;
    return `./${trimmed}`;
  };

  // Filter images by selected folder tab and search query
  const filteredImages = allImages.filter((img) => {
    const matchesFolder =
      selectedFolder === 'ALL' ||
      img.folder === selectedFolder ||
      (img.relatedFolders && img.relatedFolders.includes(selectedFolder));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      img.fileName.toLowerCase().includes(q) ||
      img.label.toLowerCase().includes(q) ||
      img.folder.toLowerCase().includes(q) ||
      img.path.toLowerCase().includes(q) ||
      img.modelHint.toLowerCase().includes(q);

    return matchesFolder && matchesSearch;
  });

  const activeTabInfo =
    folderTabs.find((t) => t.id === selectedFolder) || folderTabs[0];

  return (
    <div
      className="fixed inset-0 z-[70] bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="bg-white border-2 border-[#2563EB] w-full max-w-5xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Modal Header */}
        <div className="bg-[#1E293B] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold tracking-wide flex items-center gap-2 flex-wrap">
                <span>aistudio/images 폴더 이미지 탐색기 (AistudioImageModal)</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-600 text-white">
                  ./assets/aistudio/images/...
                </span>
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                폴더 트리 탭을 선택하고 썸네일을 클릭하면 상대 경로(./assets/aistudio/images/...)가 즉시 저장됩니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={fetchLiveManifest}
              disabled={isRefreshing}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-600 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="aistudio/images 폴더 내 추가/변경된 이미지를 다시 스캔합니다"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>폴더 새로고침</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 transition-colors cursor-pointer"
              title="모달 닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Folder Tree Category Tabs Bar */}
        <div className="bg-[#F8FAFC] border-b border-[#CBD5E1] p-3.5 space-y-2.5 shrink-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1E293B]">
              <Folder className="w-4 h-4 text-[#2563EB]" />
              <span>폴더 트리 카테고리 탭 (aistudio/images 디렉터리 실시간 연동):</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2.5 py-0.5 border border-blue-200 font-bold">
              탐색 경로: {activeTabInfo.displayPath}
            </span>
          </div>

          {/* Category Tabs Grid/Flex */}
          <div className="flex flex-wrap gap-1.5">
            {folderTabs.map((tab) => {
              const isSelected = selectedFolder === tab.id;
              const count =
                tab.id === 'ALL'
                  ? allImages.length
                  : allImages.filter(
                      (img) =>
                        img.folder === tab.id ||
                        (img.relatedFolders && img.relatedFolders.includes(tab.id))
                    ).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFolder(tab.id)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-2xs'
                      : 'bg-white text-[#334155] border-[#CBD5E1] hover:border-[#2563EB] hover:text-[#2563EB]'
                  }`}
                >
                  <Folder className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{tab.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 ${
                      isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Folder Info */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-1">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="파일명(IQ_F.png, dawoorobot_img.png, SERVO.png 등) 또는 폴더명 검색..."
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none bg-white font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
            </div>
            <div className="text-[11px] text-slate-600 font-mono bg-white px-3 py-1.5 border border-[#CBD5E1] shrink-0">
              {activeTabInfo.description} ({filteredImages.length}개 표시)
            </div>
          </div>
        </div>

        {/* Thumbnail Grid Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredImages.map((item) => {
              const normalizedItemPath = ensureDotSlashPath(item.path);
              const isSelected = currentImagePath === normalizedItemPath;
              const previewSrc = `${normalizedItemPath}?v=${item.mtimeMs || refreshTick}`;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectImage(normalizedItemPath)}
                  className={`text-left border-2 p-3 transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#2563EB] bg-blue-50/60 shadow-sm ring-1 ring-[#2563EB]'
                      : 'border-[#CBD5E1] hover:border-[#2563EB] hover:bg-slate-50'
                  }`}
                >
                  <div>
                    {/* Folder Badge & Active Check */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-slate-100 text-[#1E293B] border border-slate-300 truncate">
                        {item.folder === 'ROOT' ? 'images/ (기본)' : `images/${item.folder}`}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-mono font-bold px-1.5 py-0.5 bg-[#2563EB] text-white shrink-0">
                          <Check className="w-3 h-3" />
                          <span>선택됨</span>
                        </span>
                      )}
                    </div>

                    {/* Image Thumbnail Box */}
                    <div className="w-full h-32 bg-white border border-slate-200 p-2 flex items-center justify-center mb-2.5 overflow-hidden">
                      <img
                        src={previewSrc}
                        alt={item.fileName}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-150"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = './assets/aistudio/images/logo.png';
                        }}
                      />
                    </div>

                    {/* File Name & Label */}
                    <div className="font-mono font-extrabold text-xs text-[#2563EB] truncate">
                      {item.fileName}
                    </div>
                    <div className="font-bold text-[11px] text-[#1E293B] truncate mt-0.5">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono truncate mt-0.5">
                      {item.modelHint}
                    </div>
                  </div>

                  {/* Relative Path Footer */}
                  <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between gap-1 text-[10px] font-mono">
                    <span className="text-slate-600 truncate" title={normalizedItemPath}>
                      {normalizedItemPath}
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#1E293B] group-hover:bg-[#2563EB] text-white font-bold shrink-0 transition-colors">
                      즉시적용
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredImages.length === 0 && (
            <div className="p-10 text-center text-slate-500 text-xs font-mono space-y-2">
              <ImageIcon className="w-8 h-8 text-slate-400 mx-auto" />
              <p>검색 조건에 일치하는 이미지 파일이 없습니다.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#F8FAFC] border-t border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] font-mono text-slate-600">
            ✓ GitHub Pages 배포 호환: 모든 이미지 경로 맨 앞에 점-슬래시(<strong>./assets/aistudio/images/...</strong>)가 자동 적용됩니다.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-mono font-bold transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
