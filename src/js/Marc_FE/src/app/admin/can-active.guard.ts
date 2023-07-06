import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "../service/storage.service";

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(private storageService : StorageService,
              private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.storageService.getUser();
    if (user && user.authorities.includes('ROLE_ADMIN')) return true;
    this.router.navigateByUrl('');
    return false;
  }

}
