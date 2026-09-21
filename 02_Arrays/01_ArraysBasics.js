//Arrays 

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(11,12,13,14,15)

 console.log(myArr);
 console.log(myArr2);

 console.log(myArr[2])
 console.log(myArr2[4]);

// // Array methods 

myArr.push(6)
 console.log(myArr)     //[0,1,2,3,4,5,6]
 myArr.pop(4)
 console.log(myArr);   //[0,1,2,3,4,5]

  myArr.unshift(43)

 console.log (myArr)      // [43,0,1,2,3,4,5]


 myArr.shift()
 console.log(myArr)      // [0,1,2,3,4,5]
 myArr.shift()
 console.log(myArr);     // [1,2,3,4,5]

// //-----------------

 console.log(myArr.includes(12))   //false
 console.log(myArr.includes(1))     // true

 console.log(myArr.indexOf(2))  //2
 console.log(myArr.indexOf(34))   //-1

// //-----------------------------------------------
 const newArr = myArr.join() // string converter

 console.log (myArr)
 console.log(newArr)      //converted in a string 


// // ---------------------slice and splice ----------------

 console.log ("A" , myArr)

 const myArrr= myArr.slice(1,3)    //from array 1 to array 2 it will slice that part only 

 console.log(myArr)         // [0,1,2,3,4,5]

 console.log(myArrr)       // [1,2]       // note (1-3 "but 3 will not be in range")

 const myArrr2=myArr.splice(1,3) //range 1-3 "3" will be included

 console.log(myArr)         // change will also occur in original array
//                            // 0,4,5

console.log(myArrr2)       //[1,2,3]


