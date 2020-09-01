import { Component } from '@angular/core';
import {Router} from '@angular/router';

//REDIRIGE LOS OBJETOS CUANDO SE LES MANDA LLAMAR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'universidad';
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
}
