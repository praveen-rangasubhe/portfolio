import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
  address: string;
  phone: number;
  photo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SHRI NINGAPPA N. KADAPATTI', designation: 'PRESIDENT', address: 'ALABAL', phone: 9483951870 , photo: 'photo'},
  {position: 2, name: 'SHRI MUCHAKANDAYYA B.HANGARGI', designation: 'VICE PRESIDENT', address: 'NANDIKESHWAR' , phone: 9448138032 , photo : 'photo'},
  {position: 3, name: 'SHRI MUREGEPPA K. NARA', designation: 'DIRECTOR', address: 'BAGALKOT' , phone: 9448121093 ,  photo : 'photo'},
  {position: 4, name: 'SHRI KADAPPA H.PATIL', designation: 'DIRECTOR', address: 'SORAGOAN' , phone: 9448549048 , photo : 'photo'},
  {position: 5, name: 'SHRI  ILLAHI S.KANGNOLLI', designation: 'DIRECTOR', address: 'JAMAKHANDI' , phone: 9448952727 , photo : 'photo'},
  {position: 6, name: 'SHRI BHIMSE B.KADAM', designation: 'DIRECTOR', address: 'TODALABAGI' , phone: 9448035734 , photo : 'photo'},
  {position: 7, name: 'SHRI  JAGADISH N.YANDIGERI', designation: 'DIRECTOR', address: 'KERUR' , phone: 8951504624 , photo : 'photo'},
  {position: 8, name: 'SHRI NILAPPA P.TAPALI', designation: 'DIRECTOR', address: 'HUNAGUNDA' , phone: 9448418663 , photo : 'photo'},
  {position: 9, name: 'SHRI HANAMANTHGOUDA R.PATIL', designation: 'DIRECTOR', address: 'SULIBHAVI' , phone: 9611629494 , photo : 'photo'},
  {position: 10, name: 'SHRI VIRUPAKSHAPPA M.TEGGI', designation: 'DIRECTOR', address: 'LOKAPURA' , phone: 9448776728 , photo : 'photo'},
  {position: 11, name: 'SHRI PRAKASH P.JAGALI', designation: 'DIRECTOR', address: 'SUNAGA' , phone: 9448188204  , photo : 'photo'},
  {position: 12, name: 'SHRI SANGANABASAPPA S.NIDAGUNDI', designation: 'DIRECTOR', address: 'AMINAGADA' , phone: 9591248393 , photo : 'photo'},
  {position: 13, name: 'SHRIMATI SAVITA K.KESARKAR', designation: 'DIRECTOR', address: 'SAVALAGI' , phone: 9008369239 , photo : 'photo'},
];

@Component({
  selector: 'app-blk',
  templateUrl: './blk.component.html',
  styleUrls: ['./blk.component.scss']
})


export class BlkComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'designation',  'address', 'phone' , 'photo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
    
  }

}
