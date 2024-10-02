import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-parallax-principal',
  standalone: true,
  imports: [],
  templateUrl: './parallax-principal.component.html',
  styleUrl: './parallax-principal.component.css'
})
export class ParallaxPrincipalComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Zoom and fade out for the first scene
gsap.fromTo(".scene-1", 
  { scale: 1, opacity: 1 }, 
  { scale: 1.5, opacity: 0, 
    transformOrigin: "top right",
    scrollTrigger: {
      trigger: ".scene-1",
      start: "top top",  // Commence quand .scene-1 entre dans le viewport
      end: "80% top",    // Se termine un peu avant que .scene-1 quitte le viewport (chevauchement avec .scene-2)
      scrub: true,       // Synchronisé avec le défilement
      pin: true,         // Fixe l'élément pendant le défilement
    }
  }
);

// Zoom and fade in for the second scene
gsap.fromTo(".scene-2", 
  { scale: 0.5, opacity: 0.5 },  // Démarre en étant invisible et avec un zoom plus grand
  { scale: 1, opacity: 1,      // Zoom progressif et apparition
    scrollTrigger: {
      trigger: ".scene-2",
      start: "10% bottom",  // Commence avant que .scene-2 n'entre complètement dans le viewport
      end: "bottom top",    // Se termine lorsque le bas de .scene-2 atteint le haut de la fenêtre
      scrub: true,          // Synchronisé avec le défilement
      pin: true,            // Fixe l'élément pendant le défilement
    }
  }
);



    }
}