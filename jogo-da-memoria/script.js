const cards = document.querySelectorAll('.card');
let hasFlippeCard = false;
let firstCard, secondCard;

function flipCard() {
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

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})