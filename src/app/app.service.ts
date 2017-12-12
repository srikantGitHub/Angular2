import { NgModule,Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Myservices {
    cources;
    private baseUrl: string = 'http://localhost:8080/MBP/rest/fir/getuser?access_token=350ccc59-523b-4c7c-bffd-22bb83fcc709';
    constructor(private http : Http){
    }

   getTitle() {
        return '!!! Welcome In Angular 2 Srikant !!!';
    }

   getCources(){
        this.cources=['Srikant Bhushan','Kiran Bhushan','Avyukt Bhushan','Brijesh Bhushan'];
        return this.cources;
    }

   getFir() {
    return this.http.get(this.baseUrl)
    .map(response => response.json());
  }
}
