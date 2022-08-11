import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { Usuario } from '../Model/Usaurio';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3636/usuarios';
  url2='http://localhost:3636/usuarios/crearUsuario';

getUsuarios(){

return this.http.get<Usuario[]>(this.url+'/listarUsuarios');

}


crearUsuario(usuario:Usuario){
 console.log("usuario");
 console.log(usuario);
  return this.http.post<Usuario>(this.url2,usuario);

}


getUsuarioId(id:any){
  return this.http.get<Usuario>(this.url+"/"+id);

}


actualizarUsaurio(usuario:Usuario){
  return this.http.put<Usuario>(this.url+"/"+usuario.id,usuario);
}





eliminarUsuario(user:Usuario){
return this.http.delete<Usuario>(this.url+"/"+user.id);
}





}
