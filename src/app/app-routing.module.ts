import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HobiesComponent } from './components/hobies/hobies.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
{path:'contacto',component: ContactComponent},
{path:'home',component: HomeComponent},
{path:'habilidades',component: HabilidadesComponent},
{path:'hobies',component: HobiesComponent},
{path:'experiencia',component: ExperienciaComponent},
{path:'sendemail',component: ConfirmEmailComponent},
{path:'contacto',component: ContactComponent},
{path: '',redirectTo:'/home',pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
