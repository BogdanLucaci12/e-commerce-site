let meniuiconbars=document.querySelector(".meniudeschis");
let meniuiconx=document.querySelector(".meniuinchis")
let butonmeniu=document.querySelector(".butonmeniu")
let numar=1;
butonmeniu.addEventListener("click", e => {
    if (numar==1) {
     
        deschidemeniul();
        numar=0;
    } else if(numar==0) {
        
        inchidemeniul();
        numar=1;
    }
})
function deschidemeniul(){
const header=document.querySelector("header");
header.style.transform="translateX(20vw)";
const main=document.querySelector("main")
main.style.transform="translateX(20vw)"
main.style.opacity=".5"
const meniupreview=document.querySelector(".meniupreview");
meniupreview.style.display="block"
meniuiconbars.style.display="none"
meniuiconx.style.display="inherit"
    butonmeniu.style.backgroundColor ="#bababa"
}
function inchidemeniul(){
    const header = document.querySelector("header");
    header.style.transform = "translateX(0)";
    const main = document.querySelector("main")
    main.style.transform = "translateX(0)"
    main.style.opacity = "1"
    const meniupreview = document.querySelector(".meniupreview");
    meniupreview.style.display = "none"
    meniuiconbars.style.display = "block"
    meniuiconx.style.display = "none"
    butonmeniu.style.backgroundColor = "white"
}

//Afisare continut meniuri
let meniuprincipal=document.querySelector(".meniuprincipal");
let meniuprincpaldiv=meniuprincipal.querySelectorAll("div");
let meniuprincipalfirstdiv=meniuprincpaldiv[0];
let meniutoatesporturile = document.querySelector(".meniutoatesporturile");
let meniutoatesporturilefirstdiv = meniutoatesporturile.querySelectorAll("div");
let meniutoatesporturileiconleft = meniutoatesporturilefirstdiv[0].querySelector("img")

meniuprincipalfirstdiv.addEventListener("click", deschidetoatesporturile)
meniutoatesporturileiconleft.addEventListener("click", inchidetoatesporturile)

function deschidetoatesporturile(){
    const meniutoatesporturile = document.querySelector(".meniutoatesporturile");
    meniutoatesporturile.style.transform="translateX(0)"
}
function inchidetoatesporturile(){

    const meniutoatesporturile = document.querySelector(".meniutoatesporturile");
    meniutoatesporturile.style.transform="translateX(-20vw)"
}
//afisare continut meniu barbati
let divbarbati=meniuprincpaldiv[1];
let arrowleftbarbati = document.querySelector(".barbati .titlu img");
divbarbati.addEventListener("click", afiseazameniubarbati)
arrowleftbarbati.addEventListener("click", inchidemeniubarbati)
function afiseazameniubarbati(){
    const meniulbarbati=document.querySelector(".barbati")
    meniulbarbati.style.transform="translateX(0)"
}
inchidemeniubarbati()
function inchidemeniubarbati(){
    const meniulbarbati = document.querySelector(".barbati");
    meniulbarbati.style.transform="translateX(-20vw)"

}
// afiseaza meniu femei
 let divfemei=meniuprincpaldiv[2];
let arrowleftfemei = document.querySelector(".femei .titlu img");
 divfemei.addEventListener("click", afiseazameniufemei);
 arrowleftfemei.addEventListener("click", inchidemeniufemei);
 function afiseazameniufemei(){
    const meniulfemei=document.querySelector(".femei");
    meniulfemei.style.transform="translateX(0)"
 }
 function inchidemeniufemei(){
     const meniulfemei = document.querySelector(".femei");
     meniulfemei.style.transform = "translateX(-20vw)"
 }

