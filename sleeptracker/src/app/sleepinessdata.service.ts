import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SleepinessData {
  date: string;
  time: string;
  sleepiness: number;
}

@Injectable({
  providedIn: 'root'
})
export class SleepinessdataService {
  private sleepData = new BehaviorSubject<SleepinessData[]>([]);
  currentSleepData = this.sleepData.asObservable();

  constructor() { }

  addSleepinessData(newData: SleepinessData) {
    const currentData = this.sleepData.value;
    this.sleepData.next([...currentData, newData]);
  }

  clearSleepData() {
    this.sleepData.next([]);
  }
}