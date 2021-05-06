import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }
  isBlue: false;


  iplTeams: IplTeams[] = [
    { teamName: "MI", currentPosition: 1, points: 18, NRR: +1.107 },
    { teamName: "DC", currentPosition: 2, points: 16, NRR: -0.109 },
    { teamName: "SRH", currentPosition: 3, points: 14, NRR: 0.608 },
    { teamName: "RCB", currentPosition: 4, points: 14, NRR: -0.172 }
  ];

  getTeamColor(standing: number): string {
    if (standing <= 2) {
      return "green";
    } else return "red";
  }
  ngOnInit(): void {
  }

}
class IplTeams {
  teamName: string;
  currentPosition: number;
  points: number;
  NRR: number;
}
