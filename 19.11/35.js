class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employe extends User {
  getFull() {
	  return this.#name + ' ' + this.#surn;
  }
}

let employe = new Employe();

employe.setName('PupbIn9');
employe.setSurn('Zhizhkin');

let name = employe.getName();
let surn = employe.getSurn();
let full = employe.getFull();

console.log(name);
console.log(surn);
console.log(full);