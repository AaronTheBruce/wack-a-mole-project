window.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let numOfMoles = 10;
    let seconds = 1000;

    document.querySelector('.score').innerHTML = `Score: ${count}`;
    let completion = document.querySelector('.game-complete')
    document.querySelector('.moles-left').innerHTML = `Moles Left: ${numOfMoles}`;

    function popUpRandomMole() {
        const moleHead = document.querySelectorAll(".wgs__mole-head");
        const randNum = Math.floor(Math.random() * (7 - 0) + 0);
        const visible = moleHead[randNum];
        // === undefined ? popUpRandomMole() : moleHead[randNum]; // All hail the cheese
        visible.classList.remove('wgs__mole-head--hidden');
        numOfMoles--;
        document.querySelector('.moles-left').innerHTML = `Moles Left: ${numOfMoles}`;
        setTimeout(() => hideMole(visible), seconds);
    }

    function hideMole(mole) {
        mole.classList.add('wgs__mole-head--hidden');
        if (numOfMoles > 0) {
            setTimeout(() => popUpRandomMole(), 1000);
        } else if (numOfMoles === 0) {
            completion.innerHTML = 'Game Over!';
        }
    }

    popUpRandomMole()

    let shownMole = document.querySelectorAll(".wgs__mole-head")
    for (const mole of shownMole) {
        mole.addEventListener('click', event => {
            event.target.classList.add('wgs__mole-head--hidden');
            // event.target.classList.add('wgs__mole-head--whacked');
            count++;
            document.querySelector('.score').innerHTML = `Score: ${count}`;
            document.querySelector('.moles-left').innerHTML = `Moles Left: ${numOfMoles}`;
            seconds *= 0.9;
        })
    }
});

/*
// UI
// Scoreboard, | Score ${score}             Game Over                   Moles left: ${moles}
// Remove/Comment out whacked feature for the moles
// Randomize the setTimeout time values find the right random range

*/

// Original for popupfunction
// const moleHead = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
// if (moleHead.length === 0){
//     alert("No more moles to who-wack!");
//     return;
// }
