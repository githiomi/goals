import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { GoalComponent } from './goal/goal.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';


const routes: Routes = [
  {path : "goal", component : GoalComponent},
  {path : "about", component : AboutComponent},
  {path : "**", component : PizzaDetailsComponent},

  {path : "", redirectTo: "/goal", pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
