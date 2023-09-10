// window.addEventListener('scroll', function () {
//     const listaStart = document.querySelector('.lista-start');
//     const footer = document.querySelector('footer');
//     const listaStartBottom = listaStart.offsetTop + listaStart.offsetHeight;
//     const footerTop = footer.offsetTop;

//     if (listaStartBottom >= footerTop) {
//         const distanceToFooter = listaStartBottom - footerTop;
//         listaStart.style.position = 'absolute';
//         listaStart.style.top = (footerTop - listaStart.offsetHeight - distanceToFooter) + 'px';
//     } else {
//         listaStart.style.position = 'sticky';
//         listaStart.style.top = '0';
//     }
// });

let size = new Set();
let size2 = new Set();

let url = new URLSearchParams(window.location.search);
let gender = url.get("gender_id");
let category = url.get("category_id");
let idTgt = url.get("id");
if (idTgt!==null) {
     targetFromExterior();
}
else {
showResultFromMeniuPreview()}
showResultByTargetGender()
function showResultFromMeniuPreview() {

   
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                result(ajax.responseText);
                const afisareGender = document.querySelector(".count-nr-produse h1")
                afisareGender.innerHTML = ""
                if (gender == 1) {
                    afisareGender.innerHTML = "Barbat";
                }
                else if (gender == 2) {
                    afisareGender.innerHTML = "Femeie";
                }
                else if (gender == 3) {
                    afisareGender.innerHTML = "Unisex";
                }
                const mic = document.querySelector(".cel-mai-mic");
                mic.addEventListener("click", function () {
                    filtreazaCresc(gender, category);
                });
                const mare=document.querySelector(".cel-mai-mare");
                mare.addEventListener("click", () =>{
                    filtrareDesc(gender, category); 
                });

            }

        });
        ajax.open('POST', 'queryDB.php', true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send('gender_id=' + gender + '&category_id=' + category);
    }


function getDataProduse() {
    let ajax = new XMLHttpRequest();
    ajax.addEventListener("readystatechange", () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            result(ajax.responseText);
            let mic = document.querySelector(".cel-mai-mic");
            mic.addEventListener("click", () => {
                filtreazaCresc()
            })
            let mare = document.querySelector(".cel-mai-mare");
            mare.addEventListener("click", () => {
                filtrareDesc()
            })
            
        }
    });
    ajax.open('POST', 'queryDB.php', true);
    ajax.send();
}

function filtreazaCresc(gender, category) {
    let ajax = new XMLHttpRequest();
    ajax.addEventListener("readystatechange", () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            result(ajax.responseText);
            targetPreview();
            countnrproduse();
            alegeMarimeCuloare();
            afiseazabutoanefiltrare()
            preluareButoaneCuloareSiMarime();
            closePreview();
            butoaneSortare();
        }
    })
   
    if (typeof gender === "undefined" && typeof category === "undefined") {
        ajax.open('GET', 'queryDB.php?mic', true);
        ajax.send();
        return
    }
    else{
        ajax.open('GET', 'queryDB.php?mic&gender_id=' + gender + '&category_id=' + category, true);
        ajax.send()
        return
    }
    
    

}
function filtrareDesc(gender, category) {
    let ajax = new XMLHttpRequest();
    ajax.addEventListener("readystatechange", () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            result(ajax.responseText);
            
            targetPreview();
            countnrproduse();
            alegeMarimeCuloare();
            afiseazabutoanefiltrare()
            preluareButoaneCuloareSiMarime();
            closePreview();
            butoaneSortare();
        }
    });
    if (typeof gender === "undefined" && typeof category === "undefined") {
        ajax.open('GET', 'queryDB.php?mare', true);
        ajax.send();
    }
    else {
        ajax.open('GET', 'queryDB.php?mare&gender_id=' + gender + '&category_id=' + category, true);
        ajax.send()
    }
}

