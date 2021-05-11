import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// even:boolean;
counter:number[]=[];

  onSecTicked(counter) {
    this.counter.push(counter); 
    // if (counter % 2 == 0) {
    //   this.even = true;
    //   console.log("Even");
    // } else {
    //   this.even = false;
    //   console.log("Odd");
    // }
  }

}
