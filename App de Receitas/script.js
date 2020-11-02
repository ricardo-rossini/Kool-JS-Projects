const meals = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await resp.json();
    const randomMeal = responseData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}

async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    console.log(mealData);

    meal.innerHTML = `
        <div class="meal">
            <div class="meal-header">
                ${random ? `<span class="random">
                    Random Recipe
                </span>` : ''}
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            </div>
            <div class="meal-body">
                <h4>${mealData.strMeal}</h4>
                <button class="fav-btn">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    const btn = meal.querySelector(".meal-body .fav-btn");
    btn.addEventListener("click", () => {
        if(btn.classList.contains('active')) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        }
        else{
            addMeadLS(mealData.idMeal);
            btn.classList.add("active");
        }
    });
    meals.appendChild(meal);
}

function addMeadLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));

    return mealIds === null ? [] : mealIds;
}

function fetchFavMeals() {
    const mealsIds = getMealsLS();
}
