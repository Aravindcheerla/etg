package com.sonata;

public class ProductGst {
    int ProID;
    String ProName;
    double ProPrice ;
    ProductGst(int ID,String NAME,double PRICE,int GST){
        this.ProID=ID;
        this.ProName=NAME;
        this.ProPrice=PRICE;
        double tax=GST* this.ProPrice/100;
        this.ProPrice=this.ProPrice+tax;
    }
    public void display(){
        System.out.println(ProID);
        System.out.println(ProName);
        System.out.println(ProPrice);
        
    }
    
	public static void main(String args[]) {
	    int GST=17;
		ProductGst std1 = new ProductGst(111,"BALL",25,GST);
		std1.display();
		ProductGst std2 = new ProductGst(222,"BAT",200,GST);
		std2.display();
		
	}
}
