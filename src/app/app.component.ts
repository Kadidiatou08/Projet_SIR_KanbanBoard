import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'tp-sir-front-end';
 // isLoggedIn: boolean = false;
  showMenu: boolean = false;
  username?: string;

  constructor(private storage: StorageService, private route: Router) { }

  ngOnInit(): void {

    //this.isLoggedIn = this.storage.getUserJson() !== undefined ;

    //console.log("isLoggedIn app component ts"+ this.isLoggedIn)
    //this.isLoggedIn = !!this.tokenStorageService.getToken();
    /*
    if (this.isLoggedIn) {

      const user = this.storage.getUserJson().user;
      console.log("user "+ user);

    }
    µ*/
    
  }

  isLoggedIn() : boolean {

    return this.storage.getUserJson() !== undefined ;
  }

  logout(): void {
   
    this.storage.deleteUserStorage();
    this.route.navigateByUrl("/login")
    //window.location.reload();
  }

}

