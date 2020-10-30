//Hello World!
//Today we are going to learn about filter()

const meals = [
    { name: "Hamburger", vegetarian: false },
    { name: "Pasta", vegetarian: true },
    { name: "Pizza", vegetarian: false },
    { name: "Salad", vegetarian: true },
]

//Filter returns whatever matches the condition
//I want an array of vegetarian meal
const vegetarianMeals = meals.filter(data => data.vegetarian)
console.log({vegetarianMeals})