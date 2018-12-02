import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  logdatas: any;
  constructor(public http: Http) {
      const timestamp = Date.now()
      
    }
    
    getlogs() {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
   
      this.http.get("https://api.everettlacey.com/v1/buckets/tasks/collections/test/records")
        .subscribe(data => {
          console.log(data) //['_body']);
          this.logdatas = JSON.parse(data['_body']);
             }, error => {
          console.log(error);// Error getting the data
        });
    }
    delete(item){
      console.log(item)
      this.http.delete(`https://api.everettlacey.com/v1/buckets/tasks/collections/test/records/${item}`)
      .subscribe(data => {
        console.log("Successfully Deleted");
        // this.getlogs();
        console.log(data) //['_body']);
       }, error => {
        console.log("ERROR"); 
        console.log(error);// Error getting the data
      });
      this.getlogs();
    }
}
