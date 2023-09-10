let text2 = document.querySelector("#search-brand")
let resultBar2 = document.querySelector(".meniutoatesporturile .afiseaza-brand");
text2.addEventListener("input", () => {
    getData2(text2.value);
    console.log(text2.value);
});
const getData2 = (textValue) => {
    if (textValue.trim() == "") {
        resultBar2.style.display = "none";
       
    }
    else {
        resultBar2.style.display = "block";
        let form = new FormData();
        form.append('text', textValue);
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("readystatechange", e => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                
                handleResult(ajax.responseText);
            }
        })
        ajax.open('post', 'search-brand.php', true);
        ajax.send(form);
    }
}
function handleResult(result) {
    // console.log(result);
    let obj = JSON.parse(result);
    let str = "";
    let containerAfisareBrand = document.querySelector(".meniutoatesporturile .afiseaza-brand");
    obj.forEach(item => {
        let containerProdus = returnareContainer(item[0],item[1]);
        str += containerProdus;
    });
    containerAfisareBrand.innerHTML = str;
   
}
function returnareContainer(brand_id, brand) {
    return `
         <h3 data-brand-id=${brand_id}>${brand}</h3>
`
}
