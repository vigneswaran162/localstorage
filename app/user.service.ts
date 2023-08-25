import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  AddUser(data){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users =[data,...users]
    }
    else{
      users =[data]
    }
    localStorage.setItem('Users',JSON.stringify(users))
  }
 loginUser(){
  localStorage.getItem('Users')
 }
 isLoggedIn(){
  return !!localStorage.getItem('token')
 } 
}
