//Objects 
// there are two ways to declare objects 
// 1. literal 
// 2. constructor 

// Singleton ==> when we declare a object by constructor it becomes Singleton
//apne tarah ka ek hi object hai
// when we declare by other way then it can have multiple instances 

//Object.create        // constructor method //singleton


//OBJECT LITERALS

const sym = Symbol("Key1")

const user={
   [sym] : "myKey1",
    name : "Akansha" ,   // object have keys and values
    age : 19,
    "Student_Id" :2644290,
    location : "Mumbai",
    email :" Akansha@google.com" ,
    isLoggedIn : false ,
    LastLoginDays :["Monday","saturday"]

}

//Two ways to access the object 

console.log (user.email)
console.log(user["email"])
console.log(user["Student_Id"]) 

 // Akansha@google.com
 //Akansha@google.com
//2644290

console.log (user[sym])            // when not written in square bracket
console.log (typeof(user[sym]) )   // string 

//To change whats already written/defined 

user.email="Anajli@mumbai.com"
console.log(user.email)

//Object.freeze(user)

user.email = "Akansha@gmail.com"
console.log(user)

user.greeting = function(){
    console.log("hello userrrr!!!!")
}

user.greeting2 = function (){
    console.log (`hello userrrr, ${ this.name} , welcome to js`)
}

console.log(user.greeting)   //[Function (anonymous)]
console.log(user.greeting())    // helloo userr!!!

console.log(user.greeting2())     //hello userrrr, Akansha , welcome to js
