const { setInterval } = require("timers");

const waitTime = 3000;
const waitInterval = 500;
let currenTime = 0;

const incTime = () => {
    currenTime += waitInterval;
    console.log(`waiting ${currenTime / 1000} seconds`)
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

const interval = setInterval(incTime, waitInterval)

setTimeout(timerFinished,waitTime);