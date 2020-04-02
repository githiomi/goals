import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client'

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about/about.component';
import { NavBarComponent } from './about/nav-bar/nav-bar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    NumbersComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    PizzaDetailsComponent,
    GoalFormComponent,
    AboutComponent,
    NavBarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
