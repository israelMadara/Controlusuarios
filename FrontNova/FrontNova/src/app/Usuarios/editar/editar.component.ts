import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usaurio';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(
    private rutaParam:ActivatedRoute,
    private router:Router,
    private service:ServiceService
  ) { }
  user:Usuario= new Usuario();
  ngOnInit(): void {
    this.usaurio();
  }



  usaurio(){
let id=localStorage.getItem("id");
console.log(id);
this.service.getUsuarioId(id).subscribe(data=>{
this.user=data;

})

}



guardar(us:Usuario){

this.service.actualizarUsaurio(us).subscribe(data=>{
this.user=data;
alert("Modificacion Exitosa!");
this.router.navigate(['listar']);

})

  console.log(us);

}


}
