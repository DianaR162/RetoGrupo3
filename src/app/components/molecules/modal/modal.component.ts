import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input()
  title: string = '';
  @Input()
  text: string = '';
  @Input()
  textButton: string = '';
  @Input()
  isShow: boolean = false;
  @Input()
  handleClick: () => void = () => {};

  constructor(private router: Router) {}

  closeModal() {
    this.isShow = false;
  }
}
