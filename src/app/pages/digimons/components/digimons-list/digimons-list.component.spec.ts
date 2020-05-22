import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsListComponent } from './digimons-list.component';

describe('DigimonsListComponent', () => {
  let component: DigimonsListComponent;
  let fixture: ComponentFixture<DigimonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
