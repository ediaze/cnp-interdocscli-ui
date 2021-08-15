import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFileComponent } from './provider-file.component';

describe('ProviderFileComponent', () => {
  let component: ProviderFileComponent;
  let fixture: ComponentFixture<ProviderFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
