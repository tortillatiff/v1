import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() type: string;

  opacity;
  screenWidth: any;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + window.innerHeight;
    var pageBottom = document.body.scrollHeight;
    var diff = pageBottom - scrollBottom;

    this.opacity = diff / 300;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  scrollToElem(elemId:string) {
    if (this.type == 'project') {
      this.router.navigate(['/']);
    }
    document.getElementById(elemId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });

    this.toggleResponsiveMenu();
  }

  toggleResponsiveMenu() {
    if (this.screenWidth < 991) {
      document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

}
