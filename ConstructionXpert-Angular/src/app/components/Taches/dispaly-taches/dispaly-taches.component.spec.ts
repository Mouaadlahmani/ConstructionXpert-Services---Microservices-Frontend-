import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyTachesComponent } from './dispaly-taches.component';

describe('DispalyTachesComponent', () => {
  let component: DispalyTachesComponent;
  let fixture: ComponentFixture<DispalyTachesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispalyTachesComponent]
    });
    fixture = TestBed.createComponent(DispalyTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
