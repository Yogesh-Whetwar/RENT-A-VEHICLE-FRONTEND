import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { Signin } from './component/signin/signin';
import { Sidebar } from './component/sidebar/sidebar';
import { Profile } from './component/profile/profile';
import { Updateprofile } from './component/updateprofile/updateprofile';

export const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:'login',component:Login},
    {path:'signin',component:Signin},
    {path:'sidebar',component:Sidebar},
    {path:'home',component:Home},
    {path:'profile',component:Profile},
    {path:'updateprofile',component:Updateprofile}
];
