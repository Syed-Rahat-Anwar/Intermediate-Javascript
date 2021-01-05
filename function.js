//************************************************Call back function ******************************************
 function callback_explain(name,age,task){
// console.log("hello" ,name);
// console.log("hello", age);
 task()
}

 function washHand(){
    //  console.log('wash your hand');
 }

 function takingBath(){
    //  console.log("please take a bath");
 }
 callback_explain("sagir uddin", 17, washHand);
 callback_explain("bashir uddin", 18,takingBath);


 //********************************function Arguments*******************

// function test(a,b,c){
//     //console.log(JSON.stringify(arguments));
//     console.log(arguments);
//     //console.log(typeof(a));


//     for(let i=0; i<arguments.length; i++){
//         console.log(arguments[i]);


//     }
// }

// //test();
// test(10,20,30,40);

    function test(){
        
    let sum=0;
    for(let i=0; i<arguments.length; i++){
    
    let element= arguments[i];
    
     sum=sum + element;
    
    
    }
    return sum;
    }
    

//test();
const a= test(10,20,30,40,50,80,100,200);
//console.log(a);


// a function return an object

function person(name,email,phone){
    return {
        name: name,
        email: email,
        phone:  phone
    }

}

const result= person("Rahat", "rahatanwarb1995@gmail.com", 01840516731);
// console.log(result);


//default parameter

function mul(num1,num2){

num2= num2 || 15;

let result= num1*num2;


return result;
}

const output= mul(20,1);
console.log(output);