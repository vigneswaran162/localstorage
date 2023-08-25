import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Service:UserService,private router:Router ){}

  canActivate(){
  if(this.Service.isLoggedIn()){
    return true;
  }
  this.router.navigate([''])
  return false
  }
  
}
