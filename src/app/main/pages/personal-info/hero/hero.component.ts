import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  
  public name = signal('Simón González Quirós')
  public position = signal('Software Developer')
  public isLoading = signal('Loading')

  ngOnInit(): void {
    this.loadingEffect()
  }

  loadingEffect() {
    let count = 0;
    const interval = setInterval(() => {
        if (count < 3) {
            this.isLoading.set(this.isLoading() + '.');
            count++;
        } else {
            clearInterval(interval);
        }
    }, 500);
  }


}
