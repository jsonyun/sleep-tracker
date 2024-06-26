import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SleepData {
  date: string;
  sleep: string;
  wakeup: string;
}

@Injectable({
  providedIn: 'root'
})
export class SleepdataService {
  private sleepData = new BehaviorSubject<SleepData[]>([]);
  currentSleepData = this.sleepData.asObservable();

  constructor() { }

  addSleepData(newData: SleepData) {
    const currentData = this.sleepData.value;
    this.sleepData.next([...currentData, newData]);
  }

  clearSleepData() {
    this.sleepData.next([]);
  }
}