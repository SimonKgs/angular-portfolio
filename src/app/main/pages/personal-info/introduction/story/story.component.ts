import { Component, signal } from '@angular/core';
import { ImageComponentComponent } from "../../../../shared/image-component/image-component.component";
import { DefinitionsComponent } from "../../definitions/definitions.component";
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

  public content = signal<StoryData[]>(data)

}
