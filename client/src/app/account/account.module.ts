import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';
import {AccountGuard} from './account.guard';
import {accountRoutes} from './account.routes';
import {AccountService} from './account.service';
import {IndexComponent} from './index/index.component';

@NgModule({
    declarations: [
        AccountComponent,
        IndexComponent,
    ],
    exports: [],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule.forChild(accountRoutes),
    ],
    providers: [
        AccountGuard,
        AccountService,
    ],
})
export class AccountModule {
}