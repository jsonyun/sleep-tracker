import { Component } from '@angular/core';
import { SleepdataService } from '../sleepdata.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private sleepDataService: SleepdataService) {}
  onSubmit(form: any) {
    this.sleepDataService.addSleepData(form.value);
  }
}
