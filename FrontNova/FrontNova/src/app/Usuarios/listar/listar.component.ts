import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usaurio';

import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  usuario:Usuario[]=[];

  constructor(
    private service:ServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {
this.service.getUsuarios().subscribe(
  data=>{ this.usuario=data;
  console.log(this.usuario);

  
})

  }



  editar(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(['editar']);

  }



  eliminar(user:Usuario){
    this.service.eliminarUsuario(user).subscribe(data=>{
         //this.usuario=this.usuario.filter(p=> p! == user);  
         alert("Usuario Eliminado!!");
         location.reload();

    })
    
    
    console.log(user);

  }



}
