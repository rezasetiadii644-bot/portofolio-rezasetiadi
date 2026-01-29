import React, { useState, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Download, ExternalLink, 
  Code2, Terminal, Camera, Menu, X, 
  ChevronLeft, ChevronRight, Server, Database, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

import fotoProfil from './assets/pasfoto.png';
import inventaris from './assets/inventaris.png';
import laundryberkah from './assets/laundry-berkah.png';
import lapak from './assets/lapak.png';
import kepegawaian from './assets/HRSystem.png';
import spending from './assets/spending.png';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';

// --- DATA ---
const DATA = {
  name: "Muhammad Reza Setiadi",
  title: "Fullstack Developer",
  about: "Saya adalah pengembang web yang berfokus pada performa, estetika minimalis, dan pengalaman pengguna. Menciptakan solusi digital yang skalabel dengan kode yang bersih adalah prioritas utama saya.",
  social: {
    email: "mailto:rezasetiadii644@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  techStack: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  projects: [
    {
      id: 1,
      title: "Aplikasi Akumulasi Penyusutan Barang Inventaris",
      desc: "Aplikasi berbasis web untuk tracking barang masuk dan keluar serta kalkulasi nilai penyusutan aset secara otomatis. Dilengkapi fitur pelaporan data inventaris yang terstruktur.",
      tech: ["PHP", "Bootstrap", "HTML", "JavaScript", "CSS", "MySQL"],
      image: inventaris, 
      link: "#"
    },
    {
      id: 2,
      title: "Laundry Berkah",
      desc: "Aplikasi pengkasiran laundry yang mempercepat proses transaksi pelanggan. Dilengkapi fitur cetak struk, manajemen database pelanggan, dan monitoring omzet harian secara akurat.",
      tech: ["Golang", "React js", "MySQL", "Tailwind CSS"],
      image: laundryberkah,
      link: "#"
    },
    {
      id: 3,
      title: "LAPAK (Lapor Pak)",
      desc: "Platform digital yang memfasilitasi masyarakat untuk menyampaikan aspirasi dan pengaduan secara transparan. Menjembatani komunikasi antara warga dan instansi terkait untuk penyelesaian masalah yang lebih cepat.",
      tech: ["PHP","Laravel", "TypeScript", "MySQL", "Tailwind CSS"],
      image: lapak,
      link: "#"
    },
    {
      id: 4,
      title: "HR System",
      desc: "Platform HRIS (Human Resource Information System) terintegrasi untuk mempermudah administrasi perusahaan. Mencakup manajemen data karyawan, pelacakan absensi real-time, persetujuan cuti, hingga perhitungan payroll (penggajian) otomatis.",
      tech: ["Golang", "React js", "MySQL", "Tailwind CSS"],
      image: kepegawaian,
      link: "#"
    },
    {
      id: 5,
      title: "Aplikasi Pengelolaan Pengeluaran Pribadi",
      desc: "Platform manajemen pengeluaran dan aktivitas harian. Dilengkapi fitur expense tracking, target tabungan, pencatatan tugas, serta notifikasi jadwal sholat otomatis.",
      tech: ["PHP", "Laravel", "React js", "MySQL", "Tailwind CSS"],
      image: spending,
      link: "#"
    }
  ],
  photos: [fotoProfil, foto1, foto2, foto3, foto4]
};

// --- ANIMATION CONFIG ---
const smoothTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
};

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ ...smoothTransition, delay: delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- MODIFIED HORIZONTAL SCROLL ---
const HorizontalScroll = ({ children, className = "" }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; 
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="relative group">
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-2 bg-white border border-gray-200 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
      >
        <ChevronLeft size={20} />
      </button>

      <div 
        ref={scrollRef}
        // PERUBAHAN DI SINI:
        // 1. overflow-y-hidden: Memastikan tidak ada scroll vertikal di dalam kotak ini.
        // 2. py-4: Menambah padding atas bawah agar bayangan/hover tidak terpotong.
        className={`flex overflow-x-auto overflow-y-hidden gap-6 py-4 px-1 pb-12 snap-x snap-mandatory no-scrollbar ${className}`}
      >
        {children}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-2 bg-white border border-gray-200 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden ${className}`}>
    {title && (
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="h-px bg-gray-200 flex-1 mt-2"></div>
        </div>
      </FadeIn>
    )}
    {children}
  </section>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Activity", href: "#gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter">EJATECH.</a>
        
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-gray-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        
        <FadeIn delay={0.1}>
            <span className="text-gray-500 font-medium mb-4 tracking-wider text-sm uppercase block mt-3">Portofolio</span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Hello, I'm {DATA.name}.
            </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            {DATA.title}
            </p>
        </FadeIn>

        <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
            {DATA.about}
            </p>
        </FadeIn>
        
        <FadeIn delay={0.5}>
            <div className="flex flex-wrap gap-4">
            <a 
                href="/CV-rezasetiadi.pdf" 
                download 
                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-neutral-800 transition-transform active:scale-95"
            >
                <Download size={18} />
                Unduh CV
            </a>
            <div className="flex items-center gap-4 px-4">
                <a href={DATA.social.github} target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors"><Github size={24} /></a>
                <a href={DATA.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors"><Linkedin size={24} /></a>
                <a href={DATA.social.email} className="hover:text-gray-600 transition-colors"><Mail size={24} /></a>
            </div>
            </div>
        </FadeIn>
      </div>
      
      <div className="order-1 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
        <FadeIn delay={0.3}>
            <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gray-100 rounded-full scale-105 translate-x-2 translate-y-2 -z-10"></div>
            <img 
                src={DATA.photos[0]} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl transition-all duration-500" 
            />
            </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <Section id="tech" title="Tech Stack">
    
    <FadeIn>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
        Perangkat dan teknologi yang saya gunakan sehari-hari. 
        Kombinasi antara fondasi yang kokoh dan framework modern.
        </p>
    </FadeIn>

    <HorizontalScroll>
      {DATA.techStack.map((tech, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: index * 0.1 }}
          className="flex-shrink-0 w-40 h-40 bg-white border border-gray-100 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-black hover:shadow-lg transition-all snap-start group"
        >
          <div className="w-16 h-16 flex items-center justify-center p-2 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="font-semibold text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </HorizontalScroll>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Featured Projects" className="bg-gray-50">
    
    <FadeIn>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
        Kumpulan aplikasi yang saya bangun untuk memecahkan masalah nyata. 
        Klik gambar atau link untuk melihat detailnya.
        </p>
    </FadeIn>

    <HorizontalScroll>
      {DATA.projects.map((project, index) => (
        <motion.div 
          key={project.id} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: index * 0.15 }}
          className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all snap-start overflow-hidden"
        >
          <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-600 border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
              Lihat Project <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </HorizontalScroll>
  </Section>
);

const Gallery = () => (
  <Section id="gallery" title="Life Behind Code"> 
    
    <FadeIn>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
        Momen di balik layar saat membangun solusi digital. Dari eksplorasi teknologi baru hingga berbagi ilmu dengan komunitas.
        </p>
    </FadeIn>

    <HorizontalScroll>
      {DATA.photos.slice(1).map((photo, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: index * 0.15 }}
          className="flex-shrink-0 w-72 md:w-96 aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative group snap-start"
        >
          <img 
            src={photo} 
            alt={`Activity ${index}`} 
            className="w-full h-full object-cover transition-all duration-700" 
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-sm font-medium flex items-center gap-2">
              <Camera size={14} /> Activity Snapshot
            </span>
          </div>
        </motion.div>
      ))}
    </HorizontalScroll>
  </Section>
);

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Tertarik bekerja sama?
            </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, 
            atau peluang menjadi bagian dari visi Anda.
            </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
            <a 
            href="mailto:rezasetiadii644@gmail.com?subject=Halo Reza, Saya tertarik untuk kerja sama"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-all hover:scale-105 shadow-xl"
            >
            <Mail size={20} />
            Hubungi Saya
            </a>
        </FadeIn>

        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-gray-400 text-sm">
            © {currentYear} {DATA.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href={DATA.social?.github || "#"} className="text-gray-400 hover:text-black transition-colors"><Github size={20} /></a>
            <a href={DATA.social?.linkedin || "#"} className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:rezasetiadii644@gmail.com" className="text-gray-400 hover:text-black transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Gallery />

      <Contact />
    </div>
  );
}

export default App;