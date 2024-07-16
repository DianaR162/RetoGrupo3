import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './general.component.html',
  styleUrls: ['../dashboard.component.css', './general.component.css']
})
export class GeneralComponent {

}
