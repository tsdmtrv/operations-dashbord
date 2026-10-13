import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsCards } from './stats-cards/stats-cards';
import { Task } from './task.model';

@Component({
  imports: [RouterOutlet, StatsCards],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter((task) => task.status === 'Completed').length;
  }

  get pendingTasks(): number {
    return this.tasks.filter((task) => task.status === 'Pending').length;
  }

  get inProgressTasks(): number {
    return this.tasks.filter((task) => task.status === 'In Progress').length;
  }

  tasks: Task[] = [
    {
      id: 1,
      title: 'Prepare monthly report',
      status: 'In Progress',
      priority: 'High',
      assignedTo: 101,
    },
    {
      id: 2,
      title: 'Review customer feedback',
      status: 'Pending',
      priority: 'Medium',
      assignedTo: 102,
    },
    {
      id: 3,
      title: 'Update documentation',
      status: 'Completed',
      priority: 'Low',
      assignedTo: 101,
    },
  ];
}
