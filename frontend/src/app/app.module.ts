import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Librería para poder consumir el servicio
import { HttpModule, } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//se incluyen los componentes que tenemos y el servicio
import { AppComponent } from './app.component';

import {BodegaService} from './bodega.service';

import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { CrearMercanciaComponent } from './crear-mercancia/crear-mercancia.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { CrearConductorComponent } from './crear-conductor/crear-conductor.component';
import { CrearEnvioComponent } from './crear-envio/crear-envio.component';
import { ListarMercanciaComponent } from './listar-mercancia/listar-mercancia.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { ListarConductorComponent } from './listar-conductor/listar-conductor.component';
import { ListarEnvioComponent } from './listar-envio/listar-envio.component';
import { ListarDestinoComponent } from './listar-destino/listar-destino.component';
import { FiltrarMercanciaComponent } from './filtrar-mercancia/filtrar-mercancia.component';
import { FiltrarVehiculoComponent } from './filtrar-vehiculo/filtrar-vehiculo.component';
import { FiltrarConductorComponent } from './filtrar-conductor/filtrar-conductor.component';
import { FiltrarEnvioComponent } from './filtrar-envio/filtrar-envio.component';
import { FiltrarDestinoComponent } from './filtrar-destino/filtrar-destino.component';
import { ModificarMercanciaComponent } from './modificar-mercancia/modificar-mercancia.component';
import { ModificarVehiculoComponent } from './modificar-vehiculo/modificar-vehiculo.component';
import { ModificarConductorComponent } from './modificar-conductor/modificar-conductor.component';
import { ModificarEnvioComponent } from './modificar-envio/modificar-envio.component';
import { InfoMercanciaComponent } from './info-mercancia/info-mercancia.component';
import { InfoVehiculoComponent } from './info-vehiculo/info-vehiculo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

//se establecen las rutas a los componentes
const appRoutes: Routes = 
[
    {
      path: '',
      pathMatch: 'prefix',
      redirectTo: 'Inicio',
    },

    {
      path: 'Inicio',
      component: MenuInicioComponent,
    },

    {
      path: 'CrearMercancia',
      component: CrearMercanciaComponent,
    },

    {
      path: 'CrearVehiculo',
      component: CrearVehiculoComponent,
    },

    {
      path: 'CrearConductor',
      component: CrearConductorComponent,
    },

    {
      path: 'CrearEnvio',
      component: CrearEnvioComponent,
    },

    {
      path: 'ListarMercancia',
      component: ListarMercanciaComponent,
    },

    {
      path: 'ListarVehiculo',
      component: ListarVehiculoComponent,
    },

    {
      path: 'ListarConductor',
      component: ListarConductorComponent,
    },

    {
      path: 'ListarEnvio',
      component: ListarEnvioComponent,
    },

    {
      path: 'ListarDestino',
      component: ListarDestinoComponent,
    },

    {
      path: 'FiltrarMercancia',
      component: FiltrarMercanciaComponent,
    },

    {
      path: 'FiltrarVehiculo',
      component: FiltrarVehiculoComponent,
    },

    {
      path: 'FiltrarConductor',
      component: FiltrarConductorComponent,
    },

    {
      path: 'FiltrarEnvio',
      component: FiltrarEnvioComponent,
    },

    {
      path: 'FiltrarDestino',
      component: FiltrarDestinoComponent,
    },

    {
      path: 'ModificarMercancia',
      component: ModificarMercanciaComponent,
    },

    {
      path: 'ModificarVehiculo',
      component: ModificarVehiculoComponent,
    },

    {
      path: 'ModificarConductor',
      component: ModificarConductorComponent,
    },

    {
      path: 'ModificarEnvio',
      component: ModificarEnvioComponent,
    },

    {
      path: 'InfoMercancia',
      component: InfoMercanciaComponent,
    },

    {
      path: 'InfoVehiculo',
      component: InfoVehiculoComponent,
    },

    {
      path: 'nosotros',
      component: NosotrosComponent,
    },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuInicioComponent,
    CrearMercanciaComponent,
    CrearVehiculoComponent,
    CrearConductorComponent,
    CrearEnvioComponent,
    ListarMercanciaComponent,
    ListarVehiculoComponent,
    ListarConductorComponent,
    ListarEnvioComponent,
    ListarDestinoComponent,
    FiltrarMercanciaComponent,
    FiltrarVehiculoComponent,
    FiltrarConductorComponent,
    FiltrarEnvioComponent,
    FiltrarDestinoComponent,
    ModificarMercanciaComponent,
    ModificarVehiculoComponent,
    ModificarConductorComponent,
    ModificarEnvioComponent,
    InfoMercanciaComponent,
    InfoVehiculoComponent,
    NosotrosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],
  providers: [BodegaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
