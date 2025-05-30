import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoFechaComponent } from './festivo-fecha.component';

describe('FestivoFechaComponent', () => {
  let component: FestivoFechaComponent;
  let fixture: ComponentFixture<FestivoFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivoFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
