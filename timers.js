const waitTime = 3000;
const waitInterval = 500;
let currenTime = 0;



console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished,waitTime);