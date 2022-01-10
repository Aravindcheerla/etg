import { PersonInterface } from "./PersonInterface";

class PersonDetail implements PersonInterface{
    first: string;
    last: string;

    getfullName(): string {
        return this.first + this.last;

    }
}
var p1=new PersonDetail();
p1.first="Aravind";
p1.last="Cheerla";
console.log(p1.getfullName());