function showResultByTargetGender() {
    let gender = document.querySelectorAll(".lista-start h3");
    gender.forEach(e => {
        e.addEventListener("click", x => {
            let getGenderAttribut = x.target.closest("div").getAttribute("data-gender-id");
            let ajax = new XMLHttpRequest();
            ajax.addEventListener("readystatechange", () => {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    result(ajax.responseText);
                    const afisareGender = document.querySelector(".count-nr-produse h1")
                    afisareGender.innerHTML = e.innerHTML;
                    const mic = document.querySelector(".cel-mai-mic");
                    mic.addEventListener("click", function () {
                        let ajax = new XMLHttpRequest();
                        ajax.addEventListener("readystatechange", () => {
                            if (ajax.readyState == 4 && ajax.status == 200) {
                                result(ajax.responseText);
                                targetPreview();
                                countnrproduse();
                                alegeMarimeCuloare();
                                afiseazabutoanefiltrare()
                                preluareButoaneCuloareSiMarime();
                                closePreview();
                                butoaneSortare();
                            }
                        });
                        ajax.open('GET', 'filterbygender.php?mic&gender_id=' + getGenderAttribut, true);
                        ajax.send();
                        
                       
                    });
                    const mare = document.querySelector(".cel-mai-mare");
                    mare.addEventListener("click", function () {
                        let ajax = new XMLHttpRequest();
                        ajax.addEventListener("readystatechange", () => {
                            if (ajax.readyState == 4 && ajax.status == 200) {
                                result(ajax.responseText);
                                  
                                targetPreview();
                                countnrproduse();
                                alegeMarimeCuloare();
                                afiseazabutoanefiltrare()
                                preluareButoaneCuloareSiMarime();
                                closePreview();
                                butoaneSortare();
                            }
                        });
                        ajax.open('GET', 'filterbygender.php?mare&gender_id=' + getGenderAttribut, true);
                        ajax.send();


                    });
              
                    targetPreview();
                    countnrproduse();
                    alegeMarimeCuloare();
                    afiseazabutoanefiltrare()
                    preluareButoaneCuloareSiMarime();
                    closePreview();
                    butoaneSortare();
                }
            });
            ajax.open('POST', 'queryDB.php?', true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send('gender_id_click=' + getGenderAttribut);
        })
    })
}
function result(result) {

    let interogare = JSON.parse(result);
    console.log(interogare)
    let string = " ";
    let afiseazaProd = document.querySelector(".afiseaza-produse");
    interogare.forEach(e => {
        const returneazaProduse = afisareProduseInPagina(e.product_id, e.gender_id, e.categorie_id, e.imbracaminte_id, e.image_url, e.product_name, e.description, e.price, e.color, e.size)
        string += returneazaProduse
    })
    afiseazaProd.innerHTML = string;
    targetPreview();
    countnrproduse();
    alegeMarimeCuloare();
    afiseazabutoanefiltrare()
    preluareButoaneCuloareSiMarime();
    closePreview();
    butoaneSortare();
}
function afisareProduseInPagina(id, gender, categorie, imbracaminte, image, brand, descriere, pret, culori, marime) {
    return `

                            <div class="container-produs" data-produs-id="${id}" data-gender="${gender}" data-category="${categorie}" data-imbracaminte="${imbracaminte}">
                                <div class="imagine-produs">
                                    <img src="${image}" alt="">
                            </div>
                            <div class=" header-container"><i class="fa-regular fa-star favorite"></i>
                                </div>
                                <div class="descriere">
                                    <h3 class="brand">
                                        ${brand}
                                    </h3>
                                    <p class="descriere-produs">
                                        ${descriere}
                                    </p>
                                    <h3 class="descriere-pret">
                                        <p>
                                            ${pret}
                                        </p>lei
                                    </h3>
                                    <ul class="descriere-culoare">
                                        ${culori}
                                    </ul>
                                    <div class="descriere-marime">
                                        ${marime}
                                    </div>
                                </div>
                            </div>

`
}

// Butoane sortare

