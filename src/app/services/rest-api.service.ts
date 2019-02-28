import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  get (link:string){
    // the link provided return as a promise
    return this.http.get(link).toPromise();
  }

  post (link: string, body: any){
    return this.http.post(link, body).toPromise();
  }


}
