import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AccionesComponent } from './components/acciones/acciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavigationComponent,
    PortafolioComponent,
    AboutComponent,
    ServiciosComponent,
    ContactosComponent,
    AccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
