import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/Users';
@Component({
  selector: 'app-editStudent',
  templateUrl: './editStudent.component.html',
  styleUrls: ['./editStudent.component.css']
})
export class EditStudentComponent implements OnInit {

  user :User=new User();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("userid");
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.user=data;
    })

  }
  Actualizar(user:User){
    this.service.updateUsuario(user)
    .subscribe(data=>{
      this.user=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["showStudent"]);
    })
  }

}
