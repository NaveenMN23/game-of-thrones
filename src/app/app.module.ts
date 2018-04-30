import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { GameHttpService } from './game-http.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewLinkComponent } from './view-link/view-link.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewDetailComponent,
    ViewLinkComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'detail/:id',component:ViewDetailComponent},
      {path:'view/:id',component:ViewLinkComponent},
      {path:'about',component:AboutComponent},
      {path:'**', component:NotfoundComponent}
    ])
  ],
  providers: [
    GameHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
