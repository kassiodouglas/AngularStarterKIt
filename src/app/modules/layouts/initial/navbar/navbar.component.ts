import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from 'src/app/core/Router';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {
  appName = environment.appName;
  routes:Array<any> = [];
  links:Array<string> = ['home','docs'];

  constructor(){}

  ngOnInit(): void {  
    this.links.forEach(link => this.routes.push(Router.path(link)))  
  }

  ngOnDestroy(): void {    
  }



}
