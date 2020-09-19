import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  
  // private cookieVal = document.getElementById("cookieForm");
  

  constructor() { }

  
  ngOnInit(): void {
  }

  saveCookie(cookieVal : any){
    console.log(cookieVal);
    document.cookie = "value="+cookieVal+"";
  }

}
