import { Component, inject, OnInit, signal } from '@angular/core';
import { FreeDictionaryService } from '../../../services/free-dictionary.service';
import { DefinitionResponse, Meaning } from '../../../interfaces/definition-response.interface';
import { DefinitionsComponent } from "../definitions/definitions.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [DefinitionsComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent  {

  

}
