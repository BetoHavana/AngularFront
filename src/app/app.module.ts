import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddStudentComponent } from './User/addStudent/addStudent.component';
import {FormsModule} from '@angular/forms';
import{ ServiceService } from '../app/Service/service.service';
import{HttpClientModule} from '@angular/common/http';
import { ShowStudentComponent } from './User/show-student/show-student.component';
//DECLARA E IMPORTA TODO LOS COMPONENTES Y SERVICIOS NECESARIOS
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent,
    AddStudentComponent,
    ShowStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
