import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Hospitaladmin } from '../models/hospitaladmin';
import { AdminloginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private alogservice:AdminloginService,private rt:Router) { }

  ngOnInit(): void {
  }
  msg:string=""
  loggedInAdmin!:Hospitaladmin;
  adminLogin(logindata:Hospitaladmin){
    console.log(logindata);
    //  this.loggedInPatient.pid=-1;
        // console.warn(logindata);
        this.alogservice.adminLogin(logindata).subscribe((data)=>{
          this.loggedInAdmin=data;
          this.alogservice.setAdmin(this.loggedInAdmin);
          this.rt.navigate(["/admin/loginsuccess"]);
        },
        (error)=>{
          this.msg="Invalid credentials"
        }
        )
        setTimeout (() => {console.warn(this.loggedInAdmin);
          
       }, 1000);
        
    
    
    
      }
}
