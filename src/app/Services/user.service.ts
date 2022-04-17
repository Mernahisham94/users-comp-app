import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor(public http: HttpClient ){
    this.getJSON().subscribe(data => {
      this.users =data;
  });
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../assets/Data/users.json");
}
SortUsersList = () =>{
  this.users = this.users.sort((a,b)=>{return a.code.split('.').length-b.code.split('.').length});
 }
}

