import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }
  todaysUpdate(): string {
    return "Today's update service!"
  }
}
