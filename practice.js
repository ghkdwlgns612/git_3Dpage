let box = document.querySelector("#box"),
    left = document.querySelector("#left"),
    right = document.querySelector("#right");

let angle = 10;

left.addEventListener("click",function(){
    angle -=10;
    box.style.transform = "rotateZ(" + angle + "deg)";
});

right.addEventListener("click",function(){
    angle +=10;
    box.style.transform = "rotateZ(" + angle + "deg)";
});