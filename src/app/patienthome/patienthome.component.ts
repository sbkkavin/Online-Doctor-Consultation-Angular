import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { AdminloginService } from '../services/adminlogin.service';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.css']
})
export class PatienthomeComponent implements OnInit {

  constructor(private pls:PatientloginService, private alogservice:AdminloginService) { }
  validPt!:Patient;

  ngOnInit(): void {
    this.validPt=this.pls.getPatient();
    
    this.alogservice.getAllDoctors().subscribe((data)=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    });
  }
  allDoctors!:Doctor[];
  getDoctors(){
    this.alogservice.getAllDoctors().subscribe((data)=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    });
  }
bookingConfirmed!:Patient;
  bookingRequest(newBookingRequest:Patient){
    newBookingRequest.patient_name=this.validPt.patient_name;
    newBookingRequest.pid=this.validPt.pid;
    newBookingRequest.phoneno=this.validPt.phoneno;
    newBookingRequest.patient_password=this.validPt.patient_password
    console.log(newBookingRequest)

    this.pls.newBooking(newBookingRequest).subscribe((data)=>{
        this.bookingConfirmed=data;
        console.log(this.bookingConfirmed);
    });
  }


}
