import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { ViewStudentComponent } from './component/view-student/view-student.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    UpdateStudentComponent,
    NavbarComponent,
    DeleteStudentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

