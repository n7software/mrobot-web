import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { LayoutModule } from "@angular/cdk/layout"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from "@angular/material"
import {TranslateLoader, TranslateModule} from "@ngx-translate/core"
import {TranslateHttpLoader} from "@ngx-translate/http-loader"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NavComponent } from "./nav/nav.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { CommunityComponent } from './community/community.component';
import { DesktopAppComponent } from './desktop-app/desktop-app.component';
import { BoostComponent } from './boost/boost.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitleFromRouteDataPipe } from './title-from-route-data.pipe'

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AppComponent, NavComponent, DashboardComponent, GamesComponent, CommunityComponent, DesktopAppComponent, BoostComponent, PageNotFoundComponent, TitleFromRouteDataPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}