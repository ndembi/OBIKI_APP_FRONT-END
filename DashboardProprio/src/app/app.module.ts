import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Tous les modules necessaires à material se trouvent dans all-material-modules
import { AllModulesModule } from './all-modules/all-modules.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAppComponent } from './dashboard-app/dashboard-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationAppComponent } from './navigation-app/navigation-app.component';
import { InterfacePharmacienComponent } from './interface-pharmacien/interface-pharmacien.component';
import { AddPharmacienComponent } from './add-pharmacien/add-pharmacien.component';
import { EditPharmacienComponent } from './edit-pharmacien/edit-pharmacien.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAppComponent,
    NavigationAppComponent,
    InterfacePharmacienComponent,
    AddPharmacienComponent,
    EditPharmacienComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AllModulesModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: InterfacePharmacienComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
