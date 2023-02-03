import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {

  constructor(public router:Router) { }
 logged:any=false;
  setlogged(a:boolean){
    if(a==false){
      alert("Tu dois te connecter")

      this.router.navigate(['/login']);
    }else{this.logged=a;}

  }
  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.logged;
  }
}
