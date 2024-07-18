import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalDashboardComponent } from '../../components/organisms/modal-dashboard/modal-dashboard.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterLink, ModalDashboardComponent],
  templateUrl: './general.component.html',
  styleUrls: ['../dashboard.component.css', './general.component.css'],
})
export class GeneralComponent {}
