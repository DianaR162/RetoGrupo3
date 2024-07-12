import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './form/welcome/welcome.component';



export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'log-in', component: LogInComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'form', component: FormComponent },
    { path: 'welcome', component: WelcomeComponent }
];
