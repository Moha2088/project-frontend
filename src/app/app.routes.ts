import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';

export const routes: Routes = [ 
    {
        path: "",
        component: HomePage,
        pathMatch: "full"
    },
    {
        path: "about",
        component: AboutPage,
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginPage,
        pathMatch: "full"
    },
    {
        path: "signup",
        component: SignupPage
    }
];
