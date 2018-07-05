import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate, CanActivateChild{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
    return true;

  }
  canActivateChild(childRoute:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
    return false;
  }
  constructor() { }
}
