import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }


  constructor() { }

  ngOnInit() {
  }

}
