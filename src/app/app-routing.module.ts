import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BerryComponent } from './projects/pages/berry/berry.component';
import { RescalelabRedesignComponent } from './projects/pages/rescalelab-redesign/rescalelab-redesign.component';
import { ThegoodstuffComponent } from './projects/pages/thegoodstuff/thegoodstuff.component';
import { VibingComponent } from './projects/pages/vibing/vibing.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'project/vibing', component: VibingComponent },
  { path: 'project/berry', component: BerryComponent },
  { path: 'project/rescalelab', component: RescalelabRedesignComponent },
  { path: 'project/thegoodstuff', component: ThegoodstuffComponent },
  { path: '**', component: PageNotFoundComponent },
];
 
@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
