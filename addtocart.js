window.onload = () => {
    addtocart();
}
let cart = [];
function addtocart() {

    let containerProdus = document.querySelectorAll(".preview-container-produs");
    containerProdus.forEach(e => {
        let adaugaInCos = e.querySelector("button")
        adaugaInCos.addEventListener("click", (x) => {
            
            const imagine = e.querySelector("img").getAttribute("src")
            const titlu = e.querySelector(".descriere-produs").innerHTML;
            const pret = e.querySelector(".descriere-pret p").innerHTML;
            // const culoare = e.querySelector("button p").innerHTML;
            // const marime= e.querySelector("button div").innerHTML;
            const culoareElement = e.querySelector("button p");
            const marimeElement = e.querySelector("button div");
            let avertisment = e.querySelector(".avertisment-lipsa-marime-culoare")
            if(culoareElement===null && marimeElement===null){
                const lipsaAmbele=e.querySelector(".lipsa-ambele");
                avertisment.style.display = "flex";
                avertisment.style.top = "20%";
                lipsaAmbele.style.display="flex";
                
                setTimeout(() => {
                    avertisment.style.display = "none"
                    lipsaAmbele.style.display = "none";
                }, 2000)
            }
            else if(culoareElement===null){
                const lipsaCuloare = e.querySelector(".lipsa-culoare");
                lipsaCuloare.style.display = "flex";
                avertisment.style.display = "flex";
                avertisment.style.top = "20%";
                setTimeout(() => {
                    avertisment.style.display = "none"
                    lipsaCuloare.style.display = "none";
                }, 2000)
            }
            else if(marimeElement===null){
                const lipsaMarime = e.querySelector(".lipsa-marime");
                lipsaMarime.style.display = "flex";
                avertisment.style.display = "flex";
                avertisment.style.top = "20%";
                setTimeout(() => {
                    avertisment.style.display = "none"
                    lipsaMarime.style.display = "none";
                }, 2000)
 
            }
            else{
            const culoare = e.querySelector("button p").innerHTML;
            const marime= e.querySelector("button div").innerHTML;
            
            const createNewProduct = createProductInCart(imagine, titlu, pret, culoare, marime);
            const existingIndex = cart.findIndex(item => item.imagine === imagine)
           
            if (existingIndex !== -1) {
                return;
            }
            else {
                cart.push({ imagine: imagine });
                const cartPlin = document.querySelector(".adauga-produs-cart");
                const element = document.createElement("div");
                element.classList.add("continut-cart");
                element.innerHTML = createNewProduct;
                cartPlin.append(element);
                const produsAdaugat = e.querySelector(".produs-adaugat-cos")
                produsAdaugat.style.display = "flex";
                produsAdaugat.style.top="20%";
                setTimeout( ()=>{
                    produsAdaugat.style.display="none"
                }, 2000)
                updateCartView();
                totalArticolesiPret();
            }
            }
        })
    })
}

function updateCartView() {
    let cartGol = document.querySelector(".cart-gol");
    let cartPlin = document.querySelector(".cart-plin");
    if (cart.length === 0) {
        cartGol.style.display = "grid";
        cartPlin.style.display = "none"
    }
    else {
        cartGol.style.display = "none";
        cartPlin.style.display = "block"
    }
}


function createProductInCart(imagine, titlu, pret, culoare, marime) {
    return `
       
            <div class="imagine-produs-cart">
                <img src="${imagine}" alt="">
            </div>
            <div class="descriere-produs-cart">
                <div class="titlu-produs-cart"><p>${titlu}</p></div>
                <div class="culoare-produs-cart">Culoare:<p>${culoare}</p></div>
                   <div class="marime-produs-cart">Marime:<p>${marime}</p></div>
                <div class="pret-produs-cart"><p>${pret}</p><p>lei</p></div>
            </div>
      
    `;
}
function totalArticolesiPret() {
    let countNrArticole = document.querySelector(".count-nr-articole");
    let continutCart = document.querySelectorAll(".continut-cart");
    let total = 0;
    let countTotal = document.querySelector(".count-total");
    let countCartIconita = document.querySelector(".count-cart")
    countNrArticole.innerHTML = continutCart.length;
    countCartIconita.innerHTML = continutCart.length;
    let divpretProdus = document.querySelectorAll(".pret-produs-cart");
    divpretProdus.forEach(e => {
        const pretProdus = parseFloat(e.querySelector("p:first-child").innerHTML);
        total += pretProdus
    })
    countTotal.innerHTML = total
}
