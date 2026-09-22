//constructor //singelton object

const tinderUser = new Object()

tinderUser.id = "12abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false 

//console.log(tinderUser);   // { id: '12abc', name: 'sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userName : {
            fisrtName : "Anajli",
            lastName : "Mishra"
        }
    }
}

console.log(regularUser.fullname)  // { userName: { fisrtName: 'Anajli', lastName: 'Mishra' } }

console.log(regularUser.fullname.userName.lastName)  // Mishra
//-------------------------------------------------------
const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = { 4:"d" , 5 : "e" , 6: "f"}

//const obj3 = Object.assign(obj1 , obj2)   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//console.log(obj3)


//const obj4 = Object.assign({} , obj1 , obj2)  //target and source 
//----------------------
// console.log(obj3)

const Obj3 = {...obj1,...obj2}
console.log(Obj3)


//----------values coming from database

const users2 = [              //come in array
    {
        id : 1,
        email : "aka@gmail.com" ,
    },
    {
        isLoggedIn: false 
    }
]

console.log((users2[0].email ))

console.log(tinderUser)

console.log(Object.keys(tinderUser))   //[ 'id', 'name', 'isLoggedIn' ]  //array

console.log(Object.values(tinderUser))


console.log(Object.entries(tinderUser)) 
// every keyvalue pair gets converted into array
//[ [ 'id', '12abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));   //true


//-------------------------------------------------------------------------------------------


const course = {
    coursename : "javascript" ,
    coursePrice : 999,
    courseInstructor : "Hitesh Sir "
}

const {courseInstructor} = course //destructure

console.log (courseInstructor)

const {courseInstructor:instructor}=course   // :

console.log(instructor)

//-----------JSON-------------//API------------------------
/*
{
    "name": "Akansha"    
    "subject" : "javascript"
}

[
    {},
    {},
    {},
]

*/