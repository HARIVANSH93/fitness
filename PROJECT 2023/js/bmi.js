function openmodal(){
    debugger
    var bmi = document.getElementById("bmi");
    bmi.style.display= "block"
}
//var bmi = document.getElementById("bmi");
//var btn = document.getElementById("bmi-calc")
function close(){
   debugger
   var close = document.getElementsByClassName("close")[0];
   close.style.display = "none"
}
//btn.onclick = function(){
// debugger
// bmi.style.display = "block"}
//debugger
//var close = document.getElementsByClassName("close")[0];
//close.onxaclick = function(){
// bmi.style.display = "none"}

window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
 
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
 
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
 
    // If both input is valid, calculate the bmi
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
 
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}