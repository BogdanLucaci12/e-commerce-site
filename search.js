
let text = document.querySelector("#search")

let resultBar = document.querySelector(".result-bar");
console.log(text.value)
text.addEventListener("input", () => {
    getData(text.value);
});
const getData = (textValue) => {
    if (textValue.trim() == "" ) {
        resultBar.style.display = "none";
        closeResultBar()
    }
    else {
        resultBar.style.display = "block";
        let form = new FormData();
        form.append('text', textValue);
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", e => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //result are back
                handleResult(ajax.responseText);
            }
        })
        ajax.open('post', 'search.php', true);
        ajax.send(form);
    }
}
function handleResult(result) {
    // console.log(result);
    let obj = JSON.parse(result);
    let str = "";
    let containerAfisareProdus = document.querySelector(".container-afisare-result");
    obj.forEach(item => {
        let containerProdus = returnareContainer(item[0], item[7], item[2], item[6], item[5]);
        str += containerProdus;
    });
    containerAfisareProdus.innerHTML = str;
    getProductid()
}
function returnareContainer(id, imagine, brand, descriere, pret) {
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
        console.log(f)
        if(!searchBar.contains(f.target)){
             resultBar.style.display="none";
        }
    })
}