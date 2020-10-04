let btn = document.querySelector('.btn');
let text = document.querySelector('#text')

btn = addEventListener('click', rollDice);

function rollDice() {
    let value1 = Math.floor(Math.random() * 6 + 1);
    console.log(value1)
    let compVal = `./img/dice${value1}.png`
    document.getElementById('comp').setAttribute('src', compVal)

    let value2 = Math.floor(Math.random() * 6 + 1);
    console.log(value2)
    let playerVal = `./img/dice${value2}.png`
    document.getElementById('player').setAttribute('src', playerVal)

    if (value1 > value2) {
        text.innerHTML = ('Computer Wins :)');
    }
    else if (value2 > value1) {
        text.innerHTML = ('You Wins :)')
        
    }
    else {
        text.innerHTML = ('Draw !!')
    }
}