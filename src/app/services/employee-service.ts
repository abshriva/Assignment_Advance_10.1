import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
//import { EmployeeType } from '../models/Employee-type';


@Injectable()
export class EmployeeService{

    emp:Employee[] =[];
   
      /**
      * 
      * 
      * @returns {Employee[]} 
      * @memberof EmployeeService
      */
      getEmployees(): Employee[]
      { 
      return this.emp;
      }
      /**
       * 
       * 
       * @param {Employee} newEmp 
       * @memberof EmployeeService
       */
      createEmployee(newEmp: Employee)
      {
      this.emp.unshift(newEmp);
      
      }
        
}