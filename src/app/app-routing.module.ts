import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
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

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'lanzamientos', component: LanzamientosComponent },
    { path: 'producto1', component: Producto1Component },
    { path: 'producto2', component: Producto2Component },
    { path: 'producto3', component: Producto3Component },
    { path: 'producto4', component: Producto4Component },
    { path: 'producto5', component: Producto5Component },
    { path: 'producto6', component: Producto6Component },
    { path: 'producto7', component: Producto7Component },
    { path: 'producto8', component: Producto8Component },
    { path: 'producto9', component: Producto9Component },
    { path: 'producto10', component: Producto10Component },
    { path: 'producto11', component: Producto11Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






