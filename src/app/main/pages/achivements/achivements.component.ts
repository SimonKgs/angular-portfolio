import { Component, signal } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import { RouterModule } from '@angular/router';
import certs from "../../data/certs.json"
import { Certs } from '../../interfaces/certs.interface';

@Component({
  selector: 'app-achivements',
  standalone: true,
  imports: [HeroComponent, RouterModule],
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.css'
})
export default class AchivementsComponent {

  public certs = signal<Certs[]>(
    certs.map((cert) => ({
      ...cert,
      obtainedOn: new Date(cert.obtainedOn)
    })).sort((a, b) =>  b.obtainedOn.getTime() - a.obtainedOn.getTime())
  );



}
