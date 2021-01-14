import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDigimonPageComponent } from './add-digimon-page.component';

describe('AddDigimonPageComponent', () => {
  let component: AddDigimonPageComponent;
  let fixture: ComponentFixture<AddDigimonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDigimonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDigimonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
