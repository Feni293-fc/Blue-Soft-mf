import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovementService } from '../../../../services/movements/movement.service';
import { Movement } from '../../../../models/Movement';
import { City } from '../../../../enums/Enums';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-consignment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-consignment.component.html',
  styleUrl: './modal-consignment.component.css'
})
export class ModalConsignmentComponent {

  @Input() accountID: any;
  @Input() customerID: any;

  movement = {
    movementId: 0,
    city: 0,
    value: '',
    accountId: '',
    typeMovement: 0,
    customerID: '',
    date: '2024-07-21T06:59:30.078Z'
  };

  ciudadSeleccionada: string = '';

  ciudades = [
    { nombre: 'Bogotá', value: '0' },
    { nombre: 'Medellín', value: '1' },
    { nombre: 'Cali', value: '2' },
    { nombre: 'Barranquilla', value: '3' },
    { nombre: 'Cartagena', value: '4' },
  ];
  
  fechaActual: Date = new Date();

  constructor(public activeModal: NgbActiveModal, private movementService: MovementService) {}

  closeModal() {
    this.activeModal.close('Modal cerrado');
  }

  postData() {
    console.log(this.accountID);
    console.log(this.customerID);
    console.log('Datos del formulario:', this.movement);
    this.movement.accountId = this.accountID;
    this.movement.customerID = this.customerID;
    console.log(this.movement);
    // Aquí podrías enviar los datos del formulario a un servicio o hacer otras operaciones

    this.movementService.createMovement('Movement/movement/insert-movement/', this.movement).subscribe((response: any) => {
      console.log('Respuesta del servidor:', response);
      // Aquí puedes manejar la respuesta del servidor según tu lógica
      this.closeModal();
    }, (error: any) => {
      console.error('Error al hacer la solicitud:', error);
      // Aquí puedes manejar los errores de la solicitud
    });
  }

  seleccionarCiudad(ciudad: string) {
    this.ciudadSeleccionada = ciudad;
    console.log('Ciudad seleccionada:', this.ciudadSeleccionada);
    // Aquí podrías manejar la selección de la ciudad según tus necesidades
  }
}
