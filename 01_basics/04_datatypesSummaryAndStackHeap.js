//DATA TYPES ARE DIVIDED INTO TWO TYPES 
// PRIMITIVE AND NON PRIMITIVE (REFERENCE)

// primitive have 7 types 

// strings , number , boolean , null, undefined , symbol , bigInt 

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)   // false 
console.log(typeof id );      // symbol


console.log(typeof score );      // number 
console.log(typeof scoreValue);  // number 
console.log(typeof isLoogedIn);  // boolean 
console.log(typeof outsideTemp);  // object 
console.log(typeof userEmail);   // undefined 

 // object 


const bigNumber = 673293828642461800n      // write n to write in bigInt 
console.log(typeof bigNumber)      // bigInt 


// NON PRIMITIVE ( Reference )

// array , Object , functions 

const fruits = ["Apple","grapes","Mango","Papaya"]

let myObj = {
    name : "Akansha" ,    
    age : 19 
}

const myFuction = function(){
    console.log("Hello world");
}

console.log (typeof fruits )    // object 
console.log (typeof myObj)       // object 
console.log (typeof myFuction)   // function 
console.log ( fruits )    
console.log ( myObj)
console.log ( myFuction)



//------------------------------Stack and Heap-----------------------------

// MEMORY ARE DIVIDED INTO TWO TYPES STACK AND HEAP MEMORY
                      
//stack (primitive)   in a primitive data types stack memory is used
// ALL THE PRIMITIVE VALUES GOES IN THE STACK MEMORY    

// Heap ( non primitive )                  

// in stack we get a copy   
// in heap we get a reference

let myName = "Akansha"
let myAnotherName = myName

console.log(myAnotherName)     // Akansha

myAnotherName= "Tanushree"

console.log(myAnotherName)  // Tanushree
console.log(myName);        // Akansha

// since we get a copy of the original value ...the original value doesnt change 

let userOne = {
    email : "user@gmail.com",
    upi : "user@upi",
}

let userTwo = userOne
console.log(userTwo)  // { email: 'user@gmail.com', upi: 'user@upi' }


userTwo.email = "Anjali@google.com"

console.log(userOne)      //{ email: 'Anjali@google.com', upi: 'user@upi' }
console.log(userTwo)     // { email: 'Anjali@google.com', upi: 'user@upi' }


/* in the heap the object is stored 
let userOne = {
    email : "user@gmail.com",
    upi : "user@upi",
}  
     
the VARIABLE userOne and userTwo stored in stack will both get the reference of this object
SINCE THE userOne and userTwo refer to the same object
changing the object through either reference chnges the original object 
    */