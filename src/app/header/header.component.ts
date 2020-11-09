import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenavref: any;
  isOpen = false;
  toggle() {
    this.sidenavref.toggle();
    this.isOpen = !this.isOpen;
  }
  constructor() {}
  ngOnInit(): void {}
}
