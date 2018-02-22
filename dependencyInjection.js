/**
  * dependency injection can be simply thought of as:
  *   passing an object to a function
  */

let Person = function (firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

function logPerson (person) {
  console.log(person)
}

let john = new Person('john', 'doe')

logPerson(john)
