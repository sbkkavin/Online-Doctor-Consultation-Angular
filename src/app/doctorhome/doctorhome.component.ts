import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent implements OnInit {

  constructor(private dlogservice:DoctorloginService) { }
loggedDoc!:Doctor;
  ngOnInit(): void {
    this.loggedDoc=this.dlogservice.getDoctor();
    
  }

}
