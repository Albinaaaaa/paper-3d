// 3d scroll
// window.addEventListener("DOMContentLoaded", (event) => {
let zSpasing = -1000;
let lastPost = zSpasing / 5;
let $frames = document.getElementsByClassName("frame");
let frames = Array.from($frames);
let zVals = [];
console.log("start");

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPost - top;

  lastPost = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpasing + zSpasing);
    zVals[i] += delta * -5.5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpasing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  });
};
window.scrollTo(0, 1);
// });

// audio
let soundButton = document.querySelector(".sound-button");
let audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");

  audio.paused ? audio.play() : audio.pause();
});
