import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[UserService]
})
export class Comp1Component implements OnInit 
{
  updatedScores:String[]=[];
  constructor(private _service:UserService)
  {

  }
  ngOnInit():void
  {
    this.updatedScores=this._service.storeMarks;

  }
  addScore(mark:string)
  {
      this._service.insertMarks(mark);
  }
}
