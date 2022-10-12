const dodger = document.getElementById("dodger");
let speed = 0;
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (speed < 20)[
    speed++
    ]
  if (left > 0) {
    dodger.style.left = `${left - speed}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (speed < 20)[
        speed++
    ]
    if (left < 360) {
      dodger.style.left = `${left + speed}px`;
    }
  }

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === `ArrowRight`){
    moveDodgerRight();
  }
});
document.addEventListener(`keyup`, function (){
    speed = 0;
})