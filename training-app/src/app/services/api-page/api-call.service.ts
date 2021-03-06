import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private httpClient: HttpClient ) { }

getData(): Observable<any>{
    const UrlValue = "https://gorest.co.in/public-api/posts";
    return new Observable(observer => {
      this.httpClient.get(UrlValue).subscribe((response: any) => {
        observer.next(response);
        observer.complete();
      }, (error: any) => {
        observer.error(error);
        observer.complete();
      });
    });
    }
}