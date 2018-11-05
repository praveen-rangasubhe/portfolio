import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BDNA';
  public show: boolean = true;
  // public buttonName: any = 'Show';


  toggle() {
    this.show = false;
  }
// home
  toggle1() {
    this.show = true;
  }


}

