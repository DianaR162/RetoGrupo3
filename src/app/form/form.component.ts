import { Component } from '@angular/core';
import { IQuestion, QuestionsService } from '../services/nodo-reto1-api/questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  questions!: IQuestion[];

  constructor(private questionsService: QuestionsService) {}

  ngAfterViewInit(): void {
    this.questionsService.getQuestions().subscribe({
      next: (response) => {
        this.questions = response
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
