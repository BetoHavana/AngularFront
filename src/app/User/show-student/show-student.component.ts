import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ServiceService} from '../../Service/service.service';
import {User} from 'src/app/Model/Users';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  users:User[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuario().subscribe(data=>{
      this.users=data;
    })
  }
  Editar(users:User):void{
    localStorage.setItem("userid",users.userid.toString());
    this.router.navigate(["editStudent"]);
  }

  Delete(users:User){
    this.service.deleteUsuario(users)
    .subscribe(data=>{
      this.users=this.users.filter(p=>p!==users);
      alert("Usuario eliminado...");
    })
  }
}
