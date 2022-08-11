import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Usuarios/listar/listar.component';
import { CrearComponent } from './Usuarios/crear/crear.component';
import { EditarComponent } from './Usuarios/editar/editar.component';
const routes: Routes = [
{path:'listar', component:ListarComponent},
{path:'crear',component:CrearComponent},
{path:'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
