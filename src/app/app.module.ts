import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TuiRootModule, TuiDialogModule, TuiButtonModule} from '@taiga-ui/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
