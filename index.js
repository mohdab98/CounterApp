let count = 0 ;
let countEL = document.getElementById("count-el")
let saveProg = document.getElementById("saveProg")
function increment() {
    count += 1
    countEL.innerText = count 
}
function save() {
    saveProg.textContent += count + " - "
    count = 0 ;
    countEL.textContent = count ;
}