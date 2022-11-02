import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {

  constructor(private dlogservice:DoctorloginService,private rt:Router) { }

  ngOnInit(): void {
  }
  msg:string="";
loggedInDoctor!:Doctor;
  doctorLogin(logindata:Doctor){
    console.log(logindata);
    //  this.loggedInPatient.pid=-1;
        // console.warn(logindata);
        this.dlogservice.doctorLogin(logindata).subscribe((data)=>{
          this.loggedInDoctor=data;
          this.dlogservice.setDoctor(this.loggedInDoctor);
          this.rt.navigate(["/doctor/loginsuccess"]);
        },
        (error)=>{
          this.msg="Invalid credentials"
        }
        )
        setTimeout (() => {console.warn(this.loggedInDoctor);
          
       }, 1000);
        
    
    
    
      }

      // doctorRegister(newDoc:Doctor){
      //   this.dlogservice.doctorRegister(newDoc).subscribe((data)=>{
      //     console.log(data);
      //   });
      // }

}
