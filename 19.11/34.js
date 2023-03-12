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
	  #capeFirst(str) {
		  return str[0].toUpperCase() + str.slice(1);
	  }
  }
  
  class Employe extends User {
	  constructor(name, salary) {
		  super(name, salary);
	  }
	  getName() {
		  return this.#capeFirst(this.name); 
	  }
  }
  
  let employe = new Employe('PupbIn9', 500);
  
  let name = employe.getName();
  let salary = employe.getSalary();
  
  console.log(name);