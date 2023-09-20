import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: 
  `
  <div class="question-card">
  <div class="d-flex question" (click)="showAnswer = !showAnswer">
    <div class="h4">{{ question }}</div>
    <div class="icon h4 ms-auto" [ngClass]="showAnswer ? 'rotate' : ''">
      <i class="fa fa-xl fa-plus"></i>
    </div>
  </div>
  <div class="h4 answer" [ngClass]="showAnswer ? 'show' : 'hide'">
    {{ answer }}
  </div>
</div>

  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() question!:string;
  @Input() answer!:string;
  showAnswer = false;
}
