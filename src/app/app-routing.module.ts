import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { UsersComponent } from './users/users.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component: DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'wish', component:WishComponent},
    {path:'cart', component:CartComponent},
    {path:'phones', component:PhonesComponent},
    {path:'users', component:UsersComponent},
    {path:'create-user', component:CreateUserComponent}
  ]},
  {path:'',component: LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
