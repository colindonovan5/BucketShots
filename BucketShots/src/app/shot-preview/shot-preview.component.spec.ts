import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotPreviewComponent } from './shot-preview.component';

describe('ShotPreviewComponent', () => {
  let component: ShotPreviewComponent;
  let fixture: ComponentFixture<ShotPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
