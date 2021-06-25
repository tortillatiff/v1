import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proj-page-footer',
  templateUrl: './proj-page-footer.component.html',
  styleUrls: ['./proj-page-footer.component.css']
})
export class ProjPageFooterComponent implements OnInit {
  @Input() nextProj: any;
  @Input() prevProj: any;

  constructor() { }

  ngOnInit(): void {
  }

}
