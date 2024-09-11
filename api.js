export const fetchRecipes = async (ingredient) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Error in fetch: " + response.statusText);
        }
        const data = await response.json();
        return data.meals;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
