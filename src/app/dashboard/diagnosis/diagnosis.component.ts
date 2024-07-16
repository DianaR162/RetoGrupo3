import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './diagnosis.component.html',
  styleUrls: ['../dashboard.component.css', './diagnosis.component.css']
})
export class DiagnosisComponent {
  @ViewChild('containerChart') containerChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const COLOR_BLUE = '#000066';

    const data = {
        labels: [
            'Conocimiento del cliente',
            ['Conocimiento', 'del negocio'],
            ['Coherencia del', 'modelo de negocio'],
            ['Alineación en', 'la comunicación', 'interna'],
            'Salud financiera'
        ],
        datasets: [
            {
                label: 'Radar estratégico',
                data: [3, 1, 2, 4, 2],
                fill: false,
                borderColor: COLOR_BLUE,
                pointBackgroundColor: COLOR_BLUE,
                pointBorderColor: COLOR_BLUE,
                pointHoverBackgroundColor: COLOR_BLUE,
                pointHoverBorderColor: COLOR_BLUE
            }
        ]
    };

    new Chart(this.containerChart.nativeElement, {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 2
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 4
                }
            }
        }
    });
  }
}
