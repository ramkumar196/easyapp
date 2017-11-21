import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http' 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  results:string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    
    this.http.post('/api/items',{
      params: new HttpParams().set('id', '3'),
    }).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
    
  }

}
