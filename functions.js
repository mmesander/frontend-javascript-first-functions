/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

console.log("Opdracht 1:")
console.log("--------------------")
function getSchool() {
  return "Novi Hogeschool"
}
const school = getSchool()
console.log(school)
console.log("--------------------")
console.log(" ")

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

console.log("Opdracht 2:")
console.log("--------------------")
function compliment() {
  return "Lekker bezig met die functies, Mark"
}

console.log(compliment())
console.log("--------------------")
console.log(" ")

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

console.log("Opdracht 3:")
console.log("--------------------")
function getGrades() {
  grades1 = [8, 8.5, 6, 7]
  return grades1
}
const grades2 = getGrades()
console.log(grades2)
console.log("--------------------")
console.log(" ")

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

console.log("Opdracht 4:")
console.log("--------------------")
function getDetails() {
  return {
    firstName: 'Mark',
    lastName: 'Mesander'
  }
}
const myName = getDetails()
console.log(myName)
console.log("--------------------")
console.log(" ")