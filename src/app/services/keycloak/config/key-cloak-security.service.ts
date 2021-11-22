import {Injectable} from '@angular/core';
import {KeycloakInstance, KeycloakLoginOptions} from 'keycloak-js';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeyCloakSecurityService {
  public kc: KeycloakInstance;


  constructor(private route: Router) {
  }


  public async init() {
    console.log('initialisation');
    this.kc = new Keycloak({
      url: environment.url_KC + '/auth',
      realm: environment.url_REALM,
      clientId: environment.url_CLIENT_ID,
      });
    await this.kc.init({
      onLoad: 'login-required',
      silentCheckSsoRedirectUri: 'none',

    }).then(value => this.route.navigateByUrl('/racine'));
    console.log(this.kc.token);
  }

  isSupervisor() {
   return this.kc.hasRealmRole('ROLE_USER');
  }
  isAdmin() {
    return this.kc.hasRealmRole('ROLE_ADMIN');
  }


}
