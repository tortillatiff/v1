import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public windowWidth;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    
    let cursor = document.querySelector('.cursor');
    let cursorChild = document.querySelector('.cursor-child');

    document.addEventListener('mousemove', e => {
      let y = e.pageY;
      let x = e.pageX;
      cursor.setAttribute("style", "top: "+(y)+"px; left: "+(x)+"px;");
      cursorChild.setAttribute("style", "top: "+(y)+"px; left: "+(x)+"px;")
    })
  }
}
