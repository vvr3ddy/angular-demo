import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empId: number;
  employee: Employee;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.empId = this.route.snapshot.params['empId'];

    this.employeeService.getEmployee(this.empId)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, err => console.log(err));
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.empId, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, err => console.log(err));
  }
  onSubmit() {
    this.updateEmployee();
  }
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
