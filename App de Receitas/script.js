const mealsEl = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');
const searchTerm = document.getElementById('search-term');
const searchBtn = document.getElementById('search');
const mealPopup = document.getElementById('meal-popup');
const popupCloseBtn = document.getElementById('close-popup');
const mealInfoEl = document.getElementById('meal-info');

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await resp.json();
    const randomMeal = responseData.meals[0];
    //console.log(randomMeal);
    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}

async function getMealsBySearch(term) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
    const respData = await resp.json();
    const meals = respData.meals;
    //console.log(meals);

    return meals;
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    //console.log(mealData);

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
       
        //add to container
        fetchFavMeals();
    });

    meal.addEventListener('click', () => {
        showMealInfo(mealData);
    });

    mealsEl.appendChild(meal);
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

async function fetchFavMeals() {
    //clean the container
    favoriteContainer.innerHTML = '';
    const mealIds = getMealsLS();
    
    for(let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        meal = await getMealById(mealId);
        addMealFav(meal);
    }
}

function addMealFav(mealData) {
    const favMeal = document.createElement('li');

    favMeal.innerHTML = `
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"> </i></button>
    `;

    const btn = favMeal.querySelector('.clear');
    btn.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);
        fetchFavMeals();
    });

    favMeal.addEventListener('click', () => {
        showMealInfo(mealData);
    });

    favoriteContainer.appendChild(favMeal);
}

function showMealInfo(mealData) {
    mealInfoEl.innerHTML = '';
    //update the meal info
    const mealEl = document.createElement('div');
    mealEl.innerHTML = `
        <h1>${mealData.strMeal}</h1>
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <p>${mealData.strInstructions}
        </p>
        <ul>
            <li>ing 1 / measure</li>
            <li>ing 2 / measure</li>
            <li>ing 3 / measure</li>
        </ul>
    `;
    mealInfoEl.appendChild(mealEl);
    
    //show the popup
    mealPopup.classList.remove('hidden');
}

searchBtn.addEventListener('click', async () => {
    //cleaning screen and previous search
    mealsEl.innerHTML = '';
    const search = searchTerm.value; 
    const meals = await getMealsBySearch(search);

    if(meals) {
        meals.forEach(meal => {
            addMeal(meal);
        });
    }
});

popupCloseBtn.addEventListener('click', () =>{
    mealPopup.classList.add("hidden");
    console.log('clicou');
});
