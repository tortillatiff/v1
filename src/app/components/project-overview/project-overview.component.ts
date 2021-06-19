import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  @Input() background: any;
  @Input() objectives: any;
  @Input() myRole: any;
  @Input() toolsUsed: any;
  @Input() repoUrl: any;
  @Input() liveSiteUrl: any;

  constructor() { }

  ngOnInit(): void {
  }

}
