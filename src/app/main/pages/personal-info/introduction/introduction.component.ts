import { Component, effect, signal } from '@angular/core';
import { StoryComponent } from "./story/story.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [StoryComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent  {
  showStory = signal(false);

  openStory(){
    this.showStory.set(true)
  }
}
