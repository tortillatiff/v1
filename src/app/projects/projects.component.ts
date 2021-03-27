import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Output() changeTab = new EventEmitter();
  projects = [
    { bgCol: "#E8BEC5", title: 'the good stuff', desc: 'e-commerce platform with authentication and payment features', imgPath: '../../assets/projects/tgs-thumbnail.png' },
    { bgCol: '#D9E7DA', title: 'vibing.', desc: "created for Hack&Roll 2021: app utilising Spotify's recommendation algorithm to  create personalized playlists", imgPath: '../../assets/projects/vibing-thumbnail.png' },
    { bgCol: "#E7D0AB", title: 'redesigning rescalelab', desc: 'self-initiated proposal for a redesign of my company’s website', imgPath: '../../assets/projects/rsl-thumbnail.png' },
    { bgCol: "#E6C5E8", title: 'berry', desc: 'tile-format shopping list mobile app to ease grocery shopping.', imgPath: '../../assets/projects/berry-thumbnail.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onOpenTab(title) {
    this.changeTab.emit(title);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;
    var projects = document.querySelectorAll(".proj");

    for (var i = 0; i < projects.length; i++) {
      var proj = projects[i];      

      if (proj.getBoundingClientRect().top + window.pageYOffset < scrollBottom) {
        proj.classList.add('visible');
      } else {
        proj.classList.remove("visible");
      }
    }
  }
}
