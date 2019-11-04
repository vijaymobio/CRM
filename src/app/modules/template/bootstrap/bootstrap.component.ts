import { Component , OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { SharedMessageService } from '../../../services/shared-message.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './bootstrap.html',
  styleUrls: ['./bootstrap.css']
})

export class BootstrapComponent implements OnInit {

  userDetails: any[];
  tableHeader: any[];
  data: any[];
  displayedColumns: any[];
  filterData: any;
  columnsToDisplay: any[];
  show = false;
  filterForm: FormGroup;
  userActive = false;
  title = 'CRM';

  // tslint:disable-next-line: max-line-length
  constructor( private cookieService: CookieService , private router: Router, private Service: SharedMessageService) {}

  ngOnInit() {
    this.getUserActive();
  }
  // tslint:disable-next-line: use-lifecycle-interface


  getUserActive() {
    const token = this.cookieService.get('token');
    if (!token) {
      this.userActive = false;
      this.router.navigate(['']);
    } else {
      this.getUserDetails();
      this.userActive = true;
      this.router.navigate(['/dashboard']);
    }
  }

  /**
   * CLear All Message
   * @author Vijay Prajapati
   */
clearMessage(): void {
this.Service.clearMessage();
}

/**
 * Get User Details From API
 * @author Vijay Prajapati
 */

getUserDetails() {
  this.Service.getuserDetails().subscribe((res: any) => {
    this.userDetails = res.data.map(value=> {
      return {
        id: value.id,
        email: value.email,
        first_name: value.first_name,
        last_name: value.last_name,
        avatar: value.avatar,
        delete : 'delete',
        edit : 'edit'
        };
      });
       // tslint:disable-next-line: align
    this.tableHeader =
     [
      {
        id: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'id',
          tooltip: 'YES',
          tooltipName:
            'user ID',
          sort: 'YES'
        }
      },
      {
        email: {
          icon: 'NO',
          iconClass: 'info-circle-white',
          title: 'email',
          tooltip: 'NO',
          tooltipName: 'Title',
          addClass: 'YES'
        }
      },
      {
        first_name: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'first_name',
          tooltip: 'YES',
          tooltipName:
            'User First Name',
          sort: 'YES'
        }
      },
      {
        last_name: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'last_name',
          tooltip: 'YES',
          tooltipName: 'User First Name.',
          sort: 'YES'
        }
      },
      {
        avatar: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'avatar',
          tooltip: 'YES',
          tooltipName: 'User Image.',
          sort: 'NO'
        }
      },
      {
        delete: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'Delete',
          tooltip: 'YES',
          tooltipName: 'User Image.',
          sort: 'NO',
          delete: 'YES'
        }
      },
      {
        edit: {
          icon: 'YES',
          iconClass: 'info-circle-white',
          title: 'edit',
          tooltip: 'YES',
          tooltipName: 'User Image.',
          sort: 'NO',
          edit: 'YES'
        }
      }
    ]
    ;
    if (this.userDetails.length > 1) {
        this.displayedColumns = Object.keys(this.userDetails[0]);
      } else {
        this.displayedColumns = ['id', 'email', 'FirstName', 'LastName', 'avtar'];
      }
    this.columnsToDisplay = this.displayedColumns.slice(0, 7);
    this.data = this.userDetails;
    });

  }

}
