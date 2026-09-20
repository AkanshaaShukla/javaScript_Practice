//----------------------------numbers-------------------------------

const score = 400
 console.log (score)

const balance = new Number(100)
console.log(balance)

console.log (balance.toString().length); //first convert to string then we can 
                                         // have benefits of string values!!


 console.log(balance.toFixed(1));       // 100.0

 const otherNumber = 123.8964

 console.log(otherNumber.toPrecision(4))  // 123.9
  console.log(otherNumber.toPrecision(3))  //124
   console.log(otherNumber.toPrecision(2))  // 1.2e+2

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000


//---------------------------------MATHS-------------------------------

console.log(Math);     //Object [Math] {}
console.log(Math.abs(-5));  //5
console.log(Math.round(4.5));  //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9));  //4
console.log(Math.min(45,78,65,90));   //45
console.log(Math.max(67,87,43,98,54));  //98


   console.log(Math.random());   // random maths number 0-1
   console.log(Math.random()*10+1);

   console.log(Math.floor(Math.random()*10)+1)

   let min = 10
   let max = 20
   console.log(Math.floor(Math.random()*(max-min+1))+min)
    
