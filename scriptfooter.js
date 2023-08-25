let inputemail=document.querySelector('input[type=email]')
let labelforemailinput = document.querySelector(" footer .newsletter .email label")
let caractereInputEmail=document.querySelector('#email');
inputemail.addEventListener("click", (e)=>{
    labelforemailinput.classList.add('label', 'clicked')
    inputemail.classList.add('label', 'border')

    })
document.addEventListener("click", (e)=>{
    if (!inputemail.contains(e.target) && !labelforemailinput.contains(e.target) && caractereInputEmail.value === ""){
        labelforemailinput.classList.remove('label', 'clicked');
        inputemail.classList.remove('label', 'border')
    }
})
let femeie=document.querySelector('#femeie');
let barbat=document.querySelector('#barbat');
femeie.addEventListener("click", ()=>{
    femeie.parentElement.style.color='#2b2b2b'
    barbat.parentElement.style.color="#bababa"
})
barbat.addEventListener("click", ()=>{
    barbat.parentElement.style.color = "#2b2b2b"
    femeie.parentElement.style.color="#bababa";
})
