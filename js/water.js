function calculateWater() {

    const weight = parseFloat(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;

    if (isNaN(weight) || weight <= 0) {
        document.getElementById("result").innerHTML =
            `<div class="alert alert-danger">
                Please enter a valid weight.
            </div>`;
        return;
    }

    let waterMl = weight * 30;

    if (activity === "moderate") {
        waterMl += 350;
    }
    else if (activity === "high") {
        waterMl += 700;
    }

    const waterLitres = waterMl / 1000;
    const glasses = Math.round(waterMl / 250);

    document.getElementById("result").innerHTML =
    `<div class="alert alert-success">
        <h5 class="alert-heading">
            Estimated Daily Fluid Intake
        </h5>

        <p class="mb-1">
            <strong>${waterLitres.toFixed(1)} litres/day</strong>
        </p>

        <p class="mb-0">
            This is a general estimate. Individual fluid needs can vary.
        </p>
    </div>`;
}