// Atualiza o ano no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Elementos do DOM
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');
const popupAudio = document.getElementById('popupAudio');
const cardsContainer = document.getElementById('cardsContainer');

// Variável para controlar se o popup está aberto
let isPopupOpen = false;

// Função para mostrar o popup
function showPopup(message) {
    popupTitle.textContent = 'Sua Mensagem do Tarot';
    popupMessage.textContent = message;
    popup.style.display = 'flex';
    isPopupOpen = true;

    // Atualiza a fonte do áudio com a URL
    popupAudio.src = message.audio;
    popupAudio.load();
    popupAudio.play();
}

// Função para fechar o popup
function closePopup() {
    popup.style.display = 'none';
    isPopupOpen = false;
    popupAudio.pause();
    popupAudio.currentTime = 0;
}

// Cria as cartas
for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="https://via.placeholder.com/200x300/1a1a2e/e94560?text=Tarot+Card" alt="Carta de Tarot">
        <h3>Carta do Destino</h3>
        <p>Clique para revelar sua mensagem</p>
    `;
    
    card.addEventListener('click', () => {
        if (!isPopupOpen) {
            const randomMessage = tarotMessages[Math.floor(Math.random() * tarotMessages.length)];
            showPopup(randomMessage);
        }
    });
    
    cardsContainer.appendChild(card);
}

// Fecha o popup ao clicar fora dele
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Fecha o popup ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPopupOpen) {
        closePopup();
    }
}); 