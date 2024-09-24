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
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".scene-1", {
      scale: 3,
      scrollTrigger: {
        trigger: ".scene-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });

    gsap.to(".scene-2", {
      scale: 2,
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
