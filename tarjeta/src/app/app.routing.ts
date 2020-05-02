//IMPORTAMOS LOS MODULOS DEL ROUTER DE ANGULAR
import {ModuleWithProviders} from '@angular/core'
//CLASES PARA GENERAR LAS RUTAS
import {Routes, RouterModule } from '@angular/router'
//Importar componentes a los que se le hara una pagina exclusiva

import {HeaderComponent} from './components/header/header.component'
import {NavigationComponent} from './components/navigation/navigation.component'
import {PortafolioComponent} from './components/portafolio/portafolio.component'
import {AboutComponent} from './components/about/about.component'
import {ContactosComponent} from './components/contactos/contactos.component'
import {AccionesComponent} from './components/acciones/acciones.component'

import {ServiciosComponent} from './components/servicios/servicios.component'
import {FooterComponent} from './components/footer/footer.component'




//Arreglo de rutas
const appRoutes: Routes = [
    // {path: '', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'navigation', component: NavigationComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'acciones', component: AccionesComponent},
    
    {path: 'servicios', component: ServiciosComponent},
    {path: 'footer', component: FooterComponent},

    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
