import Storage from "./Storage";

class CalorieTracker {
  constructor(caloLimit, caloTotal, repas = [], activity = []) {
    this.caloLimit = caloLimit;
    this.caloTotal = caloTotal;
    this.repas = repas; // Array of Meal objects
    this.activity = activity; // Array of Workout objects
  }
  addMeal(meal) {
    this.repas.push(meal);
    this.caloTotal += meal.calories;
  }
  addWorkout(workout) {
    //object workout of type Workout
    this.activity.push(workout);
  }
  removeMeal(mealId) {
    const mealIndex = this.repas.findIndex((meal) => meal.id === mealId);
    if (mealIndex !== -1) {
      this.caloTotal -= this.repas[mealIndex].calories;
      this.repas.splice(mealIndex, 1);
    }
  }
  removeWorkout(workoutId) {
    const workoutIndex = this.activity.findIndex(
      (workout) => workout.id === workoutId
    );
    if (workoutIndex !== -1) {
      this.activity.splice(workoutIndex, 1);
    }
  }
  displayMeals() {
    const mealList = document.querySelector(".meals-list");
    mealList.innerHTML = ""; // Clear the list before displaying
    this.repas.forEach((meal) => {
      const mealItem = document.createElement("li");
      mealItem.innerHTML = `${meal.nom}: ${meal.calories} calories`;
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.addEventListener("click", () => {
        this.removeMeal(meal.id);
        Storage.saveToLocalStorage("appData", this); // Save updated state to local storage
        this.displayMeals(); // Display updated meals
      });
      mealItem.appendChild(removeButton); // Append the remove button to the meal item
      mealList.appendChild(mealItem);
    });
  }
  displayWorkouts() {
    const workoutList = document.querySelector(".workout-list");
    workoutList.innerHTML = ""; // Clear the list before displaying
    this.activity.forEach((workout) => {
      const workoutItem = document.createElement("li");
      workoutItem.innerHTML = `${workout.nom}: ${workout.calories} calories`;
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.addEventListener("click", () => {
        this.removeWorkout(workout.id);
        Storage.saveToLocalStorage("appData", this); // Save updated state to local storage
        this.displayWorkouts(); // Display updated workouts
      });
      workoutItem.appendChild(removeButton); // Append the remove button to the workout item
      workoutList.appendChild(workoutItem);
    });
  }
  displayStatistics() {
    const intake = document.querySelector(".calorieIntake");
    const burned = document.querySelector(".calorieBurned");
    const remain = document.querySelector(".calorieRemain");
    const barProgress = document.querySelector(".progression");
    const progress = document.querySelector("#progress");
    const progressBar = document.querySelector(".progressBar");

    const calorieBurned = this.activity.reduce(
      (acc, workout) => acc + workout.calories,
      0
    );

    intake.innerHTML = `Calories ingérées: ${this.caloTotal}`;
    burned.innerHTML = `Calories dépensées: ${calorieBurned}`;
    remain.innerHTML = `Calories restantes: ${
      this.caloLimit - (this.caloTotal - calorieBurned)
    }`;
    // Calculate the progress percentage
    barProgress.value =
      ((this.caloTotal - calorieBurned) / this.caloLimit) * 100;
    progressBar.style.width = `${
      ((this.caloTotal - calorieBurned) / this.caloLimit) * 100 * 2
    }px`;
    // Set the color of the progress bar based on the percentage
    if (barProgress.value > 90) {
      progressBar.style.backgroundColor = "red"; // Over limit
    } else if (barProgress.value >= 75) {
      progressBar.style.backgroundColor = "orange"; // Warning
    } else {
      progressBar.style.backgroundColor = "green"; // Safe zone
    }
    progress.innerHTML = `Progression :${Math.round(barProgress.value)}%`;
  }
  reset() {
    this.caloTotal = 0;
    this.repas = [];
    this.activity = [];
    Storage.clearLocalStorage(); // Clear local storage
    this.displayMeals(); // Display updated meals
    this.displayWorkouts(); // Display updated workouts
    this.displayStatistics(); // Display updated statistics
  }
}

//class that uses Meal and Workout classes to keep the list of both up
export default CalorieTracker;
