import { Component } from '@angular/core';
import { QUIZZES, Quiz } from '../data/quiz-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})


export class QuizComponent {
  quizzes = QUIZZES;
  selectedQuiz: Quiz | null = null;
  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null;
  score = 0;
  showResult = false;
  extractLink(source?: string): string {
    if (!source) return '#';
    const match = source.match(/\((https?:\/\/[^\)]+)\)/);
    return match ? match[1] : '#';
  }

  selectQuiz(quiz: Quiz) {
    this.selectedQuiz = quiz;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswerIndex = null;
    this.showResult = false;
  }

  selectedAnswerIndexes: number[] = [];

  toggleAnswer(index: number) {
    if (this.selectedAnswerIndexes.includes(index)) {
      this.selectedAnswerIndexes = this.selectedAnswerIndexes.filter(i => i !== index);
    } else {
      this.selectedAnswerIndexes.push(index);
    }
  }

  submitAnswer() {
    if (!this.selectedQuiz) return;

    const question = this.selectedQuiz.questions[this.currentQuestionIndex];
    const isCorrect =
      this.selectedAnswerIndexes.length === question.answerIndexes.length &&
      this.selectedAnswerIndexes.every((i) => question.answerIndexes.includes(i));

    if (isCorrect) this.score++;

    this.selectedAnswerIndexes = [];
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.selectedQuiz.questions.length) {
      this.showResult = true;
    }
  }


  reset() {
    this.selectedQuiz = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswerIndex = null;
    this.showResult = false;
  }
}
