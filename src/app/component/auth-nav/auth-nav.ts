import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-auth-nav',
  imports: [AvatarModule, BadgeModule, MenubarModule, InputTextModule, RippleModule, CommonModule, RouterLink],
  templateUrl: './auth-nav.html',
  styleUrl: './auth-nav.scss',
})
export class AuthNav {
items: MenuItem[] | undefined;
    ngOnInit() {
        this.items = [
            {
                label: 'login',
                icon: 'pi pi-sign-in',
                path:"login"
            },
            {
                label: 'register',
                icon: 'pi pi-user-plus',
                path:"register"
            },
            
        ];
    }
}
