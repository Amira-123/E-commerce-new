import { Component } from '@angular/core';
import { AuthNav } from '../../component/auth-nav/auth-nav';
import { AuthFooter } from '../../component/auth-footer/auth-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [AuthNav,AuthFooter,RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

}
