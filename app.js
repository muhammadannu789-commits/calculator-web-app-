function setInputValue(value){
    let input = document.getElementById("input");
    // console.log("setInputValue", input);
    input.value += value;
}
function calAns(){
    let input = document.getElementById("input");
    let ans = eval(input.value);
    console.log("ans", ans);
    input.value = ans;
}
function allClr(){
    let input = document.getElementById("input");
    input.value = "";

}

function clrOne(){
    let input = document.getElementById("input");
    input.value = input.value.slice(0, -1)

}
