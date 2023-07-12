import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './core/app/app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DocsComponent } from './modules/pages/docs/docs.component';
import { InitialComponent } from './modules/layouts/initial/initial.component';
import { ContentAnimateDirective } from './core/directives/content-animate.directive';
import { NavbarComponent } from './modules/layouts/initial/navbar/navbar.component';
import { RoutingComponent } from './modules/pages/docs/routing/routing.component';
import { StructureComponent } from './modules/pages/docs/structure/structure.component';
import { CommandsComponent } from './modules/pages/docs/commands/commands.component';
import { ComponentsComponent } from './modules/pages/docs/components/components.component';
import { CardComponent } from './modules/components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    InitialComponent,
    ContentAnimateDirective,
    NavbarComponent,
    RoutingComponent,
    StructureComponent,
    CommandsComponent,
    ComponentsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
