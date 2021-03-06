import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTokenComponent } from './config-token.component';

describe('CreateTokenComponent', () => {
  let component: CreateTokenComponent;
  let fixture: ComponentFixture<CreateTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
