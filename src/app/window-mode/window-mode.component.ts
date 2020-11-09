import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-mode',
  templateUrl: './window-mode.component.html',
  styleUrls: ['./window-mode.component.scss'],
  host: {'(window:resize)': 'onWindowResize($event)'}
})
export class WindowModeComponent implements OnInit {

  width;
  height;
  mode = 'mobile';
  constructor() { }

  ngOnInit(): void {
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.mode = this.getMode();
  }

  getMode() {
    if (this.width < 481) {
      return 'mobile';
    }
    if (this.width < 769) {
      return 'tablet';
    }
    if (this.width < 1025) {
      return 'laptop';
    }
    return 'desktop';
  }

}
