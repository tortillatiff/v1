import { Component, HostListener } from '@angular/core';
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
  opacity;

  ngAfterViewInit() {
    Feather.replace();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;
    var pageBottom = document.body.scrollHeight;
    var diff = pageBottom - scrollBottom;

    // var pageWidth = window.innerWidth;
    // console.log(pageWidth)

    this.opacity = 1 - diff / 300;



    var sections = document.querySelectorAll(".section");

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];      

      if (section.getBoundingClientRect().top + window.pageYOffset < scrollBottom - 50) {
        section.classList.add('visible');
      } else {
        section.classList.remove("visible");
      }
    }
  }
}
