import { Component, NgModule, OnInit, Pipe } from '@angular/core';
import { Account } from '../../../models/Account';
import { AccountService } from '../../../services/accounts/account.service';
import { CommonModule } from '@angular/common';
import { City, TypeAccount } from '../../../enums/Enums';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAccountComponent } from '../../../modals/account/modal-account/modal-account.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  accounts: Account[] | undefined;

  constructor(private accountService: AccountService<Account>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAll('Account/account/get-all').subscribe(accounts => {
      
      this.accounts =  accounts.map((p: any) => {
        var type = TypeAccount[p.typeAccount]
        p.typeAccount = type;
        var city = City[p.city]
        p.city = city;
        return p;
      })
      console.log(this.accounts)
    });
  }

  openModal(id: number) {
    const modalRef = this.modalService.open(ModalAccountComponent);
    modalRef.componentInstance.id = id; 
    modalRef.result.then((result) => {
      console.log(`Modal cerrado con: ${result}`);
    }, (reason) => {
      console.log(`Modal descartado: ${reason}`);
    });
  }

}
