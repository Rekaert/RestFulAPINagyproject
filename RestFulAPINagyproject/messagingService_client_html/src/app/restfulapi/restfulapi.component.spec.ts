import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulapiComponent } from './restfulapi.component';

describe('RestfulapiComponent', () => {
  let component: RestfulapiComponent;
  let fixture: ComponentFixture<RestfulapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfulapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfulapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
