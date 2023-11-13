import { Component } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'allteams',
  template: `
    <h2>Teams</h2>
    <div *ngFor="let sport of sports">
      <h3>{{ sport }}</h3>
      <ul>
        <li *ngFor="let team of getTeamsBySport(sport)">
          {{ team.name }}
        </li>
      </ul>
    </div>
  `,
})
export class TeamsComponent {
  teams;
  sports = ['Hockey', 'Baseball'];

  constructor(teamService: TeamService) {
    this.teams = teamService.getTeams();
  }

  getTeamsBySport(sport: string) {
    return this.teams.filter((team) => team.sport === sport);
  }
}
