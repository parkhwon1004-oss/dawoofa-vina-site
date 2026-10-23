/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/landing/HeroSection';
import { AboutPage } from './components/landing/AboutPage';
import { BrandsSection } from './components/landing/BrandsSection';
import { ProductsSection } from './components/landing/ProductsSection';
import { FeaturesSection } from './components/landing/FeaturesSection';
import { ContactSection } from './components/landing/ContactSection';
import { Footer } from './components/Footer';
import { SingleHtmlViewer } from './components/htmlExport/SingleHtmlViewer';
import { RfqModal } from './components/landing/RfqModal';
import { AdminModal } from './components/admin/AdminModal';
import { Language, FaProductItem } from './types';
import { 
  CompanyInfo, 
  HeroSliderSettings,
  ProductCategoryDef,
  loadStoredCategories,
  loadStoredCompanyInfo, 
  loadStoredProducts,
  loadStoredSliderSettings
} from './data/companyStore';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'preview' | 'htmlCode'>('preview');
  // Default language is Vietnamese (VI) as strictly required
  const [lang, setLang] = useState<Language>('vi');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Initial landing page is 'home' (Initial Advertising Page, NOT 'about')
  const [activeSection, setActiveSection] = useState<string>('home');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqTargetModel, setRfqTargetModel] = useState<string>('');
  
  // Admin Management Modal State
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Dynamic Categories, Company Information, Product Catalog & Hero Slider Store
  const [categories, setCategories] = useState<ProductCategoryDef[]>(() => loadStoredCategories());
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => loadStoredCompanyInfo());
  const [products, setProducts] = useState<FaProductItem[]>(() => loadStoredProducts());
  const [sliderSettings, setSliderSettings] = useState<HeroSliderSettings>(() => loadStoredSliderSettings());

  const handleOpenRfq = (modelName?: string) => {
    setRfqTargetModel(modelName || '');
    setRfqModalOpen(true);
  };

  const handleSelectBrand = (brandName: string) => {
    setSelectedCategory('all');
    setSearchQuery(brandName);
    handleSelectSection('products');
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (currentTab !== 'preview') {
      setCurrentTab('preview');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#212529] flex flex-col font-sans selection:bg-[#1E3A8A] selection:text-white">
      {/* 1. Traditional Korean FA Header (Sticky on all pages, top-0 z-50) */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        onOpenRfq={() => handleOpenRfq()}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeSection={activeSection}
        onSelectSection={(sec) => {
          if (sec === 'products') {
            setSelectedCategory('all');
          }
          handleSelectSection(sec);
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery('');
          handleSelectSection('products');
        }}
        companyInfo={companyInfo}
        products={products}
        categories={categories}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'preview' && (
          <div>
            {/* 1. INITIAL ADVERTISING PAGE ('home') - Shown on initial access */}
            {activeSection === 'home' && (
              <>
                <HeroSection
                  lang={lang}
                  onOpenRfq={handleOpenRfq}
                  onViewCatalog={() => {
                    setSelectedCategory('all');
                    handleSelectSection('products');
                  }}
                  companyInfo={companyInfo}
                  sliderSettings={sliderSettings}
                />
                <BrandsSection
                  lang={lang}
                  onSelectBrand={handleSelectBrand}
                />
              </>
            )}

            {/* 2. DEDICATED COMPANY INTRODUCTION PAGE ('about') - Handshake Banner + Google Maps Address */}
            {activeSection === 'about' && (
              <AboutPage
                lang={lang}
                companyInfo={companyInfo}
              />
            )}

            {/* 3. PRODUCTS CATALOG PAGE ('products') */}
            {activeSection === 'products' && (
              <>
                <ProductsSection
                  lang={lang}
                  onOpenRfq={handleOpenRfq}
                  searchQuery={searchQuery}
                  onClearSearch={() => setSearchQuery('')}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  products={products}
                  categories={categories}
                />
                <BrandsSection
                  lang={lang}
                  onSelectBrand={handleSelectBrand}
                />
              </>
            )}

            {/* 4. TECHNICAL SUPPORT & LOCAL A/S PAGE ('support') */}
            {activeSection === 'support' && (
              <FeaturesSection
                lang={lang}
              />
            )}

            {/* 5. ONLINE RFQ QUOTATION PAGE ('contact') */}
            {activeSection === 'contact' && (
              <ContactSection
                lang={lang}
                presetModel={rfqTargetModel}
                companyInfo={companyInfo}
                categories={categories}
              />
            )}
          </div>
        )}

        {currentTab === 'htmlCode' && (
          <SingleHtmlViewer />
        )}
      </main>

      {/* Scroll To Top Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 text-xs">
        <button
          onClick={scrollToTop}
          className="w-9 h-9 bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* RFQ Express Modal */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        presetModel={rfqTargetModel}
        lang={lang}
        companyInfo={companyInfo}
      />

      {/* Admin Management Modal (Accessible via footer bottom-right button) */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        lang={lang}
        categories={categories}
        onUpdateCategories={setCategories}
        companyInfo={companyInfo}
        onUpdateCompanyInfo={setCompanyInfo}
        products={products}
        onUpdateProducts={setProducts}
        sliderSettings={sliderSettings}
        onUpdateSliderSettings={setSliderSettings}
      />

      {/* Global B2B Industrial Footer with Admin Portal Button at bottom right */}
      <Footer 
        lang={lang}
        companyInfo={companyInfo}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />
    </div>
  );
}
