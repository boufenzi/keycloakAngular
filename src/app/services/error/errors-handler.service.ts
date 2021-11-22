import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandlerService {

  constructor(private route: Router) {
  }

  ExceptionsHandler(error) {
    switch (error.status) {
      case 401 :
        this.route.navigateByUrl('/error/interdiction'); break;
      case 403 :
        this.route.navigateByUrl('/error/interdiction'); break;
      default:
       return error;
    }

  }

}
