const counter = document.querySelector("#count-el")
const btn1 = document.querySelector("#inrem-el")
const btn2 = document.querySelector("#save-el")
const SAVE = document.querySelector("#SAV-el")


let count = 0

btn1.addEventListener('click', function () {
    count = count + 1;
    counter.textContent = count 
});

btn2.addEventListener('click', function () {
    SAVE.textContent += count + " - "
    counter.textContent = 0
    count = 0;
});


