function getWorkout() {

    const goal = document.getElementById("goal").value;
    const level = document.getElementById("level").value;
    const duration = document.getElementById("duration").value;

    let workoutTitle;
    let exercises = [];

    if (goal === "weightLoss") {

        workoutTitle = "Weight Loss Workout";

        if (level === "beginner") {
            exercises = [
                "Brisk walking — 5 minutes",
                "Bodyweight squats — 10 reps",
                "Wall push-ups — 10 reps",
                "Marching in place — 2 minutes",
                "Light stretching — 5 minutes"
            ];
        }
        else if (level === "intermediate") {
            exercises = [
                "Brisk walking — 5 minutes",
                "Bodyweight squats — 15 reps",
                "Reverse lunges — 10 reps each leg",
                "Jumping jacks — 30 seconds",
                "Mountain climbers — 20 reps"
            ];
        }
        else {
            exercises = [
                "Jogging — 5 minutes",
                "Squats — 20 reps",
                "Jumping lunges — 10 reps each leg",
                "Burpees — 10 reps",
                "Mountain climbers — 30 seconds",
                "High knees — 30 seconds"
            ];
        }

    }

    else if (goal === "weightGain") {

        workoutTitle = "Healthy Weight Gain Workout";

        if (level === "beginner") {
            exercises = [
                "Bodyweight squats — 10 reps",
                "Wall push-ups — 10 reps",
                "Glute bridges — 12 reps",
                "Bird-dog — 8 reps each side",
                "Light stretching — 5 minutes"
            ];
        }
        else if (level === "intermediate") {
            exercises = [
                "Squats — 12 reps",
                "Push-ups — 10 reps",
                "Reverse lunges — 10 reps each leg",
                "Glute bridges — 15 reps",
                "Bodyweight rows — 10 reps"
            ];
        }
        else {
            exercises = [
                "Squats — 12 reps",
                "Push-ups — 15 reps",
                "Lunges — 12 reps each leg",
                "Rows — 12 reps",
                "Glute bridges — 15 reps",
                "Progressive resistance exercises"
            ];
        }

    }

    else if (goal === "muscleGain") {

        workoutTitle = "Muscle Building Workout";

        if (level === "beginner") {
            exercises = [
                "Bodyweight squats — 10 reps",
                "Assisted push-ups — 10 reps",
                "Glute bridges — 12 reps",
                "Assisted lunges — 8 reps each leg",
                "Plank — 20 seconds"
            ];
        }
        else if (level === "intermediate") {
            exercises = [
                "Squats — 12 reps",
                "Push-ups — 12 reps",
                "Lunges — 10 reps each leg",
                "Rows — 12 reps",
                "Plank — 30 seconds"
            ];
        }
        else {
            exercises = [
                "Squats — 15 reps",
                "Push-ups — 15 reps",
                "Lunges — 12 reps each leg",
                "Rows — 12 reps",
                "Pull-ups — 6–10 reps",
                "Core exercises — 30 seconds"
            ];
        }

    }

    else {

        workoutTitle = "General Fitness Workout";

        if (level === "beginner") {
            exercises = [
                "Walking — 5 minutes",
                "Bodyweight squats — 10 reps",
                "Wall push-ups — 10 reps",
                "Marching in place — 2 minutes",
                "Stretching — 5 minutes"
            ];
        }
        else if (level === "intermediate") {
            exercises = [
                "Jogging — 5 minutes",
                "Squats — 15 reps",
                "Push-ups — 10 reps",
                "Lunges — 10 reps each leg",
                "Core exercises — 30 seconds"
            ];
        }
        else {
            exercises = [
                "Running — 5 minutes",
                "Squats — 20 reps",
                "Push-ups — 15 reps",
                "Lunges — 12 reps each leg",
                "Burpees — 10 reps",
                "Core exercises — 45 seconds"
            ];
        }
    }

    let exerciseList = "";

    exercises.forEach(function(exercise) {
        exerciseList += `<li class="mb-2">${exercise}</li>`;
    });

    document.getElementById("workoutResult").innerHTML =
        `<div class="card border-success shadow-sm p-3">

            <h4 class="alert-heading">
                ${workoutTitle}
            </h4>

            <p>
                <strong>Duration:</strong> ${duration} minutes
            </p>

            <hr>

            <p class="fw-bold mb-2">
                Suggested Exercises:
            </p>

            <ul class="mb-3">
                ${exerciseList}
            </ul>

            <p class="mb-0 small">
                <strong>Note:</strong> Start at a comfortable intensity
                and stop if you experience pain, dizziness, or unusual discomfort.
            </p>

        </div>`;
}