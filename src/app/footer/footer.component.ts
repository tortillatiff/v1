import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;

    var footer = document.querySelector(".footer-content");

    if (footer.getBoundingClientRect().top + window.pageYOffset < scrollBottom - 150) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  }
}
