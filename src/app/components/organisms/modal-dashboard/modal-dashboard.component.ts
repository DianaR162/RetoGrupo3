import { Component } from '@angular/core';
import { TEXTS_MODAL_DASHBOARD } from '../../../../utils/constants';
import { ModalComponent } from '../../molecules/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-dashboard',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-dashboard.component.html',
  styleUrl: './modal-dashboard.component.css',
})
export class ModalDashboardComponent {
  title: string = TEXTS_MODAL_DASHBOARD.title;
  text: string = TEXTS_MODAL_DASHBOARD.text;
  textButton: string = TEXTS_MODAL_DASHBOARD.textButton;
  isShow: boolean = false;

  constructor(private router: Router) {}

  handleClick(): void {
    this.router.navigate(['/form/welcome']);
  }

  ngOnInit(): void {
    const answersForm = localStorage.getItem('answersForm');

    if (!answersForm) this.isShow = true;
  }
}
