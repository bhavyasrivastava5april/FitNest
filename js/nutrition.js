function getNutrition() {

    const goal = document.getElementById("goal").value;
    const diet = document.getElementById("diet").value;
    const meal = document.getElementById("meal").value;

    // Validate selections
    if (!goal || !diet || !meal) {

        document.getElementById("nutritionResult").innerHTML =
            `<div class="alert alert-danger">
                Please select a goal, diet preference and meal.
            </div>`;

        return;
    }


    let suggestions = [];


    // Food suggestions
    if (meal === "breakfast") {

        if (goal === "weightLoss") {

            suggestions = diet === "vegetarian"
                ? [
                    "Oats with fruit",
                    "Vegetable poha",
                    "Greek yogurt with berries"
                ]
                : [
                    "Eggs with whole-grain toast",
                    "Omelette with vegetables",
                    "Greek yogurt with fruit"
                ];
        }

        else if (goal === "weightGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Oats with banana and nuts",
                    "Paneer sandwich",
                    "Peanut butter toast with milk"
                ]
                : [
                    "Egg and cheese sandwich",
                    "Oats with milk and nuts",
                    "Eggs with whole-grain toast"
                ];
        }

        else if (goal === "muscleGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Paneer and vegetable sandwich",
                    "Oats with milk and nuts",
                    "Greek yogurt with fruit"
                ]
                : [
                    "Eggs with whole-grain toast",
                    "Omelette with vegetables",
                    "Greek yogurt with nuts"
                ];
        }

        else {

            suggestions = diet === "vegetarian"
                ? [
                    "Vegetable poha",
                    "Oats with fruit",
                    "Idli with sambar"
                ]
                : [
                    "Eggs with toast",
                    "Vegetable omelette",
                    "Idli with sambar"
                ];
        }

    }


    else if (meal === "lunch") {

        if (goal === "weightLoss") {

            suggestions = diet === "vegetarian"
                ? [
                    "Dal with vegetables and salad",
                    "Roti with mixed vegetables",
                    "Paneer with salad"
                ]
                : [
                    "Grilled chicken with vegetables",
                    "Chicken salad with whole grains",
                    "Fish with vegetables"
                ];
        }

        else if (goal === "weightGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Rice, dal and paneer",
                    "Roti with paneer and vegetables",
                    "Rajma rice with yogurt"
                ]
                : [
                    "Chicken rice bowl",
                    "Chicken with rice and vegetables",
                    "Fish with rice and yogurt"
                ];
        }

        else if (goal === "muscleGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Dal, rice and paneer",
                    "Chickpea bowl with yogurt",
                    "Paneer with roti and vegetables"
                ]
                : [
                    "Chicken, rice and vegetables",
                    "Fish with rice and salad",
                    "Chicken with roti and vegetables"
                ];
        }

        else {

            suggestions = diet === "vegetarian"
                ? [
                    "Dal with rice and vegetables",
                    "Roti with vegetables",
                    "Chickpea salad"
                ]
                : [
                    "Chicken with rice and vegetables",
                    "Fish with rice",
                    "Chicken salad"
                ];
        }

    }


    else if (meal === "dinner") {

        if (goal === "weightLoss") {

            suggestions = diet === "vegetarian"
                ? [
                    "Vegetable soup with salad",
                    "Dal with vegetables",
                    "Paneer and vegetable bowl"
                ]
                : [
                    "Grilled chicken with vegetables",
                    "Fish with salad",
                    "Chicken soup with vegetables"
                ];
        }

        else if (goal === "weightGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Paneer with roti",
                    "Dal rice with vegetables",
                    "Khichdi with yogurt"
                ]
                : [
                    "Chicken with rice",
                    "Fish with potatoes and vegetables",
                    "Chicken with roti"
                ];
        }

        else if (goal === "muscleGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Paneer with roti and vegetables",
                    "Dal rice with yogurt",
                    "Chickpea and paneer bowl"
                ]
                : [
                    "Chicken with rice and vegetables",
                    "Fish with rice",
                    "Chicken with roti and salad"
                ];
        }

        else {

            suggestions = diet === "vegetarian"
                ? [
                    "Dal with roti and vegetables",
                    "Vegetable khichdi",
                    "Paneer with vegetables"
                ]
                : [
                    "Chicken with vegetables",
                    "Fish with rice",
                    "Chicken with roti"
                ];
        }

    }


    else {

        if (goal === "weightLoss") {

            suggestions = diet === "vegetarian"
                ? [
                    "Fruit",
                    "Roasted chickpeas",
                    "Greek yogurt"
                ]
                : [
                    "Boiled eggs",
                    "Greek yogurt",
                    "Fruit"
                ];
        }

        else if (goal === "weightGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Banana with peanut butter",
                    "Nuts and dried fruit",
                    "Milk smoothie"
                ]
                : [
                    "Boiled eggs with toast",
                    "Milk smoothie",
                    "Yogurt with nuts"
                ];
        }

        else if (goal === "muscleGain") {

            suggestions = diet === "vegetarian"
                ? [
                    "Greek yogurt with nuts",
                    "Paneer cubes",
                    "Milk and banana smoothie"
                ]
                : [
                    "Boiled eggs",
                    "Greek yogurt with nuts",
                    "Chicken sandwich"
                ];
        }

        else {

            suggestions = diet === "vegetarian"
                ? [
                    "Fruit",
                    "Roasted makhana",
                    "Nuts"
                ]
                : [
                    "Boiled eggs",
                    "Yogurt",
                    "Fruit and nuts"
                ];
        }
    }


    // User-friendly goal name
    let goalName;

    if (goal === "weightLoss") {
        goalName = "Weight Loss";
    }
    else if (goal === "weightGain") {
        goalName = "Weight Gain";
    }
    else if (goal === "muscleGain") {
        goalName = "Muscle Gain";
    }
    else {
        goalName = "General Fitness";
    }


    // Goal explanation
    let goalMessage;

    if (goal === "weightLoss") {

        goalMessage =
            "Choose balanced meals with vegetables, whole grains and protein-rich foods.";

    }
    else if (goal === "weightGain") {

        goalMessage =
            "Focus on nutrient-dense foods that provide enough energy and protein.";

    }
    else if (goal === "muscleGain") {

        goalMessage =
            "Include adequate protein and balanced meals to support muscle development.";

    }
    else {

        goalMessage =
            "Aim for a balanced meal containing a variety of nutritious foods.";
    }


    // User-friendly meal name
    let mealName;

    if (meal === "breakfast") {
        mealName = "Breakfast";
    }
    else if (meal === "lunch") {
        mealName = "Lunch";
    }
    else if (meal === "dinner") {
        mealName = "Dinner";
    }
    else {
        mealName = "Snacks";
    }


    // User-friendly diet name
    let dietName;

    if (diet === "vegetarian") {
        dietName = "Vegetarian";
    }
    else {
        dietName = "Non-Vegetarian";
    }


    // Create food list
    let suggestionList = "";

    suggestions.forEach(function(food) {

        suggestionList +=
            `<li class="mb-2">${food}</li>`;

    });


    // Display result
    document.getElementById("nutritionResult").innerHTML =

        `<div class="card border-success shadow-sm p-3">

            <h4 class="text-success mb-3">
                Food Suggestions
            </h4>

            <p class="mb-2">
                <strong>Goal:</strong> ${goalName}
            </p>

            <p class="mb-2">
                <strong>Diet:</strong> ${dietName}
            </p>

            <p>
                <strong>Meal:</strong> ${mealName}
            </p>

            <hr>

            <p class="fw-bold mb-2">
                Recommended Foods:
            </p>

            <ul class="mb-3">
                ${suggestionList}
            </ul>

            <div class="alert alert-light mb-3">

                <strong>Why this helps:</strong><br>

                ${goalMessage}

            </div>

            <p class="small text-muted mb-0">
                These are general food suggestions and are not
                personalized medical or dietary advice.
            </p>

        </div>`;
}