import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { TablaPokemonComponent } from './pages/tabla-pokemon/tabla-pokemon.component';


const route: Routes = [
    {path: '',redirectTo: 'tabla-pokemon',pathMatch: 'full'},
    { path : 'Inicio', component: InicioComponent},
    {path: 'tabla', component: PaginaTablaComponent},
    {path: 'tabla-pokemon', component: TablaPokemonComponent}
];

@NgModule(
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(route)
        ],
        exports: [RouterModule]
    }
)

export class AppRoutingModule{}