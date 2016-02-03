//create an employee constructor
function Employee(name, empNumber, currentSalary, rating) {
	this.name = name;
	this.empNumber = empNumber;
	this.currentSalary = currentSalary;
	this.rating = rating;
}

//change the array declarations to object declarations
var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < employees.length; i++){
	employees[i] = calculateSTI(employees[i]);
	newEl = document.createElement('li');
	newText = document.createTextNode(employees[i][0] + ', ' + employees[i][1] + '%, $' + employees[i][2] + ', $' + employees[i][3]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}


function calculateSTI(empInfo) {
	this.name = empInfo.name;
	this.empNumber = empInfo.empNumber;
	this.currentSalary = Math.round(parseFloat(empInfo.currentSalary));
	this.rating = empInfo.rating;
	console.log(empInfo);
	
	var processedEmployee = [];
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = this.currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(this.rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	// build processed array
	processedEmployee[0] = this.name;
	processedEmployee[1] = bonusPercentage;

	bonus = Math.round(bonusPercentage * this.currentSalary);
	adjSalary = this.currentSalary + bonus;

	processedEmployee[2] = adjSalary;
	processedEmployee[3] = bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(this.empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(this.currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}


for(var i = 0; i < employees.length; i++) {
	console.log(calculateSTI(employees[i]));

}