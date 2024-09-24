import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxPrincipalComponent } from './parallax-principal/parallax-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ParallaxPrincipalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zoomParallaxProject';
}
