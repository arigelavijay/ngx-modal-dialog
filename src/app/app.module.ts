import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppComponent } from './app.component';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicModalComponent
  ],
  imports: [
    BrowserModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicModalComponent]
})
export class AppModule { }
