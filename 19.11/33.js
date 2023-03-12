class User {
	constructor(name, salary) {
		  this.name = name;
		  this.salary = salary;
	  }
	  
	  getName() {
		  return this.name;
	  }
	  getSalary() {
		  return this.salary;
	  }
  }
  
  class Employe extends User {
	  constructor(name, salary) {
		  super(name, salary);
	  }
  }
  
  let employe = new Employe('PupbIn9', 500);
  
  let name = employe.getName();
  let salary = employe.getSalary();
  
  console.log(name);
  console.log(salary);