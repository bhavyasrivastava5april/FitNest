function showOtherCondition() {

    const condition = document.getElementById("condition").value;
    const otherCondition = document.getElementById("otherCondition");

    if (condition === "other") {
        otherCondition.classList.remove("d-none");
    } 
    else {
        otherCondition.classList.add("d-none");
        document.getElementById("otherText").value = "";
    }
}


function getHealthRecommendation() {

    const condition = document.getElementById("condition").value;
    const otherText = document.getElementById("otherText").value.trim();

    let conditionName;
    let recommendations = [];


    // Diabetes
    if (condition === "diabetes") {

        conditionName = "Diabetes";

        recommendations = [
            "Include regular physical activity such as walking or other moderate exercise.",
            "Choose balanced meals containing vegetables, whole grains and appropriate protein sources.",
            "Stay hydrated throughout the day.",
            "Follow the blood glucose monitoring and medication plan recommended by your healthcare professional."
        ];
    }


    // High Blood Pressure
    else if (condition === "bloodPressure") {

        conditionName = "High Blood Pressure";

        recommendations = [
            "Regular moderate activities such as walking or cycling can support cardiovascular health.",
            "Include fruits, vegetables and other nutrient-rich foods in your diet.",
            "Be mindful of excessive sodium intake.",
            "Follow your healthcare professional's advice regarding exercise intensity and blood pressure management."
        ];
    }


    // PCOS
    else if (condition === "pcos") {

        conditionName = "PCOS";

        recommendations = [
            "Regular physical activity can support overall fitness and metabolic health.",
            "Include a combination of aerobic activity and strength exercises.",
            "Choose balanced meals containing vegetables, whole grains and protein-rich foods.",
            "Maintain consistent sleep and stress-management habits."
        ];
    }


    // Joint Problems
    else if (condition === "jointProblems") {

        conditionName = "Joint Problems";

        recommendations = [
            "Consider low-impact activities such as walking, swimming or gentle cycling.",
            "Warm up before exercising and increase activity gradually.",
            "Avoid movements that cause or worsen joint pain.",
            "Seek professional guidance if joint pain is persistent or severe."
        ];
    }


    // General Wellness
    else if (condition === "general") {

        conditionName = "General Wellness";

        recommendations = [
            "Stay physically active regularly.",
            "Include a combination of cardiovascular, strength and flexibility exercises.",
            "Eat a varied and balanced diet.",
            "Stay hydrated and maintain a consistent sleep routine."
        ];
    }


    // Other
    else {

        if (otherText === "") {

            document.getElementById("healthResult").innerHTML =
                `<div class="alert alert-danger">
                    Please enter your health concern.
                </div>`;

            return;
        }

        conditionName = otherText;

        recommendations = [
            "FitNest does not currently have specific guidance for this health concern.",
            "Consult a qualified healthcare professional before making significant changes to your exercise or diet.",
            "If you have been given an exercise, medication or dietary plan, follow the instructions provided by your healthcare professional."
        ];
    }


    // Convert recommendation array into HTML list
    let recommendationList = "";

    recommendations.forEach(function(recommendation) {

        recommendationList +=
            `<li class="mb-2">${recommendation}</li>`;

    });


    // Display result
    document.getElementById("healthResult").innerHTML =
        `<div class="card border-success shadow-sm p-3">

            <h4 class="text-success mb-3">
                Health & Wellness Guidance
            </h4>

            <p>
                <strong>Selected Concern:</strong>
                ${conditionName}
            </p>

            <hr>

            <p class="fw-bold mb-2">
                General Recommendations:
            </p>

            <ul class="mb-3">
                ${recommendationList}
            </ul>

            <div class="alert alert-warning mb-0">

                <strong>Important:</strong>
                This information is for general educational purposes
                and is not a diagnosis or personalized medical advice.

            </div>

        </div>`;
}