package Operations;

import java.lang.reflect.Method;

public class Hash_Code {
	public void display()
	{
		System.out.println("Hello");
	}
	public void getData()
	{
		
	}
	public static void main(String args[])
	{
		Hash_Code op=new Hash_Code();
		Class obj=Hash_Code.class;
		Method m[]=obj.getMethods();
		for(Method j:m)
		{
			System.out.println(j.hashCode());
		}
		System.out.println(op.hashCode());
	}

}
