import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsGalleryComponent } from './digimons-gallery.component';

describe('DigimonsListComponent', () => {
  let component: DigimonsGalleryComponent;
  let fixture: ComponentFixture<DigimonsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
