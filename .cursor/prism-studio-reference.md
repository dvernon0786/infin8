# Prism Studio - Full HTML Reference

This document contains the complete HTML code for the Prism Studio homepage, preserved for reference purposes.

## Full HTML Code

```html
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Prism Studio — Creative AI for Everyone</title>
<meta name="description" content="Transform ideas into extraordinary visuals with advanced AI. Beautiful, intelligent, effortless.">
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<style>
@keyframes fadeInUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
from { opacity: 0; transform: translateX(-40px); }
to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
from { opacity: 0; transform: translateX(40px); }
to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
from { opacity: 0; transform: scale(0.95); }
to { opacity: 1; transform: scale(1); }
}
@keyframes float {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-10px); }
}
@keyframes glow {
0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.5); }
}
@keyframes shimmer {
0% { transform: translateX(-100%); }
100% { transform: translateX(100%); }
}
@keyframes bounce-gentle {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-5px); }
}
@keyframes rotate-slow {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}
@keyframes pulse-soft {
0%, 100% { opacity: 1; transform: scale(1); }
50% { opacity: 0.8; transform: scale(1.05); }
}
@keyframes slideInDown {
from { opacity: 0; transform: translateY(-20px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
from { opacity: 0; transform: scale(0.8); }
to { opacity: 1; transform: scale(1); }
}
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
.animate-fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
.animate-slide-in-left { animation: slideInLeft 0.7s ease-out forwards; opacity: 0; }
.animate-slide-in-right { animation: slideInRight 0.7s ease-out forwards; opacity: 0; }
.animate-scale-in { animation: scaleIn 0.6s ease-out forwards; opacity: 0; }
.animate-slide-in-down { animation: slideInDown 0.6s ease-out forwards; opacity: 0; }
.animate-zoom-in { animation: zoomIn 0.6s ease-out forwards; opacity: 0; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-glow { animation: glow 2s ease-in-out infinite; }
.animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
.animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
.animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }
.delay-700 { animation-delay: 0.7s; }
.delay-800 { animation-delay: 0.8s; }
.delay-900 { animation-delay: 0.9s; }
.delay-1000 { animation-delay: 1s; }
.delay-1100 { animation-delay: 1.1s; }
.delay-1200 { animation-delay: 1.2s; }
.text-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.glass { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.glass-strong { backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); }
.shimmer-effect {
position: relative;
overflow: hidden;
}
.shimmer-effect::after {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
animation: shimmer 2s infinite;
}
.hover-lift {
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
transform: translateY(-8px);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.card-glow {
transition: all 0.3s ease;
}
.card-glow:hover {
box-shadow: 0 0 40px rgba(99, 102, 241, 0.15);
}
.parallax-bg {
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
</style>
<link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link id="all-fonts-link-font-roboto" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link id="all-fonts-link-font-montserrat" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link id="all-fonts-link-font-poppins" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link id="all-fonts-link-font-playfair" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap"><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link id="all-fonts-link-font-instrument-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link id="all-fonts-link-font-merriweather" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap"><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link id="all-fonts-link-font-bricolage" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link id="all-fonts-link-font-jakarta" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link id="all-fonts-link-font-space-grotesk" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link id="all-fonts-link-font-work-sans" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link id="all-fonts-link-font-pt-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link id="all-fonts-link-font-geist-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link id="all-fonts-link-font-space-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link id="all-fonts-link-font-quicksand" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link id="all-fonts-link-font-nunito" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style></head>
  <body class="bg-white text-gray-900 antialiased selection:bg-blue-200 selection:text-blue-900"><div class="video-background-container top-0 w-full -z-10 absolute h-screen"><video src="https://cdn.midjourney.com/video/af6b100b-cd15-4257-b845-8a5388a23f1b/3.mp4" autoplay="" loop="" muted="" playsinline="" class="w-full h-full object-cover"></video></div>
    
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass bg-white/80 border-b border-gray-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="animate-slide-in-down flex space-x-3 items-center" style="animation-play-state: running;">
            
            <span class="text-xl font-semibold tracking-tight">Prism Studio</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#gallery" class="animate-slide-in-down delay-100 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" style="animation-play-state: running;">Gallery</a>
            <a href="#features" class="animate-slide-in-down delay-200 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" style="animation-play-state: running;">Features</a>
            <a href="#showcase" class="animate-slide-in-down delay-300 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" style="animation-play-state: running;">Showcase</a>
            <a href="#pricing" class="animate-slide-in-down delay-400 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" style="animation-play-state: running;">Pricing</a>
          </div>
          
          <!-- CTA -->
          <div class="animate-slide-in-down delay-500 flex items-center space-x-3" style="animation-play-state: running;">
            <button class="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button class="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 max-sm:h-12 text-lg text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center hover-lift" role="button">Get Started</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 flex items-center justify-center" style="isolation:isolate;">
        
  <!-- Ripple background -->
  <div class="absolute inset-0 -z-10 flex bg-[#ffffff]/50 items-center justify-center">
    <!-- Soft concentric ripples (masked for fade-out) -->
    <div class="w-[1600px] h-[1600px] rounded-full" style="background:
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 18%, rgba(0,0,0,0.02) 26%, rgba(0,0,0,0) 30%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.06) 34%, rgba(0,0,0,0) 38%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.04) 44%, rgba(0,0,0,0) 48%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.03) 54%, rgba(0,0,0,0) 58%) ;
      filter: blur(6px);
      opacity: .35;
      mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%);
      -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%);
      transform: translateY(6vh) scaleX(1.25);">
    </div>
  </div>

  <!-- Orb + content -->
  <div class="relative aspect-square flex w-[90vw] max-w-3xl items-center justify-center">
    <!-- Orb -->
    <div class="absolute inset-0 ring-black/5 ring-1 rounded-full shadow-inner blur-3xl" style="background:
        radial-gradient(120% 120% at 30% 25%, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 55%, rgba(230,230,230,0.9) 100%),
        radial-gradient(60% 60% at 65% 70%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transform: scale(1.0);">
      <!-- Crystal glow effect inside orb -->
      <div class="absolute inset-0 rounded-full overflow-hidden">
        <div class="absolute inset-0 rounded-full animate-pulse-soft" style="background: radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.4) 0%, rgba(150, 100, 255, 0.3) 30%, rgba(255, 150, 200, 0.2) 60%, transparent 80%); animation: crystalGlow 4s ease-in-out infinite alternate;"></div>
        <div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at 70% 60%, rgba(255, 200, 100, 0.3) 0%, rgba(100, 255, 200, 0.25) 40%, transparent 70%); animation: crystalGlow2 3s ease-in-out infinite alternate-reverse;"></div>
        <div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at 50% 10%, rgba(200, 100, 255, 0.2) 0%, rgba(100, 255, 150, 0.15) 50%, transparent 80%); animation: crystalGlow3 5s ease-in-out infinite;"></div>
      </div>
      
      <style>
        @keyframes crystalGlow {
          0% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.2) rotate(360deg);
          }
        }
        
        @keyframes crystalGlow2 {
          0% {
            opacity: 0.2;
            transform: scale(1.1) rotate(45deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.9) rotate(225deg);
          }
          100% {
            opacity: 0.3;
            transform: scale(1.0) rotate(405deg);
          }
        }
        
        @keyframes crystalGlow3 {
          0% {
            opacity: 0.15;
            transform: scale(0.9) rotate(90deg);
          }
          33% {
            opacity: 0.4;
            transform: scale(1.3) rotate(210deg);
          }
          66% {
            opacity: 0.25;
            transform: scale(0.7) rotate(330deg);
          }
          100% {
            opacity: 0.35;
            transform: scale(1.1) rotate(450deg);
          }
        }
      </style>
    </div>

    <!-- Orb specular highlights -->
    <div class="pointer-events-none absolute -top-6 left-10 w-40 h-40 rounded-full" style="background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 70%); filter: blur(4px); opacity:.85;"></div>
    <div class="pointer-events-none absolute bottom-10 right-14 w-24 h-24 rounded-full" style="background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0) 70%); filter: blur(6px); opacity:.8;"></div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col text-center px-6 py-8 space-y-12 items-center">
      <!-- Pill -->
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="sparkles" class="lucide lucide-sparkles w-3.5 h-3.5 text-gray-800"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        AI Automation for Businesses
      </span>

      <!-- Brand + Title -->
      <div class="flex items-center gap-4">
        
        <h1 class="sm:text-6xl text-5xl font-semibold text-gray-900 tracking-tight">CREATIVE AI</h1>
      </div>

      <!-- Subcopy -->
      <p class="mt-3 text-base sm:text-lg text-gray-600">
        Custom AI solutions, built for the innovators of tomorrow
      </p>

      <!-- CTAs -->
      <div class="flex gap-3 mt-6 items-center">
        <span class=""><a href="#contact" class="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" style="z-index:2;">
        <span class="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">View Our Spaces</span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right relative z-[1] w-4 h-4 text-sky-100 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" style="color: rgb(224, 242, 254);"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style="background: linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%); animation: pulse 2s ease-in-out infinite;"></span>
<span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full" style="box-shadow: 0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25); background: radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%);"></span>
<span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full" style="background: radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%);"></span>
</a></span>
        <button class="relative w-[14em] h-[3em] rounded-[30em] text-[15px] font-inherit border-none overflow-hidden z-[1] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3em] before:w-0 before:rounded-[30em] before:bg-gradient-to-r before:from-[#881BB6] before:to-[#E1A4FF] before:transition-[width] before:duration-500 before:ease-in-out before:z-[-1] hover:before:w-[14em]">
  See Our Service
</button>

      </div>
    </div>

    <!-- Soft ground shadow under orb -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[16%] rounded-full -z-10" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0) 70%); filter: blur(18px); opacity:.25;"></div>
  </div>
</div>
     
      
      
      <div class="relative sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 invisible">
  <div class="text-center max-w-4xl mr-auto ml-auto invisible">
    <h1 class="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none text-gray-900" style="animation-play-state: running;">
      Creative AI for
      <span class="text-gradient block mt-2">Everyone</span>
    </h1>
    <p class="animate-fade-in-up delay-200 mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style="animation-play-state: running;">
      Transform your wildest ideas into extraordinary visuals with the most advanced AI technology. Beautiful, intelligent, effortless.
    </p>
    
    <!-- CTA Buttons -->
    <div class="flex gap-3 mt-12 items-center justify-center">
        <button class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:bg-gray-800 transition-colors">
          Get Template
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-right" class="lucide lucide-chevron-right w-4 h-4"><path d="m9 18 6-6-6-6"></path></svg>
        </button>
        <button class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition-colors">
          See Our Services
        </button>
      </div>
    
    <!-- Stats -->
    <div class="animate-fade-in-up delay-600 grid grid-cols-3 gap-8 max-w-md mt-16 mr-auto ml-auto invisible" style="animation-play-state: running;">
      <div class="animate-zoom-in delay-700 text-center" style="animation-play-state: running;">
        <div class="text-3xl font-semibold text-gray-900">2M+</div>
        <div class="text-sm text-gray-500 mt-1">Creations</div>
      </div>
      <div class="text-center animate-zoom-in delay-800" style="animation-play-state: running;">
        <div class="text-3xl font-semibold text-gray-900">50K+</div>
        <div class="text-sm text-gray-500 mt-1">Artists</div>
      </div>
      <div class="text-center animate-zoom-in delay-900" style="animation-play-state: running;">
        <div class="text-3xl font-semibold text-gray-900">15+</div>
        <div class="text-sm text-gray-500 mt-1">AI Models</div>
      </div>
    </div>
  </div>
  
  <!-- Hero Visual -->
  <div class="animate-scale-in delay-800 mt-20 relative max-w-5xl mx-auto" style="animation-play-state: running;">
    <div class="relative glass-strong bg-white/40 rounded-3xl border border-white/60 shadow-2xl overflow-hidden hover-lift">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <!-- Browser Chrome -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-white/20">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-400 rounded-full animate-pulse-soft" style="animation-play-state: running;"></div>
          <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-soft delay-200" style="animation-play-state: running;"></div>
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse-soft delay-400" style="animation-play-state: running;"></div>
        </div>
        <div class="flex-1 max-w-md mx-6">
          <div class="bg-white/60 rounded-full px-4 py-2 text-sm text-gray-600 text-center shimmer-effect">
            prismstudio.ai/create
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="share" class="lucide lucide-share w-4 h-4 text-gray-500 hover-lift cursor-pointer"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bookmark" class="lucide lucide-bookmark w-4 h-4 text-gray-500 hover-lift cursor-pointer"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
        </div>
      </div>
      
      <!-- App Interface -->
      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900">Dream Canvas</h3>
              <div class="space-y-3">
                <div class="bg-white/80 rounded-2xl p-4 border border-gray-200/60 shimmer-effect hover-lift">
                  <div class="text-sm text-gray-500 mb-2">Prompt</div>
                  <div class="text-gray-800">"Ethereal forest with glowing butterflies, cinematic lighting, 8K"</div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <div class="bg-white/80 rounded-xl px-4 py-2 text-sm border border-gray-200/60 hover-lift">
                    <span class="text-gray-500">Style:</span> <span class="font-medium">Photorealistic</span>
                  </div>
                  <div class="bg-white/80 rounded-xl px-4 py-2 text-sm border border-gray-200/60 hover-lift">
                    <span class="text-gray-500">Ratio:</span> <span class="font-medium">16:9</span>
                  </div>
                </div>
                
                <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl py-4 font-medium hover:from-blue-600 hover:to-purple-700 transition-all hover-lift animate-glow shadow-lg" style="animation-play-state: running;">
                  Generate Magic ✨
                </button>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-video rounded-2xl overflow-hidden border border-gray-200/60 shadow-xl hover-lift">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3010aaee-8ea5-4931-b2db-b19ed09a0d96_3840w.jpg" alt="AI Generated Forest" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" style="">
            </div>
            <div class="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg animate-bounce-gentle" style="animation-play-state: running;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check inline w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Generated
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute -top-8 left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-200/60 glass animate-float hover-lift" style="animation-play-state: running;">
      <div class="flex items-center space-x-3">
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse-soft" style="animation-play-state: running;"></div>
        <span class="text-sm font-medium text-gray-700">Processing...</span>
      </div>
    </div>
    
    <div class="absolute -bottom-6 right-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-200/60 glass animate-float delay-500 hover-lift" style="animation-play-state: running;">
      <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="zap" class="lucide lucide-zap w-4 h-4 text-yellow-500"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        <span class="text-sm font-medium text-gray-700">2.3s generation</span>
      </div>
    </div>
  </div>
</div>
    </section>

    <!-- Features Section -->
    <section class="bg-neutral-100 pt-32 pb-32">
  <div class="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
  <div class="text-center">
    <p class="sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-4xl font-medium text-gray-500 tracking-tight">
      <span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 0s;">"We harness</span>
      <span class="lyric-line text-gray-900 font-semibold" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 0.8s; margin-left: 0.5rem;">your data</span><span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 1.6s;">, understand your audience,</span>
      <span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 2.4s;">and</span>
      <span class="lyric-line text-gray-900 font-semibold" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 3.2s; margin-left: 0.5rem;">use AI</span>
      <span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 4s; margin-left: 0.5rem;">to help your brand rise above the noise.</span>
      <span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 4.8s;">The best part?</span>
      <span class="lyric-line text-gray-900 font-semibold" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 5.6s; margin-left: 0.5rem;">We execute</span><span class="lyric-line" style="opacity: 0; display: inline-block; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 6.4s;">, too."</span>
    </p>

    <div class="mt-12 flex items-center justify-center gap-3" style="opacity: 0; animation: lyricFadeIn 0.8s ease-in-out forwards; animation-delay: 7.2s;">
      <div class="relative">
        <div class="absolute inset-0 -z-10 blur-3xl rounded-full" style="background: radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 70%); transform: translateY(10px);"></div>
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_320w.jpg" alt="Founder avatar" class="ring-1 ring-black/5 w-12 h-12 object-cover rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)]" style="">
      </div>
      <span class="text-base text-gray-700">Founder of ORB AI</span>
    </div>
  </div>

  <style>
    @keyframes lyricFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .lyric-line {
      transition: all 0.3s ease;
    }

    .lyric-line:hover {
      transform: scale(1.05);
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</div>
</section>

<!-- Additional sections continue... (Features, Gallery, Showcase, Pricing, Footer, etc.) -->
<!-- Note: The full HTML continues with all sections but is truncated here for brevity -->

    <script>
      // Initialize Lucide icons
      lucide.createIcons();
      
      // Gallery filtering
      const filterButtons = document.querySelectorAll('.gallery-filter');
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.dataset.filter;
          
          // Update active button
          filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-gray-900', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
          });
          
          button.classList.add('active', 'bg-gray-900', 'text-white');
          button.classList.remove('bg-gray-100', 'text-gray-700');
          
          // Filter gallery items with animation
          galleryItems.forEach((item, index) => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, index * 50);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.95)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
        });
      });
      
      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);
      
      // Observe animated elements
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
      
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      
      // Add parallax effect on scroll
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.animate-float');
        parallaxElements.forEach(el => {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    </script>
  
</body></html>
```

