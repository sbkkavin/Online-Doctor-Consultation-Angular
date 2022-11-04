import { Component, OnInit } from '@angular/core';
import { BookingRequest } from '../models/booking-request';
import { Doctor } from '../models/doctor';
import { Feedback } from '../models/feedback';
import { Patient } from '../models/patient';
import { BookingrequestService } from '../services/bookingrequest.service';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent implements OnInit {

  constructor(private dlogservice:DoctorloginService,private brs:BookingrequestService) { }
loggedDoc!:Doctor;
bookedPatients:Patient[]=[]
patientFeedback:Feedback[]=[]
  
ngOnInit(): void {
    this.loggedDoc=this.dlogservice.getDoctor();

    this.brs.getPatientsByDocid(this.loggedDoc).subscribe((data)=>{
      this.bookedPatients=data
      console.log(this.bookedPatients);
    })
    this.dlogservice.getFeedback(this.loggedDoc).subscribe((data)=>{
        this.patientFeedback=data;
    })
      
    }

    getPatients(){
      this.brs.getPatientsByDocid(this.loggedDoc).subscribe((data)=>{
        this.bookedPatients=data
        console.log(this.bookedPatients);
      })
    }
    
  }




