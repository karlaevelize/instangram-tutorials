//Hello World! :)
//Today we are going to learn about find()

const travelDestinations = [
    { country: "Netherlands", weather: "windy" },
    { country: "England", weather: "rainy" },
    { country: "Spain", weather: "sunny" },
    { country: "Finland", weather: "snowy" },
]

//Find returns the first object that matches the condition
//I want an object with a country where the weather is sunny
const sunnyDestination = travelDestinations.find(data => data.weather === "sunny")
console.log({sunnyDestination})

//I want an object with a country where the weather is snowy
const snowyDestination = travelDestinations.find(data => data.weather === "snowy")
console.log({snowyDestination})