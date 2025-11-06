function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
    
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu.classList.contains('active')) {
        toggle.textContent = '✕';
    } else {
        toggle.textContent = '☰';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
    document.querySelector('.mobile-menu-toggle').textContent = '☰';
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    
    const toggle = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('light-mode')) {
        toggle.textContent = '🌙';
        toggle.title = 'Pārslēgties uz tumšo režīmu';
    } else {
        toggle.textContent = '☀️';
        toggle.title = 'Pārslēgties uz gaišo režīmu';
    }
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function openModal(type) {
    const modalId = type === 'login' ? 'loginModal' : 'signupModal';
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        alert('Pieslēgšanās veiksmīga! Laipni lūdzam BankaPro sistēmā.');
        closeModal('loginModal');
        
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Paroles nesakrīt! Lūdzu, pārbaudiet ievadītos datus.');
        return;
    }
    
    if (name && email && password) {
        alert('Reģistrācija veiksmīga! Laipni lūdzam BankaPro! Aktivizācijas e-pasts nosūtīts uz ' + email);
        closeModal('signupModal');
        
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signupConfirmPassword').value = '';
    }
}

function openServiceModal(type) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('serviceModalTitle');
    const body = document.getElementById('serviceModalBody');
    
    const serviceContent = {
        personal: {
            title: 'Pakalpojumi Privātpersonām',
            content: `
                <p><strong>Mēs piedāvājam:</strong></p>
                <ul>
                    <li>Bezmaksas kontu atvēršana un uzturēšana</li>
                    <li>Viedās maksājumu kartes ar cashback</li>
                    <li>Ātri un droši pārskaitījumi</li>
                    <li>24/7 tiešsaistes piekļuve jūsu kontam</li>
                    <li>Personalizēts klientu atbalsts</li>
                </ul>
                <p><strong>Priekšrocības:</strong></p>
                <ul>
                    <li>Nav ikmēneša maksas</li>
                    <li>Ātra kontu atvēršana - līdz 5 minūtēm</li>
                    <li>Augsta drošības līmeņa garantija</li>
                    <li>Ērti mobilā lietotne iOS un Android</li>
                </ul>
                <p>Sāciet lietot BankaPro jau šodien un izbaudiet modernas bankas iespējas!</p>
            `
        },
        family: {
            title: 'Pakalpojumi Ģimenēm',
            content: `
                <p><strong>Ideāls risinājums ģimenes budžeta pārvaldībai:</strong></p>
                <ul>
                    <li>Kopīgs ģimenes konts ar individuālu piekļuvi</li>
                    <li>Bērnu kartes ar vecāku kontroli</li>
                    <li>Budžeta plānošanas rīki</li>
                    <li>Automātiskā uzkrājumu funkcija</li>
                    <li>Izdevumu kategorizēšana un analīze</li>
                </ul>
                <p><strong>Īpašās iespējas:</strong></p>
                <ul>
                    <li>Līdz 5 papildu kartes bez maksas</li>
                    <li>Individuālie izdevumu limiti katram ģimenes loceklim</li>
                    <li>Real-time paziņojumi par visiem darījumiem</li>
                    <li>Ģimenes mērķu sasniegšanas atbalsts</li>
                </ul>
                <p>Pārvaldiet ģimenes finanses viegli un pārskatāmi!</p>
            `
        },
        business: {
            title: 'Pakalpojumi Uzņēmumiem',
            content: `
                <p><strong>Profesionāli biznesa risinājumi:</strong></p>
                <ul>
                    <li>Uzņēmumu norēķinu konti</li>
                    <li>Korporatīvās kartes darbiniekiem</li>
                    <li>Integrācija ar grāmatvedības sistēmām</li>
                    <li>Masveida maksājumi</li>
                    <li>Starptautiskie pārskaitījumi ar labiem kursiem</li>
                </ul>
                <p><strong>Finanšu pakalpojumi:</strong></p>
                <ul>
                    <li>Biznesa kredīti un aizdevumi</li>
                    <li>Līzinga risinājumi</li>
                    <li>Detalizēti finanšu pārskati un analītika</li>
                    <li>Personalizēts biznesa konsultants</li>
                    <li>API integrācija jūsu sistēmām</li>
                </ul>
                <p>Attīstiet savu biznesu kopā ar BankaPro!</p>
            `
        }
    };
    
    const content = serviceContent[type];
    title.textContent = content.title;
    body.innerHTML = content.content;
    
    modal.style.display = 'block';
}

window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const serviceModal = document.getElementById('serviceModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === serviceModal) {
        serviceModal.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function validateContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    document.getElementById('contactName').classList.remove('input-error');
    document.getElementById('contactEmail').classList.remove('input-error');
    document.getElementById('contactMessage').classList.remove('input-error');
    
    let isValid = true;
    
    if (name === '') {
        nameError.textContent = 'Vārds ir obligāts lauks!';
        document.getElementById('contactName').classList.add('input-error');
        isValid = false;
    }
    
    if (email === '') {
        emailError.textContent = 'E-pasts ir obligāts lauks!';
        document.getElementById('contactEmail').classList.add('input-error');
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'E-pasta formāts nav derīgs!';
            document.getElementById('contactEmail').classList.add('input-error');
            isValid = false;
        }
    }
    
    if (message === '') {
        messageError.textContent = 'Ziņojums ir obligāts lauks!';
        document.getElementById('contactMessage').classList.add('input-error');
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        setTimeout(function() {
            document.getElementById('contactForm').reset();
            document.getElementById('contactForm').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
}

function filterCards() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const text = card.getAttribute('data-text').toLowerCase();
        
        if (title.includes(searchInput) || text.includes(searchInput)) {
            card.style.display = 'block';
            if (searchInput !== '') {
                card.classList.add('fade-in');
            }
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        }
    });
    
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
});