import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  templateUrl: './wave-divider.component.html',
  styleUrls: ['./wave-divider.component.css']
})
export class WaveDividerComponent implements OnInit {
  waveCol: any;

  constructor() { }

  ngOnInit(): void {
    let waveIndex = Math.floor((Math.random() * 4)); 

    if (waveIndex === 0) {
      this.waveCol = 'purple-wave';
    }
    if (waveIndex === 1) {
      this.waveCol = 'yellow-wave';
    }
    if (waveIndex === 2) {
      this.waveCol = 'green-wave';
    }
    if (waveIndex === 3) {
      this.waveCol = 'pink-wave';
    }
  }

}
