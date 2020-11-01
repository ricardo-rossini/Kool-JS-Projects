async function getRandomMeal() {
    const random = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
}

async function getMealById(id) {
    const meal = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}

async function getMealsBySearch(term) {
    const meals = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}
