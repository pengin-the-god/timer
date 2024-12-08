//音関連の定義。
const audio1 = new Audio("電子ルーレット回転中.wav");
const audio2=new Audio("カーソル移動4.mp3");

let startTime = 0;
let stopTime = 0;

document.querySelector(".start").addEventListener("click", () => {
    audio2.load();
    audio2.play();
    audio1.play();
    document.querySelector(".result").classList.remove("open");
    document.querySelector(".start").classList.remove("open");
    document.querySelector(".stop").classList.add("open");
    document.querySelector(".stop-text").classList.add("open");

    return startTime = Date.now();
})

document.querySelector(".stop").addEventListener("click", () => {
    audio2.play();
    audio1.pause();
    audio1.currentTime=0;
    document.querySelector(".stop").classList.remove("open");
    document.querySelector(".start").classList.add("open");
    document.querySelector(".stop-text").classList.remove("open");
    document.querySelector(".result").classList.add("open");


    //止めた秒数に関する処理。
    stopTime = Date.now();
    let time = ((stopTime - startTime) / 1000).toFixed(3);

    document.querySelector(".result h1").textContent = `記録:【${time}】秒`;
    const result2 = document.querySelector(".result p");

    if (time < 4.5) {
        result2.textContent = "早すぎますね...。";
    } else if (time < 4.8) {
        result2.textContent = "ちょっと早かった！";
    } else if (time < 4.95) {
        result2.textContent = "もう少し！";
    } else if (time === 5.000) {
        result2.textContent = "A M A Z I N G";
    } else if (time < 5.05) {
        result2.textContent = "素晴らしい！！！";
    } else if (time < 5.2) {
        result2.textContent = "もう少し！";
    } else if (time < 5.5) {
        result2.textContent = "ちょっと遅かった！";
    } else if (time > 5.5) {
        result2.textContent = "遅すぎますね...。";
    }


})
