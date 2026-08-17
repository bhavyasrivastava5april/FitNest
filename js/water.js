function calculateWater() {

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const activity =
        document.getElementById("activity").value;


    // Validate weight
    if (isNaN(weight) || weight < 10 || weight > 300) {

        document.getElementById("result").innerHTML =
            `<div class="alert alert-danger">
                Please enter a weight between 10 kg and 300 kg.
            </div>`;

        return;
    }


    // Base water requirement
    let waterMl = weight * 30;


    // Add extra fluid based on activity
    if (activity === "moderate") {

        waterMl += 350;

    }

    else if (activity === "high") {

        waterMl += 700;
    }


    // Convert to litres
    const waterLitres = waterMl / 1000;


    // Approximate 250 mL glasses
    const glasses = Math.round(waterMl / 250);


    // Display result
    document.getElementById("result").innerHTML =

        `<div class="alert alert-success">

            <h5 class="alert-heading">
                Estimated Daily Fluid Intake
            </h5>

            <p class="mb-2">
                <strong>${waterLitres.toFixed(1)} litres/day</strong>
            </p>

            <p class="mb-2">
                Approximately
                <strong>${glasses} glasses</strong>
                (250 mL each)
            </p>

            <p class="mb-0">
                This is a general estimate. Individual fluid needs
                can vary based on factors such as climate, diet,
                activity and health.
            </p>

        </div>`;
}