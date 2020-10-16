import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User} from 'src/app/Model/Users';

@Component({
  selector: 'app-addStudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.css']
})
export class AddStudentComponent implements OnInit {

  user: User = new User();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  SaveStudent(){
    this.service.createUsuario(this.user)
    .subscribe(data=>{
      alert("User Added");
      this.router.navigate(["listar"]);
    })
  }

}
