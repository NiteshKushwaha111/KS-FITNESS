import { Component } from '@angular/core';
import { ClassTimetableComponent } from '../../shared/class-timetable/class-timetable.component';
import { RouterModule } from '@angular/router';
// import $ from "jquery";
@Component({
  standalone : true,
  imports : [ClassTimetableComponent, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  constructor() {}

 
}
