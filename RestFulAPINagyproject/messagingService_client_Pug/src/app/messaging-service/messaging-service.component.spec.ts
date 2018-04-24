import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingServiceComponent } from './messaging-service.component';

describe('MessagingServiceComponent', () => {
  let component: MessagingServiceComponent;
  let fixture: ComponentFixture<MessagingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
