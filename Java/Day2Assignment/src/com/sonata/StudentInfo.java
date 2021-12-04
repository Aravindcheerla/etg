package com.sonata;

public class StudentInfo {
	  int stdID;
	    String stdName;
	    int stdClass;
	    StudentInfo(int ID,String NAME,int CLASS){
	        this.stdID=ID;
	        this.stdName=NAME;
	        this.stdClass=CLASS;
	    }
	    public void display(){
	        System.out.println(stdID);
	        System.out.println(stdName);
	        System.out.println(stdClass);
	        
	    }
	    
		public static void main(String[] args) {
			 StudentInfo std1 = new  StudentInfo(111,"Aravind",8);
			std1.display();
			 StudentInfo std2 = new  StudentInfo(222,"Sai",9);
			std2.display();
			
		}
}
