import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams.component';
import { TeamService } from './team.service';

@NgModule({
  declarations: [AppComponent, TeamsComponent],
  imports: [BrowserModule],
  providers: [TeamService],
  bootstrap: [AppComponent],
})
export class AppModule {}
