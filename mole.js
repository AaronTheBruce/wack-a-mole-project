function popUpRandomMole() {
    const moleHead = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    const randNum = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    const visible = moleHead[randNum] === undefined ? popUpRandomMole() : moleHead[randNum];
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
    // hideMole(visible);

    // make a click event for the moleHead
    let shownMole = document.querySelectorAll(".wgs__mole-head")
    for (const mole of shownMole) {
        mole.addEventListener('click', event => {
            event.target.classList.add('wgs__mole-head--hidden');
            event.target.classList.add('wgs__mole-head--whacked');
            count++;
        })
    }
});
