import {Component, OnInit} from '@angular/core';
import {KeyCloakSecurityService} from './services/keycloak/config/key-cloak-security.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'keyCloak-FrontEnd';

  constructor(public kcservice: KeycloakService){}
  ngOnInit(): void {

  }

  onLogout() {
    this.kcservice.logout();
  }
}
