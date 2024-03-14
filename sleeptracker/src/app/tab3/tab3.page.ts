import { Component } from '@angular/core';
import { SleepinessData, SleepinessdataService } from '../sleepinessdata.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectionValue = 1
  constructor(private sleepinessDataService: SleepinessdataService) {}
  onSubmit(form: NgForm) {
    this.sleepinessDataService.addSleepinessData(form.value);
  }
}
