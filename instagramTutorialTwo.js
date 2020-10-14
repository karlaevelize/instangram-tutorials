//Hello World!
//Today we are going to learn about map()

const scheduleAtCodaisseur = [
    { date: "Week-1", teacher: "Rein", subject: "javascript" },
    { date: "Week-2", teacher: "David", subject: "react" },
    { date: "Week-4", teacher: "Matias", subject: "database" },
    { date: "Week-5", teacher: "Jeroen", subject: "redux"}
]

//I want an array with the subjects
const whatILearnAtCodaisseur = scheduleAtCodaisseur.map(data => data.subject)

//I want an array with the teacher
const codaisseurTeachers = scheduleAtCodaisseur.map(data => data.teacher)

console.log(whatILearnAtCodaisseur)
console.log(codaisseurTeachers)
