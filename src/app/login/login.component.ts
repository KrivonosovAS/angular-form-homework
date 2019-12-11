import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login(model: any): void {
    alert('Login object: ' + JSON.stringify(model, null, 1));
  }
}
