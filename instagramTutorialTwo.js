//Hello World!
//Today we are going to learn about map()

const scheduleAtCodaisseur = [
    { date: "Week-1", teacher: "Rein", subject: "JavaScript" },
    { date: "Week-2", teacher: "David", subject: "React" },
    { date: "Week-4", teacher: "Matias", subject: "Databases" },
    { date: "Week-5", teacher: "Jeroen", subject: "Redux" },
]

//I want an array with only the subjects
const whatILearnAtCodaisseur = scheduleAtCodaisseur.map(data => data.subject)
console.log({whatILearnAtCodaisseur})

//Now I want an array with only the teachers
const codaisseurTeachers = scheduleAtCodaisseur.map(data => data.teacher)
console.log({codaisseurTeachers})