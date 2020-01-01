import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOTNameComponent } from './gotname.component';

describe('GOTNameComponent', () => {
  let component: GOTNameComponent;
  let fixture: ComponentFixture<GOTNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOTNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOTNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
