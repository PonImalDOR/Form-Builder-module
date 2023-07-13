import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  constructor(private auth:AuthService, private router: Router) {
  }
  ngOnInit() {
    const token = localStorage.getItem('access_token')
    if (token!==null) {
      this.auth.setToken(token)
    }
  }

  toHome() {
    return this.router.navigateByUrl('/')
  }
}

