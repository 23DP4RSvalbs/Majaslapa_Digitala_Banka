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
                    <li>Bezmaksas kontu atvēršana</li>
                    <li>Debet un kredītkartes</li>
                    <li>Ātri pārskaitījumi</li>
                    <li>24/7 klientu atbalsts</li>
                </ul>
                <p><strong>Priekšrocības:</strong></p>
                <ul>
                    <li>Nav slēpto maksas</li>
                    <li>Mobilā aplikācija</li>
                    <li>Drošība garantēta</li>
                </ul>
                <p>Sāciet lietot BankaPro jau šodien un izbaudiet modernas bankas iespējas!</p>
            `
        },
        family: {
            title: 'Pakalpojumi Ģimenēm',
            content: `
                <p><strong>Ideāls risinājums ģimenes budžeta pārvaldībai:</strong></p>
                <ul>
                    <li>Kopīgs ģimenes konts</li>
                    <li>Individuālas kartes visiem</li>
                    <li>Izdevumu kontrole</li>
                    <li>Bērnu uzkrājumu konti</li>
                </ul>
                <p><strong>Īpašās iespējas:</strong></p>
                <ul>
                    <li>Budžeta plānošana</li>
                    <li>Izdevumu kategorijas</li>
                    <li>Automātiskie maksājumi</li>
                </ul>
                <p>Pārvaldiet ģimenes finanses viegli un pārskatāmi!</p>
            `
        },
        business: {
            title: 'Pakalpojumi Uzņēmumiem',
            content: `
                <p><strong>Profesionāli biznesa risinājumi:</strong></p>
                <ul>
                    <li>Biznesa konti</li>
                    <li>Korporatīvās kartes</li>
                    <li>Maksājumu apstrāde</li>
                    <li>Finanšu analītika</li>
                </ul>
                <p><strong>Finanšu pakalpojumi:</strong></p>
                <ul>
                    <li>Grāmatvedības integrācija</li>
                    <li>Masveida maksājumi</li>
                    <li>API pieeja</li>
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
    const cardModal = document.getElementById('cardModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === serviceModal) {
        serviceModal.style.display = 'none';
    }
    if (event.target === cardModal) {
        cardModal.style.display = 'none';
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
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
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

function loadCardsFromStorage() {
    const storedCards = localStorage.getItem('bankCards');
    
    if (storedCards) {
        return JSON.parse(storedCards);
    } else {
        return getDefaultCards();
    }
}

function getDefaultCards() {
    return [
        {
            title: 'Pakalpojumi Privātpersonām',
            description: 'Vienkārši banku pakalpojumi ikdienai. Konti, kartes un pārskaitījumi vienā vietā.',
            image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            type: 'personal'
        },
        {
            title: 'Pakalpojumi Ģimenēm',
            description: 'Pārvaldiet ģimenes budžetu. Vairāki lietotāji, kontrole un drošība visiem ģimenes locekļiem.',
            image: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            type: 'family'
        },
        {
            title: 'Pakalpojumi Uzņēmumiem',
            description: 'Profesionāli risinājumi jūsu biznesam. Grāmatvedība, maksājumi un analītika.',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            type: 'business'
        }
    ];
}

function saveCardsToStorage(cards) {
    localStorage.setItem('bankCards', JSON.stringify(cards));
}

function renderCards() {
    const cards = loadCardsFromStorage();
    const cardsContainer = document.querySelector('.cards');
    
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardsContainer.appendChild(cardElement);
    });
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card fade-in';
    cardDiv.setAttribute('data-title', card.title);
    cardDiv.setAttribute('data-text', card.description);
    
    let imageHTML = '';
    if (card.image && card.image.trim() !== '') {
        imageHTML = `
            <div class="card-image-wrapper">
                <img src="${card.image}" alt="${card.title}" onerror="this.parentElement.style.display='none';">
            </div>
        `;
    }
    
    let cardHTML = imageHTML + `
        <div class="card-content">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <div class="card-buttons">
    `;
    
    
    cardHTML += `
                <button class="card-btn" onclick="editCard(${index})">Labot</button>
                <button class="card-btn" onclick="deleteCard(${index})" style="background: linear-gradient(135deg, #8B0000, #DC143C);">Dzēst</button>
            </div>
        </div>
    `;
    
    cardDiv.innerHTML = cardHTML;
    return cardDiv;
}

function openCreateCardModal() {
    document.getElementById('cardModalTitle').textContent = 'Izveidot Jaunu Kartiņu';
    document.getElementById('cardSubmitBtn').textContent = 'Izveidot';
    document.getElementById('cardForm').reset();
    document.getElementById('cardEditIndex').value = '';
    document.getElementById('cardModal').style.display = 'block';
}

function editCard(index) {
    const cards = loadCardsFromStorage();
    const card = cards[index];
    
    document.getElementById('cardModalTitle').textContent = 'Labot Kartiņu';
    document.getElementById('cardSubmitBtn').textContent = 'Saglabāt Izmaiņas';
    document.getElementById('cardTitle').value = card.title;
    document.getElementById('cardDescription').value = card.description;
    document.getElementById('cardImage').value = card.image || '';
    document.getElementById('cardEditIndex').value = index;
    document.getElementById('cardModal').style.display = 'block';
}

