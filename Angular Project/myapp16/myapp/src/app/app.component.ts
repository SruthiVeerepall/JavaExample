import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  isValid=true;

  student=[{
    StudentId: 101,
    StudentName: 'Sruthi',
    StudentAge:23
  },
  {
    StudentId: 102,
    StudentName: 'Susmitha',
    StudentAge:25
  }
]
  constructor()
  {
    console.log('This is app constructor')
  }

  test()
  {
    this.isValid=!this.isValid;
    alert('This is the first project')
  }
}
