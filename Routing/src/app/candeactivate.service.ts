import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export interface CandeactivateComponent{
  canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<CandeactivateComponent>{

  constructor() { }
  canDeactivate(component:CandeactivateComponent,route:ActivatedRouteSnapshot,state:RouterStateSnapshot,
    nextState?:RouterStateSnapshot
  ):Observable<boolean> | Promise<boolean> | boolean{
    return component.canDeactivate();
  }
}
