import { Component } from '@angular/core';
import { IQuestion, QuestionsService } from '../services/nodo-reto1-api/questions.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
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
        this.questions = response
        this.totalQuestions = response.length
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateSliderLabel(id: number): void {
    const sliderLabel = document.getElementById('sliderLabel-' + id) as HTMLElement;
    const slider = document.getElementById('slider-' + id) as HTMLInputElement;

    sliderLabel.textContent = slider.value;
  }

  showNextQuestion(): void {
    this.currentQuestion++;
    this.nextQuestion++;
    this.prevQuestion++;
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
