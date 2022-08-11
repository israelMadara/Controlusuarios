import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usaurio';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
private router:Router,
private service:ServiceService
  ) { }

  user:Usuario=new Usuario();

  ngOnInit(): void {
  }
  

guardar(usaurioData:Usuario){
  console.log(usaurioData);
if(usaurioData.nombre!=''){

  this.service.crearUsuario(usaurioData).subscribe(
data=>{
  alert("Se agrego con exito!!");
  this.router.navigate(['listar']);
});



  }else{
    alert("Es necesario ingresar datos");

 }
  
}


}
