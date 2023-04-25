// DOM Variable Assignments
const container = document.querySelector(".container")
const content = container.querySelector("h1");
const originalText = content.innerText;
const audio = new Audio("./assets/yung-lean-kyoto.mp3");
const delta = 100;

// Event Handlers
function changeStyle() {
    content.innerText = "ain't it funny how it happened?";
    container.classList.add("vaporwave");
    audio.load();
    audio.play();
}

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = container;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xDelta = Math.round((x / width * delta) - (delta / 2));
    const yDelta = Math.round((y / height * delta) - (delta / 2));

    content.style.textShadow = `
            ${xDelta}px ${yDelta}px 0 rgba(255, 113, 206, 0.7),
            ${xDelta * -1}px ${yDelta}px 0 rgba(1, 205, 254, 0.7),
            ${xDelta}px ${yDelta * -1}px 0 rgba(5, 255, 161, 0.7),
            ${xDelta * -1}px ${yDelta * -1}px 0 rgba(185, 103, 255, 0.7)
    `;
}

function reset() {
    content.style.textShadow = "";
    content.innerText = originalText;
    container.classList.remove("vaporwave");
    audio.pause();
}

// Attaching handlers
container.addEventListener("mouseenter", changeStyle);
container.addEventListener("mousemove", shadow);
container.addEventListener("mouseleave", reset);

