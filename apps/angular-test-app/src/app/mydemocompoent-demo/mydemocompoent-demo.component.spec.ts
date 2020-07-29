import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydemocompoentDemoComponent } from './mydemocompoent-demo.component';

describe('MydemocompoentDemoComponent', () => {
  let component: MydemocompoentDemoComponent;
  let fixture: ComponentFixture<MydemocompoentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydemocompoentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydemocompoentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
