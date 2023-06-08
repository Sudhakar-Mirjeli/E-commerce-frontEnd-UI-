import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
//   {
//   path: 'auth',
//   component: AuthModule
// },
{
  path: 'auth',
  loadChildren: () =>
    import('./modules/auth/auth.module').then((m) => m.AuthModule),
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
