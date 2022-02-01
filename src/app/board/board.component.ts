import {Component, Inject, OnInit} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: boolean;
  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService) {}

  ngOnInit(): void {
    this.newGame();
  }

  // tslint:disable-next-line:typedef
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = false;
    this.xIsNext = true;
  }
  // tslint:disable-next-line:typedef
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // tslint:disable-next-line:typedef
  makeMove(i: number) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  // tslint:disable-next-line:typedef
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winner = true;
        this.dialogService.open(`${this.squares[a]} is the winner` ).subscribe();
      }
    }
    return false;
  }
}
