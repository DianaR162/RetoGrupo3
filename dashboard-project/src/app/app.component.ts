import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "./modal/modal.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  openModal(): void {
    this.modalService.open(ModalComponent);
  }
}
