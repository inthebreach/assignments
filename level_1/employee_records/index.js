

function employees(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

employees.prototype.printInfo = function() {
    console.log("Name: " + this.name + " Title: " + this.title + " Salary: " + this.salary + " Status: " + this.status);
}

    
var employees = [
    new employees("John", "Manager", "100000", "Full Time"),
    new employees("Jane", "Sales", "50000", "Full Time"),
    new employees("Joe", "Engineer", "30000", "Full Time")];
        
for (var i = 0; i < employees.length; i++) {
    employees[i].printInfo();
}

console.log("");