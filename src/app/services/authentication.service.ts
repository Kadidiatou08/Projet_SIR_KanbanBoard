import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../models/signInData';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;

  constructor(private router: Router, private storageService: StorageService) { }

  authenticate(signInData: SignInData): boolean {

    if(this.storageService.getUserJson()){
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = true;
    return false;
  }
}
