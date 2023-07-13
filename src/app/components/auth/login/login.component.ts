import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  controlSub: Subscription | undefined;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = new FormGroup( {
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Now you can use form builder
      } else if (params['accessDenied']) {
        // Please log in for use form builder
      }
    })
  }
  ngOnDestroy() {
    if (this.controlSub) {
      this.controlSub.unsubscribe()
    }
  }
  toRegisterPage() {
      return this.router.navigate(['/register'])
  }
  onSubmit() {
    this.loginForm.disable()
    this.controlSub = this.auth.loginUser(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/create-form'])
        this.loginForm.reset()
      },
      () => {
        this.loginForm.enable()
      }
    )

  }
}
