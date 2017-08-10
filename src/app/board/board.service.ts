import _ from 'lodash'
import { Injectable } from '@angular/core';
import { Board, Square } from './board.model';

@Injectable()
export class BoardService {

  constructor(private board:Board, private square: Square) {}

  createBoard(): Board {

    // instantiate the Board model
    this.board = new Board();
    this.board.squares = this.createSquares();

    return this.board
  }

  createSquares(): Square[][] {
    let squares: Square[][] = new Array<Square[]>(8);
    let isWhite = false;
    let count = 0;

    _.forEach(this.board.rank, (item, key, items) => {

      squares[key] = _.map(items, (item) => {

        let square = new Square();
        square.isWhite = isWhite;
        square.squareId = item+(count+1);
        square.isSelected = false;

        isWhite = !isWhite;

        return square;
      });

      isWhite = !isWhite;
      count++;
    });

    return squares;
  }
}
