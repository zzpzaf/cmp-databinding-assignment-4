import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { retryWhen } from 'rxjs-compat/operator/retryWhen';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
// @Output() EvenTick: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() EvenTick: EventEmitter<number> = new EventEmitter<number>();

btn_state_start:boolean ;
btn_state_stop:boolean ;
interval:any;

  constructor() { }

  ngOnInit(): void {
    this.btn_state_start = true;
    this.btn_state_stop = false;
  }

  onStart():void {
    //  console.log("Start");
    this.btn_state_start = !this.btn_state_start;
    this.btn_state_stop = !this.btn_state_stop;
    this.managed_game_timer(false);
  }

  onStop():void {
    // console.log("Stop");
    this.btn_state_stop = !this.btn_state_stop;
    this.btn_state_start = !this.btn_state_start;
    this.managed_game_timer(true);
  }

  managed_game_timer(stop:boolean):void {

    let count = 0;
    if (stop) {
      clearInterval(this.interval);
      return;
    }
    this.interval = setInterval(() => {
      count++;
      this.EvenTick.emit(count);
      // console.log("From Game Control:", count);
    }, 1000);

  }

}
