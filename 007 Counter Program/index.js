// Counter Program

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick =function(){
    count ++;
    countlable.textContent = count;
}
decreasebtn.onclick = function(){
    decreasebtn = document.getElementById("countlable").textContent --;
}
resetbtn.onclick = function(){
    count = 0;
    countlable.textContent = count;
}
