import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BerryComponent } from './projects/pages/berry/berry.component';
import { RescalelabRedesignComponent } from './projects/pages/rescalelab-redesign/rescalelab-redesign.component';
import { ThegoodstuffComponent } from './projects/pages/thegoodstuff/thegoodstuff.component';
import { VibingComponent } from './projects/pages/vibing/vibing.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'project/vibing', component: VibingComponent },
  { path: 'project/berry', component: BerryComponent },
  { path: 'project/rescalelab-redesign', component: RescalelabRedesignComponent },
  { path: 'project/thegoodstuff', component: ThegoodstuffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
