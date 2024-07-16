import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IQuestion {
  id: number;
  question: string;
  options: any;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>('https://b71a61ea-2eb0-4d75-9637-c380294c011f.mock.pstmn.io/questions');
  }
}
