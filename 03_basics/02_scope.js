//-----------------------SCOPE----------------------
let a= 70
const b=90
var c=100

if (true){                    //{} scope
    let a = 10
    const b = 20          
    var c = 30
}


    

console.log (a)    // as a is in the scope it is giving error      //70
 console.log(b)      // error                                       //90
 console.log(c)        // but var is giving 30 as answer            //30


function one (){
    const username = "Akansha"

    function two (){
        const language = "Javascript"
        console.log(username);
        
    }
      console.log(language);    
     two()
}

anjali = one()
console.log (anjali)

if (true){
    const username="Akansha"
    if (username==="Akansha")
    {
        const language = " Javascript"
        console.log(`her name is ${username} and the language she is learning is ${language}`)
    }
   // console.log(language); error
    
}
//console.log(username) //error



//------------------------------INTRESTING----------------------------


function addone(num){
    return num+1

}
console.log(addone(5))     // iif i put it alove the funvtion then too i can access it 
                           // there will be no error and code will still run 

const addtwo = function (num){
    return num+2
}

console.log(addtwo(5))    // if i put  it above function then i cannot access it 
                         // code will throw error because it is held in vriable along with function getting declared 
 
                         
    //Hosting 
    // how is function declared kept , how are variables treated , how is the final tree is made 
    //where function and variable are kept                     

