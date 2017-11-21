import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http' ;
import { Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService }  from './../shared/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  results:string;
  //errors:Errors = new Errors();

  constructor(private loginservice: LoginService,) { }

  ngOnInit() { 
  

  }

  login()
  {
    const credentials = this.loginForm.value;
    this.loginservice.attemptAuth(this.loginForm, credentials)
    .subscribe(
     // data => this.router.navigateByUrl('/'),
      err => {
      //  this.errors = err;
      });
  }

}
