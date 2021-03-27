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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
    ProjCardComponent,
    ProjPageTitleComponent,
    ProjPageFooterComponent,
    VibingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
