import { Component, AfterViewInit, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { WebService } from '../../services/web.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
  //styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  searchText: string;
  token: any = '';
  userName: any = '';
  constructor(
    private router: Router,
    private webService: WebService,
    private toastr: ToastrService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() {
    if (!localStorage.getItem('token')) {
     // this.router.navigate(['/login']);
    }
  }
  logout() {
    let url = `logout`;
    this.spinnerService.show();
    this.webService.post(url, {}).subscribe((response: any) => {
      this.spinnerService.hide();
      console.log(response)
      if (response.success) {
        if (response.status === 0) {
          //console.log(response.message)
          this.toastr.error(response.message, 'Error!');
        } else {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      }
      else {
        this.toastr.error(response.message, 'Error!');
      }
    }, (error) => {
      this.toastr.error(error, 'Error!');
    })
  }
}
