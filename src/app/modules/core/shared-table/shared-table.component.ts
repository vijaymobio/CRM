import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
    this.tableData();
  }

  tableData(){
  console.log('table called');

  }
}
