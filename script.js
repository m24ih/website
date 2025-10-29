// Dark mode functionality
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const html = document.documentElement;

// Translations
const translations = {
    tr: {
        logo: 'Portfolyom',
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            projects: 'Projeler',
            skills: 'Yetenekler',
            contact: 'İletişim',
            theme: 'Tema'
        },
        hero: {
            greeting: 'Merhaba, Ben Melih AK',
            subtitle: 'Python | ML & AI | Java | Linux',
            cta: 'İletişime Geç'
        },
        about: {
            title: 'Hakkımda',
            p1: 'Python programlama, makine öğrenmesi ve Linux sistemleri konusunda tutkulu bir geliştirici ve sistem yöneticisiyim. Hem sunucu hem de masaüstü ortamlarında Linux\'un gücünden yararlanarak, veri odaklı çözümler ve otomasyon araçları geliştiriyorum.',
            p2: 'Machine learning modelleri oluşturmaktan, Linux sunucularını optimize etmeye ve Python ile güçlü uygulamalar geliştirmeye kadar geniş bir yelpazede deneyime sahibim. Açık kaynak teknolojileri ve veri bilimi alanında sürekli öğrenmeye ve yenilikçi projeler üretmeye devam ediyorum.'
        },
        projects: {
            title: 'Projeler',
            blog: {
                title: 'Kişisel Blog',
                desc: 'Teknoloji, yazılım geliştirme ve öğrenme deneyimlerimi paylaştığım kişisel blog platformu.'
            },
            cpu: {
                title: 'BİTES Staj Projesi: CPU Kullanım Analizi',
                desc: 'CPU kullanım verilerinin analizi, tahmini ve anomali tespiti için makine öğrenmesi uygulaması.'
            },
            cinema: {
                title: 'Cinema Database Automation System',
                desc: 'Java ile geliştirilmiş veritabanı destekli sinema otomasyonu ve yönetim sistemi.'
            },
            book: {
                title: 'Java Book SpeedReader Desktop App',
                desc: 'Java Swing ile geliştirilmiş hızlı okuma tekniklerini destekleyen masaüstü uygulaması.'
            },
            aygaz: {
                title: 'Aygaz Image Processing Bootcamp',
                desc: 'Computer Vision teknikleri ve görüntü işleme algoritmalarının uygulandığı bootcamp projesi.'
            },
            neo: {
                title: 'Nearest Earth Objects ML',
                desc: 'Dünya\'ya yakın nesnelerin sınıflandırılması için supervised ve unsupervised ML teknikleri.'
            }
        },
        skills: {
            title: 'Yetenekler'
        },
        contact: {
            title: 'İletişime Geç',
            desc: 'Python projeleri, machine learning uygulamaları veya Linux sistem yönetimi konusunda işbirliği yapmak isterseniz benimle iletişime geçebilirsiniz.'
        },
        footer: {
            copyright: '© 2025 Melih AK',
            desc: 'Portfolyo gereksinimini karşılamak için geliştirilen bir vibe coding projesidir.'
        }
    },
    en: {
        logo: 'My Portfolio',
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            theme: 'Theme'
        },
        hero: {
            greeting: 'Hello, I\'m Melih AK',
            subtitle: 'Python | ML & AI | Java | Linux',
            cta: 'Get In Touch'
        },
        about: {
            title: 'About Me',
            p1: 'I am a passionate developer and system administrator specializing in Python programming, machine learning, and Linux systems. I develop data-driven solutions and automation tools by leveraging the power of Linux in both server and desktop environments.',
            p2: 'I have extensive experience ranging from building machine learning models to optimizing Linux servers and developing powerful applications with Python. I continue to learn and create innovative projects in open source technologies and data science.'
        },
        projects: {
            title: 'Projects',
            blog: {
                title: 'Personal Blog',
                desc: 'A personal blog platform where I share my experiences in technology, software development, and learning.'
            },
            cpu: {
                title: 'BİTES Internship Project: CPU Usage Analysis',
                desc: 'Machine learning application for CPU usage data analysis, prediction, and anomaly detection.'
            },
            cinema: {
                title: 'Cinema Database Automation System',
                desc: 'Database-driven cinema automation and management system developed with Java.'
            },
            book: {
                title: 'Java Book SpeedReader Desktop App',
                desc: 'Desktop application supporting speed reading techniques developed with Java Swing.'
            },
            aygaz: {
                title: 'Aygaz Image Processing Bootcamp',
                desc: 'Bootcamp project applying Computer Vision techniques and image processing algorithms.'
            },
            neo: {
                title: 'Nearest Earth Objects ML',
                desc: 'Supervised and unsupervised ML techniques for classifying near-Earth objects.'
            }
        },
        skills: {
            title: 'Skills'
        },
        contact: {
            title: 'Get In Touch',
            desc: 'Feel free to contact me if you want to collaborate on Python projects, machine learning applications, or Linux system administration.'
        },
        footer: {
            copyright: '© 2025 Melih AK',
            desc: 'A vibe coding project developed to meet portfolio requirements.'
        }
    }
};

