package Com.Sonata;

public class DuplicateNumber {
	public static void main(String args[])
	{
		int[] arr = new int [] {1,2,3,4,2,7,6,6,8,3,4};
		int i,j;
		for(i=0;i<arr.length;i++)
			for(j=i+1;j<arr.length;j++)
			{
				if(arr[i] == arr[j])
					System.out.println(arr[j]);
			}
	}
}
