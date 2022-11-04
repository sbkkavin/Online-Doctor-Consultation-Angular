import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {

  constructor(private ploginservice:PatientloginService) { }

  ngOnInit(): void {
  }
  msg:string="";
  registeredPatient!:Patient;
  patientRegister(newPatientReg:Patient){
    console.log(newPatientReg);

    this.ploginservice.registerPatient(newPatientReg).subscribe((data)=>{
      this.registeredPatient=data;
      console.log(data);
      this.msg="Success"
      
    },
    (error)=>{
      this.msg="Patient with ID Exist Try using a Different ID"
    });
  }


}
