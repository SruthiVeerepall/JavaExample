import { Component, OnInit } from '@angular/core';
import { Student } from 'src/helper/student';
import { StudentService } from 'src/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{

  students:Student[];
  constructor(private _studentService:StudentService)
  {

  }
  ngOnInit(): void {
    this.getAllRecords();
  }
  getAllRecords()
  {
    this._studentService.getAllStudents().subscribe(res=>{
      this.students=res;
      console.log(res);
    })
  }
  deleteRecord(id:number)
  {
    Swal.fire({
      title: "Do you want to delete the Record",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._studentService.deleteStudentById(id).subscribe(res=>
          {
            
            Swal.fire("Deleted!", "", "success");
            this.getAllRecords();
          })
         
      } else if (result.isDenied) {
        Swal.fire("not deleted", "", "info");
      }
    });

  }

}
