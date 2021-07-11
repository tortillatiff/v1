import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rescalelab-redesign',
  templateUrl: './rescalelab-redesign.component.html',
  styleUrls: ['./rescalelab-redesign.component.css']
})
export class RescalelabRedesignComponent implements OnInit {
  assetFolderPath = "../../../../assets/rescalelab-new";

  nextProj = {
    name: "vibing.",
    routerLink: "/project/vibing"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
