import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { Producto1Component } from './pages/producto1/producto1.component';
import { Producto2Component } from './pages/producto2/producto2.component';
import { Producto3Component } from './pages/producto3/producto3.component';
import { Producto4Component } from './pages/producto4/producto4.component';
import { Producto5Component } from './pages/producto5/producto5.component';
import { Producto6Component } from './pages/producto6/producto6.component';
import { Producto7Component } from './pages/producto7/producto7.component';
import { Producto8Component } from './pages/producto8/producto8.component';
import { Producto9Component } from './pages/producto9/producto9.component';
import { Producto10Component } from './pages/producto10/producto10.component';
import { Producto11Component } from './pages/producto11/producto11.component';
import { FlogoComponent } from './pages/flogo/flogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    ContactComponent,
    LanzamientosComponent,
    Producto1Component,
    Producto2Component,
    Producto3Component,
    Producto4Component,
    Producto5Component,
    Producto6Component,
    Producto7Component,
    Producto8Component,
    Producto9Component,
    Producto10Component,
    Producto11Component,
    FlogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
