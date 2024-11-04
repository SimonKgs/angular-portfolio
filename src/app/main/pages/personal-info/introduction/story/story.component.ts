import { Component, EventEmitter, Input, input, output, signal, WritableSignal } from '@angular/core';
import { ImageComponentComponent } from "../../../../shared/image-component/image-component.component";
import { DefinitionsComponent } from "../definitions/definitions.component";
import data from './data/story.json'
import { StoryData } from '../../../../interfaces/story-data.interface';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [ImageComponentComponent, DefinitionsComponent],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

  @Input() public showStory!: WritableSignal<boolean>;

  public content = signal<StoryData[]>(data)

  closeStory(){
    this.showStory.set(false)    
  }
}
