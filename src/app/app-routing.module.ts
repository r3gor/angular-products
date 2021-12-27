import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path: "user",
    component: GamesComponent,
  },
  {
    path: "games",
    component: GamesComponent,
  },
  {
    path: "products",
    component: GamesComponent,
  },
  { 
    path: '**', 
    redirectTo: 'games',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
