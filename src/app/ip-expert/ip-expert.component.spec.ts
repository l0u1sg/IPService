import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpExpertComponent } from './ip-expert.component';

describe('IpExpertComponent', () => {
  let component: IpExpertComponent;
  let fixture: ComponentFixture<IpExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
