import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AComponent } from './pages/A/a.component';
import { BComponent } from './pages/B/b.component';
import { CComponent } from './pages/C/c.component';
import { DComponent } from './pages/D/d.component';
import { EComponent } from './pages/E/e.component';
import { FComponent } from './pages/F/f.component';
import { GComponent } from './pages/G/g.component';
import { HComponent } from './pages/H/h.component';
import { IComponent } from './pages/I/i.component';
import { JComponent } from './pages/J/j.component';








const routes: Routes = [  
  {path:"", redirectTo: '/home', pathMatch:'full' },
  {path:"home", component:HomeComponent },
  {path:"a", component:AComponent },
  {path:"b", component:BComponent },
  {path:"c", component:CComponent },
  {path:"d", component:DComponent },
  {path:"e", component:EComponent },
  {path:"f", component:FComponent },
  {path:"g", component:GComponent },
  {path:"h", component:HComponent },
  {path:"i", component:IComponent },
  {path:"j", component:JComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
