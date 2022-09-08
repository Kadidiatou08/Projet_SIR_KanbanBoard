import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  saveUser(user: any){
    sessionStorage.removeItem('user');
    //sessionStorage.removeItem('userFound');
    sessionStorage.setItem('user', JSON.stringify(user));

  }


  getUserJson(): any{
    let userSaved = sessionStorage.getItem('user')
    if(userSaved){
      return JSON.parse(userSaved)
    }
    return undefined;
  }


  deleteUserStorage(): void{
    //sessionStorage.removeItem('user')
    sessionStorage.removeItem('user')

    //sessionStorage.clear();
  }

}
