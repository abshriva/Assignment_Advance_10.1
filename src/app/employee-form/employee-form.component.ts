
import { Employee } from '../models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';
import { 
  FormGroup, FormControl 
} from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class EmployeeFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  //providers:[EmployeeDropDownService]
 
})


export class EmployeeFormComponent implements OnInit {

  form: FormGroup
  employee:Employee = new Employee();
  employeeType: EmployeeType[] = [];

  /**
   * Creates an instance of EmployeeFormComponent.
   * @param {EmployeeService} employeeService 
   * @param {EmployeeDropDownService} empDropDownService 
   * @memberof EmployeeFormComponent
   */
  constructor(private employeeService: EmployeeService,private empDropDownService: EmployeeDropDownService) 
  { 
    // Create form using FormGroup & FormControl
      this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      age: new FormControl(),
      employeeType: new FormControl()
      
    });
  }
  

  /**
   * 
   * 
   * @memberof EmployeeFormComponent
   */
  ngOnInit() {

    this.employee={
      id:null,
      name:'',
      age:null,
      title:''
    }
    this.employeeType = this.empDropDownService.getEmployeeType();
  }

/**
 * 
 * 
 * @param {any} values 
 * @memberof EmployeeFormComponent
 */
onSave(values)
  {

    this.employee={
      id:values.id,
      name:values.name,
      age:values.age,
      title:values.employeeType
    };
    
    this.employeeService.createEmployee(this.employee);
    
    this.employee = new Employee();

  }

  
     /**Reset a form */
    //  resetForm(f) {
    //   f.reset();
    // };

}
