import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    AcercaDeComponent,
    FooterComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    BannerComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
