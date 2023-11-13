import { Component } from '@angular/core'
import { DataService } from './data.service'

@Component({
    selector: 'sports-teams',
    template: `
        <h2>Southern CA Sports Teams</h2>
        <div *ngFor="let sport of sports">
            <h3>{{sport}}</h3>
                <ul>
                    <li *ngFor="let team of getTeams(sport)">
                        {{team.name}}
                    </li>
                </ul>
        </div>
        `
})
export class SportsTeamsComponent{
    teams;
    sports = ["Hockey", "Baseball"]

    constructor(dataService: DataService){
        this.teams = dataService.getData();
    }

    getTeams(sport: string) {
        return this.teams.filter((team)=> team.sport === sport)
    }
} 