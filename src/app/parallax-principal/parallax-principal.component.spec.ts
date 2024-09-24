import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxPrincipalComponent } from './parallax-principal.component';

describe('ParallaxPrincipalComponent', () => {
  let component: ParallaxPrincipalComponent;
  let fixture: ComponentFixture<ParallaxPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
