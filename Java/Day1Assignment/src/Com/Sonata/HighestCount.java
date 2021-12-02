package Com.Sonata;

public class HighestCount {
	public static void main(String args[]) {
		int [] a = new int [] {1,10,20,1,25,1,10,1};
		int count=0;
		for(int i=0;i<a.length;i++)
		{
			for(int j=i+1;j<a.length;j++)
			{
				if(a[i]==a[j])
				{
					count ++;
					break;
				}
			}

		}
		System.out.println(count);		
	}

}
