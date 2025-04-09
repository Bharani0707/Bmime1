function cal(){
    let weightInput = prompt("Enter your weight in kg:");
    let hightInput = prompt("Enter your height in cm:");

    let weight= parseFloat(weightInput);
    let hightcm = parseFloat(hightInput);

    //formula for bmi
    // bmi = weight / (height * height)
     let height = hightcm/100;

    let bmi = weight / (height * height);

    let result = document.getElementById("result").innerHTML = `your Bmi is: ${bmi.toFixed(2)}`;
    

}