//import { apiKey } from "./utils.js";
//import { apiKey , apiValue} from "./utils.js";
//console.log(apiKey);
//console.log(apiValue);
//import * as util from "./utils"
//console.log(util.apiKey);
//console.log(util.apiValue);

//let userMessage = "Hello World!";

//console.log(userMessage);
//console.log(10 === 9);

/*
function greet(){
    console.log("Hello Evy!");
}

greet();


function greet(userName,message = "Hello"){
    console.log(message);
    console.log(userName);
    
}

greet("Max");
greet("Max","Hi");



function creategreet(userName,message = "Hello"){
    return message + userName;
    
}

const c1 = creategreet("Max");
console.log(c1);



(userName,message)=>{
    console.log("Hello");
}



const user = {
    name:"Max",
    age:34,
    greet(){
        console.log("Hello");
    }
}
console.log(user);
user.greet();


class User {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log("Hello.."+this.name);
    }
}

const user1 = new User("Evy",10);
user1.greet();


const hobbies = ["reading","painting","cooking"];
//console.log(hobbies);
//console.log(hobbies[1]);


hobbies.push("cycling");

console.log(hobbies);
let index = hobbies.findIndex((item) => {
    return item === "painting";
})

console.log(index);

let ind = hobbies.findIndex(item => item === "cooking");
console.log(ind);

const hobbies2 = hobbies.map((item) => item.toUpperCase());

console.log(hobbies2);


function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objectsg
    return numberArray.map(item => ({
        val:item
    }));
    
}
let numberArray = [1, 2, 3]
let res = transformToObjects(numberArray);
console.log(res);


let arr = ["Evy","Nayak"];
console.log(arr);

let [first,last] = ["Evy","Nayak"];
console.log(first);
console.log(last);

const user = {
    name:"Evy",
    age:10
};

console.log(user.name);

const {name,age} = {
    name:"Evy",
    age:10
};

console.log(age);




const hobbies = ["swim","paint"];
const hobbies2 = ["run"];

const mergedHobbies = [...hobbies,...hobbies2];
console.log(mergedHobbies);


for( const hobby of mergedHobbies){
    console.log(hobby);
}

*/

function init(){

    function greet(){
        console.log("hi");
    }

    greet();
}

init();



















































