import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarpetComponent } from './create-carpet.component';

describe('CreateCarpetComponent', () => {
  let component: CreateCarpetComponent;
  let fixture: ComponentFixture<CreateCarpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
