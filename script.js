const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


function updateTime() {
    const currentDate = new Date();
    const hourDegree = (currentDate.getHours() / 12) * 360;
    const minuteDegree = (currentDate.getMinutes() / 60) * 360;
    const secondDegree = (currentDate.getSeconds() / 60) * 360;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;
    
    let sound = new Audio("asset/sound.mp3");
    sound.play();
}
setInterval(updateTime, 1000);
