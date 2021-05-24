const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation(){
    text.innerText = 'Nafas oling!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Ushlab turing!';

        setTimeout(()=>{
            text.innerText = 'Nafas chiqaring!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);