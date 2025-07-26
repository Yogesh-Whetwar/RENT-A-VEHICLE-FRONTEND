import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { Signin } from './component/signin/signin';
import { Sidebar } from './component/sidebar/sidebar';
import { Profile } from './component/profile/profile';
import { Updateprofile } from './component/updateprofile/updateprofile';
import { Header } from './component/header/header';
import { BikeCarousel } from './component/bike-carousel/bike-carousel';
import { Vehicles } from './component/vehicles/vehicles';
import { PaymentComponent } from './component/payment-component/payment-component';
import { PaymentSuccess } from './component/payment-success/payment-success';
import { Qr } from './component/qr/qr';
import { CityModal } from './component/city-modal/city-modal';
import { Vendor } from './component/vendor/vendor';
import { Admin } from './component/admin/admin';
import { AddVehicle } from './component/add-vehicle/add-vehicle';
import { Vendordashboard } from './component/vendordashboard/vendordashboard';

export const routes: Routes = [
   {path: '', redirectTo: '/header', pathMatch: 'full'},
    {path:'login',component:Login},
    {path:'signin',component:Signin},
    {path:'sidebar',component:Sidebar},
    {path:'home',component:Home},
    {path:'profile',component:Profile},
    {path:'updateprofile',component:Updateprofile},
    {path:'header',component:Header},
    {path:'bikecarousel',component:BikeCarousel},
    {path:'vehicles',component:Vehicles},
    {path:'payment',component:PaymentComponent},
    {path:'payment-success',component:PaymentSuccess},
    {path:'qr',component:Qr},
    {path:'citymodal',component:CityModal},
    {path:'vendor',component:Vendor},
    {path:'admin',component:Admin},
    {path:'addvehicles',component:AddVehicle},
    {path:'vendordashboard',component:Vendordashboard}
];
