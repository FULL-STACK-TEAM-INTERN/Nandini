import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  getContacts(){
    const contactList=[
      {contactId:1,contactName:'ARC'},
      {contactId:2,contactName:'Youtube'},
      {contactId:3,contactName:'Google'},
      {contactId:4,contactName:'Watsup'}
    ];
    return contactList;
  }
}
