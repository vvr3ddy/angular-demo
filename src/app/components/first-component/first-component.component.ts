import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  showColor: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(): void {
    this.showColor=!this.showColor
  }

}
