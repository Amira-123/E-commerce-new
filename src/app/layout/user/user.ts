import { Component } from '@angular/core';
import { Home } from '../../pages/home/home';
import { UserNav } from '../../component/user-nav/user-nav';
import { UserFooter } from '../../component/user-footer/user-footer';
import { AuthFooter } from "../../component/auth-footer/auth-footer";

@Component({
  selector: 'app-user',
  imports: [Home, UserNav, UserFooter],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {

}
