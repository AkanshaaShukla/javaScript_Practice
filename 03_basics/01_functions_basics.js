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