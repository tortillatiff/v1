import { Component, Input, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-proj-page-title',
  templateUrl: './proj-page-title.component.html',
  styleUrls: ['./proj-page-title.component.css']
})
export class ProjPageTitleComponent implements OnInit {
  @Input() tags: Array<any>;
  @Input() title: any;
  @Input() comingSoon: boolean;
  @Input() liveSiteUrl: string;
  @Input() repoUrl: string;

  constructor() { }

  ngOnInit(): void {
  } 

  ngAfterViewInit() {
    Feather.replace();
  }

}
