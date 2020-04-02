import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetListComponent } from './carpet-list.component';

describe('CarpetListComponent', () => {
  let component: CarpetListComponent;
  let fixture: ComponentFixture<CarpetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
