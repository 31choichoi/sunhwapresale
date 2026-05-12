/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, Globe, Clock, MessageCircle, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "사업소개", href: "#hero" },
  { name: "A.PT 서비스", href: "#service" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "OWN THE 100", href: "#portfolio" },
  { name: "최신소식", href: "#news" },
];

function Logo() {
  return (
    <div className="flex flex-col items-start leading-none gap-0.5 group cursor-pointer">
      <span className="text-[22px] font-display font-bold tracking-[-0.05em] text-luxury-gold group-hover:text-luxury-black transition-colors">
        선화분양
      </span>
      <div className="flex items-center gap-1">
        <div className="h-[1px] w-4 bg-luxury-gold group-hover:bg-luxury-black transition-colors" />
        <span className="text-[10px] font-display font-medium tracking-[0.2em] text-luxury-gold group-hover:text-luxury-black transition-colors uppercase">
          Sunhwa Estate
        </span>
      </div>
    </div>
  );
}

const SERVICE_CARDS = [
  {
    title: "자산 컨설팅",
    desc: "재건축 비용과 자금 계획을\n미리 정리해 드립니다.",
    tags: ["재건축", "세무", "금융가이드"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "이주 컨설팅",
    desc: "이주를 집부터 이사까지 한 번에 상담\n이사 등 이주 상담",
    tags: ["이주지역", "전월세", "이사", "대출"],
    image: "https://images.unsplash.com/photo-1600573472591-14c6d8603635?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "입주 컨설팅",
    desc: "입주 준비와 비움, 공간까지 마무리\n입주 상담",
    tags: ["입주지원", "분양금", "홈스타일링"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
  },
];

const PORTFOLIO_ITEMS = [
  {
    title: "VISION",
    subtitle: "100년 도시 5가지 비전",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "DESIGN",
    subtitle: "압구정 현대의 5가지 디자인",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "UNIT",
    subtitle: "유닛의 가치를 높이는 6가지 플랜",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
  },
];

const NEWS_ITEMS = [
  {
    date: "2026.05.12",
    title: "선화분양, 압구정 A.PT 서비스로 수주 후 입주까지 챙긴다",
    desc: "선화분양, '압구정 A.PT 서비스'로 수주 후 입주까지 챙긴다. '이주비 대출이 요새 안내여서 걱정이 큰데…'",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
  },
  {
    date: "2026.03.30",
    title: "압구정 2구역 2.7조 도급계약 체결... 통합심의도 접수",
    desc: "압구정 2구역 2.7조 도급계약 체결... 통합심의도 접수. 최고 65층 전 세대 한강 조망 확보...",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=400",
  },
  {
    date: "2026.02.12",
    title: "압구정 3·5구역 출사표",
    desc: "압구정 3·5구역 출사표. '대한민국 고급 주거 문화의 정점, 압구정 정체성 완성시키겠다'",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400",
  },
  {
    date: "2025.11.10",
    title: "현대건설, 현대위아와 '로봇주차 솔루션' 공동개발 업무협약 체결",
    desc: "현대건설, 로봇 기반 미래형 공간 혁신 박차. '현대위아와 로봇주차 솔루션 공동개발 업무협약'",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <a href="#hero">
            <Logo />
          </a>
          
          <div className="flex items-center gap-12">
            <nav className="hidden xl:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-semibold text-gray-700 hover:text-luxury-gold transition-colors tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-8 border-l border-gray-200 xl:pl-8">
              <button className="hidden sm:flex items-center gap-2 text-[14px] font-bold text-luxury-black hover:text-luxury-gold transition-colors">
                고객로그인
              </button>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 -mr-2 text-luxury-black hover:text-luxury-gold transition-colors active:scale-95"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-white z-[80] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-20">
                <Logo />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2 text-luxury-black hover:rotate-90 transition-transform duration-300"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-display font-medium text-luxury-black border-b border-gray-50 pb-4 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-auto pt-10">
                <button className="w-full bg-luxury-black text-white py-5 text-sm font-bold tracking-widest uppercase mb-10">
                  고객로그인
                </button>
                <div className="text-gray-400 text-xs leading-loose">
                  <p>대표번호: 02-6263-2222</p>
                  <p>© SUNHWA E&C. ALL RIGHTS RESERVED.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Premium Luxury Architecture"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[12vw] leading-none font-display font-semibold text-white tracking-tighter mix-blend-overlay"
          >
            SUNHWA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[14vw] leading-[0.8] font-serif italic text-white tracking-tight -mt-4"
          >
            Luxury
          </motion.h1>
        </div>
      </section>

      {/* Branding Bar */}
      <div className="bg-luxury-black py-4 px-6 lg:px-12 text-white overflow-hidden">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <span className="text-xs font-display font-medium tracking-[0.2em] opacity-80 uppercase">Sunhwa Real Estate</span>
          <div className="hidden sm:flex gap-8 text-[11px] font-medium tracking-wide uppercase opacity-60">
            <span>Development</span>
            <span>Sales</span>
            <span>Consulting</span>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section id="service" className="py-24 lg:py-40 px-6 lg:px-12 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl lg:text-7xl font-display font-medium leading-none mb-8 tracking-tighter">
                  A.PT<br />SERVICE
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-12">
                  시공사 선정 후부터 입주 시까지 고객님의 수많은 고민을 1:1 맞춤형 컨설팅 서비스로 함께 해결해드립니다.
                </p>
                <div className="flex flex-col gap-6">
                  {SERVICE_CARDS.map((card, idx) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative bg-[#f8f8f8] p-10 rounded-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl font-display font-medium">{card.title}</h3>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-luxury-black transition-colors" />
                        </div>
                        <p className="text-gray-500 text-sm whitespace-pre-line mb-8">{card.desc}</p>
                        <hr className="border-gray-200 mb-6" />
                        <div className="flex flex-wrap gap-2">
                          {card.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white border border-gray-100 text-[11px] text-gray-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={card.image}
                        className="absolute right-[-20%] top-[-10%] w-1/2 h-[120%] object-cover opacity-10 group-hover:opacity-20 transition-opacity grayscale"
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
                <button className="mt-12 w-full lg:w-auto bg-luxury-black text-white px-12 py-5 text-sm font-medium hover:bg-zinc-800 transition-colors">
                  A.PT 서비스 예약 신청하기
                </button>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Architecture Detail"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover grayscale"
                    alt="Interior"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="bg-[#f2f2f2] p-10 flex flex-col justify-end">
                  <span className="text-[11px] font-display tracking-[0.3em] text-gray-400 mb-4 uppercase">Excellence</span>
                  <h4 className="text-xl font-display font-medium leading-tight">선화분양만의 차별화된 프리미엄 컨설팅</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="relative py-32 lg:py-48 px-6 lg:px-12 bg-zinc-900 text-white overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Luxury Villa"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-display font-medium leading-none mb-8 tracking-tighter">
              MEMBERSHIP<br />SERVICE
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-16">
              선화분양 고객님만을 위한 특별한 서비스와 전문 상담서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-black/40 backdrop-blur-md p-12 hover:bg-black/60 transition-colors group cursor-pointer border border-white/5">
              <h3 className="text-lg font-medium text-gray-400 mb-4">세무, 부동산, 투자 등</h3>
              <p className="text-2xl font-display font-medium mb-12">특별한 연사를 초청해 VVIP 강연회를 개최합니다</p>
              <button className="flex items-center gap-2 text-sm font-medium border-b border-white/40 pb-2 group-hover:border-white transition-all">
                갤러리 예약 <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-12 hover:bg-black/60 transition-colors group cursor-pointer border border-white/5">
              <h3 className="text-lg font-medium text-gray-400 mb-4">사업 진행 과정에서 생기는</h3>
              <p className="text-2xl font-display font-medium mb-12">어떤 질문이든 편하게 남겨주시면 정성을 다해 답변드리겠습니다</p>
              <button className="flex items-center gap-2 text-sm font-medium border-b border-white/40 pb-2 group-hover:border-white transition-all">
                1:1 문의 <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 lg:py-48 px-6 lg:px-12 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl lg:text-7xl font-display font-medium leading-[0.8] mb-8 tracking-tighter">
                OWN <span className="font-serif italic font-light tracking-normal">THE</span> 100
              </h2>
              <p className="text-gray-500 text-lg">
                한강의 풍경, 도시의 구조, 삶의 방식까지. 시간이 지나도 가치가 퇴색되지 않는 설계와 디자인, 새로운 100년의 기준을 제시합니다.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <button className="flex items-center gap-2 text-white text-xs font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title} 더보기 <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm tracking-tight">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 lg:py-40 px-6 lg:px-12 bg-luxury-beige scroll-mt-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-6xl font-display font-semibold tracking-tighter mb-4">NOW</h2>
              <p className="text-gray-500">선화분양의 재건축과 관련된 주요 소식과 최신 부동산 이슈를 전해드립니다.</p>
            </div>
            <button className="text-[11px] font-bold tracking-widest border border-luxury-black/10 px-6 py-3 hover:bg-luxury-black hover:text-white transition-all uppercase">
              More
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-luxury-black">
            {NEWS_ITEMS.map((news, idx) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="mb-8 border-t border-luxury-black/10 pt-8">
                  <h3 className="text-lg font-medium leading-tight mb-4 group-hover:text-luxury-gold transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                    {news.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">{news.date}</span>
                    <div className="aspect-[16/10] w-24 overflow-hidden rounded-sm grayscale transition-all group-hover:grayscale-0">
                       <img src={news.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 pt-24 pb-12 px-6 lg:px-12 text-white/50">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-display font-semibold text-white tracking-tighter mb-12">선화분양</h2>
              <div className="grid sm:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Contact</h4>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li>02-6263-2222</li>
                    <li>03058 서울특별시 종로구 율곡로 75 선화빌딩</li>
                    <li>사업자등록번호 101-81-16293</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Support</h4>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="hover:text-white transition-colors cursor-pointer">개인정보처리방침</li>
                    <li className="hover:text-white transition-colors cursor-pointer">이용약관</li>
                    <li className="hover:text-white transition-colors cursor-pointer">이메일무단수집거부</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start lg:items-end">
              <div className="flex gap-10">
                 <button className="flex items-center gap-10 border border-white/20 px-8 py-4 text-xs font-medium hover:border-white transition-colors">
                   Family Site <Plus className="w-4 h-4" />
                 </button>
              </div>
              <div className="mt-12 text-[10px] tracking-widest uppercase">
                COPYRIGHT © SUNHWA E&C. ALL RIGHT RESERVED.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 bg-white border border-gray-100 shadow-xl flex items-center justify-center rounded-full text-luxury-black hover:bg-luxury-black hover:text-white transition-all group active:scale-90"
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:-translate-y-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
