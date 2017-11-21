import { Injectable } from '@angular/core';
import { ApiService }  from './../shared/api.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {

  constructor(private apiservice:ApiService) { }

  attemptAuth(type, credentials): Observable<any> {
      return this.apiservice.post('/login' , {user: credentials})
    .map(
      data => {
        return data; 
      }
    );
  }
}
