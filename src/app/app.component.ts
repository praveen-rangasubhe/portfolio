import { Component  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BDNA';
  public show: boolean = true;
  // public buttonName: any = 'Show';

  constructor(private router: Router) {}

  toggle() {
    this.show = false;
  }
// home
  toggle1() {
    this.show = true;
  }



}

