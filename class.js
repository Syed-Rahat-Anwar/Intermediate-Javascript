class Student{
constructor(sId, sName){
    this.id=sId;
    this.name= sName;
    this.school= 'chittagong cantonment high school and college';
}
}
const student1= new Student(3, "rahat");
const student2= new Student(5,"shuvo");
const student3= new Student(4,"Allen shubro");
//console.log(student1.name, student2.name,student3.name);

//***************************************************Person*************** */
class Person {
    constructor(key,pName){
        this.id=key;
        this.personName=pName;
        this.favouritePlayer='Shakib Al Hasan'
    }

}


const person1= new Person(8,'Rahat');
const person2= new Person(43,'iqbal');
console.log(person1,person2);
