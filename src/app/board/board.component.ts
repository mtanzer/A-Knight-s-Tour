import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import { BoardService } from './board.service'
import { Board } from './board.model'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selectionCount: number = 0;
  isActive: boolean = true;

  constructor(private boardService: BoardService, private board: Board, private appService:AppService) {}

  ngOnInit() {
    this.board = this.boardService.createBoard();
  }

  setSquares(event, item) {
    if (this.selectionCount < 2) {
      item.isSelected = true;
      this.selectionCount++;
    }

    this.isActive =  this.selectionCount < 2;
  }
}
