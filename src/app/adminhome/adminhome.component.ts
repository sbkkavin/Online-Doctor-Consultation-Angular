import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Hospitaladmin } from '../models/hospitaladmin';
import { Patient } from '../models/patient';
import { AdminloginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private alogservice:AdminloginService) { }
validAdmin!:Hospitaladmin;
  ngOnInit(): void {
    this.validAdmin=this.alogservice.getAdmin()
   
    this.alogservice.getAllDoctors().subscribe((data)=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    });
    
    

  }
  allpatients!:Patient[];

  getPatients(){
    this.alogservice.getAllPatients().subscribe((data)=>{
      this.allpatients=data;
      console.log(this.allpatients)

    });
  }
  allDoctors!:Doctor[];
  getDoctors(){
    this.alogservice.getAllDoctors().subscribe((data)=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    });
  }





}
