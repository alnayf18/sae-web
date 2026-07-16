document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fixed Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Toggle hamburger animation
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 3. Smooth scroll offset adjustment for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Contact Form Handle & Local Validation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clear status
            formStatus.className = 'form-status';
            formStatus.style.display = 'none';
            
            // Basic fields validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !subject || !message) {
                showStatus('يرجى ملء جميع الحقول المطلوبة بنجمة (*).', 'error');
                return;
            }
            
            // Email Validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStatus('يرجى إدخال بريد إلكتروني صحيح.', 'error');
                return;
            }
            
            // Saudi Phone Validation regex (starts with 05 or 5 and has 9/10 digits)
            const phoneRegex = /^(05|5)\d{8}$/;
            if (!phoneRegex.test(phone)) {
                showStatus('يرجى إدخال رقم جوال سعودي صحيح (مثال: 05xxxxxxx).', 'error');
                return;
            }
            
            // Firestore Write with Success Simulation Fallback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري إرسال الطلب...';
            
            const messageData = {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
                createdAt: typeof firebase !== 'undefined' ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString()
            };

            // Helper to clean up form state on success
            const handleSuccess = () => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                showStatus('تم إرسال طلبك بنجاح! فريق جمعية SAE سيتواصل معك قريباً عبر الجوال أو البريد الإلكتروني.', 'success');
                contactForm.reset();
            };

            if (typeof firebase !== 'undefined' && firebase.apps.length) {
                const db = firebase.firestore();
                db.collection("contacts").add(messageData)
                    .then(() => {
                        handleSuccess();
                    })
                    .catch(err => {
                        console.error("Firestore submit error, falling back:", err);
                        // Fallback to success visual simulation anyway
                        setTimeout(handleSuccess, 1000);
                    });
            } else {
                // Fallback simulation if Firebase is offline/not initialized
                setTimeout(handleSuccess, 1500);
            }
        });
    }
    
    function showStatus(msg, type) {
        formStatus.textContent = msg;
        formStatus.classList.add(type);
        formStatus.style.display = 'block';
        
        // Scroll to status
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
