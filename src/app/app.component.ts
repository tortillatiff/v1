import { Component } from '@angular/core';
import * as Feather from 'feather-icons';
import * as skills from '../json/skills.json';
import * as school from '../json/school.json';
import * as work from '../json/work.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills:  any  = (skills  as  any).default;
  school:  any  = (school  as  any).default;
  work:  any  = (work  as  any).default;

  ngOnInit() {
  }

  ngAfterViewInit() {
    Feather.replace();
  }
}
