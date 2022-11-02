import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorregistrationComponent } from './doctorregistration/doctorregistration.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';

const routes: Routes = [
  {
    path:"",
    component:PatientloginComponent,


  },
  {
    path:"patient/registration",
    component:PatientregistrationComponent
  },
  {
    path:"patient/loginsuccess",
    component:PatienthomeComponent
  },
  {
    path:"doctorlogin",
    component:DoctorloginComponent

  },
  {
    path:"doctor/registration",
    component:DoctorregistrationComponent
  },
  {
    path:"doctor/loginsuccess",
    component:DoctorhomeComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent

  },
  {
    path:"admin/loginsuccess",
    component:AdminhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
