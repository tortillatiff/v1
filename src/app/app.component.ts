import { Component, HostListener, Inject } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  }
}
