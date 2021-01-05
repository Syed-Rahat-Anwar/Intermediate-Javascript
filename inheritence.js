 //inheritence
class Parent{
    constructor(){
        this.fatherName= "shamim";
    }
}
 class Child extends Parent{

    constructor(name){
        super();
        this.name= name;
}

getfullName(){
    return this.fatherName + " " + this.name;
}
 }
 const baby= new Child('Sareem');
 const baby2= new Child('Karim');
 console.log(baby.getfullName());
 console.log(baby2.getfullName());