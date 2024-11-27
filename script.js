// complete this js code
class Person {
	constructor(name, age) {
		this.personname = name;
		this.personage = age;
	}
	greet(){
		console.log("Hello, my name is "+this.personname+", I am "+this.personage+"years old.")
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name);
		super(age);
		this.employeejobTitle = jobTitle;
	}
	jobGreet(){
		console.log(this.greet() + ", and my job title is "+this.employeejobTitle);
	}
	
}

let alice = new Person("Alice", 25);
alice.greet();

let bob = new Employee("Bob", 30, "Manager");
bob.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
