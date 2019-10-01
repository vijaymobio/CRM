import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

/**
 * @description User Authorization Header set
 * @author Vijay Prajapati
 *
 */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'bariar ' + sessionStorage.getItem('basicauth')
        }
      });
    }
    console.log('req',req);

    return next.handle(req);
  }
}
