export class Student{
    stdID:number=12;
    stdName:string="Sai";
    stdMarks:number=80;

    constructor(i:number,n:string,s:number){
        this.stdID=i;
        this.stdName=n;
        this.stdMarks=s;
    }
    display(){
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdMarks);
    }
}

var e1=new Student(24,"ari",90);
e1.display();