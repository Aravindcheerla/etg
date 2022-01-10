export class Car{
    speed:number;

    regularPrice:number;

    color:string;
    getSalePrice(){
        console.log(this.regularPrice);
    }
 display(){
        console.log(this.speed);
        console.log(this.regularPrice);
        console.log(this.color);
    }
}