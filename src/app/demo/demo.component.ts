import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  orderStatus:any;
  data:Observable<any>;

  constructor(public demo:DemoService) { }
  contactList=[];
  ngOnInit(): void {

    new Observable(observer=>{
      setTimeout(()=>{
        observer.next('In Progress');
      },2000);

      setTimeout(() => {
        observer.next('Processing');
      }, 5000);
      setTimeout(() => {
        observer.next('Completed');
      }, 8000);
    }).subscribe(val=>{
      this.orderStatus=val;
    });
    this.contactList=this.demo.getContacts();

  }

}
