const cards = document.querySelectorAll('.card');
let hasFlippeCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar a carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    
   this.classList.add('flip');
    if(!hasFlippeCard) {
        hasFlippeCard = true;
        firstCard = this;
        return        
    }

    secondCard = this;
    hasFlippeCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCard();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//função que desvira as cartas
function unflipCard() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard();
    }, 1500);
}

//função que reseta o tabuleiro
function resetBoard(){
    [hasFlippeCard, lockBoard]=[false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})