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
    this.caloTotal -= workout.calories;
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
      this.caloTotal += this.activity[workoutIndex].calories;
      this.activity.splice(workoutIndex, 1);
    }
  }
  displayMeals() {
    const mealList = document.querySelector(".meal-list");
    mealList.innerHTML = ""; // Clear the list before displaying
    this.repas.forEach((meal) => {
      const mealItem = document.createElement("li");
      mealItem.innerHTML = `${meal.name}: ${meal.calories} calories`;
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
      workoutItem.innerHTML = `${workout.name}: ${workout.calories} calories`;
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
}

//class that uses Meal and Workout classes to keep the list of both up
export default CalorieTracker;
