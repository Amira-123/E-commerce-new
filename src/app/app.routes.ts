import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"",redirectTo:'',pathMatch:"full"},
    {path:'',
      loadComponent:() =>import('././layout/auth/auth').then((c) => c.Auth),
      children:[
        {path:'',redirectTo:"login",pathMatch:"full"},
        {path:'login', loadComponent:()=>import('././pages/login/login').then((c)=>c.Login)},
        {path:'register',loadComponent:()=>import('././pages/register/register').then((c)=>c.Register)}
      ]
    },

    {path:'user',
        loadComponent:() =>import('././layout/user/user').then((c) => c.User)
    }
];
