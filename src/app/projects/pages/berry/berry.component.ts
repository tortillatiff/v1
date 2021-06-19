import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['../vibing/vibing.component.css', '../../projects.component.css']
})
export class BerryComponent implements OnInit {
  assetFolderPath = "../../../../assets/berry";

  constructor() { }

  ngOnInit(): void {
  }

}
