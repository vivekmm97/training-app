import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { ApiCallService } from 'src/app/services/api-page/api-call.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  
  // constructor( private apiService : ApiCallService){}
  @Input() name: any = [];
  public list: any = [];
  ngOnInit(): void {
    // this.apiService.getData().subscribe(data => this.list = data);
  }

}
