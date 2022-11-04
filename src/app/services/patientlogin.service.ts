import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientloginService {

  constructor(private http:HttpClient) { }

  newPatient!:Patient;
setPatient(npt:Patient){
  this.newPatient=npt;
  console.log("yooo"+this.newPatient.patient_name);

}
getPatient(){
  return this.newPatient;
}
url:string="http://localhost:8080/loginpatient"
url1:string="http://localhost:8080/registerpatient"
url2:string="http://localhost:8080/bookingrequest"
url3:string="http://localhost:8080/addfeedback"
  loginPatient(patientlogindata:Patient):Observable<Patient>{
    return this.http.post<Patient>(this.url,patientlogindata);
  }

  registerPatient(npt:Patient):Observable<Patient>{
    return this.http.post<Patient>(this.url1,npt);
  }

  newBooking(npt:Patient):Observable<Patient>{
    return this.http.post<Patient>(this.url2,npt);
  }

  addFeedback(fd:Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.url3,fd);

  }

}
