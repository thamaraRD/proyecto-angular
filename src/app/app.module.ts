import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavBarComponent } from '../app/components/nav-bar/nav-bar.component';
const routes: Routes = [
  { path:'', component: TablaComponent },
  { path:'detail/:id', component: DetailComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    DetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
