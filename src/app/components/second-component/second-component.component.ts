import { Component, OnInit } from '@angular/core';
import {FirstServiceService} from '../../services/first-service.service'
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  title:string = "Hello World";
  constructor(private cal: FirstServiceService) {
    this.title=cal.todaysUpdate();
   }

  ngOnInit(): void {
  }

}
