import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  queryTag='';
  queryCountry='';
  queryTrending=5;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data=>{
      this.queryTag=data.tag;
      this.queryCountry=data.country;
      this.queryTrending=data.trending;

    });
  }

  ngOnInit(): void {
  }

}
