import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stats-cards',
  styleUrl: './stats-cards.css',
  templateUrl: './stats-cards.html',
  standalone: true,
})
export class StatsCards {
  totalTasks = input.required<number>();
  completedTasks = input.required<number>();
  pendingTasks = input.required<number>();
  inProgressTasks = input.required<number>();
}
