function showOtherCondition() {

    const condition = document.getElementById("condition").value;
    const otherCondition = document.getElementById("otherCondition");

    if (condition === "other") {

        otherCondition.classList.remove("d-none");

    } else {

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
            "Regular physical activity can support blood glucose management and overall cardiovascular health.",
            "Choose balanced meals with vegetables, whole grains and appropriate protein sources.",
            "Stay hydrated and maintain regular activity according to your abilities.",
            "If you have diabetes, follow your healthcare professional's guidance for blood glucose monitoring, medication and exercise."
        ];
    }


    // High Blood Pressure
    else if (condition === "bloodPressure") {

        conditionName = "High Blood Pressure";

        recommendations = [
            "Regular physical activity can support cardiovascular health and help manage blood pressure.",
            "Choose a heart-healthy eating pattern that includes vegetables, fruits, whole grains and other nutrient-rich foods.",
            "Be mindful of excessive sodium intake, particularly from highly processed and packaged foods.",
            "If you have high blood pressure, discuss appropriate exercise intensity and treatment with your healthcare professional."
        ];
    }


    // PCOS
    else if (condition === "pcos") {

        conditionName = "PCOS";

        recommendations = [
            "Regular physical activity can support overall health and metabolic wellbeing.",
            "Choose sustainable physical activities that fit your preferences, abilities and goals.",
            "Follow a balanced eating pattern rather than relying on unnecessarily restrictive diets.",
            "Consistent sleep and healthy lifestyle habits can support overall wellbeing."
        ];
    }


    // Joint Problems
    else if (condition === "jointProblems") {

        conditionName = "Joint Problems";

        recommendations = [
            "Consider low-impact activities such as walking, swimming or gentle cycling if they are comfortable for you.",
            "Start gradually and choose activities that match your abilities.",
            "Avoid movements that cause or worsen pain.",
            "If joint pain is persistent, severe or limiting your normal activities, seek professional guidance."
        ];
    }


    // General Wellness
    else if (condition === "general") {

        conditionName = "General Wellness";

        recommendations = [
            "Stay physically active regularly according to your abilities.",
            "Include a variety of nutritious foods as part of a balanced eating pattern.",
            "Stay hydrated throughout the day.",
            "Maintain consistent sleep and healthy lifestyle habits."
        ];
    }


    // Other
    
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

    const concern = otherText.toLowerCase();


    // Headache
    if (
        concern.includes("headache") ||
        concern.includes("head ache")
    ) {

        recommendations = [

            "Drink enough fluids and avoid skipping regular meals.",
            
            "Rest and try relaxation techniques if stress may be contributing.",
            
            "Reduce prolonged screen or eye strain if it seems to make the headache worse.",
            
            "Keep a record of recurring headaches, including possible triggers and other symptoms."
        ];

    }


    // Unknown concern
    else {

        recommendations = [

            "FitNest does not currently provide specific guidance for this health concern.",

            "Avoid making significant changes to your exercise, diet or medication based only on general online information.",

            "Consult a qualified healthcare professional for advice specific to your concern."

        ];
    }
}


    // Create recommendation list
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

                <strong>Important:</strong><br>

                This information is for general educational purposes
                and is not a diagnosis or personalized medical advice.
                If you have a medical condition, consult a qualified
                healthcare professional before making significant
                changes to your exercise or diet.

            </div>

        </div>`;
}