function deleteCard(index) {
    if (confirm('Vai tiešām vēlaties dzēst šo kartiņu?')) {
        const cards = loadCardsFromStorage();
        cards.splice(index, 1);
        saveCardsToStorage(cards);
        renderCards();
    }
}

function handleCardSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById('cardTitle').value.trim();
    const description = document.getElementById('cardDescription').value.trim();
    const image = document.getElementById('cardImage').value.trim();
    const editIndex = document.getElementById('cardEditIndex').value;
    
    if (!image) {
        alert('Attēla URL ir obligāts! Lūdzu, ievadiet derīgu attēla saiti.');
        return;
    }
    
    try {
        new URL(image);
    } catch (e) {
        alert('Attēla URL nav derīgs! Lūdzu, ievadiet pareizu URL adresi.');
        return;
    }
    
    const cards = loadCardsFromStorage();
    
    const cardData = {
        title: title,
        description: description,
        image: image,
        type: ''
    };
    
    if (editIndex !== '') {
        const index = parseInt(editIndex);
        if (cards[index].type) {
            cardData.type = cards[index].type;
        }
        cards[index] = cardData;
        alert('Kartiņa veiksmīgi atjaunināta!');
    } else {
        cards.push(cardData);
        alert('Jauna kartiņa veiksmīgi izveidota!');
    }
    
    saveCardsToStorage(cards);
    renderCards();
    closeCardModal();
}

function closeCardModal() {
    document.getElementById('cardModal').style.display = 'none';
    document.getElementById('cardForm').reset();
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
    renderCards();
});



const NEWS_API_KEY = '9f5066d71a374647a059d07d52f8b3b5'; 
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

function loadSearchHistory() {
    const history = localStorage.getItem('newsSearchHistory');
    return history ? JSON.parse(history) : [];
}

function saveSearchHistory(query) {
    let history = loadSearchHistory();
    

    history = history.filter(item => item !== query);
    

    history.unshift(query);
    

    if (history.length > 5) {
        history = history.slice(0, 5);
    }
    
    localStorage.setItem('newsSearchHistory', JSON.stringify(history));
    renderSearchHistory();
}

function renderSearchHistory() {
    const history = loadSearchHistory();
    const historyContainer = document.getElementById('historyButtons');
    
    if (!historyContainer) return;
    
    historyContainer.innerHTML = '';
    
    if (history.length === 0) {
        historyContainer.innerHTML = '<p style="color: #666666; font-size: 0.9rem;">Nav iepriekšēju meklējumu</p>';
        return;
    }
    
    history.forEach(query => {
        const btn = document.createElement('button');
        btn.className = 'card-btn';
        btn.textContent = query;
        btn.style.fontSize = '0.85rem';
        btn.style.padding = '6px 12px';
        btn.onclick = function() {
            document.getElementById('newsSearch').value = query;
            fetchNews();
        };
        historyContainer.appendChild(btn);
    });
}

async function fetchNews() {
    const searchInput = document.getElementById('newsSearch');
    const newsCards = document.getElementById('newsCards');
    const newsError = document.getElementById('newsError');
    
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('Lūdzu, ievadiet meklēšanas vaicājumu!');
        return;
    }
    

    newsCards.innerHTML = '<p style="text-align: center; color: #999999;">Ielādē ziņas...</p>';
    newsError.style.display = 'none';
    
    try {
        const url = `${NEWS_API_URL}?q=${encodeURIComponent(query)}&apiKey=${NEWS_API_KEY}&language=en&sortBy=publishedAt&pageSize=12`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('API pieprasījums neizdevās');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.articles && data.articles.length > 0) {
            saveSearchHistory(query);
            displayNews(data.articles);
        } else {
            showError('Dati nav pieejami');
            newsCards.innerHTML = '';
        }
        
    } catch (error) {
        console.error('Error fetching news:', error);
        showError('Dati nav pieejami');
        newsCards.innerHTML = '';
    }
}

function displayNews(articles) {
    const newsCards = document.getElementById('newsCards');
    newsCards.innerHTML = '';
    
    articles.forEach((article, index) => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const imageUrl = article.urlToImage || 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        const title = article.title || 'Nav virsraksta';
        const description = article.description || 'Nav apraksta pieejams.';
        const source = article.source?.name || 'Nezināms avots';
        const publishedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('lv-LV') : '';
        
        card.innerHTML = `
            <div class="card-content">
                <div class="card-image-wrapper">
                    <img src="${imageUrl}" alt="${title}" onerror="this.src='https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'">
                </div>
                <h3>${title}</h3>
                <p style="font-size: 0.85rem; color: #999999; margin-bottom: 0.5rem;">${source} • ${publishedDate}</p>
                <p>${description}</p>
                <div class="card-buttons">
                    <button class="card-btn" onclick="window.open('${article.url}', '_blank')">Lasīt vairāk</button>
                </div>
            </div>
        `;
        
        newsCards.appendChild(card);
    });
}

function showError(message) {
    const newsError = document.getElementById('newsError');
    newsError.textContent = message;
    newsError.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
    const newsSearch = document.getElementById('newsSearch');
    if (newsSearch) {
        newsSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                fetchNews();
            }
        });
        

        renderSearchHistory();
    }
});
