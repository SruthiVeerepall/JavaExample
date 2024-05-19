import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  storeMarks:string[]=[];

  constructor() { }
insertMarks(mark:string)
{
  this.storeMarks.push(mark);
}

}
