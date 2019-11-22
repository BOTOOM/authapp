import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreciosComponent } from './pages/precios/precios.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'protegida',
   component: ProtegidaComponent,
   canActivate: [AuthGuard]
  },
  { path: '**',  pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
