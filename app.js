let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "red", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector('h2')

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("strted");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};


function levelUp() {
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    //random button choose
    // console.log(randBtn);
    // console.log(randomColor);
    // console.log(randomIdx);
    gameSeq.push(randomColor)
    console.log(gameSeq)
    gameFlash(randBtn);
};

function checkAns(idx) {
    // console.log(`current level ${level}`)

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector('body').style.background = 'red'
        setTimeout(function () {
            document.querySelector('body').style.background = 'white'
        }, 150)
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function btnPress() {
    console.log(this)
    let btn = this;
    userflash(btn)

    userColor = btn.getAttribute('id');
    // console.log(userColor)
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}