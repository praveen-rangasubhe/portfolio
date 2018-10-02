import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  awards = '';

  constructor() { }



  ngOnInit() {
  }
  viewOne() {
    this.awards = '../../assets/Award1.jpg';
}
  viewTwo() {
    this.awards = '../../assets/Award2.jpg';
  }
  viewThree() {
    this.awards = '../../assets/Award3.jpg';
  }
  viewFour() {
    this.awards = '../../assets/Award4.jpg';
  }
  viewFive() {
    this.awards = '../../assets/Award5.jpg';
  }
  viewSix() {
    this.awards = '../../assets/Award6.jpg';
  }

}
