import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  regForm: FormGroup;
  constructor(private _service:StudentService,private _fb: FormBuilder, private _router:Router,private _activateRouter:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    //this.studentName=this._activateRouter.snapshot.params['name'];
    //this.password=this._activateRouter.snapshot.params['password'];
    this.regForm = this._fb.group(
      {
        studentName: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
        password: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])]
      }
    )
    
  }

  login()
  {
    if(this.regForm.valid)
    {
      //console.log(this.regForm.value.studentName);
      this._service.loginStudent(this.regForm.value.studentName,this.regForm.value.password).subscribe(res=>
        {
        //console.log(res);
        this._router.navigate(['']);
        }
        )
      
    }

  }

}
