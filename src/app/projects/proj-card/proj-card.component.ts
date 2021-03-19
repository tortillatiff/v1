import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.css']
})
export class ProjCardComponent implements OnInit {
  @Input() project;

  contentStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
