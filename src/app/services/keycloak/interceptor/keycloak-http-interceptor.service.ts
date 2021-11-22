import {Injectable} from '@angular/core';
import {KeyCloakSecurityService} from '../config/key-cloak-security.service';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorsHandlerService} from '../../error/errors-handler.service';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor {
  token: string;

  constructor(private kcService: KeycloakService, private errorHandler: ErrorsHandlerService) {
    if (!this.token) {
      this.kcService.getToken().then(token => this.token = token.toString());
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('interceptor' + JSON.stringify(req));
    if (!this.kcService.getUsername()) {
      return next.handle(req);
    }
    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.token,
      }
    });
    return next.handle(request);
  }
}
