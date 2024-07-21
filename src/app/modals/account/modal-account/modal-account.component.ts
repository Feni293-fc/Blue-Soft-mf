import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../../services/accounts/account.service';
import { Account } from '../../../models/Account';
import { CurrencyColombianPipe } from '../../../pipes/currencyCOP';
import { CurrencyPipe } from '@angular/common';
import { CustomerService } from '../../../services/customers/customer.service';
import { Customer } from '../../../models/Customer';
import { ModalConsignmentComponent } from '../../movements/Consignment/modal-consignment/modal-consignment.component';
import { ModalWithdrawalComponent } from '../../movements/Withdrawal/modal-withdrawal/modal-withdrawal.component';

@Component({
  selector: 'app-modal-account',
  standalone: true,
  imports: [CurrencyPipe, NgbModalModule ],
  templateUrl: './modal-account.component.html',
  styleUrl: './modal-account.component.css'
})
export class ModalAccountComponent implements OnInit {

  @Input() id: any;
  account!: Account;
  customer!: Customer;

  constructor(public activeModal: NgbActiveModal, private accountService: AccountService<Account>, private customerService: CustomerService<Customer>, private modalService: NgbModal) {}

  async ngOnInit(): Promise<void> {
    await this.loadAccounts();
    console.log(this.id);
  }

  async loadAccounts(): Promise<void> {
    this.accountService.getById('Account/account/get-by-id/' + this.id).subscribe(account => {
      this.account = account;
      console.log(this.account);
      this.loadCustomer();
    });
  }

  async loadCustomer(): Promise<void> {
    this.customerService.getById('Customer/customer/get-by-id/' + this.account.accountID).subscribe(customer => {
      this.customer = customer;
      console.log(this.customer)
    });
  }

  closeModal() {
    this.activeModal.close('Modal cerrado');
  }

  openModal() {
    const modalRef = this.modalService.open(ModalConsignmentComponent);
    modalRef.componentInstance.accountID = this.id; 
    modalRef.componentInstance.customerID = this.customer.customerID; 
    modalRef.result.then((result) => {
      console.log(`Modal cerrado con: ${result}`);
    }, (reason) => {
      console.log(`Modal descartado: ${reason}`);
    });
  }

  openModalWithDrawal() {
    const modalRef = this.modalService.open(ModalWithdrawalComponent);
    modalRef.componentInstance.accountID = this.id; 
    modalRef.componentInstance.customerID = this.customer.customerID; 
    modalRef.result.then((result) => {
      console.log(`Modal cerrado con: ${result}`);
      this.loadAccounts();
    }, (reason) => {
      console.log(`Modal descartado: ${reason}`);
      this.loadAccounts();
    });
  }
}