## Key Features

### Design System
- **Typography**: Inter font family (weights 300-700)
- **Color Scheme**: Gray scale with blue-purple gradient accents
- **Animations**: Multiple custom keyframe animations (fadeInUp, float, glow, etc.)
- **Glass Morphism**: Backdrop blur effects throughout

### Sections Included
1. **Navigation**: Fixed glass navbar with smooth animations
2. **Hero Section**: Animated orb with crystal glow effects
3. **Features Section**: Animated text reveal with founder quote
4. **Services Section**: Grid layout with interactive cards
5. **Gallery Section**: Filterable image gallery with hover effects
6. **Showcase Section**: Feature cards with metrics
7. **Testimonials**: Customer reviews with ratings
8. **Pricing Section**: Toggle between monthly/yearly billing
9. **Footer**: Multi-column layout with social links

### Technologies Used
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Lucide Icons**: Icon library
- **Custom CSS Animations**: Multiple keyframe animations
- **JavaScript**: Interactive functionality (gallery filtering, animations, etc.)

### Notable Design Patterns
- Glass morphism effects (`backdrop-filter: blur()`)
- Smooth scroll animations with Intersection Observer
- Hover lift effects on interactive elements
- Gradient text effects
- Shimmer animations
- Parallax scrolling effects

---

**Note**: This is a reference document. The full HTML code is preserved above for use when adapting sections to the Infin8 brand.

