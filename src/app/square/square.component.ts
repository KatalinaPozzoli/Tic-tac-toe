import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O';
  @Input() finished: boolean;

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  public get buttonClass(){
    return {
      'square__box--x': this.value === 'X',
      'square__box--o': this.value === 'O'
    };
  }

}
