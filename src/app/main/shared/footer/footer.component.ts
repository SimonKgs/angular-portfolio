import { Component, signal } from '@angular/core';
import { getMenuItems } from '../../../utils/getRoutes';
import { routes } from '../../main-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public actualDate = signal<number|undefined>(undefined)

  public pages = getMenuItems(routes);

  constructor(){
    this.actualDate.set(new Date().getFullYear())
  }

}
