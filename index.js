// const doMath =(a,b) => {
//     let sum= a+b;
//     let sub= a-b;
//     let mul= sum*sub;
//     return mul;
// }
// const result =doMath(6,4);
// console.log(result);

//  const person= {
//      name: "william jhon", age: 30, phone: "01706524346", gfName: "ket winslate", job: " facebooker" ,
//      friends :['rahat',  'shahed', 'asif' , ' nazrul' ]
//  }
// //const name= person.name;
// const {name, gfName, friends}= person;

// //console.log(person);
// // console.log(name, gfName, friends);


// const cousins= ['jeklin', 'bappy', 'anika', 'ratul', ' xarin',' jenia'];

// const [first , second, ...restfriend]= cousins;
// //console.log(first, second, restfriend);

// const array= [1,2,3,4,56];

// const [a,b,c , d, e] = array;
// //console.log(a,e);

// const obj= {
//     title: "twinkle cats",
//     email: "twinklecats@gmail.com"
    
// }
 
// const {title, email}= obj;
// //console.log(title, email);


// function print({title, email}) {

//     //console.log(`hello ${title} ,Email: ${email}`);
// }


// print({email, title});

// const profile = {
//      profileName: "Syed md rahat ",
//     emailId: "rahatanwarb1995@gmail.com",
//     address: {
//         city: "Chittagong",
//         hometown: "mohora",
//         parmanentAddress: "oxyzen"
//     }
// }


 
// const {emailId, address: {city, hometown}} = profile;
 
// console.log(emailId, city,hometown);
// console.log(`${emailId}, from ${city}`);

const students= [
    {id: 101, name: "jack"},  
    {id: 102, name: "jon doe"},
    {id: 102, name: "oprah winfray"},
    {id: 103, name: "steve jobs"},
    {id: 105, name: "awesome AJ"},
    {id: 108, name: "jack ma"}];
    const studentName=[];

  for(let i=0; i< students.length; i++){

    const element= students[i].name;
    // console.log(element);
    studentName.push(element);
    
}
// console.log(studentName);
 
const names =students.map(student => student.name)
const ids= students.map(x => x.id)
const bigger= students.filter(s => s.id >102)
const biggest= students.find(y => y.id> 104)
//console.log( bigger);
//console.log(biggest);
// ************************************spread operator**********************

let richCountry= ["china", " America", "Canada" , "Russia"];
let poorCountry= ["Bangladesh", "Nepal", "Srilanka"];

const newCountry= [...richCountry, ...poorCountry];

//console.log(newCountry);

const arr= [10,20,30,40,50,120,876];

 
//console.log(...arr);

const addNumber=(a,b,c,d,e)=> a+b+c+d+e;
// console.log(addNumber( ...arr));
// console.log(Math.min(...arr));
//console.log(Math.max(...arr));

const myname= 'Rahat';

const string= [...myname];
//console.log(string);


const str='HELLOW';

const newStr= [...str];
//console.log(newStr);


const schoolFriends= ['nehal', 'mahdy', 'fohel', 'mesbah','istiak', 'shahed', 'jewel'];

const newSchool= schoolFriends.map(friend => friend)

//const newSeperateArr=[...newSchool];
// console.log( ...newSchool);


//***********************object literals ************************** */

const obj1={foo: 'bar', x: 42};

const obj2={foo:'baz', y: 13};

const cloneObj= {...obj1};
const cloneObj2= {...obj1,...obj2}; //merge Obj

// console.log(cloneObj);
// console.log(cloneObj2);


//********************************************** */


const shop= {
  name: "laptop",
  price: 30000
};
const place= {
  shopName: "Random laptop shop",
  address: "Dhaka ,Bangladesh"
}
const value= {...shop,...place};
 
//console.log(value);


const age=[ 10,20,60,70,80,50 ];
const age2= [ 33,86,55,82 ];
const age3=[28.90,44,37]

const concatAge= age.concat(age2);
const allAges= concatAge.concat(age3);
//console.log(allAges);
const allages2= [...age,...age2,...age3]
//console.log(allages2);



const business=730;
const minister=550;
const sochib=330;

const maximum= Math.max(business,minister, sochib);
//console.log(maximum);


const takaPoisha= [730,550,330];

const maximum2= Math.max(...takaPoisha);
console.log(maximum2);
