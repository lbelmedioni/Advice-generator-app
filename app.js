const adv = document.querySelector('#adv');
const par = document.querySelector('#par');
const dice = document.querySelector('#dice');

async function fetchData(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const json = await res.json();
    console.log(json);
    adv.innerText = `advice #${json.slip.id}`;
    par.innerText = `${json.slip.advice}`;
}
dice.addEventListener("click" ,fetchData);