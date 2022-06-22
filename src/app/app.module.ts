import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HobiesComponent } from './components/hobies/hobies.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailService} from './components/service/email.Service';
import { PostulantService } from './services/postulantServices';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({

  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    HobiesComponent,
    ConfirmEmailComponent,
   // EmailService
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule
    //EmailService
  
  ],
  

  exports:[FormsModule],

  providers: [
  EmailService,
  PostulantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
