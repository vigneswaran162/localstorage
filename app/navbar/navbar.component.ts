import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }
  userName: string | null = null;
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');

  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    this.router.navigate([''])
   
  }
}
