import { Component } from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'oneConversion';
  constructor (private router:Router){ }
  users={
    userid :10,
    userName:'Nandini',
    userDOB:'05/12/1998'
  }
  loginasadmin(){
    this.router.navigateByUrl('/checkout');

  }
}
