import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import models from './model'

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
export class AppComponent {
  title = 'angularTest';
  timer = '';
  pageSize = 10;
  currentPageNum = 0;
  totalCount = 30;
  dataList = [];
  timePeriod = 5000;
  sortOption = [
    {prop: 'account_executive', dir: 'asc'}
  ];
  rows = [
    { id: 1, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 2, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 3, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 4, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 5, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 6, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 7, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 8, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 9, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 10, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 11, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 12, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 13, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 14, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 15, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 16, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 17, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 18, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 19, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 20, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 21, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 22, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 23, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 24, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 25, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 26, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 27, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' },
    { id: 28, account_executive: 'Austin', daily_turnover: 'Male', accumulated_turnover: 'Swimlane' },
    { id: 29, account_executive: 'Dany', daily_turnover: 'Male', accumulated_turnover: 'KFC' },
    { id: 30, account_executive: 'Molly', daily_turnover: 'Female', accumulated_turnover: 'Burger King' }
  ];

  constructor(private http:HttpClient) {}

  ngOnInit() {
    models.getData(this)
  }

  onSort(event) {
    this.sortOption[0] = {prop: event.column.prop, dir: event.newValue}
    models.getData(this)
  }

  onPage(event) {
    models.getData(this)
  }
}
