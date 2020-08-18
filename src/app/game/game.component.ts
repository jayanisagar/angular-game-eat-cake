import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  inputMatrixNumbar: number;
  metrixObj: any[] = [];
  stepCount: number = 0;
  currentPlayerPosition: any = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    
    this.metrixObj = [];
    this.stepCount = 0;
    for (let index = 0; index < this.inputMatrixNumbar; index++) {
      let col = []
      for (let j = 0; j < this.inputMatrixNumbar; j++) {
        col.push('');
      }
      this.metrixObj.push(col);
    }

    this.currentPlayerPosition.x = (Math.round(this.inputMatrixNumbar / 2) - 1);
    this.currentPlayerPosition.y = (Math.round(this.inputMatrixNumbar / 2) - 1);
    this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "player.jpg";

    let arr: any[] = this.getRandomNumber();
    let arr1: any[] = this.getRandomNumber();
    for (let i = 0; i < arr.length; i++) {
      if (this.currentPlayerPosition.x == arr[i] && this.currentPlayerPosition.y == arr1[i]) {
        this.metrixObj[arr[i] + 1][arr1[i]] = "cake.jpg";
      } else {
        this.metrixObj[arr[i]][arr1[i]] = "cake.jpg";
      }
    }
  }

  getRandomNumber() {
    var arr = [];
    while (arr.length < this.inputMatrixNumbar) {
      var r = Math.floor(Math.random() * this.inputMatrixNumbar);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  @HostListener('keydown', ['$event']) onKeyUp(e) {

    if(this.metrixObj.length) {
      this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "";
    }

    switch (e.keyCode) {
      case 38: // up
        if(this.currentPlayerPosition.x > 0)
          this.currentPlayerPosition.x--;
        this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "player.jpg";
        this.stepCount++;
        break;
      case 37: // left
        if(this.currentPlayerPosition.y > 0)
          this.currentPlayerPosition.y--;
        this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "player.jpg";
        this.stepCount++;
        break;
      case 40: // down
        if(this.currentPlayerPosition.x < (this.inputMatrixNumbar - 1))
          this.currentPlayerPosition.x++;
        this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "player.jpg";
        this.stepCount++;
        break;
      case 39: // right
        if(this.currentPlayerPosition.y < (this.inputMatrixNumbar - 1))
          this.currentPlayerPosition.y++;
        this.metrixObj[this.currentPlayerPosition.x][this.currentPlayerPosition.y] = "player.jpg";
        this.stepCount++;
        break;
    }
  }

}
