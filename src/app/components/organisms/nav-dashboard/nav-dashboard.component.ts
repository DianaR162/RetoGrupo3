import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.css',
})
export class NavDashboardComponent {
  @Input()
  activePrincipal: string = '';
  @Input()
  activeChild: string = '';

  ngAfterViewInit(): void {
    if (this.activePrincipal && this.activePrincipal) {
      document
        .getElementById(this.activePrincipal)
        ?.classList.add('active-principal');
      document.getElementById(this.activeChild)?.classList.add('active-child');
    }
  }
}
