import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorloginService {

  url:string="http://localhost:8080/logindoctor"
  constructor(private http:HttpClient) { }

  doctorLogin(lgDoc:Doctor):Observable<Doctor>{

    return this.http.post<Doctor>(this.url,lgDoc)
  }
validDoc!:Doctor;
  setDoctor(vDoc:Doctor){
    this.validDoc=vDoc;
    
  }

  getDoctor(){
    return this.validDoc;
  }
  url1:string="http://localhost:8080/registerdoctor"
  doctorRegister(nDoc:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.url1,nDoc)
  }

}

