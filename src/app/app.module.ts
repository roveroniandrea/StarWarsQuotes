import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AboutComponent } from './about/about.component';
import { CharactersQuotePipe } from './pipes/characters-quote.pipe';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';
import { AlignCenterComponent } from './align-center/align-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    AboutComponent,
    CharactersQuotePipe,
    QuoteTextComponent,
    NotFoundComponent,
    SubmitQuoteComponent,
    AlignCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
