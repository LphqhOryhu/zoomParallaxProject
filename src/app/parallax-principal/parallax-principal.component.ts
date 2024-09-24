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
    gsap.to(".scene-1", {
      scale: 2,
      opacity: 0,  // Fade out
      scrollTrigger: {
        trigger: ".scene-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });

    // Zoom and fade in for the second scene
    gsap.fromTo(".scene-2", 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1.5, opacity: 1,  
        scrollTrigger: {
          trigger: ".scene-2",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        }
      });
  }
}