import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init();
  }
}
