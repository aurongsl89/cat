import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catapi';
  content:any;
  constructor(   private http:HttpClient){

  }
  randomCatFact(){
    const url ='https://localhost:7166/cat';
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET',
    });

    this.http.get(url, {headers: headers}).subscribe((response: any) => {
      this.content = {
        fact: response.fact,
        length: response.length
      }

    });


  }
}
