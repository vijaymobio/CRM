import { Component, OnInit, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {

  @Input() columnsToDisplay: any;
  @Input() tableHeader: any;
  @Input() displayedColumns: any;
  @Input() data: any;
  @Output() openModal = new EventEmitter();
  @Output() sortTable = new EventEmitter();
  @Output() downloadreport = new EventEmitter();


  constructor() { }

  ngOnInit() {}

   sortColumn($event) {
    this.sortTable.emit($event);
  }

  download(url) {
    this.downloadreport.emit(url);
  }
}
