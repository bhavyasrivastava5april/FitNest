function calculateBMI() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid height and weight.";
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Healthy Weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obesity";
    }
document.getElementById("result").innerHTML =
    `<div class="alert alert-success">
        Your BMI is <strong>${bmi.toFixed(1)}</strong> — ${category}
    </div>`;
}