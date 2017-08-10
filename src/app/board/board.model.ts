export class Square {
  squareId: string;
  isWhite: boolean;
  isSelected: boolean;
}

export class Board {

  rank: string[];
  file: string[];
  squares: Square[][];

  constructor() {
    this.rank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.file = ['1', '2', '3', '4', '5', '6', '7', '8'];
  }
}
