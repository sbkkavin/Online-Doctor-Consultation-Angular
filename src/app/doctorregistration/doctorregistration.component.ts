import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {

  constructor(private dlogservice:DoctorloginService) { }

  ngOnInit(): void {
  }

  
  doctorRegister(newDoc:Doctor){
    this.dlogservice.doctorRegister(newDoc).subscribe((data)=>{
      console.log(data);
    });
  }


}
