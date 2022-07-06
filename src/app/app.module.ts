import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routingModule';
import { HeaderComponent } from './shared/components/header/header.component';

import { appReducer } from './store/app.state';

import { PostEffects } from './posts/post-list/state/post.effect';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
