import { Component } from '@angular/core';
import {
  IQuestion,
  QuestionsService,
} from '../services/nodo-reto1-api/questions.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  currentQuestion: number = 1;
  nextQuestion: number = 2;
  prevQuestion: number = 0;
  totalQuestions: number = 0;
  questions!: IQuestion[];

  constructor(private questionsService: QuestionsService) {}

  private getQuestions(): void {
    this.questionsService.getQuestions().subscribe({
      next: (response) => {
        this.questions = response;
        this.totalQuestions = response.length;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateSliderLabel(id: number): void {
    const sliderLabel = document.getElementById(
      'sliderLabel-' + id
    ) as HTMLElement;
    const slider = document.getElementById('slider-' + id) as HTMLInputElement;

    sliderLabel.textContent = slider.value;
  }

  showNextQuestion(): void {
    this.currentQuestion++;
    this.nextQuestion++;
    this.prevQuestion++;

    if (this.currentQuestion > this.totalQuestions) {
      let answers: any = {
        goldenCircle: {
          porQue: [],
          como: [],
          que: [],
        },
        radar: {
          conocimientoCliente: [],
          conocimientoNegocio: [],
          coherenciaModeloNegocio: [],
          alineacionComunicacionInterna: [],
          saludFinanciera: [],
        },
        clock: [],
      };

      for (let i = 1; i <= this.totalQuestions; i++) {
        const answer = Number(
          (document.getElementById('slider-' + i) as HTMLInputElement).value
        );

        if (i >= 1 && i <= 5) {
          answers.goldenCircle.porQue.push(answer);
        } else if (i > 5 && i <= 10) {
          answers.goldenCircle.como.push(answer);
        } else if (i > 10 && i <= 15) {
          answers.goldenCircle.que.push(answer);
        } else if (i > 15 && i <= 27) {
          answers.clock.push(answer);
        } else if ([28, 29].includes(i)) {
          answers.radar.coherenciaModeloNegocio.push(answer);
        } else if ([30, 31].includes(i)) {
          answers.radar.conocimientoCliente.push(answer);
        } else if ([32, 33].includes(i)) {
          answers.radar.conocimientoNegocio.push(answer);
        } else if ([34, 35].includes(i)) {
          answers.radar.alineacionComunicacionInterna.push(answer);
        } else if ([36, 37].includes(i)) {
          answers.radar.saludFinanciera.push(answer);
        }
      }

      localStorage.setItem('answersForm', JSON.stringify(answers));
    }
  }

  showPrevQuestion(): void {
    this.currentQuestion--;
    this.nextQuestion--;
    this.prevQuestion--;
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}