import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees = [
    { name: "Vaibhav", id: "EMP101", pincode: "411001", address: "Pune" },
    { name: "Gauri", id: "EMP102", pincode: "414006", address: "Ahmednagar" },
    { name: "Abhishek", id: "EMP103", pincode: "422001", address: "Nashik" },
    { name: "Aditya", id: "EMP104", pincode: "413001", address: "Solapur" }
  ];

}
