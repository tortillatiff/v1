import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.css']
})
export class ProjCardComponent implements OnInit {
  @Input() project;
  @Input() index;

  contentStyle;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;

    var cards = document.querySelectorAll(".card");

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];

      if (card.getBoundingClientRect().top + window.pageYOffset < scrollBottom - 50) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    }
  }
}
