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
  stats = [
    { title: 'Total Tasks', value: 30 },
    { title: 'In Progress', value: 8 },
    { title: 'Completed', value: 12 },
    { title: 'Overdue', value: 4 },
  ];
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
