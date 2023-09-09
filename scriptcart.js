window.onload = () => {
    test()
}
function cresteDescresteCantitatea() {
    let produsulDinCart = document.querySelectorAll(".produsele-din-cart");
    produsulDinCart.forEach(e => {
        const increaseQuantity = e.querySelector(".plus");
        const decreaseQuantity = e.querySelector(".minus");
        const quantity = e.querySelector(".cantitatea-dorita");
        let cantitate = 1;
        quantity.innerHTML = cantitate
        const pretInitialProdus = e.querySelector("#pret-initial-produs");
        const pretProdusPerCantitate = e.querySelector("#pret-produs-per-cantitate");
        const continutPretInitial = parseFloat(pretInitialProdus.innerHTML);
        pretProdusPerCantitate.innerHTML = continutPretInitial;
        const cantitatesumarDivLeft = e.querySelector(".sumar-cantitate-produs-cart-plata");

        increaseQuantity.addEventListener("click", () => {
            if (cantitate >= 1) {
                cantitate++;
                quantity.innerHTML = cantitate;
                const pret = e.querySelector(".pret-initial-produs");
                pret.style.opacity = "1"
                const F16 = cantitate * continutPretInitial
                pretProdusPerCantitate.innerHTML = parseFloat(F16).toFixed(2)
                cantitatesumarDivLeft.innerHTML = cantitate;
                finalizeazaComanda();
            }
        })
        decreaseQuantity.addEventListener("click", () => {
            if (cantitate > 1) {
                cantitate--;
                quantity.innerHTML = cantitate;
                const F16 = cantitate * continutPretInitial
                pretProdusPerCantitate.innerHTML = parseFloat(F16).toFixed(2)
                cantitatesumarDivLeft.innerHTML = cantitate;
                finalizeazaComanda();
            }
            if (cantitate <= 1) {
                const pret = e.querySelector(".pret-initial-produs");
                pret.style.opacity = "0"
            }
        })


    })

}
function pretInitialProdus() {
    let produsulDinCart = document.querySelectorAll(".produsele-din-cart");
    let subtotalProduse = document.querySelector(".subtotal-toate-produsele");
    let subtotal = 0;
    produsulDinCart.forEach(e => {
        const pretInitial = e.querySelector("#pret-initial-produs");
        const pretinitalFloat = parseFloat(pretInitial.innerHTML)
        subtotal += pretinitalFloat
    })
    subtotalProduse.innerHTML = subtotal;
    let totalCart = document.querySelector(".total-cart-subtotal");
    let livrare = document.querySelector(".cost-livrare");
    livrare.innerHTML = 10.00
    if (subtotal > 99.90) {
        livrare.innerHTML = 0;
    }
    totalCart.innerHTML = parseFloat(subtotalProduse.innerHTML) + parseFloat(livrare.innerHTML)
}
function finalizeazaComanda() {

    let subtotalProduse = document.querySelector(".subtotal-toate-produsele");
    let produsulDinCart = document.querySelectorAll(".produsele-din-cart");
    let subtotal = 0;
    produsulDinCart.forEach(e => {
        const pretProdusPerCantitate = e.querySelector("#pret-produs-per-cantitate");
        const preturiFiercareProdus = parseFloat(pretProdusPerCantitate.innerHTML)
        subtotal += preturiFiercareProdus;
    })
    subtotalProduse.innerHTML = subtotal;
    let totalCart = document.querySelector(".total-cart-subtotal");
    let livrare = document.querySelector(".cost-livrare");
    livrare.innerHTML = 10.00
    if (subtotal > 99.90) {
        livrare.innerHTML = 0;
    }
    totalCart.innerHTML = parseFloat(subtotalProduse.innerHTML) + parseFloat(livrare.innerHTML)
    maiAdaugaProduse();
}
function maiAdaugaProduse() {
    let maiAdaugaProduse = document.querySelector(".mai-adauga-produse");
    let sumaLivrare = 99.90;
    maiAdaugaProduse.innerHTML = sumaLivrare;
    let subtotalProduse = document.querySelector(".subtotal-toate-produsele");
    let subtotalProdusefloat = parseInt(subtotalProduse.innerHTML)
    if (subtotalProdusefloat < sumaLivrare) {
        const maiAdaugaPanaLaLivrareGratuita = (sumaLivrare - subtotalProdusefloat).toFixed(2);
        maiAdaugaProduse.innerHTML = maiAdaugaPanaLaLivrareGratuita
    }
    else {
        maiAdaugaProduse.innerHTML = 0;
    }
}
// Funcție pentru a obține numele abreviat al lunii
function getShortMonthName(monthIndex) {
    const monthNames = [
        "Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.",
        "Iul.", "Aug.", "Sep.", "Oct.", "Noi.", "Dec."
    ];
    return monthNames[monthIndex];
}

// Funcție pentru a obține numele abreviat al zilei săptămânii
function getShortDayName(dayIndex) {
    const dayNames = ["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."];
    return dayNames[dayIndex];
}

// Funcție pentru a verifica dacă o zi este zi lucrătoare (luni-vineri)
function isWorkday(date) {
    const day = date.getDay();
    return day >= 1 && day <= 5; // 1 = luni, 5 = vineri
}

// Funcție pentru a genera intervalul de livrare în formatul dorit
function generateDeliveryDate(numberOfWorkdays) {
    const currentDate = new Date();
    let remainingWorkdays = numberOfWorkdays;
    let deliveryDate = new Date(currentDate);

    while (remainingWorkdays > 0) {
        deliveryDate.setDate(deliveryDate.getDate() + 1);

        if (isWorkday(deliveryDate)) {
            remainingWorkdays--;
        }
    }

    const endMonthName = getShortMonthName(deliveryDate.getMonth());
    const endDay = deliveryDate.getDate().toString().padStart(2, "0");
    const startDayName = getShortDayName(deliveryDate.getDay());
    return `${startDayName}, ${endDay} ${endMonthName},`;
}

// Obține elementul HTML cu clasa "data-livrare"
const dataLivrareElement = document.querySelector(".data-livrare");

// Exemplu de utilizare: estimează livrarea în următoarele 3 zile lucrătoare
const zileLivrare = 3;
const dataLivrare = generateDeliveryDate(zileLivrare);

// Actualizează conținutul elementului HTML cu rezultatul estimării
dataLivrareElement.innerHTML = `
    <p>Livrare</p>
    <div>
        <p>${dataLivrare}</p>
    </div>
`;
let cartJSONStored = localStorage.getItem("mycart");
let cartStored = JSON.parse(cartJSONStored) || [];
console.log(cartStored)
function payment() {
    let cartGol = document.querySelector(".section-cart-gol");
    let cartPlin = document.querySelector(".section-cart-plin");
    if (cartStored.length > 0) {
        cartGol.style.display = "none";
        cartPlin.style.display = "block";
        let produsPlata = document.querySelector(".produsele-cosul-tau")
        for (const item of cartStored) {
            const createElement = document.createElement("div");
            createElement.classList.add("produsele-din-cart");
            createElement.innerHTML = returneazaProdusePagina(item.imagine, item.brand, item.descriere, item.marime, item.culoare, item.pret);
            produsPlata.append(createElement)
        }
        stergeProdus()
        finalizeazaComanda()
        cresteDescresteCantitatea();
        pretInitialProdus();
        
    }
    else {
        if (window.matchMedia("(max-width: 500px)").matches) {
            cartGol.style.display = "block";
        } else {
            cartGol.style.display = "flex";
            
        }
        cartPlin.style.display = "none";
    }
}

function returneazaProdusePagina(imagine, brand, descriere, marime, culoare, pret) {
    return `
                                 <div class="div-left">
                                    <div class="imagine-produs-cart-plata"><img src="${imagine}" alt=""></div>
                                    <div class="afisarea-produsului">
                                        <div class="produs-cart-plata">
                                            <div class="titlu-produs-cart-plata">
                                                <h3>${brand}</h3>
                                            </div>
                                            <div class="descriere-produs-cart-plata">
                                                <p>${descriere}</p>
                                            </div>
                                            <div class="marime-produs-cart-plata">
                                                <p>${marime}</p>
                                            </div>
                                            <div class="culoare-produs-cart-plata">
                                                <p>${culoare}</p>
                                            </div>
                                            <div class="cantitate-produs-cart-plata">x
                                                <p class="sumar-cantitate-produs-cart-plata">1</p>
                                            </div>
                                        </div>
                                        <div class="sterge-produs-cart-plata"><button>Sterge produsul</button></div>
                                    </div>
                                </div>

                                <div class="div-right">
                                    <div class="cantitate-produs-cart-plata"><img class="plus" src="icon/plus-square-svgrepo-com.png" alt="">
                                        <h2 class="cantitatea-dorita"></h2>
                                        <img class="minus" src="icon/minus-square-svgrepo-com.png" alt="">
                                    </div>
                                    <div class="pret-produs-cart-plata">
                                        <div class="pret-produs-per-cantitate">
                                            <p id="pret-produs-per-cantitate"></p>
                                            <p>lei</p>
                                        </div>
                                        <div class="pret-initial-produs">
                                            <p id="pret-initial-produs">${pret}</p>
                                            <p>lei fiecare</p>
                                        </div>
                                    </div>
                                </div>
    `
}



function test() {
    let cartPlin = document.querySelector(".adauga-produs-cart");
    cartPlin.innerHTML = "";
    for (const item of cartStored) {
        const element = document.createElement("div");
        element.classList.add("continut-cart");
        element.innerHTML = createProductInCart(item.imagine, item.descriere, item.pret, item.culoare, item.marime);
        cartPlin.append(element);
    }

    updateCartView();
    totalArticolesiPret()
    payment();
    
}
function updateCartView() {
    let cartGol = document.querySelector(".cart-gol");
    let cartPlin = document.querySelector(".cart-plin");
    if (cartStored.length === 0) {
        cartGol.style.display = "grid";
        cartPlin.style.display = "none"
    }
    else {
        cartGol.style.display = "none";
        cartPlin.style.display = "block"
    }
}


function createProductInCart(imagine, descriere, pret, culoare, marime) {
    return `
         <div class="imagine-produs-cart">
                <img src="${imagine}" alt="">
            </div>
            <div class="descriere-produs-cart">
                <div class="titlu-produs-cart"><p>${descriere}</p></div>
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

function stergeProdus() {
    let produsCartPlata = document.querySelectorAll(".produsele-din-cart");
    produsCartPlata.forEach(e => {
        const stergeProdus = e.querySelector(".sterge-produs-cart-plata button")
        stergeProdus.addEventListener("click", () => {
            const descriereProdus = e.querySelector(".descriere-produs-cart-plata p").innerHTML.trim();
            let index=cartStored.findIndex(item=> item.descriere===descriereProdus)
            if(index!==-1){
                cartStored.splice(index, 1);
                localStorage.setItem("mycart", JSON.stringify(cartStored))
            }
            location.reload();
            console.log(index, descriereProdus)
            // localStorage.removeItem("mycart")
        })
    })
}