import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
// import Kinto from "kinto"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
	inputDatum : string;
  timestamp : number;
  ghkey: any;
  constructor(
		public http: Http) {
    }
    
    
    log() {
      this.ghkey = environment.ghkey
    this.timestamp = Date.now()
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
     headers.append('Authorization', 'Bearer ' + btoa('github' + ':' + 
  this.ghkey));
      console.log(this.ghkey)
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {'data': {"created": `${this.timestamp}`, 'note':`${this.inputDatum}`}};
    
    this.http.post("http://api.everettlacey.com/v1/buckets/tasks/collections/test/records", postParams, options)
      .subscribe(data => {
        console.log(data) //['_body']);
        this.inputDatum = ''
       }, error => {
        console.log(error);// Error getting the data
      });
  }
}