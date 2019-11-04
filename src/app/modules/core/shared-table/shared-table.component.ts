import { Component, OnInit, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material';

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
  @Output() sortTable = new EventEmitter();

  constructor() {}

  ngOnInit() {}

    /**
     *
     * @param sort Sort table
     * @author Vijay Prajapati
     */
    public sortColumn(sort: Sort) {
      const data = this.data.slice();
      if (!sort.active || sort.direction === '') {
        this.data = data;
        return;
      }

      this.data = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'id': return this.compare(a.id, b.id, isAsc);
          case 'first_name': return  this.compare(a.first_name, b.first_name, isAsc);
          case 'last_name': return this.compare(a.last_name, b.last_name, isAsc);
          default: return 0;
        }
      });
    }
    /**
     * Compare asc and desc order
     * @param a
     * @param b
     * @param isAsc
     * @au Vijay Prajapati
     */
    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

  /**
   * Delete user Details
   * @param id
   * @author Vijay Prajapati
   */

  delete(id) {
    console.log(id);
  }

  /**
   * Edit user Details
   * @param id
   * @author Vijay Prajapati
   */

  edit(id) {
    console.log(id);
  }
}
