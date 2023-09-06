
let custombanner = document.querySelectorAll(".custom-banner");
let sageataleft=document.querySelector(".left")
let sageataright = document.querySelector(".right");

let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root)
let i = parseInt(rootStyle.getPropertyValue('--slider-image'))
let scrollcontainer = document.querySelector("#scroll-container")
liTarget()
let li = document.querySelectorAll("li")
li[i].classList.add("li-target")
li.forEach((element) => {
    element.addEventListener("click", () => {
        const x = Array.from(li).indexOf(element);
        i = x; 
        custombanner.forEach((banner) => banner.classList.remove("active"));
        custombanner[i].classList.add("active");
        li.forEach((liElement) => liElement.classList.remove("li-target")); 
        li[i].classList.add("li-target");
        root.style.setProperty('--slider-image', i);
    });
});
sageataright.addEventListener("click", slideToRight);
sageataleft.addEventListener("click", slideToLeft);
// setInterval(slideToRight, 3000);
function slideToRight() {
    
    if (i < custombanner.length-1) {
        custombanner[i].classList.remove("active"); 
        li[i].classList.remove("li-target")
        i++;
        custombanner[i].classList.add("active");
        li[i].classList.add("li-target")
        root.style.setProperty('--slider-image', i);
    }
    else{
        custombanner[i].classList.remove("active");
        li[i].classList.remove("li-target")
        i=0;
        custombanner[i].classList.add("active");
        li[i].classList.add("li-target")
        root.style.setProperty('--slider-image', i);   
    }
    console.log(i)
}

function slideToLeft(){
    if (0 <i) {
        custombanner[i].classList.remove("active");
        li[i].classList.remove("li-target")
        i--;
        custombanner[i].classList.add("active");
        li[i].classList.add("li-target")
        root.style.setProperty('--slider-image', i);
        
    }
    else {
        custombanner[i].classList.remove("active");
        li[i].classList.remove("li-target")
        i = custombanner.length-1;
        custombanner[i].classList.add("active");
        li[i].classList.add("li-target")
        root.style.setProperty('--slider-image', i);
    }
    console.log(i)
}
function liTarget() {
    const ul = document.querySelector("#cover-container ul");
    for(const x of custombanner){
        const li=document.createElement('li');
        ul.appendChild(li)
        
    }
}

let copy=document.querySelector(".logo-slides").cloneNode(true);
document.querySelector('.logo-container').appendChild(copy)
