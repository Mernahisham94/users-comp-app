import { Component, OnInit } from '@angular/core';
import  {User}  from '../Models/user.model'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  DataPath: string =  'assets/Data/users.json';  
  users: User[] = [
    {
    "name": "ahmed",
    "code": "0001",
    "imagePath": "user.png"
    },{
    "name": "mohamed",
    "code": "0001.0003.0004.0002",
    "imagePath": "user.png"
    },{
    "name": "ali",
    "code": "0001.0003",
    "imagePath": "user.png"
    },{
    "name": "ibrahim",
    "code": "0001.0003.0004",
    "imagePath": "user.png"
    },{
    "name": "mahmoud",
    "code": "0001.0010.0005",
    "imagePath": "user.png"
    },{
    "name": "samy",
    "code": "0001.0010.0006",
    "imagePath": "user.png"
    },{
    "name": "hany",
    "code": "0001.0003.0004.0007",
    "imagePath": "user.png"
    },{
    "name": "samir",
    "code": "0001.0010.0005.0008",
    "imagePath": "user.png"
    },{
    "name": "khalid",
    "code": "0001.0010.0006.0009",
    "imagePath": "user.png"
    },{
    "name": "abdullah",
    "code": "0001.0010",
    "imagePath": "user.png"
    }
    ];  
  constructor( ){ }

  ngOnInit(): void {
    this.SortUsersList();
  }
 SortUsersList = () =>{
  this.users = this.users.sort((a,b)=>{return a.code.split('.').length-b.code.split('.').length});

  
 }

}
