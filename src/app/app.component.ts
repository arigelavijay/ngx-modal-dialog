import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private modalDialogService: ModalDialogService,
    private viewContainer: ViewContainerRef) {

  }

  openDynamicModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dynamic child component',
      childComponent: DynamicModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        name: 'Vijaya Babu',
        email: 'varigela@ivycomptech.com'
      }
    }); 

  }
}
