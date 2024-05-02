import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ClassWork39';

  //
  numbs: number[] = [];

  getRandomNumber() {
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 41) + 10;
      this.numbs.push(randomNumber);
    }
    console.log(this.numbs);
  }
}
