// Your code goes here
const funBus = document.querySelector(".intro img");
funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.5)";
    funBus.style.transition = "transform 1s";
})
funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1)";
})


const letsGoPic = document.querySelector(".img-content img")
letsGoPic.addEventListener("click", () => {
    letsGoPic.src = "img/ocean.jpg"
})
letsGoPic.addEventListener("dblclick", () => {
    letsGoPic.src = "img/adventure.jpg"
})

const allPics = document.querySelectorAll("img")
allPics.forEach((pics) => {
    pics.addEventListener("mouseover", () => {
        pics.style.transform = "rotate(360deg)";
        pics.style.transition = "transform 1s";
    })
})