import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SleepdataService, SleepData } from '../sleepdata.service';
import { SleepinessData, SleepinessdataService } from '../sleepinessdata.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  sleepData: SleepData[] | null = null;
  sleepinessData: SleepinessData[] | null = null;
  subscription: Subscription = new Subscription;

  constructor(private sleepDataService: SleepdataService, private sleepinessDataService: SleepinessdataService) { }

  ngOnInit() {
    this.subscription = this.sleepDataService.currentSleepData.subscribe(data => {
      this.sleepData = data;
    });
    this.subscription = this.sleepinessDataService.currentSleepData.subscribe(data => {
      this.sleepinessData = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
