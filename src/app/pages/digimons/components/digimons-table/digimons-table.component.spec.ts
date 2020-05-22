import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsTableComponent } from './digimons-table.component';

describe('DigimonsTableComponent', () => {
  let component: DigimonsTableComponent;
  let fixture: ComponentFixture<DigimonsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
