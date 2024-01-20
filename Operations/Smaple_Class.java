package Operations;
class Employee
{
	int empId;
	String name;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", name=" + name + "]";
	}
	@Override
	public boolean equals(Object o)
	{
		if(o==null || o.getClass()!=this.getClass())
		{
			return false;
		}
		if(this==o)
		{
			return true;
		}
		Employee emp=(Employee)o;
		return (this.name==emp.name && this.empId==emp.empId);
	}
	@Override
	public int hashCode()
	{
		int res=this.name.hashCode();
		return res;
	}
}

public class Smaple_Class {

	public static void main(String args[])
	{
		Employee e=new Employee();
		e.empId=101;
		e.name="Sruthi";
		Employee e1=new Employee();
		e1.empId=101;
		e1.name="Sruthi";
		System.out.println(e);
		System.out.println(e1);
		
		System.out.println("== Op:"+(e==e1));
		System.out.println("Euqals Method:"+e.equals(e1));
		System.out.println(e.hashCode());
		System.out.println(e1.hashCode());
		
	}
}
