package Operations;

class Student 
{
	String name;
	int id;
	
	@Override
	public boolean equals(Object o)
	{
		if(o==null || this.getClass()!=o.getClass())
		{
			return false;
		}
		if(this==o)
		{
			return true;
		}
		Student s=(Student)o;
		return (s.name==this.name && s.id==this.id);
	}
	@Override
	public int hashCode()
	{
		int result=this.name.hashCode();
		return result;
	}
	
}

public class Method_Contract {
	public static void main(String args[])
	{
		Student st1=new Student();
		st1.name="Sruthi";
		st1.id=101;
		Student st2=new Student();
		st2.name="Sruthi";
		st2.id=101;
		
		Student st3=new Student();
		st3.name="Mani";
		st3.id=102;
		
		if(st1.equals(st2))
		{
			System.out.println("Objects are Equal");
		}
		else
		{
			System.out.println("Objects are not Equal");
		}
		
		if(st1.hashCode()==st2.hashCode())
		{
			if(st1.equals(st2))
			{
				System.out.println("Both objects and hashcode is same");
			}
			else
			{
				System.out.println("Hashcode is same but object is different");
			}
		}
		else
		{
			System.out.println("HashCode is not matching so objects are different");
		}
	}

}
