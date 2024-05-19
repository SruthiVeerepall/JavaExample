import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit
{
  regForm1:FormGroup;
  studentid:number
  constructor(private _activateRouter:ActivatedRoute, private _fb:FormBuilder, private _router:Router,private _service:StudentService)
  {

  }
  ngOnInit(): void {
   this.studentid=this._activateRouter.snapshot.params['id'];
   //alert(this.studentId);
   this.regForm1 = this._fb.group(
    {
      studentId: [this.studentid],
      studentName: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
      studentEmail: ['',Validators.compose([Validators.required,Validators.email])],
      studentAge: [0,Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(4)])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])]

    })
  }

  update()
  {      
       //console.log(this.regForm1.value);
    if(this.regForm1.valid)
    {
      Swal.fire({
        title: "Do you want to update the Record",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Update",
        denyButtonText: `Don't Update`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this._service.updateRecore(this.studentid,this.regForm1.value).subscribe(res=>
            {
              //console.log(res);
             // alert('Studdent added');
             Swal.fire("Updated!", "", "success");
              this._router.navigate(['']);
            })
          
        } else if (result.isDenied) {
          Swal.fire("Changes are not Updated", "", "info");
        }
      });
    
    }
  }

}
