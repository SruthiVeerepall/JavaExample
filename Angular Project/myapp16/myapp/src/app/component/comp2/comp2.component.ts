import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit
{

  updatedScores:String[]=[];
  constructor(private _service: UserService)
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
