import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>list_articles works!</p>`,
  styleUrls: ['./list_articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListArticlesComponent { }
