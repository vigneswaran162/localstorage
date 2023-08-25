import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.scss']
})
export class IndexpageComponent implements OnInit {

  constructor() { }
  userName: string | null = null;

  ngOnInit(): void {

    this.userName = localStorage.getItem('userName');
  }

}