// Language functionality
const getLanguagePreference = () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        return savedLang;
    }
    return 'tr'; // Default to Turkish
};

const setLanguage = (lang) => {
    html.setAttribute('lang', lang);
    localStorage.setItem('language', lang);

    const langText = document.querySelector('.lang-text');
    langText.textContent = lang === 'tr' ? 'EN' : 'TR';

    updateContent(lang);
};

const updateContent = (lang) => {
    const t = translations[lang];

    // Update logo
    document.querySelector('.logo').textContent = t.logo;

    // Update navigation
    document.querySelectorAll('#nav-menu a')[0].textContent = t.nav.home;
    document.querySelectorAll('#nav-menu a')[1].textContent = t.nav.about;
    document.querySelectorAll('#nav-menu a')[2].textContent = t.nav.projects;
    document.querySelectorAll('#nav-menu a')[3].textContent = t.nav.skills;
    document.querySelectorAll('#nav-menu a')[4].textContent = t.nav.contact;

    // Update theme text
    document.querySelector('.theme-text').textContent = t.nav.theme;

    // Update hero
    document.querySelector('.hero h1').textContent = t.hero.greeting;
    document.querySelector('.hero p').textContent = t.hero.subtitle;
    document.querySelector('.hero .btn').textContent = t.hero.cta;

    // Update about
    document.querySelector('#about h2').textContent = t.about.title;
    const aboutPs = document.querySelectorAll('.about-content p');
    aboutPs[0].textContent = t.about.p1;
    aboutPs[1].textContent = t.about.p2;

    // Update projects
    document.querySelector('#projects h2').textContent = t.projects.title;
    const projectTitles = document.querySelectorAll('.project-content h3');
    const projectDescs = document.querySelectorAll('.project-content p');
    projectTitles[0].textContent = t.projects.blog.title;
    projectDescs[0].textContent = t.projects.blog.desc;
    projectTitles[1].textContent = t.projects.cpu.title;
    projectDescs[1].textContent = t.projects.cpu.desc;
    projectTitles[2].textContent = t.projects.cinema.title;
    projectDescs[2].textContent = t.projects.cinema.desc;
    projectTitles[3].textContent = t.projects.book.title;
    projectDescs[3].textContent = t.projects.book.desc;
    projectTitles[4].textContent = t.projects.aygaz.title;
    projectDescs[4].textContent = t.projects.aygaz.desc;
    projectTitles[5].textContent = t.projects.neo.title;
    projectDescs[5].textContent = t.projects.neo.desc;

    // Update skills
    document.querySelector('#skills h2').textContent = t.skills.title;

    // Update contact
    document.querySelector('#contact h2').textContent = t.contact.title;
    document.querySelector('.contact-content p').textContent = t.contact.desc;

    // Update footer
    const footerPs = document.querySelectorAll('footer p');
    footerPs[0].textContent = t.footer.copyright;
    footerPs[1].textContent = t.footer.desc;
};

// Initialize language
setLanguage(getLanguagePreference());

// Language toggle button
langToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
});

// Check for saved theme preference or default to system preference
const getThemePreference = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme
const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('.theme-icon');
    const text = document.querySelector('.theme-text');

    const currentLang = html.getAttribute('lang') || 'tr';
    const t = translations[currentLang];

    if (theme === 'dark') {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
    text.textContent = t.nav.theme;
};

// Initialize theme
setTheme(getThemePreference());

// Theme toggle button
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
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
