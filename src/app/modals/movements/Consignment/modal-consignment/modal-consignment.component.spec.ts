import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsignmentComponent } from './modal-consignment.component';

describe('ModalConsignmentComponent', () => {
  let component: ModalConsignmentComponent;
  let fixture: ComponentFixture<ModalConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConsignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
