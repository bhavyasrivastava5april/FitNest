function changeHeightUnit() {

    const unit = document.getElementById("heightUnit").value;

    const cmHeight = document.getElementById("cmHeight");
    const feetHeight = document.getElementById("feetHeight");

    if (unit === "ft") {

        cmHeight.classList.add("d-none");
        feetHeight.classList.remove("d-none");

    } else {

        cmHeight.classList.remove("d-none");
        feetHeight.classList.add("d-none");
    }
}


function calculateBMI() {

    const unit = document.getElementById("heightUnit").value;
    const weight = parseFloat(document.getElementById("weight").value);

    let heightInMeters;


    // Check weight
    if (isNaN(weight) || weight < 10 || weight > 300) {

        showError("Please enter a weight between 10 kg and 300 kg.");
        return;
    }


    // Height in centimeters
    if (unit === "cm") {

        const height =
            parseFloat(document.getElementById("height").value);

        if (isNaN(height) || height < 50 || height > 250) {

            showError("Please enter a height between 50 cm and 250 cm.");
            return;
        }

        heightInMeters = height / 100;
    }


    // Height in feet and inches
    else {

        const feet =
            parseFloat(document.getElementById("feet").value);

        const inches =
            parseFloat(document.getElementById("inches").value);


        if (isNaN(feet) || feet < 1 || feet > 8) {

            showError("Please enter feet between 1 and 8.");
            return;
        }


        if (isNaN(inches) || inches < 0 || inches >= 12) {

            showError("Please enter inches between 0 and 11.");
            return;
        }


        const totalInches =
            (feet * 12) + inches;

        heightInMeters =
            totalInches * 0.0254;
    }


    // Calculate BMI
    const bmi =
        weight / (heightInMeters * heightInMeters);


    let category;
    let alertClass;
    let message;


    // BMI Category
    if (bmi < 18.5) {

        category = "Underweight";
        alertClass = "alert-warning";

        message =
            "Consider maintaining a balanced and nutritious diet.";

    }

    else if (bmi < 25) {

        category = "Healthy Weight";
        alertClass = "alert-success";

        message =
            "Your BMI is within the healthy range.";

    }

    else if (bmi < 30) {

        category = "Overweight";
        alertClass = "alert-warning";

        message =
            "Consider maintaining a balanced diet and regular physical activity.";

    }

    else {

        category = "Obesity";
        alertClass = "alert-danger";

        message =
            "Consider speaking with a healthcare professional about your health goals.";
    }


    // Display result
    document.getElementById("result").innerHTML =

        `<div class="alert ${alertClass}">

            <h5 class="alert-heading">
                Your BMI: ${bmi.toFixed(1)}
            </h5>

            <strong>${category}</strong>

            <p class="mb-0">
                ${message}
            </p>

        </div>`;
}


function showError(message) {

    document.getElementById("result").innerHTML =

        `<div class="alert alert-danger">

            ${message}

        </div>`;
}