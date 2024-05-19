import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from 'src/helper/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
 private API_BASE_PATH:string="http://localhost:9091/";

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.API_BASE_PATH+'student/');
  }
  addStudent(student:NgForm)
  {
    return this.http.post(this.API_BASE_PATH+'student/',student);
  }
  deleteStudentById(id:number)
  {
    return this.http.delete(this.API_BASE_PATH+'student/'+id);
  }
  getStudentById(id:number)
  {
    return this.http.get(this.API_BASE_PATH+'student/'+id);
  }
  updateRecore(id:number,student:NgForm)
  {
    //console.log(this.http.put(this.API_BASE_PATH+'student/'+id,student));
    return this.http.put(this.API_BASE_PATH+'student/'+id,student);
    
  }
  loginStudent(name:String,password:String)
  {
    return this.http.get(this.API_BASE_PATH+'student/test/'+name+'/'+password);
  }
}
