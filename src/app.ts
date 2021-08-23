import { personGreeter } from "./personGreeter";

const firstName = "Fadumo"; 
const secondName = "Botan"; 

const fullName = '${firstName + secondName}' ; 

console.log('Hello ${firstName} ${secondName}') 

type Person = { 
    firstName: string;
    secondName: string; 
    dateOfBirth?: Date; 
  
};

const person : Person = { 
    firstName: 'Fadumo',
    secondName: 'Botan',  
    dateOfBirth: new Date (1992, 6, 30) 

}; 

const sayHelloToPerson = (p: Person) => {
    console.log ('Hello ${p.firstName} ${p.secondName}')

}
sayHelloToPerson(person); 

const greeter = new personGreeter("", "");
greeter.greet();





