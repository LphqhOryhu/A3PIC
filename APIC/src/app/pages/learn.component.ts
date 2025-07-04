import { Component } from '@angular/core';
import { GlossaryComponent } from '../glossary.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [GlossaryComponent],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {}
