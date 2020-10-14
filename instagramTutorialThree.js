//Hello World!
//Today we are going to learn about find()

const travelDestination = [
    { country: "Netherlands", weather: "windy" },
    { country: "England", weather: "rainy" },
    { country: "Spain", weather: "sunny" },
    { country: "Finland", weather: "snowy"}
]

//find returns the first object that matched the condition
//I want an object with a country where the weather === sunny
const sunnyDestination = travelDestination.find(data => data.weather === "sunny")
console.log(sunnyDestination)