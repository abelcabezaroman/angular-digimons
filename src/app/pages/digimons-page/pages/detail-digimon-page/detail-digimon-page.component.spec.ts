import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDigimonPageComponent } from './detail-digimon-page.component';

describe('DetailDigimonPageComponent', () => {
  let component: DetailDigimonPageComponent;
  let fixture: ComponentFixture<DetailDigimonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDigimonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDigimonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
