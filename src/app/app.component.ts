import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-signup-form';
  public isLogin: boolean;

  ngOnInit(): void {
    this.isLogin = false;
  }

  public switchTab(isLogin: boolean): void {
    this.isLogin = isLogin;
  }
}
