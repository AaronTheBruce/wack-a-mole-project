function popUpRandomMole() {
    const moleHead = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    if (moleHead.length === 0){
        alert("No more moles to who-wack!");
        return;
    }
    const randNum = Math.floor(Math.random() * ((moleHead.length - 1) - 0) + 0);

    const visible = moleHead[randNum];
    // === undefined ? popUpRandomMole() : moleHead[randNum]; // All hail the cheese
    visible.classList.remove('wgs__mole-head--hidden');
    setTimeout(() => hideMole(visible), 1000);
}

function hideMole(mole) {
    mole.classList.add('wgs__mole-head--hidden');
    setTimeout(() => popUpRandomMole(), 1000);
}

window.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    popUpRandomMole();

    let shownMole = document.querySelectorAll(".wgs__mole-head")
    for (const mole of shownMole) {
        mole.addEventListener('click', event => {
            event.target.classList.add('wgs__mole-head--hidden');
            event.target.classList.add('wgs__mole-head--whacked');
            count++;
        })
    }
});
