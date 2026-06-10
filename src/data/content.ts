// ============================================================
//  PORTFOLIO CONTENT — Edit semua konten website di sini
// ============================================================

export const siteConfig = {
  // ---------- IDENTITY ----------
  name: "M. Hasan",
  role: "AI-Augmented SDET",
  tagline: "Transforming QA through AI",
  description:
    "SDET & Automation Expert specializing in AI-augmented testing frameworks. I build resilient, intelligent quality systems that scale.",

  // ---------- CONTACT ----------
  email: "hello@mhasan.dev",
  linkedin: "linkedin.com/in/mhasan",
  github: "github.com/mhasan",
  cvUrl: "https://drive.google.com/your-cv-link-here",

  // ---------- FOOTER ----------
  footerText: "SDET Portfolio. Built with React & Next.js.",
};

// ============================================================
//  NAVIGATION
// ============================================================
export const navLinks = [
  { key: "nav.home",       href: "#home" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.skills",     href: "#skills" },
  { key: "nav.projects",   href: "#projects" },
  { key: "nav.blog",       href: "#blog" },
  { key: "nav.contact",    href: "#contact" },
];

// ============================================================
//  ABOUT — Edit narasi & angka statistik
// ============================================================
export const about = {
  en: {
    bio: "I'm an SDET with 2+ years of experience specializing in AI-augmented testing frameworks. I bridge the gap between traditional QA and modern AI-powered engineering — building resilient, intelligent quality systems that scale across any stack.",
  },
  id: {
    bio: "Saya adalah SDET dengan pengalaman 2+ tahun yang berspesialisasi dalam framework pengujian berbasis AI. Saya menjembatani QA tradisional dengan rekayasa bertenaga AI modern — membangun sistem kualitas yang cerdas, tangguh, dan skalabel di berbagai stack.",
  },
  stats: [
    { value: "2+",  labelKey: "about.stat.experience" },
    { value: "15+", labelKey: "about.stat.projects" },
    { value: "80%", labelKey: "about.stat.coverage" },
    { value: "10x", labelKey: "about.stat.speed" },
  ],
};

// ============================================================
//  HERO TOOLS — Icon tools yang tampil di animasi Hero kanan
//  Ganti label sesuai tool yang kamu kuasai
// ============================================================
export const heroTools = [
  // Row 1
  { label: "Playwright",      color: "#45ba4b" },
  { label: "Selenium",        color: "#43b02a" },
  { label: "Appium",          color: "#662d91" },
  { label: "Cypress",         color: "#69d3a7" },
  // Row 2
  { label: "Python",          color: "#3776ab" },
  { label: "Java",            color: "#f89820" },
  { label: "TypeScript",      color: "#3178c6" },
  { label: "RestAssured",     color: "#ef5350" },
  // Row 3
  { label: "GitHub Actions",  color: "#2088ff" },
  { label: "Docker",          color: "#2496ed" },
  { label: "Jenkins",         color: "#d33833" },
  { label: "AWS",             color: "#ff9900" },
  // Row 4
  { label: "ChatGPT API",     color: "#10a37f" },
  { label: "LangChain",       color: "#1c3c5e" },
  { label: "Postman",         color: "#ff6c37" },
  { label: "Jira",            color: "#0052cc" },
];

// ============================================================
//  CERTIFICATIONS & EDUCATION
// ============================================================
export const certifications = [
  {
    name: "ISTQB Certified Tester — Advanced Level (Test Automation Engineer)",
    issuer: "ISTQB",
    year: "2023",
    icon: "ShieldCheck",
    link: "#",
  },
  {
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    year: "2022",
    icon: "Cloud",
    link: "#",
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2021",
    icon: "BadgeCheck",
    link: "#",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universitas Indonesia",
    period: "2015 - 2019",
    description: "Majored in Software Engineering. Final thesis on automated regression testing using machine learning for defect prediction.",
  },
];

export const educationId = [
  {
    degree: "Sarjana Ilmu Komputer",
    institution: "Universitas Indonesia",
    period: "2015 - 2019",
    description: "Jurusan Rekayasa Perangkat Lunak. Skripsi tentang pengujian regresi otomatis menggunakan machine learning untuk prediksi defect.",
  },
];

export const training = [
  {
    name: "Advanced Test Automation with Selenium",
    institution: "Test Automation University",
    period: "2023",
    description: "Comprehensive training on Selenium WebDriver, Page Object Model, and CI/CD integration.",
  },
  {
    name: "API Testing Masterclass",
    institution: "Udemy",
    period: "2022",
    description: "In-depth REST API testing with Postman, RestAssured, and Newman CLI automation.",
  },
];

export const trainingId = [
  {
    name: "Advanced Test Automation dengan Selenium",
    institution: "Test Automation University",
    period: "2023",
    description: "Pelatihan komprehensif Selenium WebDriver, Page Object Model, dan integrasi CI/CD.",
  },
  {
    name: "API Testing Masterclass",
    institution: "Udemy",
    period: "2022",
    description: "Pengujian REST API mendalam dengan Postman, RestAssured, dan otomasi Newman CLI.",
  },
];

// ============================================================
//  EXPERIENCE — Tambah / hapus / edit pengalaman kerja
// ============================================================
export const experiences = {
  en: [
    {
      company: "TechGiant Corp",
      role: "Lead SDET (AI-Augmented)",
      period: "2023 - Present",
      description:
        "Leading the transformation of quality engineering by integrating LLMs into the CI/CD pipeline, reducing manual triage time by 40%.",
    },
    {
      company: "FinTech Solutions",
      role: "Senior QA Automation Engineer",
      period: "2021 - 2023",
      description:
        "Designed and implemented a scalable cross-platform mobile automation framework using Appium and TestNG for core banking apps.",
    },
    {
      company: "StartUp Hub",
      role: "QA Engineer",
      period: "2019 - 2021",
      description:
        "Established the first automated testing suite for a rapidly growing e-commerce platform, achieving 80% regression coverage.",
    },
    {
      company: "StartUp Hub",
      role: "QA Engineer",
      period: "2019 - 2021",
      description:
        "Established the first automated testing suite for a rapidly growing e-commerce platform, achieving 80% regression coverage.",
    },
  ],
  id: [
    {
      company: "PT. Global Loyalty Indonesia (Alfagift)",
      role: "QA Engineer",
      period: "Juni 2026 - Sekarang",
      description:
        "Melakukan pengujian manual untuk aplikasi Alfagift groceries online dan APO Aplikasi Pemesanan Online",
    },
    {
      company: "PT. Koltiva",
      role: "SQA Automation Engineer",
      period: "Maret 2024 - Mei 2025",
      description:
        "Membuat automation test dengan selenium untuk aplikasi mobile berbasi android dan ios (flutter)",
    },
    {
      company: "PT. Koltiva",
      role: "QA Automation (Intern)",
      period: "Agustus 2023 - Februari 2024",
      description:
        "Membuat automation test dengan selenium untuk aplikasi mobile Koltitrace Nestle & Koltitrace Farmretail",
    },
    {
      company: "PT. Koltiva",
      role: "QA Automation (Intern)",
      period: "Agustus 2023 - Februari 2024",
      description:
        "Membuat automation test dengan selenium untuk aplikasi mobile Koltitrace Nestle & Koltitrace Farmretail",
    },
  ],
};

// ============================================================
//  SKILLS — Tambah / hapus / edit skill per kategori
// ============================================================
export const skillGroups = [
  {
    title: "Automation",
    icon: "Search",
    skills: ["Selenium", "Appium", "Playwright", "Cypress", "RestAssured"],
  },
  {
    title: "AI & Tools",
    icon: "Cpu",
    skills: ["MCP", "Amazon Q Dev", "Cursor", "GitHub Copilot", "Testim.io"],
  },
  {
    title: "Backend & DB",
    icon: "Database",
    skills: ["Node.js", "Java", "Python", "MySQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Layout",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Layout",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"],
  },
];

// ============================================================
//  PROJECTS — Tambah / hapus / edit proyek
// ============================================================
export const projects = {
  en: [
    {
      title: "AI-Powered Test Case Generator",
      description:
        "A tool that automatically generates Gherkin scenarios from UI screenshots using GPT-4 Vision.",
      tags: ["OpenAI", "Node.js", "React"],
      link: "#",
      github: "#",
    },
    {
      title: "Self-Healing Automation Framework",
      description:
        "An Appium-based framework that uses computer vision to detect UI changes and auto-update locators.",
      tags: ["Appium", "Python", "OpenCV"],
      link: "#",
      github: "#",
    },
    {
      title: "Distributed Load Tester",
      description:
        "Custom load testing engine capable of simulating 10k+ concurrent users using Kubernetes nodes.",
      tags: ["Go", "Kubernetes", "Prometheus"],
      link: "#",
      github: "#",
    },
    {
      title: "Distributed Load Tester",
      description:
        "Custom load testing engine capable of simulating 10k+ concurrent users using Kubernetes nodes.",
      tags: ["Go", "Kubernetes", "Prometheus"],
      link: "#",
      github: "#",
    },
  ],
  id: [
    {
      title: "Generator Test Case Berbasis AI",
      description:
        "Alat yang secara otomatis menghasilkan skenario Gherkin dari screenshot UI menggunakan GPT-4 Vision.",
      tags: ["OpenAI", "Node.js", "React"],
      link: "#",
      github: "#",
    },
    {
      title: "Framework Otomasi Self-Healing",
      description:
        "Framework berbasis Appium yang menggunakan computer vision untuk mendeteksi perubahan UI dan memperbarui locator secara otomatis.",
      tags: ["Appium", "Python", "OpenCV"],
      link: "#",
      github: "#",
    },
    {
      title: "Load Tester Terdistribusi",
      description:
        "Mesin load testing kustom yang mampu mensimulasikan 10k+ pengguna bersamaan menggunakan node Kubernetes.",
      tags: ["Go", "Kubernetes", "Prometheus"],
      link: "#",
      github: "#",
    },
    {
      title: "Load Tester Terdistribusi",
      description:
        "Mesin load testing kustom yang mampu mensimulasikan 10k+ pengguna bersamaan menggunakan node Kubernetes.",
      tags: ["Go", "Kubernetes", "Prometheus"],
      link: "#",
      github: "#",
    },
  ],
};

// ============================================================
//  BLOG POSTS — Tambah / hapus / edit artikel blog
// ============================================================
export const blogPosts = {
  en: [
    {
      title: "Why AI won't replace QAs, but will augment them",
      excerpt:
        "Exploring the shift from manual testing to AI-assisted quality engineering and what it means for your career.",
      date: "May 1, 2024",
      readTime: "5 min read",
      link: "#",
    },
    {
      title: "Building a Self-Healing Automation Framework",
      excerpt:
        "A deep dive into using computer vision and LLMs to maintain stable locators in dynamic web environments.",
      date: "April 15, 2024",
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "The ROI of Parallel Testing on Mobile",
      excerpt:
        "How we reduced execution time from 4 hours to 15 minutes using distributed Appium nodes.",
      date: "March 28, 2024",
      readTime: "6 min read",
      link: "#",
    },
  ],
  id: [
    {
      title: "Mengapa AI tidak akan menggantikan QA, tapi akan memperkuat mereka",
      excerpt:
        "Menjelajahi pergeseran dari pengujian manual ke quality engineering berbantuan AI dan artinya bagi karier Anda.",
      date: "1 Mei 2024",
      readTime: "5 menit baca",
      link: "#",
    },
    {
      title: "Membangun Framework Otomasi Self-Healing",
      excerpt:
        "Pendalaman penggunaan computer vision dan LLM untuk mempertahankan locator yang stabil di lingkungan web dinamis.",
      date: "15 April 2024",
      readTime: "8 menit baca",
      link: "#",
    },
    {
      title: "ROI dari Parallel Testing di Mobile",
      excerpt:
        "Bagaimana kami mengurangi waktu eksekusi dari 4 jam menjadi 15 menit menggunakan node Appium terdistribusi.",
      date: "28 Maret 2024",
      readTime: "6 menit baca",
      link: "#",
    },
  ],
};

// ============================================================
//  TRANSLATIONS — Edit teks UI / label di sini
// ============================================================
export const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.cta": "View Projects",
    "hero.cv": "View CV",
    "hero.badge": "Transforming QA through AI",
    "about.title": "About Me",
    "about.stat.experience": "Years Experience",
    "about.stat.projects": "Projects Delivered",
    "about.stat.coverage": "Avg Test Coverage",
    "about.stat.speed": "Faster Execution",
    "about.availability": "Availability",
    "certs.title": "Certifications & Education",
    "certs.certifications": "Certifications",
    "certs.education": "Education",
    "certs.training": "Training",
    "skills.title": "Technical Mastery",
    "skills.subtitle":
      "A comprehensive toolkit designed for the modern SDET, blending traditional automation with cutting-edge AI enhancements.",
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "Showcasing my journey in building intelligent automation solutions and high-performance testing infrastructure.",
    "projects.viewAll": "View All Projects",
    "projects.demo": "Live Demo",
    "projects.source": "Source",
    "blog.title": "Insights",
    "blog.subtitle":
      "Sharing my thoughts on the intersection of Artificial Intelligence, Quality Engineering, and Software Development.",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Have a project in mind or just want to chat about AI and Automation? Feel free to reach out. I'm always open to new opportunities and collaborations.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.namePlaceholder": "John Doe",
    "contact.emailPlaceholder": "john@example.com",
    "contact.messagePlaceholder": "How can I help you?",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.blog": "Blog",
    "nav.contact": "Kontak",
    "hero.greeting": "Halo, saya",
    "hero.cta": "Lihat Proyek",
    "hero.cv": "Lihat CV",
    "hero.badge": "Transformasi QA melalui AI",
    "about.title": "Tentang Saya",
    "about.stat.experience": "Tahun Pengalaman",
    "about.stat.projects": "Proyek Selesai",
    "about.stat.coverage": "Rata-rata Test Coverage",
    "about.stat.speed": "Eksekusi Lebih Cepat",
    "about.availability": "Ketersediaan",
    "certs.title": "Sertifikasi & Pendidikan",
    "certs.certifications": "Sertifikasi",
    "certs.education": "Pendidikan",
    "certs.training": "Pelatihan",
    "skills.title": "Keahlian Teknis",
    "skills.subtitle":
      "Toolkit komprehensif untuk SDET modern, memadukan otomasi tradisional dengan peningkatan AI mutakhir.",
    "projects.title": "Proyek Unggulan",
    "projects.subtitle":
      "Menampilkan perjalanan saya membangun solusi otomasi cerdas dan infrastruktur pengujian berperforma tinggi.",
    "projects.viewAll": "Lihat Semua Proyek",
    "projects.demo": "Demo Langsung",
    "projects.source": "Kode Sumber",
    "blog.title": "Wawasan",
    "blog.subtitle":
      "Berbagi pemikiran saya tentang perpaduan Kecerdasan Buatan, Quality Engineering, dan Pengembangan Perangkat Lunak.",
    "contact.title": "Hubungi Saya",
    "contact.subtitle":
      "Punya proyek di benak atau sekadar ingin ngobrol soal AI dan Otomasi? Silakan hubungi saya. Saya selalu terbuka untuk peluang dan kolaborasi baru.",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.send": "Kirim Pesan",
    "contact.namePlaceholder": "Budi Santoso",
    "contact.emailPlaceholder": "budi@contoh.com",
    "contact.messagePlaceholder": "Bagaimana saya bisa membantu Anda?",
  },
};
