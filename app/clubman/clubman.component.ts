import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubman',
  templateUrl: './clubman.component.html',
  styleUrls: ['./clubman.component.scss']
})
export class ClubmanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
   
  }
}
