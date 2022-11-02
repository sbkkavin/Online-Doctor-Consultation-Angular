import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorregistrationComponent } from './doctorregistration/doctorregistration.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component'

@NgModule({
  declarations: [
    AppComponent,
    PatientloginComponent,
    PatienthomeComponent,
    DoctorloginComponent,
    DoctorhomeComponent,
    DoctorregistrationComponent,
    PatientregistrationComponent,
    AdminloginComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
