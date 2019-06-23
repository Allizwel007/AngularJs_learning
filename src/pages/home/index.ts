import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import models from './model'
import { ToastrService } from 'ngx-toastr';
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
  totalCount = 0;
  timePeriod = 5000;
  sortOption = [
    {prop: 'account_executive', dir: 'asc'}
  ];
  rows = [];

  constructor(private http:HttpClient, public toastr: ToastrService) {}

  ngOnInit() {
    models.getData(this)
  }

  onSort(event) {
    this.sortOption[0] = {prop: event.column.prop, dir: event.newValue}
    models.getData(this)
  }

  onPage(event) {
    this.currentPageNum = event.offset
    models.getData(this)
  }
}
