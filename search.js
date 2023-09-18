
let text = document.querySelector("#search")
let resultBar = document.querySelector(".result-bar");
text.addEventListener("input", () => {
    getData(text.value);
});
const getData = (textValue2) => {
    if (textValue2.trim() == "" ) {
        resultBar.style.display = "none";
        closeResultBar()
       
    }
    else {
        resultBar.style.display = "block";
        let form = new FormData();
        form.append('text', textValue2);
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", e => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //result are back
                handleResult2(ajax.responseText);
            }
        })
        ajax.open('post', 'search.php', true);
        ajax.send(form);
    }
}
function handleResult2(result2) {
   
    let obj2 = JSON.parse(result2);
    let str2 = "";
    let containerAfisareProdus = document.querySelector(".container-afisare-result");
    obj2.forEach(item => {
        let containerProdus = returnareContainer2(item[0], item[7], item[2], item[6], item[5]);
        str2 += containerProdus;
    });
    containerAfisareProdus.innerHTML = str2;
    getProductid()
}
function returnareContainer2(id, imagine, brand, descriere, pret) {
    return `
          <div class="rezultat" data-result-id=${id}>
          <div class="result-img"><img src="${imagine}""></div>
          <div class="result-descriere">
            <div class="result-description">${descriere}</div>
            <div class="result-brand">${brand}</div>
              <div class="pret">${pret}<p>lei</p></div>
            </div>
          </div>
`
}

document.addEventListener("DOMContentLoaded", function () {
    getProductid();
})
function getProductid() {
    let rezultat = document.querySelectorAll(".rezultat");
    rezultat.forEach(e => {
        e.addEventListener("click", (x) => {
            let id = e.getAttribute("data-result-id");
            console.log(id);
            window.location.href = `produse.php?id=${id}`;
        })
    })
}
closeResultBar()
function closeResultBar(){
    const searchBar=document.querySelector(".search-bar");
    document.addEventListener("click", f=>{
        if(!searchBar.contains(f.target)){
             resultBar.style.display="none";
        }
    })
}