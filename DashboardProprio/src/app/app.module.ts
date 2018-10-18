import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Tous les modules necessaires à material se trouvent dans all-material-modules
import { AllModulesModule } from './all-modules/all-modules.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAppComponent } from './dashboard-app/dashboard-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationAppComponent } from './navigation-app/navigation-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAppComponent,
    NavigationAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AllModulesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
