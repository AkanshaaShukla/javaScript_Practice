//January 1st 1970
//calculated in miliseconds

let myDate = new Date()

console.log(typeof myDate)   //Object 

console.log(myDate)         //2026-09-20T07:06:11.508Z
console.log(myDate.toString())  //Sun Sep 20 2026 12:38:19 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     //Sun Sep 20 2026
console.log(myDate.toISOString())      //2026-09-20T07:50:39.956Z
console.log(myDate.toJSON());         // 2026-09-20T07:53:40.181Z
console.log(myDate.getHours())          //13
console.log(myDate.toLocaleDateString())  //9/20/2026
console.log(myDate.toLocaleString())       //9/20/2026, 1:23:40 PM
console.log(myDate.toLocaleTimeString())     //1:23:40 PM   
console.log(myDate.toTimeString())              //13:23:40 GMT+0530 (India Standard Time)


//-----------------------------------------------------------------------------

let myCreatedDate = new Date ("2026,9,20")      
console.log(myCreatedDate) //  2026-09-19T18:30:00.000Z
 myCreatedDate = new Date (2026,9,20,13,33)
 console.log(myCreatedDate)  //2026-10-20T08:03:00.000Z

 myCreatedDate = new Date ("2026-9-20")
 console.log(myCreatedDate);
 myCreatedDate = new Date ("9-20-2026")
 console.log(myCreatedDate.toLocaleString())   // 9/20/2026, 12:00:00 AM

let myTimeStamp= Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newdate = new Date()

console.log(newdate.getDate())
console.log(newdate.getDay());
console.log(newdate.getTimezoneOffset());
console.log(newdate.getFullYear());
console.log(newdate.getTime());
console.log(newdate.getUTCDate());
console.log(newdate.getMonth() +1);

console.log(`the date is ${newdate.getDate()} and the month of the year ${newdate.getFullYear()} is ${newdate.getMonth()+1}`)

//---------------localeString----------------

newdate.toLocaleString('default',{
    weekday : "long"   // cont+space
    
})