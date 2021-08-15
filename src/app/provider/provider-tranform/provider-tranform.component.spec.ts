import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTranformComponent } from './provider-tranform.component';

describe('ProviderTranformComponent', () => {
  let component: ProviderTranformComponent;
  let fixture: ComponentFixture<ProviderTranformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderTranformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTranformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
