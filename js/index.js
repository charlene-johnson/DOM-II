// Your code goes here

// window.addEventListener('load', () => {
//     alert("You have arrived on the Fun Bus page! ");
// })
 

const funBus = document.querySelector(".intro img");
funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.5)";
    funBus.style.transition = "transform 1s";
})
funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1)";
})


const middlePics = document.querySelectorAll(".img-content img")
middlePics[0].addEventListener("click", () => {
    middlePics[0].src = "img/maps.jpg";
})
middlePics[0].addEventListener("dblclick", () => {
    middlePics[0].src = "img/adventure.jpg";
})
middlePics[1].addEventListener("click", () => {
    middlePics[1].src = "img/ocean.jpg";
})
middlePics[1].addEventListener("dblclick", () => {
    middlePics[1].src = "img/fun.jpg";
})

const destinationPic = document.querySelector(".content-destination img")
destinationPic.addEventListener("click", () => {
    destinationPic.src = "img/boats.jpg";
})
destinationPic.addEventListener("dblclick", () => {
    destinationPic.src = "img/destination.jpg";
})

const allPics = document.querySelectorAll(".img-content, .content-destination img")
allPics.forEach((pics) => {
    pics.addEventListener("mouseenter", () => {
        var isAnimating = false;
        
        pics.onmouseenter = function(){
            if (isAnimating) {
                return;
            }
            isAnimating = true;
            pics.style.transform = "rotate(360deg)";
            pics.style.transition = "transform 1s";

            setTimeout(function(){
                pics.style.transform = "rotate(0deg)";
                pics.style.transition = "";
                isAnimating = false;
            }, 1000);
        }
        
    })
})

const allBackground = document.querySelector("body")
var isScrolling;

allBackground.addEventListener("wheel", () => {
    allBackground.style.backgroundColor = "limegreen";
    clearTimeout (isScrolling) ;
    isScrolling = setTimeout(resetColor, 100);
});
        function resetColor() {
            allBackground.style.backgroundColor = "white";
        }

const navBackground = document.querySelector(".main-navigation")
navBackground.addEventListener("mouseover", () => {
    navBackground.style.backgroundColor = "pink";
})
navBackground.addEventListener("mouseout", () => {
    navBackground.style.backgroundColor = "white";
})


