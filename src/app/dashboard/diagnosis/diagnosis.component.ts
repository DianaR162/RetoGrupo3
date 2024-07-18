import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';
import {
  TEXTS_CLOCK,
  TEXTS_GOLDEN_CIRCLE,
  TEXTS_RADAR,
} from '../../../utils/constants';

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './diagnosis.component.html',
  styleUrls: ['../dashboard.component.css', './diagnosis.component.css'],
})
export class DiagnosisComponent {
  @ViewChild('containerChart')
  containerChart!: ElementRef<HTMLCanvasElement>;
  answersForm: any = {};
  dataGoldenCircle = {
    title: '',
    description: '',
  };
  dataGoldenCircleGraph = {
    porQueText: '',
    comoText: '',
    queText: '',
  };
  dataRadarGraph = {
    conocimientoCliente: {
      text: '',
      value: 0,
    },
    conocimientoNegocio: {
      text: '',
      value: 0,
    },
    coherenciaModeloNegocio: {
      text: '',
      value: 0,
    },
    alineacionComunicacionInterna: {
      text: '',
      value: 0,
    },
    saludFinanciera: {
      text: '',
      value: 0,
    },
  };
  dataClockGraph = {
    title: '',
    text: '',
  };

  private getRoundAverageFromArray(arr: number[]): number {
    return Math.round(
      arr.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      ) / arr.length
    );
  }

  private setDataGoldenCircleGraph(): void {
    const answerGoldenCircle = this.answersForm.goldenCircle;
    const promedioPorQue = this.getRoundAverageFromArray(
      answerGoldenCircle.porQue
    );
    const promedioComo = this.getRoundAverageFromArray(answerGoldenCircle.como);
    const promedioQue = this.getRoundAverageFromArray(answerGoldenCircle.que);

    this.dataGoldenCircleGraph.porQueText =
      TEXTS_GOLDEN_CIRCLE.porQue[promedioPorQue - 1];
    this.dataGoldenCircleGraph.comoText =
      TEXTS_GOLDEN_CIRCLE.como[promedioComo - 1];
    this.dataGoldenCircleGraph.queText =
      TEXTS_GOLDEN_CIRCLE.que[promedioQue - 1];
  }

  private setDataForRadarGraph(): void {
    const answersRadar = this.answersForm.radar;
    const promedioConocimientoCliente = this.getRoundAverageFromArray(
      answersRadar.conocimientoCliente
    );
    const promedioConocimientoNegocio = this.getRoundAverageFromArray(
      answersRadar.conocimientoNegocio
    );
    const promedioCoherenciaModeloNegocio = this.getRoundAverageFromArray(
      answersRadar.coherenciaModeloNegocio
    );
    const promedioAlineacionComunicacionInterna = this.getRoundAverageFromArray(
      answersRadar.alineacionComunicacionInterna
    );
    const promedioSaludFinanciera = this.getRoundAverageFromArray(
      answersRadar.saludFinanciera
    );

    this.dataRadarGraph.conocimientoCliente.text =
      TEXTS_RADAR.conocimientoCliente[promedioConocimientoCliente - 1];
    this.dataRadarGraph.conocimientoCliente.value = promedioConocimientoCliente;
    this.dataRadarGraph.conocimientoNegocio.text =
      TEXTS_RADAR.conocimientoNegocio[promedioConocimientoNegocio - 1];
    this.dataRadarGraph.conocimientoNegocio.value = promedioConocimientoNegocio;
    this.dataRadarGraph.coherenciaModeloNegocio.text =
      TEXTS_RADAR.coherenciaModeloNegocio[promedioCoherenciaModeloNegocio - 1];
    this.dataRadarGraph.coherenciaModeloNegocio.value =
      promedioCoherenciaModeloNegocio;
    this.dataRadarGraph.alineacionComunicacionInterna.text =
      TEXTS_RADAR.alineacionComunicacionInterna[
        promedioAlineacionComunicacionInterna - 1
      ];
    this.dataRadarGraph.alineacionComunicacionInterna.value =
      promedioAlineacionComunicacionInterna;
    this.dataRadarGraph.saludFinanciera.text =
      TEXTS_RADAR.saludFinanciera[promedioSaludFinanciera - 1];
    this.dataRadarGraph.saludFinanciera.value = promedioSaludFinanciera;
  }

  setDataGoldenCircle(step: number): void {
    if (step === 1) {
      this.dataGoldenCircle.title = 'POR QUÉ';
      this.dataGoldenCircle.description = this.dataGoldenCircleGraph.porQueText;
    } else if (step === 2) {
      this.dataGoldenCircle.title = 'CÓMO';
      this.dataGoldenCircle.description = this.dataGoldenCircleGraph.comoText;
    } else {
      this.dataGoldenCircle.title = 'QUÉ';
      this.dataGoldenCircle.description = this.dataGoldenCircleGraph.queText;
    }
  }

  getCategorizeClock(answers: number[]): string {
    const categories: any = {
      diferenciacion: 0,
      diferenciacionSegmentada: 0,
      estrategiasDestinadaFracaso: 0,
      bajoPrecioValorAnadido: 0,
      bajoPrecio: 0,
      hibrida: 0,
    };

    const weights: any = {
      diferenciacion: [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      diferenciacionSegmentada: [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
      estrategiasDestinadaFracaso: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      bajoPrecioValorAnadido: [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      bajoPrecio: [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      hibrida: [2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    };

    for (let category in categories) {
      for (let i = 0; i < answers.length; i++) {
        categories[category] += answers[i] * weights[category][i];
      }
    }

    let maxCategory = '';
    let maxScore = -1;

    for (let category in categories) {
      if (categories[category] > maxScore) {
        maxScore = categories[category];
        maxCategory = category;
      }
    }

    return maxCategory;
  }

  private setDataClockGraph(): void {
    const categorize = this.getCategorizeClock(this.answersForm.clock);

    this.dataClockGraph = TEXTS_CLOCK[categorize];
  }

  ngOnInit(): void {
    const answersFormString = localStorage.getItem('answersForm');

    if (answersFormString !== null) {
      this.answersForm = JSON.parse(answersFormString);

      this.setDataGoldenCircleGraph();
      this.setDataForRadarGraph();
      this.setDataGoldenCircle(1);
      this.setDataClockGraph();
    }
  }

  ngAfterViewInit(): void {
    const COLOR_BLUE = '#000066';
    const dataRadar = this.dataRadarGraph;

    const data = {
      labels: [
        'Conocimiento del cliente',
        ['Conocimiento', 'del negocio'],
        ['Coherencia del', 'modelo de negocio'],
        ['Alineación en', 'la comunicación', 'interna'],
        'Salud financiera',
      ],
      datasets: [
        {
          label: 'Radar estratégico',
          data: [
            dataRadar.conocimientoCliente.value,
            dataRadar.conocimientoNegocio.value,
            dataRadar.coherenciaModeloNegocio.value,
            dataRadar.alineacionComunicacionInterna.value,
            dataRadar.saludFinanciera.value,
          ],
          fill: false,
          borderColor: COLOR_BLUE,
          pointBackgroundColor: COLOR_BLUE,
          pointBorderColor: COLOR_BLUE,
          pointHoverBackgroundColor: COLOR_BLUE,
          pointHoverBorderColor: COLOR_BLUE,
        },
      ],
    };

    new Chart(this.containerChart.nativeElement, {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 2,
          },
        },
        scales: {
          r: {
            min: 0,
            max: 4,
          },
        },
      },
    });
  }
}
