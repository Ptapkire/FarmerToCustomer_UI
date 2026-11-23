import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Category } from './pages/category/category';
import { authGuard } from './core/guards/auth-guard';
import { beforeDeactiveGuardGuard } from './core/guards/before-deactive-guard-guard';
import { Master } from './pages/master/master';
import { Product } from './pages/product/product';

export const routes: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : Home
    },
    {
        path : 'login',
        component : Login
    },
    {
        path : 'master',
        component : Master,
        canActivate:[authGuard]
    },
    {
        path: 'product',
        component: Product,
        canActivate: [authGuard]
    }
    // {
    //     path : 'category',
    //     component : Category,
    //     canActivate : [authGuard],  // we can have multiple guards.
    //     canDeactivate : [beforeDeactiveGuardGuard]
    // }
];
