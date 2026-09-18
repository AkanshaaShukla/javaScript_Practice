const accountId = 14567
let accountEmail = "AkanshaShukla.com"
var accountPaasword = "12345"
accountCity = "mumbai"

// accountId = 432 // not allowed 
accountEmail="hariomShukla.com"
accountPaasword="98765"
accountCity="pune"

console.log(accountId);

/* 
Prefer not using var!!
Because of issue in block scope and functional scope 
*/

let accountState;

console.table([accountEmail,accountId,accountPaasword,accountCity,accountState])