function preluareButoaneCuloareSiMarime() {
    let containerProdus = document.querySelectorAll(".container-produs");
    containerProdus.forEach(container => {
        const marime = container.querySelector(".descriere-marime").innerHTML.trim().replace(/\s+/g, '');
        const marimiSplit = marime.split(",")
        marimiSplit.forEach(marimi => {
            size.add(marimi);
        })
    })
    let sortedSizes = Array.from(size).sort();
    const sorteazaMarime = document.querySelector(".S1");
    const buttons = sortedSizes.map(item => `<button>${item}</button>`).join("");
    sorteazaMarime.innerHTML = buttons.replace(/,/g, '');
    containerProdus.forEach(container => {
        const marime = container.querySelector(".descriere-culoare").innerHTML.trim().replace(/\s+/g, '');
        const marimiSplit = marime.split(",")
        marimiSplit.forEach(marimi => {
            size2.add(marimi);
        })
    })
    let sortedSizes2 = Array.from(size2).sort();
    const sorteazaMarime2 = document.querySelector(".S2");
    const buttons2 = sortedSizes2.map(item => `<button>${item}</button>`).join("");
    sorteazaMarime2.innerHTML = buttons2.replace(/,/g, '');

    sorteaza()
};
function sorteaza() {
    let array = [];
    let sorteazaDiv = document.querySelectorAll(".sorteaza button");
    sorteazaDiv.forEach(e => {
        e.addEventListener("click", function () {
            e.classList.toggle("marime-selectata");
            const value = e.innerHTML;
            const index = array.indexOf(value);
            if (index === -1) {
                array.push(value);
            } else {
                array.splice(index, 1);
            }

            let containerProdus = document.querySelectorAll(".container-produs");
            containerProdus.forEach(container => {
                const marimeprodus = container.querySelector(".descriere-marime");
                const culoareprodus = container.querySelector(".descriere-culoare");
                const marimiDisponibile = marimeprodus.innerHTML.trim().split(', ');
                const culoriDisponibile = culoareprodus.innerHTML.trim().split(', ')

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
function butoaneSortare() {
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
}
//Sortare


function countnrproduse() {
    let nrprodusevizibile = document.querySelectorAll(".container-produs").length;
    let nrprodusehide = document.querySelectorAll(".hide").length
    let nrproduse = nrprodusevizibile - nrprodusehide
    document.querySelector("#count-nr-produse").innerHTML = nrproduse;
}

//Buton filtrare
function afiseazabutoanefiltrare() {
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
}

function alegeMarimeCuloare() {
    let containerPreview = document.querySelectorAll(".preview-container-produs");
    containerPreview.forEach(e => {
        let descriereCuloare = e.querySelector("#descriere-culoare");
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
    let allContainerPreview = document.querySelectorAll(".preview-container-produs")
    allContainerPreview.forEach(el => {
        let inchidePreview = el.querySelector(".inchide-preview");
        inchidePreview.addEventListener("click", () => {
            const previewAfiseazaProd = document.querySelector(".preview-afiseaza-produse");
            previewAfiseazaProd.style.display = "none";
            el.style.display = "none";
        })
    })
}
function targetPreview() {
    let containerProdus = document.querySelectorAll(".container-produs");
    let afiseazaProd = document.querySelector(".preview-afiseaza-produse")
    containerProdus.forEach(card => {
        card.addEventListener("click", () => {
            afiseazaProd.style.display = "flex";
            let dataProdus = card.getAttribute("data-produs-id")
            let containerPreview = document.querySelectorAll(".preview-container-produs")
            containerPreview.forEach(preview => {
                let dataPreview = preview.getAttribute("data-target-id");
                if (dataPreview == dataProdus) {
                    if (window.matchMedia("(max-width: 500px)").matches){
                        preview.style.display = "block";
                    }
                    else{
                        preview.style.display = "flex";
                    }
                  
                }
            })
        })
    })
}


function targetFromExterior() {
    let url = new URLSearchParams(window.location.search);
    let getID = url.get("id")
    let containerPreview = document.querySelectorAll(".preview-container-produs")
    containerPreview.forEach(preview => {
        let dataPreview = preview.getAttribute("data-target-id");
        if (dataPreview == getID) {
            const afiseazaProd = document.querySelector(".preview-afiseaza-produse")
            afiseazaProd.style.display = "flex";
            preview.style.display = "flex";
        }
       
    })
    
    getDataProduse();

    targetPreview();
    countnrproduse();
    alegeMarimeCuloare();
    afiseazabutoanefiltrare()
    preluareButoaneCuloareSiMarime();
    closePreview();
    butoaneSortare();
}


// //  showResultByTargetCategory();
// function showResultByTargetCategory() {
//     let categorie = document.querySelectorAll(".lista-start h3");
//     categorie.forEach(e => {
//         e.addEventListener("click", x => {
//             let getCategorieAttribut = x.target.closest("div").getAttribute("data-gender-id");
//             const genderbyID = x.target.closest("div").closest("[data-gender-id]").getAttribute("data-gender-id");
//             console.log(genderbyID, getCategorieAttribut)
//             let ajax = new XMLHttpRequest();
//             ajax.addEventListener("readystatechange", () => {
//                 if (ajax.readyState == 4 && ajax.status == 200) {
//                     result(ajax.responseText);
//                     const afisarecategorie = document.querySelector(".count-nr-produse h1")
//                     afisarecategorie.innerHTML = e.innerHTML;

//                 }
//             });
//             ajax.open('POST', 'queryDB.php', true);
//             ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//             ajax.send('gender_id_click=' + genderbyID + "&categorie_id_click=" + getCategorieAttribut);
//         })
//     })
// }