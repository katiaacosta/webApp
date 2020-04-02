import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarpetComponent } from './update-carpet.component';

describe('UpdateCarpetComponent', () => {
  let component: UpdateCarpetComponent;
  let fixture: ComponentFixture<UpdateCarpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
