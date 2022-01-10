class Product{
    pid:number;
    pname:string;
    price:number;

    display(){
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);

    }
}
var pr1=new Product();
pr1.pid=123;
pr1.pname="Ari";
pr1.price=223.7;
pr1.display();
