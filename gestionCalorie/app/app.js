import CalorieTracker from "./src/CalorieTracker";
import Storage from "./src/Storage";
import Meal from "./src/Meal";
import Workout from "./src/Workout";

function main() {
  //new tracker //init with 2000 calories limit and 0 calories total
  const tracker = new CalorieTracker(2000, 0);

  //storage retrieve
  let appData = Storage.getFromLocalStorage("appData");
  if (appData) {
    tracker.caloLimit = appData.caloLimit;
    tracker.caloTotal = appData.caloTotal;
    tracker.repas = appData.repas || []; // Initialize with empty array if null
    tracker.activity = appData.activity || []; // Initialize with empty array if null
    tracker.displayMeals(); // Display meals from local storage
    tracker.displayWorkouts(); // Display workouts from local storage
  } else {
    Storage.saveToLocalStorage("appData", tracker); // Save initial state to local storage
  }

  //event listeners for buttons
  const addMealButton = document.getElementById("addMeal");
  const addWorkoutButton = document.getElementById("addWorkout");

  //   add Meal button event listener
  addMealButton.addEventListener("click", () => {
    const mealName = document.getElementById("meal_name").value;
    const mealCalories = parseInt(
      document.getElementById("meal_calories").value,
      10
    );
    let mealIdList = tracker.repas.map((meal) => meal.id); // Get the list of existing meal IDs
    mealIdList.sort((a, b) => b - a);
    const mealId = mealIdList != [] ? mealIdList[0] + 1 : 0; // Generate a unique ID for the meal
    const meal = new Meal(mealId, mealName, mealCalories); // Create a new Meal object
    tracker.addMeal(meal);
    Storage.saveToLocalStorage("appData", tracker); // Save updated state to local storage
    tracker.displayMeals(); // Display updated meals
  });

  //   add Workout button event listener
  addWorkoutButton.addEventListener("click", () => {
    const workoutName = document.getElementById("workout_name").value;
    const workoutCalories = parseInt(
      document.getElementById("workout_calories").value,
      10
    );
    let workoutIdList = tracker.activity.map((workout) => workout.id); // Get the list of existing workout IDs
    workoutIdList.sort((a, b) => b - a);
    const workoutId = workoutIdList != [] ? workoutIdList[0] + 1 : 0; // Generate a unique ID for the workout
    const workout = new Workout(workoutId, workoutName, workoutCalories); // Create a new Workout object
    tracker.addWorkout(workout);
    Storage.saveToLocalStorage("appData", tracker); // Save updated state to local storage
    tracker.displayWorkouts(); // Display updated workouts
  });
}

main();
