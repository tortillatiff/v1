import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thegoodstuff',
  templateUrl: './thegoodstuff.component.html',
  styleUrls: ['../vibing/vibing.component.css']
})
export class ThegoodstuffComponent implements OnInit {
  prevProj = {
    name: "vibing.",
    routerLink: "/project/vibing"
  }

  nextProj = {
    name: "berry",
    routerLink: "/project/berry"
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
