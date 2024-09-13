import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRessourcesComponent } from './add-ressources.component';

describe('AddRessourcesComponent', () => {
  let component: AddRessourcesComponent;
  let fixture: ComponentFixture<AddRessourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRessourcesComponent]
    });
    fixture = TestBed.createComponent(AddRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
