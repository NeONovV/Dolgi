class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {
	setSalary(salary) {
		this._salary = salary;
	}
	getSalary() {
		return this._salary;
	}
}

class Programmer extends Employee {
	setProgrammerSkill(skill) {
		this._skill = skill;
	}
	getProgrammerSkill() {
		return this._skill;
	}
}

class Designer extends Employee {
	setDesignerSkill(skill) {
		this._skill = skill;
	}
	getDesignerSkill() {
		return this._skill;
	}
}