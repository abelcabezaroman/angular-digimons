import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsPageComponent } from './digimons-page.component';

describe('DigimonsPageComponent', () => {
  let component: DigimonsPageComponent;
  let fixture: ComponentFixture<DigimonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
