import { Component, OnInit, HostListener } from '@angular/core';
import * as skills from '../../json/skills.json';
import * as school from '../../json/school.json';
import * as work from '../../json/work.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  skills:  any  = (skills  as  any).default;
  school:  any  = (school  as  any).default;
  work:  any  = (work  as  any).default;

  opacity;

  ngOnInit() {
  }

  enterProjCursor() {
    document.querySelector('.cursor').classList.add("cursor-project-hover");
    document.querySelector('.cursor-child').classList.add("cursor-child-remove");
  }
  exitProjCursor() {
    document.querySelector('.cursor').classList.remove("cursor-project-hover");
    document.querySelector('.cursor-child').classList.remove("cursor-child-remove");
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
