import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'login',  component: HomeComponent },
    
  ];