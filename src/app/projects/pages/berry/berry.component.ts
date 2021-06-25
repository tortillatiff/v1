import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent implements OnInit {
  assetFolderPath = "../../../../assets/berry";

  prevProj = {
    name: "the good stuff",
    routerLink: "/project/thegoodstuff"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
