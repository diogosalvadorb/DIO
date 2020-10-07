const cards = document.querySelectorAll('.card');
let hasFlippeCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    
   this.classList.toggle('flip');
    if(!hasFlippeCard) {
        hasFlippeCard = true;
        firstCard = this;
        return        
    }

    secondCard = this;
    hasFlippeCard = false;
    checkForMath();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCard();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCard() {
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1500);
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})