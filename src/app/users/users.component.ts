import { Component, OnInit } from '@angular/core';
import  {User}  from '../Models/user.model'; 
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(public service:UserService){}
 
  ngOnInit(): void {
    this.service.getJSON().subscribe(dt =>this.service.SortUsersList());
    
  }

}
