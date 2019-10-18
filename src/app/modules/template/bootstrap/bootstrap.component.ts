import { Component , OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { SharedMessageService } from '../../../services/shared-message.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './bootstrap.html',
  styleUrls: ['./bootstrap.css']
})

export class BootstrapComponent implements OnInit {
  historyArticleData: any[];
  historyTableHeader: any[];
  data: any[];
  totalPageSize: number;

  displayedColumns: any[];

  filterData: any;
  columnsToDisplay: any[];
  carouselArticleData: any[];
  show = false;
  pageindex: any;
  onFilter = false;



  userActive = false;
  title = 'CRM';

  constructor( private cookieService: CookieService , private router: Router, private Service: SharedMessageService) {}

  ngOnInit() {
    this.getUserActive();
  }

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
  // public sortColumn(value) {

  //   this.filterForm.controls['sort_by'].setValue(value.active);
  //   this.filterForm.controls['sort'].setValue(value.direction);
  //   this.fetchAuthorHistory(this.filterForm.value);

  // }

clearMessage(): void {
this.Service.clearMessage();
}

getUserDetails() {
  this.Service.getuserDetails().subscribe((res: any) => {
    this.historyArticleData = res.data.map(value => {
      return {
        id: value.id,
        email: value.email,
        first_name: value.first_name,
        last_name: value.last_name,
        avatar: value.avatar
        };
      });
       // tslint:disable-next-line: align
    this.historyTableHeader =
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
      }
    ]
    ;
    if (this.historyArticleData.length > 1) {
        this.displayedColumns = Object.keys(this.historyArticleData[0]);
      } else {
        this.displayedColumns = ['id', 'email', 'FirstName', 'LastName', 'avtar'];
      }
    this.columnsToDisplay = this.displayedColumns.slice(0, 4);
    this.data = this.historyArticleData;
    });

  }
}
