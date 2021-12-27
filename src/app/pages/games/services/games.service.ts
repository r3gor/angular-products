import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GamesResponse, Item } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _games: Item[] = [];
  private URL: string = "http://127.0.0.1:3007/v1/games";

  get games(){
    return [...this._games];
  }

  constructor(private http: HttpClient) {
    this.http.get<GamesResponse>(this.URL, {
      headers: {
        "user_id": "1",
        "user_token": "asdasd",
        "enable_paging": "false",
        "paging_size": "10",
        "paging_index": "1",
      }
    }).subscribe((res: GamesResponse) => {
      this._games = res.items
      console.log(res);
    })
  }

  activeGame(id: number){
    this.http.patch<GamesResponse>(`${this.URL}/${id}/activate`, {
      headers: {
        "user_id": "1",
        "user_token": "asdasd",
      }
    }).subscribe({
      next: () => console.log("Success patch"),
      error: () => console.log("Error patch"),
    })
  }

  deactiveGame(id: number){
    this.http.patch<GamesResponse>(`${this.URL}/${id}/deactivate`, {
      headers: {
        "user_id": "1",
        "user_token": "asdasd",
      }
    }).subscribe({
      next: () => console.log("Success patch"),
      error: () => console.log("Error patch"),
    })
  }

}
