// Your code goes here

// window.addEventListener('load', () => {
//     alert("You have arrived on the Fun Bus page! ");
// })

const funBus = document.querySelector(".intro img");
funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.2)";
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
var isWheel;

allBackground.addEventListener("wheel", () => {
    allBackground.style.backgroundColor = "limegreen";
    clearTimeout (isWheel) ;
    isWheel = setTimeout(resetColor, 100);
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

let navAnchor = document.querySelectorAll("a")
navAnchor.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    })
})

let log = document.createElement("p")
let textBox = document.createElement("Input")
let footerBox = document.querySelector(".footer")
textBox.setAttribute("type", "text")
footerBox.append(textBox);
footerBox.append(log)

let insideTextBox = document.querySelector("input")
insideTextBox.value = "You have reached the bottom of this page";
insideTextBox.style.height = "30px";
insideTextBox.style.width = "250px";
insideTextBox.style.textAlign = "center";
insideTextBox.style.marginLeft = "840px";
insideTextBox.style.backgroundColor = "#FFEBCD"

insideTextBox.addEventListener("select", (event) => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
    log.textContent = `You selected: ${selection}`
})
insideTextBox.addEventListener("focusin", (event) => {
    event.target.style.backgroundColor = "#E0BD84"
})
insideTextBox.addEventListener("focusout", (event) => {
    event.target.style.backgroundColor = "#FFEBCD"
})



