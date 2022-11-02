import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { Hospitaladmin } from '../models/hospitaladmin';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }
url:string="http://localhost:8080/adminlogin"
url1:string="http://localhost:8080/patients"
url2:string="http://localhost:8080/doctors"
  adminLogin(lgAdmin:Hospitaladmin):Observable<Hospitaladmin>{

    return this.http.post<Hospitaladmin>(this.url,lgAdmin)
  }
validAdmin!:Hospitaladmin;
  setAdmin(nAdmin:Hospitaladmin){
    this.validAdmin=nAdmin;

  }
  getAdmin(){
    return this.validAdmin;
  }
  getAllPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.url1);

  }
  getAllDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.url2);
  }
}
