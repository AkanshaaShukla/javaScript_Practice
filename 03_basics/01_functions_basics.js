function welcome(){
    console.log("hii")
     console.log("akansha")
      console.log("welcome")
       console.log("to")
        console.log("js")
}
             
welcome()

 function addTwoNumbers(number1,number2){
 console.log(number1+number2)
 }

 addTwoNumbers(5,4)
 const result = addingNumbers(6,8)
 console.log(result)               // undefined




function addingNumbers(number1,number2){
      let results = (number1+number2)
      return result 
 }

  results = addingNumbers(6,8)
  console.log(result)               // 14


function addingNumbers2 (number1,number2){
    return number1+number2}

    console.log(addingNumbers2(45,89))     //134


function userLogin (username){
   
    return `${username} have just logged in`

}

console.log(userLogin("Akansha")) //Akansha have just logged in
console.log(userLogin(""))      // have just logged in 
console.log(userLogin())        // undefined have just logged in 




function userLogin2 (usernames = "Anjali"){
    if (usernames===undefined){
        console.log("please give username")
        return
    }
    return `${usernames} have just logged in`

}

console.log(userLogin2())    //Anjali have just logged in



function calculateCartPrice (...num1){      // rest operator for giving multiple value
    return num1   
}

console.log(calculateCartPrice(200,300,400))    //after writing it as ... we get the array 
 [200,300,400]


function calculateCartPrice2 (val1,val2,...num1){      // after value 1 and value 2 rest all in array
    return num1   
}

console.log(calculateCartPrice2(200,300,400,8000))       //[400,8000]


//-------------------HOW TO DEFINE OBJECT IN FUNCTIONS-------------------------


const user = {
    username:"histesh",
    price:156,

}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}

handleObject(user)     //Username is histesh and the price is 156


handleObject({
    username:"sam",
    price : 399       //Username is sam and the price is 399
})


const myNewArray = [200,500,700,800]

function retuenSecondValue (getArrayNow) {
    return getArrayNow[3]

}

console.log(retuenSecondValue(myNewArray))           //800
console.log(retuenSecondValue([200,500,700,800]))     //800