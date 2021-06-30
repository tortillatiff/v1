import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vibing',
  templateUrl: './vibing.component.html',
  styleUrls: ['./vibing.component.css', '../../projects.component.css']
})
export class VibingComponent implements OnInit {
  assetFolderPath = '../../../../assets/vibing';
  
  prevProj = {
    name: "Rescale Lab",
    routerLink: "/project/rescalelab"
  }
  nextProj = {
    name: "the good stuff",
    routerLink: "/project/thegoodstuff"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
