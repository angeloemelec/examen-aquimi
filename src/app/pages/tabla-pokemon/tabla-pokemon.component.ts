import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {IDataPokemon} from 'src/app/interfaces/pokemonInterfaces';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tabla-pokemon',
  templateUrl: './tabla-pokemon.component.html',
  styleUrls: ['./tabla-pokemon.component.css']
})
export class TablaPokemonComponent implements OnInit {
  listPokemon: IDataPokemon[] = [];
  columnTabla: any;

  constructor(private rutas: Router,
              private pokemonServices: PokemonService,
              private mensajes: MessageService){

  }
  
  ngOnInit(): void {
    //listPokemon: IDataPokemon[] = [];
    this.iniColumnaTabla();


    this.pokemonServices.getAllPokemon().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Sastifactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );

  }


  iniColumnaTabla()
  {
    this.columnTabla = [
    {
      field: 'name', header: 'Nombre'
    },
    {
      field: 'url', header: 'URL'
    }
    ];
  }

  regresarInicio(){
    this.rutas.navigate(['tabla-pokemon']);
  }

}
