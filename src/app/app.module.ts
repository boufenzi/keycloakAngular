import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, isDevMode, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {KeycloakHttpInterceptorService} from './services/keycloak/interceptor/keycloak-http-interceptor.service';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {defaultDataServiceConfig, entityConfig} from './ngrx/entity-metadata';
import {RandomNumberService} from './ngrx/services/random-number.service';
import { WithoutLazyLoadingTestComponent } from './without-lazy-loading-test/without-lazy-loading-test.component';
/*
// permet d'executer ca avant le chargement de l'applicationn
export function kcFactory(kcSecurity: KeyCloakSecurityService) {
  return () => kcSecurity.init();
}
*/

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.url_KC + '/auth',
        realm: environment.url_REALM,
        clientId: environment.url_CLIENT_ID,
       },
      loadUserProfileAtStartUp: true,
       initOptions: {
        onLoad: 'login-required',
        },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    WithoutLazyLoadingTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot({},{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
      EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [RandomNumberService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    {provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: initializeKeycloak, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: KeycloakHttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
