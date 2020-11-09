import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import icons from './icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isProduction = environment.production;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    Object.keys(icons).forEach(key => {
      if (icons[key]) {
        iconRegistry.addSvgIcon(key, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icons[key]}`));
      }
    });
  }
}
