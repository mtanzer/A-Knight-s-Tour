import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Board, Square } from './board/board.model';
import { BoardService } from './board/board.service'
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService, Board, Square, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
