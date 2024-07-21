import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/accounts/account/account.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';
import { ModalAccountComponent } from './modals/account/modal-account/modal-account.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyColombianPipe } from './pipes/currencyCOP';

export const routes: Routes = [
    { path: 'account', component: AccountComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        NgbModalModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }

