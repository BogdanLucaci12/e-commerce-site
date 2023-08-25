window.onload= () => {
    finalizeazaComanda()
}
cresteDescresteCantitatea()
function cresteDescresteCantitatea(){
    let produsulDinCart=document.querySelectorAll(".produsele-din-cart");
    produsulDinCart.forEach(e=>{
        const increaseQuantity = e.querySelector(".plus");
        const decreaseQuantity = e.querySelector(".minus");
        const quantity=e.querySelector(".cantitatea-dorita");
        let cantitate=1;
        quantity.innerHTML = cantitate
        const pretInitialProdus = e.querySelector("#pret-initial-produs");
        const pretProdusPerCantitate = e.querySelector("#pret-produs-per-cantitate");
       const continutPretInitial=parseFloat(pretInitialProdus.innerHTML);
        pretProdusPerCantitate.innerHTML = continutPretInitial;
        const cantitatesumarDivLeft = e.querySelector(".sumar-cantitate-produs-cart-plata");
       
       increaseQuantity.addEventListener("click", ()=>{
        if(cantitate>=1){
           cantitate++;
           quantity.innerHTML=cantitate;
            const pret = e.querySelector(".pret-initial-produs");
            pret.style.opacity = "1"
            pretProdusPerCantitate.innerHTML=cantitate*continutPretInitial
            cantitatesumarDivLeft.innerHTML = cantitate;
            finalizeazaComanda();
        }
       })
       decreaseQuantity.addEventListener("click", ()=>{
        if(cantitate>1){
        cantitate--;
        quantity.innerHTML=cantitate;
         pretProdusPerCantitate.innerHTML = cantitate * continutPretInitial
            cantitatesumarDivLeft.innerHTML = cantitate;
            finalizeazaComanda();
        }
        if(cantitate<=1){
            const pret = e.querySelector(".pret-initial-produs");
            pret.style.opacity = "0"
        }
       })
       
       
    })
  
}
function finalizeazaComanda(){
    
     let subtotalProduse=document.querySelector(".subtotal-toate-produsele");
    let produsulDinCart = document.querySelectorAll(".produsele-din-cart");
    let subtotal= 0;
    produsulDinCart.forEach(e=>{
        const pretProdusPerCantitate = e.querySelector("#pret-produs-per-cantitate");
        const preturiFiercareProdus=parseFloat(pretProdusPerCantitate.innerHTML)
        subtotal+= preturiFiercareProdus;
    })
    subtotalProduse.innerHTML=subtotal;
    let totalCart=document.querySelector(".total-cart-subtotal");
    let livrare=document.querySelector(".cost-livrare");
    livrare.innerHTML=10.00
    if(subtotal>99.90){
        livrare.innerHTML=0;
    }
    totalCart.innerHTML=parseFloat(subtotalProduse.innerHTML)+ parseFloat(livrare.innerHTML)
    maiAdaugaProduse();
}
function maiAdaugaProduse(){
    let maiAdaugaProduse=document.querySelector(".mai-adauga-produse");
    let sumaLivrare= 99.90;
    maiAdaugaProduse.innerHTML = sumaLivrare;
    let subtotalProduse = document.querySelector(".subtotal-toate-produsele");
    let subtotalProdusefloat=parseInt(subtotalProduse.innerHTML)
console.log(subtotalProdusefloat)
    if(subtotalProdusefloat<sumaLivrare){
          const maiAdaugaPanaLaLivrareGratuita=(sumaLivrare-subtotalProdusefloat).toFixed(2);
          maiAdaugaProduse.innerHTML=maiAdaugaPanaLaLivrareGratuita
    }
    else{
     maiAdaugaProduse.innerHTML=0;
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
