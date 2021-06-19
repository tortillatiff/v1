import { Component, Input, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-proj-page-title',
  templateUrl: './proj-page-title.component.html',
  styleUrls: ['./proj-page-title.component.css']
})
export class ProjPageTitleComponent implements OnInit {
  @Input() title: any;
  @Input() description: any;
  @Input() heroImgPath: any;


  @Input() comingSoon: boolean;
  @Input() liveSiteUrl: string;
  @Input() tags: Array<any>;

  @Input() repoUrl: string;

  constructor() { }

  ngOnInit(): void {
  } 

  ngAfterViewInit() {
    Feather.replace();
  }

}
