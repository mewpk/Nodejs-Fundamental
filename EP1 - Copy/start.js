const person ={
    name : "Patsakorn",
    age : 17,
    gender : "male",
    marries : false
}
person.name = "mew"

person["age"] = 5


console.log(person.name)
console.log(`I am ${person["age"]} years old`)