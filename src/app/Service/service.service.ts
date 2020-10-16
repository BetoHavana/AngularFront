import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../Model/Persona';
import {User} from '../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // CONEXION DE PETICIONES CON LA BASE DE DATOS

  constructor(private http:HttpClient) { }

  private URL='http://localhost:8080/universidad/';
  private PERSONAS = 'personas';
  private USUARIOS = 'users';
  private BASE_URL = window["cfgApiBaseUrl"] + "/api";
  public ALL_NOTEBOOKS_URL = `${this.BASE_URL}/notebooks/all`;

  getPersonas(){
    return this.http.get<Persona[]>(this.URL+this.PERSONAS);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.URL+this.PERSONAS,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.URL+this.PERSONAS+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.URL+this.PERSONAS+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.URL+this.PERSONAS+"/"+persona.id);
  }

  getUsuario(){
    return this.http.get<User[]>(this.URL+this.USUARIOS);
  }
  createUsuario(user:User){
    return this.http.post<User>(this.URL+this.USUARIOS,user);
  }
  getUsuarioId(user_id:number){
    return this.http.get<User>(this.URL+this.USUARIOS+"/"+user_id);
  }
  updateUsuario(user:User){
    return this.http.put<User>(this.URL+this.USUARIOS+"/"+user.userid,user);
  }
  deleteUsuario(user:User){
    return this.http.delete<User>(this.URL+this.USUARIOS+"/"+user.userid);
  }
}
