import { Component, inject, input, signal } from '@angular/core';
import { PexelsAPIService } from '../../services/pexels-api.service';

interface ImgInterface {
  alt: string,
  url: string,
}

@Component({
  selector: 'app-image-component',
  standalone: true,
  imports: [],
  templateUrl: './image-component.component.html',
  styleUrl: './image-component.component.css'
})
export class ImageComponentComponent {

  public search = input.required<string>()
  public img = signal<ImgInterface|undefined>(undefined)
  #imageService = inject(PexelsAPIService)


  ngOnInit(): void {
    this.getImage(this.search())
  }

  getImage(search: string): void {
    this.#imageService.searchGif(search)
      .subscribe( resp => {
        this.img.update( img => ({
          alt: resp.photos[0].alt,
          url: resp.photos[0].src.large
        }))
      })
  }
}
