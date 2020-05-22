import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsTableBasicComponent } from './digimons-table-basic.component';

describe('DigimonsTableBasicComponent', () => {
  let component: DigimonsTableBasicComponent;
  let fixture: ComponentFixture<DigimonsTableBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonsTableBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
