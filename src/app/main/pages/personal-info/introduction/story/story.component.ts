import { Component } from '@angular/core';
import { ImageComponentComponent } from "../../../../shared/image-component/image-component.component";
import { DefinitionsComponent } from "../../definitions/definitions.component";

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [ImageComponentComponent, DefinitionsComponent],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

}
