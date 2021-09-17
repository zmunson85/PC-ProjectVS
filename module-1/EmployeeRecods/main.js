function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    //     this.print = function () {
    //         console.log(this.name, this.jobTitle, this.status);
    //     }
    // }
}
let me = new Employee('Zach', 'Student', 'GI-BILL', 'Full-Time');
let second = new Employee('Jane', 'TA', '50k', 'Full-Time');
let third = new Employee('Billy', 'Intern', 'Peanuts', 'Part-Time');


Employee.prototype.print = function () {
    console.log(this.name, this.jobTitle, this.salary, this.status);
}


me.print();
second.print();
third.print();

