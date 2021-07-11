import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ProjCardComponent } from './projects/proj-card/proj-card.component';
import { ProjPageTitleComponent } from './components/proj-page-title/proj-page-title.component';
import { ProjPageFooterComponent } from './components/proj-page-footer/proj-page-footer.component';
import { VibingComponent } from './projects/pages/vibing/vibing.component';
import { LayoutComponent } from './layout/layout.component';
import { BerryComponent } from './projects/pages/berry/berry.component';
import { ThegoodstuffComponent } from './projects/pages/thegoodstuff/thegoodstuff.component';
import { RescalelabRedesignComponent } from './projects/pages/rescalelab-redesign/rescalelab-redesign.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { WaveDividerComponent } from './components/wave-divider/wave-divider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
    ProjCardComponent,
    ProjPageTitleComponent,
    ProjPageFooterComponent,
    VibingComponent,
    LayoutComponent,
    BerryComponent,
    ThegoodstuffComponent,
    RescalelabRedesignComponent,
    ProjectOverviewComponent,
    WaveDividerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
