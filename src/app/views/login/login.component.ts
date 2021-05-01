import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../../services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private webService: WebService,
    private toastr: ToastrService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
  }
  ngOnInit() {
    this.checkLogin();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  checkLogin() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      let url = 'whoami';
      this.webService.get(url).subscribe((response: any) => {
        if (response.success && response.result.isGuest) {
          // stay in login page
        }
        else {
          var token = response.result.session._id;
          localStorage.setItem('token', token);
          this.router.navigate(['/admissions']);
        }
      }, (error) => {
        this.toastr.error(error, 'Error!');
      })
    }
  }
  login() {
    let url = 'login';
    if (!this.f.email.value) {
      this.toastr.warning('Email is Mandatory', 'Warning');
    } else if (!this.f.password.value) {
      this.toastr.warning('Password is Mandatory', 'Warning');
    } else {
      let data = {
        //username: this.f.email.value,
        email: this.f.email.value,
        password: this.f.password.value
      }
      this.spinnerService.show();
      this.webService.login(data, url).subscribe((response: any) => {
        this.spinnerService.hide();
        if (response) {
          if (response.status == 1) {
            if (response.result) {
              localStorage.setItem("token", response.result.session._id);
              this.toastr.success('Login Successfully', 'Success');
              this.router.navigate(['/admissions']);
            } else {
              this.toastr.error(response.results.error, 'Error');
            }
          } else {
            this.toastr.error(response.message, 'Error');
          }
        }
      }, (error) => {
        console.log("error ts: ", error);
        this.toastr.error(error);
      })
    }
  }
}
