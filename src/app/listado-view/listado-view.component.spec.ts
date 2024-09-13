import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViewComponent } from './listado-view.component';

describe('ListadoViewComponent', () => {
  let component: ListadoViewComponent;
  let fixture: ComponentFixture<ListadoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
