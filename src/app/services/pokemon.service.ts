import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPokemon } from '../interfaces/pokemonInterfaces';

const API_GET_ALL_POKEMON = environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  createHeader()
  {
    let headers: HttpHeaders;
    headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8').set('Acces-Control-Allow_Origin','*')
    return headers;
  }

  getAllPokemon()
  {
    return this.http.get<IPokemon>(API_GET_ALL_POKEMON);
  }
}
