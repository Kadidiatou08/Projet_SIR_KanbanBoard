import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  email: string = '';
  password: string = '';


  form: any = {
    email: null,
    password: null
  };

  constructor(private authService: AuthService,
    private storage: StorageService,
    private route: Router) { }

  ngOnInit(): void {
    if(this.storage.getUserJson().userFound){
      this.isLoggedIn = true;
    }
  }

  onSubmit(loginForm: NgForm): void{

    this.email = loginForm.value.email;
    this.password = loginForm.value.password;

    console.log(loginForm);
    console.log('valeur ', JSON.stringify(loginForm.value.email));

   // this.authService.login(this.email, this.password);
    
    this.authService.login(this.email, this.password).subscribe(
      (responseAuth)=>{
      console.log(responseAuth.userFound);
      if(responseAuth.userFound){
        console.log(responseAuth.user);
       
        this.storage.saveUser(responseAuth.user);
        this.isLoggedIn = true;
        this.route.navigateByUrl("/home")
      }
      else{
        this.isLoginFailed = true;
        //this.storage.connectionFailed();
      }
    });
    

  }
  reloadPage(): void {
    window.location.reload();
  }
}
