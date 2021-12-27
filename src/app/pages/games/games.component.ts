import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styles: [
  ]
})
export class GamesComponent implements OnInit {

  JSON: JSON;

  get games(){
    return this.gameService.games; 
  }

  constructor(private gameService: GamesService) {
    this.JSON = JSON;
  }

  handleChangeActive(event: any, id: number){
    console.log(event.checked, id);
    
    if (event.checked)
      this.gameService.activeGame(id)
    else 
      this.gameService.deactiveGame(id)
  }

  handleDisplayEdit(){
    
  }

  ngOnInit(): void {
    // console.log(this.gameService.games)
  }

}
