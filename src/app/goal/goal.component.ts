import { Component, OnInit } from '@angular/core';
import { Goal } from './goal'
import { GoalsService } from '../services/goals-service/goals.service';
import { AlertService } from '../services/alert-service/alert.service';
import { HttpClientModule } from '@angular/common/http'
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[];
  alertOnGoalDelete : AlertService;
  randomQuote : Quote;

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if(isComplete){
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete, index){
    if (isComplete){
      let answer = confirm(`Would you like to delete ${this.goals[index].name}?`);

      if (answer){
        this.goals.splice(index, 1);
        setTimeout(() => {
          this.alertOnGoalDelete.alertOnDelete("The goal was deleted and cannot be reversed!")
        }, 1000);
      }
    }
  }

  addNewGoal(goal){
    goal.id = this.goals.length + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }

  constructor(getGoalFromService : GoalsService, alertOnGoalDelete : AlertService, liveLink : HttpClientModule) {
    this.goals = getGoalFromService.getGoals();
    this.alertOnGoalDelete = alertOnGoalDelete;
   }

  ngOnInit(): void {
  }

}
