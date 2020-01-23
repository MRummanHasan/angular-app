import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  resetForm(form: NgForm)
  {
    form.reset();
    this.employeeService.selectedEmployee ={
      EmployeeID : null,
      FirstName:'',
      LastName:'',
      EmpCode:'',
      Position:'',
      Office:''
    }
  }

}
