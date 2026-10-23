import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ChevronDown
} from 'lucide-react';
import { Language, FaProductItem } from '../types';
import { CompanyInfo, DEFAULT_COMPANY_INFO, OFFICIAL_CATEGORIES, EXTENDED_INITIAL_PRODUCTS, normalizeCategoryKey } from '../data/companyStore';

interface HeaderProps {
  currentTab: 'preview' | 'htmlCode';
  setCurrentTab: (tab: 'preview' | 'htmlCode') => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenRfq: (modelName?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  products?: FaProductItem[];
  companyInfo?: CompanyInfo;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  onOpenRfq,
  searchQuery,
  setSearchQuery,
  activeSection = 'home',
  onSelectSection,
  selectedCategory = 'all',
  onSelectCategory,
  products = EXTENDED_INITIAL_PRODUCTS,
  companyInfo = DEFAULT_COMPANY_INFO
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const i18n = {
    vi: {
      hqBadge: "ĐẠI LÝ ỦY QUYỀN MITSUBISHI ELECTRIC HÀN QUỐC",
      hqSub: `${companyInfo.companyNameVn} • KHO NGOẠI QUAN TẠI BẮC NINH & BÌNH DƯƠNG`,
      hotline: "Hotline Kỹ thuật:",
      email: companyInfo.email,
      mst: `MST: ${companyInfo.taxId}`, navAbout: "Giới thiệu doanh nghiệp", navProducts: "Sản phẩm FA", navSupport: "Kỹ thuật & Dịch vụ A/S tại chỗ", navContact: "Yêu cầu báo giá (RFQ)", navPreview: "Giao diện Web", navHtml: "Mã nguồn đơn HTML", searchPh: "Tìm mã sản phẩm (MR-J5, E800, iQ-R, PLC...)", btnQuote: "BÁO GIÁ NHANH", koreaHq: `Trụ sở Hàn Quốc: ${companyInfo.koreaHqUrl.replace(/^https?:\/\//, '')}`,
      allCategoriesLabel: "Tất cả danh mục sản phẩm FA"
    },
    ko: {
      hqBadge: `${companyInfo.companyNameKo} • 한국 미쓰비시전기 공식 대리점`, hqSub: `${companyInfo.companyNameVn} • 하노이/박닌 & 호치민/빈증 직영 보세창고 운영`,
      hotline: "베트남 핫라인:",
      email: companyInfo.email,
      mst: `사업자번호: ${companyInfo.taxId}`, navAbout: "회사소개", navProducts: "취급제품군", navSupport: "기술지원 및 현지A/S대응", navContact: "온라인 견적문의", navPreview: "웹사이트 미리보기", navHtml: "단일 HTML 전체 소스코드", searchPh: "형명 및 규격 검색 (MR-J5, E800, iQ-R...)", btnQuote: "온라인 견적요청", koreaHq: `한국 본사: ${companyInfo.koreaHqUrl.replace(/^https?:\/\//, '')}`,
      allCategoriesLabel: "전체 취급제품군 보기 (All Categories)"
    },
    en: {
      hqBadge: "OFFICIAL MITSUBISHI ELECTRIC AUTHORIZED DISTRIBUTOR",
      hqSub: "DAWOOFA VINA CO., LTD • BONDED HUBS IN BAC NINH & BINH DUONG",
      hotline: "Technical Hotline:",
      email: "contact@dawoofavina.com",
      mst: "Tax ID: 2301192888",
      navAbout: "Company Profile",
      navProducts: "FA Products",
      navSupport: "Technical Support & Local A/S",
      navContact: "Request Quote (RFQ)",
      navPreview: "Live Website",
      navHtml: "Standalone Single HTML",
      searchPh: "Search model (MR-J5, E800, iQ-R, PLC...)",
      btnQuote: "REQUEST QUOTE",
      koreaHq: "Korea HQ: dawooservo.co.kr",
      allCategoriesLabel: "View All FA Product Categories"
    }
  }[lang];

  const handleNavClick = (sectionId: string) => {
    setDropdownOpen(false);
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      if (currentTab !== 'preview') {
        setCurrentTab('preview');
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setDropdownOpen(false);
    setSearchQuery('');
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      handleNavClick('products');
    }
  };

  const isNavActive = (id: string) => {
    if (currentTab === 'htmlCode') return false;
    return activeSection === id;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#DEE2E6] text-[#212529] font-sans shadow-xs">
      
      {/* 1. Top Utility Bar with Language Switcher */}
      <div className="bg-[#F8FAFC] text-[#334155] text-xs border-b border-[#E2E8F0] py-1 px-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-end">
          {/* Language Switcher: VI (Default), KO, EN */}
          <div className="flex items-center bg-white border border-[#CBD5E1] p-0.5 text-[10px] shadow-2xs">
            <button
              onClick={() => setLang('vi')}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'vi' ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:text-[#2563EB]'
              }`}
              title="Tiếng Việt (Mặc định)"
            >
              VI
            </button>
            <button
              onClick={() => setLang('ko')}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'ko' ? '
