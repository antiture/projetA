import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';
import { DComponent } from './pages/d/d.component';
import { EComponent } from './pages/e/e.component';
import { FComponent } from './pages/f/f.component';
import { GComponent } from './pages/g/g.component';
import { HComponent } from './pages/h/h.component';
import { IComponent } from './pages/i/i.component';
import { JComponent } from './pages/j/j.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent,
    HComponent,
    IComponent,
    JComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
