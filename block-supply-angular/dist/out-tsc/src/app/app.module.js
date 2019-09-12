import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, } from "@angular/material";
import { BlockChainMenuComponent } from "./block-chain-menu/block-chain-menu.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeLocationFormComponent } from './change-location-form/change-location-form.component';
import { NewBlockFormComponent } from "./new-block-form/new-block-form.component";
import { BlockListDisplayComponent } from './block-list-display/block-list-display.component';
import { UserLoginComponent } from './user-login/user-login.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            BlockChainMenuComponent,
            ChangeLocationFormComponent,
            NewBlockFormComponent,
            BlockListDisplayComponent,
            UserLoginComponent,
        ],
        imports: [
            BrowserAnimationsModule,
            BrowserModule,
            AppRoutingModule,
            MatMenuModule,
            MatIconModule,
            MatButtonModule,
            MatSidenavModule,
            MatCheckboxModule,
            MatSnackBarModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            // import HttpClientModule after BrowserModule.
            HttpClientModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map