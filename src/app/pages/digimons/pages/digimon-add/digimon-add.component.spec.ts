import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonAddComponent } from './digimon-add.component';

describe('AddComponent', () => {
  let component: DigimonAddComponent;
  let fixture: ComponentFixture<DigimonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
