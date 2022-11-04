import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingRequest } from '../models/booking-request';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class BookingrequestService {

  constructor(private http:HttpClient) { }

url:string="http://localhost:8080/newbookingrequest"
url1:string="http://localhost:8080/getallrequests"
url2:string="http://localhost:8080/patientbyid"
url3:string="http://localhost:8080/getdocpatient"
url4:string="http://localhost:8080/deletebookingrequest"

newRequest(nBrq:BookingRequest):Observable<BookingRequest>{
  return this.http.post<BookingRequest>(this.url,nBrq);
}

allRequests():Observable<BookingRequest[]>{
  return this.http.get<BookingRequest[]>(this.url1);
}

getPatientById(pid:number):Observable<Patient>{
  return this.http.post<Patient>(this.url2,pid);
}

getPatientsByDocid(Id:Doctor):Observable<Patient[]>{
  return this.http.post<Patient[]>(this.url3,Id);

}

deleteBookingRequest(dbRq:BookingRequest):Observable<BookingRequest[]>{
  return this.http.post<BookingRequest[]>(this.url4,dbRq);
}

}
