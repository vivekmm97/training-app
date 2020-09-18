import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 
  constructor() { }
  cookieStatus = false;
  fileStatus = false;
  apiStatus = false;

  loadCookie(){
    if((this.fileStatus || this.apiStatus) == false){
    this.cookieStatus = this.cookieStatus ? false : true;
  }
}
  loadApi(){
    if((this.cookieStatus || this.fileStatus) == false){
    this.apiStatus = this.apiStatus ? false : true;
    }
  }
  loadFile(){
    if((this.cookieStatus || this.apiStatus) == false){
    this.fileStatus = this.fileStatus ? false : true;
  }
}
  ngOnInit(): void {
  }  

}

