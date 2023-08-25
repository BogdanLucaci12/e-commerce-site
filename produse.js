window.addEventListener('scroll', function () {
    const listaStart = document.querySelector('.lista-start');
    const footer = document.querySelector('footer');
    const listaStartBottom = listaStart.offsetTop + listaStart.offsetHeight;
    const footerTop = footer.offsetTop;

    if (listaStartBottom >= footerTop) {
        const distanceToFooter = listaStartBottom - footerTop;
        listaStart.style.position = 'absolute';
        listaStart.style.top = (footerTop - listaStart.offsetHeight - distanceToFooter) + 'px';
    } else {
        listaStart.style.position = 'sticky';
        listaStart.style.top = '0';
    }
});
closePreview();
targetPreview();
// Butoane sortare
let select = document.querySelectorAll(".select");
select.forEach(e => {
    let sorteaza = e.querySelector(".sorteaza");
    let arrowDown = e.querySelector('.arrow-down');
    let arrowUp = e.querySelector('.arrow-up');
    const selectDescriereSortare = e.querySelector(".select-descriere-sortare")
    selectDescriereSortare.addEventListener("click", function () {
        sorteaza.classList.toggle("activ")
        arrowUp.classList.toggle("inactiveaza-arrow");
        arrowDown.classList.toggle("inactiveaza-arrow");
        select.forEach(otherselect => {
            if (otherselect !== e) {
                otherselect.querySelector(".sorteaza").classList.remove("activ");
                otherselect.querySelector(".arrow-up").classList.add("inactiveaza-arrow");
                otherselect.querySelector(".arrow-down").classList.remove("inactiveaza-arrow");
            }
        })
    })
    document.addEventListener("click", f => {
        if (!e.contains(f.target)) {
            sorteaza.classList.remove("activ");
            arrowDown.classList.remove("inactiveaza-arrow");
            arrowUp.classList.add("inactiveaza-arrow");
        }
    })
})

//Sortare

sorteaza()
countnrproduse();
function sorteaza() {
    let array = [];
    let sorteazaMarime = document.querySelectorAll(".sorteaza button");

    sorteazaMarime.forEach(e => {
        e.addEventListener("click", function () {
            e.classList.toggle("marime-selectata");
            const value = e.innerHTML;
            const index = array.indexOf(value);

            if (index === -1) {
                array.push(value);
            } else {
                array.splice(index, 1);
            }
            console.log(array, e)
            let containerProdus = document.querySelectorAll(".container-produs");
            containerProdus.forEach(container => {
                const marimeprodus = container.querySelector(".descriere-marime");
                const culoareprodus = container.querySelector(".descriere-culoare");
                const marimiDisponibile = marimeprodus.innerHTML.trim().split(', ');
                const culoriDisponibile=culoareprodus.innerHTML.trim().split(', ')
                console.log(array, culoriDisponibile)
                if (array.length === 0 || array.some(val => marimiDisponibile.includes(val)) || array.some(val => culoriDisponibile.includes(val))) {
                    container.classList.remove("hide");
                } else {
                    container.classList.add("hide");
                }
            });

            countnrproduse();
        });
    });

}
function countnrproduse() {
    let nrprodusevizibile = document.querySelectorAll(".container-produs").length;
    let nrprodusehide = document.querySelectorAll(".hide").length
    let nrproduse = nrprodusevizibile - nrprodusehide
    document.querySelector("#count-nr-produse").innerHTML = nrproduse;
}

