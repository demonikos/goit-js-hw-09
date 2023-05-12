const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.body;

// const btn = document.querySelectorAll('button');


// const start = document.querySelector('[data-start]');
// const stop = document.querySelector('[data-stop]');

// console.log(start.attributes);
// console.log(stop.attributes);
// console.log(btn.attributes)

// console.log(start);
// console.log(stop);
// console.log(btn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onStart = () => {
    start.disabled = true;
    stop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
    startInterval = setInterval(() => {
        // let u = getRandomHexColor();
        // console.log(u);
        // body.style.backgroundColor = u;
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

const onStop = () => {
    clearInterval(startInterval);
    // console.log('stoped!');
    start.disabled = false;
    stop.disabled = true;
}

const onLoad = () => {
    start.disabled = false;
    stop.disabled = true;
}

window.addEventListener('load', onLoad);
start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);