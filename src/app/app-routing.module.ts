import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BerryComponent } from './projects/pages/berry/berry.component';
import { VibingComponent } from './projects/pages/vibing/vibing.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'project/vibing', component: VibingComponent },
  { path: 'project/berry', component: BerryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
