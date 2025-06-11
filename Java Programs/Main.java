import java.util.Scanner;
class Calculator{
	float num1;
	float num2;

	public Calculator(float num1 , float num2){
		this.num1 = num1;
		this.num2 = num2;

	}

	public void Addition(){
		System.out.println("The sum of the two numbers is: " + (num1 + num2));
	}
	public void Substraction(){
		System.out.println("The diffrence of the two numbers is: " + (num1 - num2));
	}
	public void Multiplication(){
		System.out.println("The product of the two numbers is: " + (num1 * num2));
	}
	public void Division(){
		System.out.println("The quotient of the two numbers is: " + (num1 / num2));
	}
}

public class Main{
	public static void main(String[] args) {
	    
	    Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        float num1 = scanner.nextFloat();

        System.out.print("Enter second number: ");
        float num2 = scanner.nextFloat();
	    
	    Calculator obj = new Calculator(num1,num2);
	    obj.Addition();
	    obj.Substraction();
	    obj.Multiplication();
	    obj.Division();
	}

}	    