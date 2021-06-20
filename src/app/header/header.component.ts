import { Component, HostListener, Input, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  opacity;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;
    var pageBottom = document.body.scrollHeight;
    var diff = pageBottom - scrollBottom;

    this.opacity = diff / 300;
  }

  navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
  }

}
