// ================================================================
        // ✏️  EDIT YOUR PERSONAL INFO HERE — no other code changes needed
        // ================================================================
        const NAME = "RIJEN MAHARJAN";
        const TAGLINE = "BACKEND DEVELOPER";
        const BIO_SHORT = "Building high-fidelity digital interfaces and technical ecosystems with a focus on editorial aesthetics and functional precision.";
        const BIO_LONG = "Based at the intersection of logic and aesthetics, I approach software engineering as a craft. With over 6 years of experience across the full stack, I specialize in creating performant, accessible, and visually striking web architectures. My philosophy is rooted in the belief that digital tools should feel as deliberate and tactile as physical objects.";
        const EMAIL = "rijenmaharjan94@gmail.com";
        const CV_FILE = "resume-rijen-maharjan.pdf";
        const GITHUB = "https://github.com/RijenMaharjan";
        const LINKEDIN = "https://www.linkedin.com/in/rijen-maharjan-936899275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        const SKILLS = ["TypeScript", "Node.js", "Next.js", "Express.js", "MYSQL", "PostgreSQL", "Figma", "Docker", "Playwright", "Laravel", "PHP"];
        
        const PROJECTS = [
            {
                title: "Personal-Productivity-App",
                description: "A full-stack Personal Productivity App featuring Tasks, Habits, and Notes. It uses a React + Vite frontend styled with Tailwind CSS, and a Node.js + Express backend powered by SQLite.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
                tags: ["TypeScript", "JavaScript", "Node.js"],
                liveUrl: "#",
                githubUrl: "https://github.com/RijenMaharjan/Personal-Productivity-App"
            },
            {
                title: "Monolith UI",
                description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
                tags: ["React", "Tailwind"],
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                title: "Signal Stream",
                description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
                tags: ["Rust", "WebRTC"],
                liveUrl: "#",
                githubUrl: "#"
            }
        ];

        const EXPERIENCE = [
            { 
                role: "Php laravel Developer Intern", 
                company: "PhyeGan", 
                dates: "Oct 2024 – May 2025", 
               points: ["Built the core ecommerce website for a corset brand", "Reduced API latency by 45% through strategic caching", "Developed custom internal CMS"] 
            },
            { 
                role: "Backend Developer", 
                company: "Geek Tech Solutions", 
                dates: "Jun 2025 – Sept 2025", 
                points: ["Built the website for a restaurant", "Research on POS systems", "Developed custom POS system"] 
            },
            { 
                role: "Jr Backend Developer", 
                company: "Geek Tech Solutions", 
                dates: "Sept 2025 – Jan 2026", 
                points: ["Research on POS systems", "Developed custom POS system", "Maintained and optimized existing backend services", "Collaborated with frontend developers to integrate APIs and ensure seamless user experience", "Implemented security best practices to safeguard user data and prevent vulnerabilities", "Participated in code reviews and contributed to improving development processes"] 
            }
        ];

        const EDUCATION = [
            { degree: "Bachelor in Information Management", school: "National College of Computer Studies", dates: "2020 – 2025" }
        ];

        // ================================================================
        // ⚙️ RENDER LOGIC
        // ================================================================

        document.addEventListener('DOMContentLoaded', () => {
            // Static Data Binding
            document.getElementById('hero-name-label').textContent = NAME;
            document.getElementById('hero-tagline-label').textContent = TAGLINE;
            document.getElementById('hero-bio-label').textContent = BIO_SHORT;
            document.getElementById('about-bio-label').textContent = BIO_LONG;
            document.getElementById('copyright-label').textContent = `© ${new Date().getFullYear()} ${NAME} // ALL RIGHTS RESERVED.`;
            document.getElementById('footer-email-link').textContent = EMAIL;
            document.getElementById('footer-email-link').href = `mailto:${EMAIL}`;
            
            const cvBtns = ['download-cv-btn', 'resume-download-cta'];
            cvBtns.forEach(id => {
                const btn = document.getElementById(id);
                btn.href = CV_FILE;
                btn.setAttribute('download', CV_FILE);
            });

            // Skills Rendering
            const skillsContainer = document.getElementById('skills-container');
            SKILLS.forEach(skill => {
                const span = document.createElement('span');
                span.className = "px-4 py-2 border border-primary-container text-primary-container text-[10px] uppercase tracking-widest font-mono";
                span.textContent = skill;
                skillsContainer.appendChild(span);
            });

            // Projects Rendering
            const projectsGrid = document.getElementById('projects-grid');
            PROJECTS.forEach(p => {
                const card = document.createElement('div');
                card.className = "group relative flex flex-col h-full bg-transparent p-0 transition-all duration-500 overflow-hidden";
                card.innerHTML = `
                    <div class="overflow-hidden mb-8 aspect-[4/3] border border-outline/10 relative">
                        <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img src="${p.image}" class="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 filter" alt="${p.title}">
                    </div>
                    <div class="flex flex-col flex-grow">
                        <div class="flex flex-wrap gap-2.5 mb-5">
                            ${p.tags.map(t => `<span class="px-3 py-1 border border-outline/20 text-[9px] uppercase tracking-[0.2em] text-outline font-mono rounded-full group-hover:border-primary/30 group-hover:text-primary transition-colors">${t}</span>`).join('')}
                        </div>
                        <h3 class="font-serif text-4xl mb-4 text-on-surface group-hover:text-primary transition-colors duration-500">${p.title}</h3>
                        <p class="text-outline text-sm leading-relaxed mb-8 font-mono flex-grow">${p.description}</p>
                        <div class="flex gap-8 mt-auto pt-6 border-t border-outline/10">
                            <a href="${p.liveUrl}" target="_blank" class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-on-surface hover:text-primary transition-all group/link">
                                Live Demo <span class="material-symbols-outlined text-[13px] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform">arrow_outward</span>
                            </a>
                            <a href="${p.githubUrl}" target="_blank" class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-outline hover:text-on-surface transition-all group/source">
                                Source <span class="material-symbols-outlined text-[13px] group-hover/source:text-primary transition-colors">code</span>
                            </a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(card);
            });

            // Timeline Rendering (Experience)
            const expContainer = document.getElementById('experience-container');
            EXPERIENCE.forEach(e => {
                const div = document.createElement('div');
                div.className = "relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-1 before:w-[9px] before:h-[9px] before:bg-primary-container before:rounded-full";
                div.innerHTML = `
                    <p class="font-mono text-xs text-outline mb-2 uppercase tracking-widest">${e.dates}</p>
                    <h4 class="font-serif text-2xl text-on-surface mb-1">${e.role}</h4>
                    <p class="font-mono text-sm text-primary mb-6">${e.company}</p>
                    <ul class="space-y-3">
                        ${e.points.map(p => `<li class="text-xs text-outline-variant font-mono leading-relaxed">• ${p}</li>`).join('')}
                    </ul>
                `;
                expContainer.appendChild(div);
            });

            // Timeline Rendering (Education)
            const eduContainer = document.getElementById('education-container');
            EDUCATION.forEach(e => {
                const div = document.createElement('div');
                div.className = "relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-1 before:w-[9px] before:h-[9px] before:bg-outline-variant before:rounded-full";
                div.innerHTML = `
                    <p class="font-mono text-xs text-outline mb-2 uppercase tracking-widest">${e.dates}</p>
                    <h4 class="font-serif text-2xl text-on-surface mb-1">${e.degree}</h4>
                    <p class="font-mono text-sm text-primary">${e.school}</p>
                `;
                eduContainer.appendChild(div);
            });

            // Socials
            const socContainer = document.getElementById('socials-container');
            const footerLinks = document.getElementById('footer-links');
            const socialMap = [
                { name: 'GITHUB', url: GITHUB },
                { name: 'LINKEDIN', url: LINKEDIN },
                { name: 'TWITTER', url: TWITTER }
            ];

            socialMap.forEach(s => {
                const a = document.createElement('a');
                a.href = s.url;
                a.target = "_blank";
                a.className = "text-xs font-mono tracking-[0.3em] uppercase text-outline hover:text-primary transition-colors";
                a.textContent = s.name;
                socContainer.appendChild(a);

                const fa = document.createElement('a');
                fa.href = s.url;
                fa.target = "_blank";
                fa.className = "hover:text-on-surface transition-colors";
                fa.textContent = s.name;
                footerLinks.appendChild(fa);
            });

            // Intersection Observer for Reveal
            const observerOptions = { threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Update nav active state
                        const id = entry.target.getAttribute('id');
                        if (id) {
                            document.querySelectorAll('.nav-link').forEach(link => {
                                link.classList.toggle('nav-active', link.dataset.section === id);
                            });
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });

            // Form Handling
            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                window.location.href = `mailto:${EMAIL}?subject=Inquiry from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply to: ${email}`;
            });
        });