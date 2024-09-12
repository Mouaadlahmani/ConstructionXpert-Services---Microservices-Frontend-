import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRessourcesComponent } from './display-ressources.component';

describe('DisplayRessourcesComponent', () => {
  let component: DisplayRessourcesComponent;
  let fixture: ComponentFixture<DisplayRessourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayRessourcesComponent]
    });
    fixture = TestBed.createComponent(DisplayRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
