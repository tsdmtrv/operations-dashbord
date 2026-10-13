import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stats-cards',
  styleUrl: './stats-cards.css',
  templateUrl: './stats-cards.html',
  standalone: true,
})
export class StatsCards {
  stats = input.required<{ title: string; value: number }[]>();
}
