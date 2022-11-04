import { Component, OnInit } from '@angular/core';
import { BookingRequest } from '../models/booking-request';
import { Doctor } from '../models/doctor';
import { Hospitaladmin } from '../models/hospitaladmin';
import { Patient } from '../models/patient';
import { AdminloginService } from '../services/adminlogin.service';
import { BookingrequestService } from '../services/bookingrequest.service';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private alogservice:AdminloginService,private brService:BookingrequestService,private pls:PatientloginService) { }
validAdmin!:Hospitaladmin;
allBookingRequest:BookingRequest[]=[];
allpatients!:Patient[];
  ngOnInit(): void {
    this.validAdmin=this.alogservice.getAdmin()
   
    this.alogservice.getAllDoctors().subscribe((data)=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    });
    
    this.brService.allRequests().subscribe((data)=>{
      this.allBookingRequest=data;
    })

    this.alogservice.getAllPatients().subscribe((data)=>{
      this.allpatients=data;
      console.log(this.allpatients)

    });



  }
  

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



getAllRequest(){
  this.brService.allRequests().subscribe((data)=>{
    this.allBookingRequest=data;
  })
}
// reqPatient!:Patient;
resPatient!:Patient;
pid!:number;
bookingConfirmed!:Patient;

bRequestParam(rPid:number,rDocid:number){
  console.log("pid:"+rPid+"  docid:"+rDocid);

this.pid=rPid;
console.log(this.pid);
this.brService.getPatientById(this.pid).subscribe((data)=>{
  this.resPatient=data;
  console.log("response patient:"+this.resPatient.patient_name);
});
this.resPatient.adocid=0;
this.resPatient.adocid=rDocid;
console.log("assigned docid"+this.resPatient.adocid)

this.pls.newBooking(this.resPatient).subscribe((data)=>{
         this.bookingConfirmed=data;
         console.log(this.bookingConfirmed);
     });



}

deleteRequest(dbookingRq:BookingRequest){

  this.brService.deleteBookingRequest(dbookingRq).subscribe((data)=>{
    this.allBookingRequest=data;
  });
}



}
