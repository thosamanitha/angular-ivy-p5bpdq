import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name:string|undefined;
  department:string|undefined;
  globalId:number|undefined;
  designation:string|undefined;
  salary:number|undefined;

  constructor() { }

  ngOnInit() {
    this.name="Anitha",
    this.department="P&C",
    this.globalId=7000028970,
    this.designation="Software Engineer",
    this.salary=6

  }

}