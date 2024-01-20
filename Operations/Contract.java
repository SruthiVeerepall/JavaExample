package Operations;

class Studentc
{
	String name;
	int id;
	public boolean equals(Object o)
	{
		if(o== null || getClass()!=o.getClass())
		{
			return false;
		}
		if(o== this)
		{
			return true;
		}
		Studentc s=(Studentc)o;
		return (this.id==s.id);
	}
	public int hashCode()
	{
		return id;
	}
	
}
public class Contract {
	public static void main(String args[])
	{
		Studentc s1=new Studentc();
		s1.name="Sruthi";
		s1.id=101;
		
		Studentc s2=new Studentc();
		s2.name="Sruthi";
		s2.id=102;
		
		System.out.println("Shallow Comparision:" +(s1==s2));
		System.out.println("Deep Comparision:" + s1.equals(s2));
		
		System.out.println("HashCode s1:"+s1.hashCode());
		System.out.println("HashCode s2:" + s2.hashCode());
	}

}
