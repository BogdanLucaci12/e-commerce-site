returnareCategorie()
function returnareCategorie(){
    let listaStarth3 = document.querySelectorAll(".lista-start h3");
   
    function handleH3Click(x) {
        let gendertargetH3 = x.target.closest("div").getAttribute("data-gender-id");
        console.log(gendertargetH3)
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                let categorie = JSON.parse(ajax.responseText);
                let categoryMap = new Map();
                for (const item of categorie) {
                    const categorieName = item.categorie_name;
                    const categorieID = item.categorie_id;
                    if (!categoryMap.has(categorieName)) {
                        categoryMap.set(categorieName, categorieID);
                    }
                }
                
                // console.log(categoryMap);
                const targetDiv = x.target.closest("div");
                categoryMap.forEach((categorieID, categorie) => {
                    const element = document.createElement("div");
                    const elementh5 = document.createElement("h5");
                    elementh5.classList.add(categorie);
                    elementh5.style.cursor = "pointer";
                    elementh5.textContent = categorie;
                    element.setAttribute("data-category-id", categorieID);
                    targetDiv.appendChild(element).appendChild(elementh5);
                });
                
            }
            
        });
        ajax.open("POST", "listaStartinterogare.php", true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("gender=" + gendertargetH3);
    }
   
    listaStarth3.forEach(e => {
        e.addEventListener("click", handleH3Click, { once: true });
        
    });
}
function showImbracaminte() {
    let listaStarth5Pantofi = document.querySelectorAll(".lista-start h5");

    function handleH5Click(x) {
        const categorih5Id = x.target.closest("div").getAttribute("data-category-id");
        const genderbyID = x.target.closest("div").closest("[data-gender-id]").getAttribute("data-gender-id");
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                const imbracaminte = JSON.parse(ajax.responseText);
                let imbracaminteMAP = new Map();
                for (const i of imbracaminte) {
                    const imbracaminteID = i.imbracaminte_id;
                    const imbracaminteName = i.imbracaminte_name
                        imbracaminteMAP.set(imbracaminteID, imbracaminteName)
                    
                }
                console.log(imbracaminteMAP)
                const targetedDiv = x.target.closest("div");
                console.log(targetedDiv)
                // targetedDiv.innerHTML=""
               
                imbracaminteMAP.forEach((name, id) => {
                   const divForimbracaminte=document.createElement("div")
                    const p = document.createElement("p");
                    p.innerHTML = name;
                    p.style.cursor = "pointer";
                    divForimbracaminte.setAttribute("data-imbracaminte-id", id);
                    targetedDiv.appendChild(divForimbracaminte).appendChild(p);;
                })
            }
        })
        ajax.open("POST", "listaStartinterogare.php", true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("category=" + categorih5Id + "&genderID=" + genderbyID);
    }
    listaStarth5Pantofi.forEach(x=>{
        x.addEventListener("click", handleH5Click, { once: true });
    })
}

    

// listaStart()
// function listaStart() {
//     let ajax = new XMLHttpRequest();
//     ajax.addEventListener("readystatechange", () => {
//         if (ajax.readyState == 4 && ajax.status == 200) {
//             genderLista(ajax.responseText);
//         }
//     });
//     ajax.open('POST', 'listaStartquery.php', true);
//     ajax.send();
// }

// function genderLista(data) {
//     let interogare = JSON.parse(data);
//     let string = "";
//     let afiseazaProd = document.querySelector(".lista-start");

//     interogare.forEach(e => {
//         const returneazaProduse = afisareGender(e.gender_id, e.gender_name);
//         string += returneazaProduse;
//     })
//     afiseazaProd.innerHTML = string;
//     function afisareGender(id, gender) {
//         return `<div data-gender="${id}"><h3>${gender}</h3></div>`
//     }
//     showCategory()
// }

// function showCategory() {
//     let listaStarth3 = document.querySelectorAll(".lista-start h3");
//     function handleH3Click(x) {
//         let gendertargetH3 = x.target.closest("div").getAttribute("data-gender");
//         let ajax = new XMLHttpRequest();
//         ajax.addEventListener("readystatechange", () => {
//             if (ajax.readyState == 4 && ajax.status == 200) {
//                 let categorie = JSON.parse(ajax.responseText);
//                 let categoryMap = new Map();
//                 for (const item of categorie) {
//                     const categorieName = item.categorie_name;
//                     const categorieID = item.categorie_id;
//                     if (!categoryMap.has(categorieName)) {
//                         categoryMap.set(categorieName, categorieID);
//                     }
//                 }
//                 // console.log(categoryMap);
//                 const targetDiv = x.target.closest("div");
//                 categoryMap.forEach((categorieID, categorie) => {
//                     const element = document.createElement("div");
//                     const elementh5 = document.createElement("h5");
//                     elementh5.classList.add(categorie);
//                     elementh5.style.cursor = "pointer";
//                     elementh5.textContent = categorie;
//                     element.setAttribute("data-category-id", categorieID);
//                     targetDiv.appendChild(element).appendChild(elementh5);
//                 });
//             }
//             showImbracaminte();
//         });
//         ajax.open("POST", "listaStartinterogare.php", true);
//         ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         ajax.send("gender=" + gendertargetH3);
//     }
   
//     listaStarth3.forEach(e => {
//         e.addEventListener("click", handleH3Click, { once: true });
//     });
// }
// function showImbracaminte() {
//     let listaStarth5Pantofi = document.querySelector(".Pantofi");

//     function handleH5Click(x) {
//         const categorih5Id = x.target.closest("div").getAttribute("data-category-id");
//         const genderbyID = x.target.closest("div").closest("[data-gender]").getAttribute("data-gender");
//         let ajax = new XMLHttpRequest();
//         ajax.addEventListener("readystatechange", () => {
//             if (ajax.readyState == 4 && ajax.status == 200) {
//                 const imbracaminte = JSON.parse(ajax.responseText);
//                 let imbracaminteMAP = new Map();
//                 for (const i of imbracaminte) {
//                     const imbracaminteID = i.imbracaminte_id;
//                     const imbracaminteName = i.imbracaminte_name
//                         imbracaminteMAP.set(imbracaminteID, imbracaminteName)
                    
//                 }
//                 console.log(imbracaminteMAP)
//                 const targetedDiv = x.target.closest("div");
//                 console.log(targetedDiv)
//                 // targetedDiv.innerHTML=""
               
//                 imbracaminteMAP.forEach((name, id) => {
//                    const divForimbracaminte=document.createElement("div")
//                     const p = document.createElement("p");
//                     p.innerHTML = name;
//                     p.style.cursor = "pointer";
//                     divForimbracaminte.setAttribute("data-imbracaminte-id", id);
//                     targetedDiv.appendChild(divForimbracaminte).appendChild(p);;
//                 })
//             }
//         })
//         ajax.open("POST", "listaStartinterogare.php", true);
//         ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         ajax.send("category=" + categorih5Id + "&genderID=" + genderbyID);
//     }
//     listaStarth5Pantofi.addEventListener("click", handleH5Click, {once: true});
//     }
