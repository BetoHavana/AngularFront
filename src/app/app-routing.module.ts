import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddStudentComponent } from './User/addStudent/addStudent.component';
import { ShowStudentComponent } from './User/Show-Student/show-student.component';
import { EditStudentComponent } from './User/EditStudent/editStudent.component';

const routes: Routes = [
  { path: '',    
    redirectTo: '/home',    
    pathMatch: 'full'    
  }, 
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent},
  {path: 'addStudent', component:AddStudentComponent},
  {path: 'showStudent', component:ShowStudentComponent},
  {path: 'editStudent', component:EditStudentComponent}
];
//HACEEL RUTEO DE LOS COMPONENTES, PARA SABER DONDE ESTAN
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
