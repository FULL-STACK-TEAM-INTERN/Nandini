import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private route:Router) { }
  btnClick =function(){
    this.router.navigate(['/tasks']);
  }

  ngOnInit(): void {
  }

}
