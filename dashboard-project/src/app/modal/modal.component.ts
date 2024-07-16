import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  providers: [NgbActiveModal],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}