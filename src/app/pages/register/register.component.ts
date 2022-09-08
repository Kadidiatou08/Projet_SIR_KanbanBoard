import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  name: string = '';


  form: any = {
    name: null,
    email: null,
    password: null
  };

  submitted = false;

  constructor(private authService: AuthService,
    private storage: StorageService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: NgForm): void{

    this.name = registerForm.value.name;
    this.email = registerForm.value.email;
    this.password = registerForm.value.password;

    console.log(registerForm);
    console.log('valeur ', JSON.stringify(registerForm.value.email));

    this.authService.register(this.name,this.email,this.password).subscribe(

      (response) => {
        this.route.navigateByUrl("/login")
      },
      (err) => {
        console.log("erreur "+ err)
      }
      )
      
   // this.authService.login(this.email, this.password);
    /*
    this.authService.login(this.email, this.password).subscribe(
      (responseAuth)=>{
      console.log(responseAuth.userFound);
      if(responseAuth.userFound){
        console.log(responseAuth.user);
       
        this.storage.saveUser(responseAuth.user);
        this.isLoggedIn = true;
        this.route.navigateByUrl("/login")
      }
      else{
        this.isLoginFailed = true;
        //this.storage.connectionFailed();
      }
    });
    */

  }
  
  onReset(registerForm: NgForm): void {
    //this.submitted = false;
    registerForm.resetForm();
  }

}
