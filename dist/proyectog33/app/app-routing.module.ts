import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MisionComponent } from './mision/mision.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'header',
    component: FooterComponent
  },
  {
    path:'mision',
    component: MisionComponent
  },
  {
    path:'objetivos',
    component: ObjetivosComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