//Buton filtrare
let filtrareProduse = document.querySelector(".descriere-filtrare");
filtrareProduse.addEventListener("click", e => {

    let continutFiltrare = document.querySelector(".continut-filtrare");
    continutFiltrare.classList.toggle("activ");
    let arrowUp = document.querySelector(".descriere-filtrare .arrow-up");
    arrowUp.classList.toggle("inactiveaza-arrow");
    let arrowDown = document.querySelector(".descriere-filtrare .arrow-down");
    arrowDown.classList.toggle("inactiveaza-arrow");
    document.addEventListener("click", f => {
        if (!filtrareProduse.contains(f.target) && !continutFiltrare.contains(f.target)) {
            continutFiltrare.classList.remove("activ");
            arrowDown.classList.remove("inactiveaza-arrow");
            arrowUp.classList.add("inactiveaza-arrow");
        }

    });
});
alegeMarimeCuloare();
function alegeMarimeCuloare() {
    let containerPreview = document.querySelectorAll(".preview-container-produs");
    containerPreview.forEach(e => {
        let descriereCuloare=e.querySelector("#descriere-culoare");
        descriereCuloare.addEventListener("click", () => {
            
            const ul = e.querySelector(".descriere-culoare ul");
            const arrowDown = e.querySelector(".descriere-culoare .arrow-down");
            const arrowUp = e.querySelector(".descriere-culoare .arrow-up");
            arrowDown.classList.toggle("inactiveaza-arrow")
            arrowUp.classList.toggle("inactiveaza-arrow");
            ul.classList.toggle("activ")
            const li = ul.querySelectorAll("li")
            let liArray = [];
            li.forEach(i => {
                i.addEventListener("click", f => {
                    const button = e.querySelector("button");
                    const P = document.createElement("p");
                    const liTarget = f.target.innerHTML
                    liArray[0] = liTarget

                    const P2 = button.querySelector("p")
                    if (P2 === null) {
                        P.innerHTML = liArray[0];
                        button.appendChild(P)

                    }
                    else {
                        P2.remove();
                        P.innerHTML = liArray[0];
                        button.appendChild(P)
                    }
                })
            })
        })
        let descriereMarime = e.querySelector("#descriere-marime");
        descriereMarime.addEventListener("click", f => {
            const ul = e.querySelector(".descriere-marime ul");
            const arrowDown = e.querySelector(".descriere-marime .arrow-down");
            const arrowUp = e.querySelector(".descriere-marime .arrow-up");
            arrowDown.classList.toggle("inactiveaza-arrow")
            arrowUp.classList.toggle("inactiveaza-arrow");

            ul.classList.toggle("activ")
            const li = ul.querySelectorAll("li")
            let liArray = [];

            li.forEach(x => {
                x.addEventListener("click", f => {
                    const button = e.querySelector("button");
                    const P = document.createElement("div");
                    const liTarget = f.target.innerHTML
                    liArray[0] = liTarget
                    const P2 = button.querySelector("div")
                    if (P2 === null) {
                        P.innerHTML = liArray[0];
                        button.appendChild(P)
                    }
                    else {
                        P2.remove();
                        P.innerHTML = liArray[0];
                        button.appendChild(P)
                    }
                })
            })
        })
    })
    document.addEventListener("click", x => {
        let containerPreview = document.querySelectorAll(".preview-container-produs");
        containerPreview.forEach(a => {
                const descriereCuloare = a.querySelector("#descriere-culoare");
                const descriereMarime = a.querySelector("#descriere-marime");
                if (!descriereCuloare.contains(x.target) && !descriereMarime.contains(x.target)) {
                    const c1c = a.querySelectorAll(".c1c");
                    c1c.forEach(g => {
                        const ul = g.querySelector("ul")
                        const arrowDown = g.querySelector(".arrow-down");
                        const arrowUp = g.querySelector(".arrow-up");
                        ul.classList.remove("activ")
                        arrowDown.classList.remove("inactiveaza-arrow")
                        arrowUp.classList.add("inactiveaza-arrow");
                    })
                }
        })
    })
}
function closePreview() {
    let allContainerPreview=document.querySelectorAll(".preview-container-produs")
        
        allContainerPreview.forEach(el=>{
            let inchidePreview = el.querySelector(".inchide-preview");
            inchidePreview.addEventListener("click", () => {
                const previewAfiseazaProd = document.querySelector(".preview-afiseaza-produse");
                previewAfiseazaProd.style.display = "none";
               el.style.display="none";
            })
        })
        
}
function targetPreview(){
    let containerProdus=document.querySelectorAll(".container-produs");
    let afiseazaProd = document.querySelector(".preview-afiseaza-produse")
    containerProdus.forEach(card=>{
        card.addEventListener("click", ()=>{
            afiseazaProd.style.display="flex";
            let dataProdus=card.getAttribute("data-produs-id")
            let containerPreview = document.querySelectorAll(".preview-container-produs")
        containerPreview.forEach(preview=>{
           
            let dataPreview=preview.getAttribute("data-target-id");
            console.log(dataPreview, dataProdus)
            if(dataPreview==dataProdus){
                console.log(preview.style.display="flex");
            }
        })
        })
    })
}