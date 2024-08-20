import { Component } from '@angular/core';
import { ModalDashboardComponent } from '../../components/organisms/modal-dashboard/modal-dashboard.component';
import { NavDashboardComponent } from '../../components/organisms/nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ModalDashboardComponent, NavDashboardComponent],
  templateUrl: './general.component.html',
  styleUrls: ['../dashboard.component.css', './general.component.css'],
})
export class GeneralComponent {}
