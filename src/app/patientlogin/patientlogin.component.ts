import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Patient } from '../models/patient';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

  constructor(private ploginservice:PatientloginService, private rt:Router) { }
loggedInPatient!:Patient;
msg:string="";
  ngOnInit(): void {
  }
  patientLogin(logindata:Patient){
//  this.loggedInPatient.pid=-1;
    // console.warn(logindata);
    this.ploginservice.loginPatient(logindata).subscribe((data)=>{
      this.loggedInPatient=data;
      this.ploginservice.setPatient(this.loggedInPatient);
      this.rt.navigate(["/patient/loginsuccess"]);
    },
    (error)=>{
      this.msg="Invalid credentials"
    }
    )
    setTimeout (() => {console.warn(this.loggedInPatient);
      
   }, 1000);
    



  }
  // registeredPatient!:Patient;
  // patientRegister(newPatientReg:Patient){
  //   console.log(newPatientReg);

  //   this.ploginservice.registerPatient(newPatientReg).subscribe((data)=>{
  //     this.registeredPatient=data;
  //     console.log(data);

  //   });
  // }


}
