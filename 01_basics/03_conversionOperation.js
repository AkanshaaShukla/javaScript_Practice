let score = 45
console.log(typeof score);
console.log (typeof(score));

score = "45"
console.log(typeof score);
console.log (typeof(score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber))


//------------------------------------another try---------------------------------//


let anotherScore = "45Abc";
console.log(typeof(anotherScore))

let valueInNum= Number(anotherScore)
console.log(typeof(valueInNum))

console.log(valueInNum)  // the output will be NaN (Not a Number)

// NOTE : if the score was null the output will be 0
// if the score was undefined the output will be NaN
// if it is a bollean value and we write true in score it will come 1 , for false it will 0
// if it is string Nan will come 

// "33"=> 33
// "33abc" => NaN       

//----------------------------------------------------------------------------------

let isLoggedIn = 1 

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn);

// if it is string it will come true
// if its a empty string it will come false 



//--------------------------------------------------------------------------------------

let noOfPlayers = 12
let StringNumber = String(noOfPlayers)

console.log(StringNumber);
console.log(typeof StringNumber);


//--------------------------------****Operations****-----------------------------------


let value = 3
let negValue = -value
console.log(negValue);

let str1= "hello"
let str2 = " Akansha"
let Str3 = str1 + str2;
console.log(Str3)

console.log(1 + "2")            //12
console.log("1" + 2 );         //12 
console.log("1" + "2" );      //12
console.log("1" + 2 + 2 );   //122
console.log(1 + 2 + "2" );  //32



 console.log(+true)      // 1 (bad practice dont write messy code)
 console.log(+"")       // 0 


 let num1,num2,num3

 num1 = num2 = num3 = 2+2

 let gameCounter = 100;
 gameCounter++;
 console.log(gameCounter);    //101


 


