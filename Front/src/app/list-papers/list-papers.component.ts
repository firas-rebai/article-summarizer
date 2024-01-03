import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit } from '@angular/core';
import { IeeeApiService } from '../services/ieee-api.service';
import { Paper } from '../models/paper';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-papers.component.html',
  styleUrls: ['./list-papers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPapersComponent implements OnInit {

  to_article(url: any) {
      this.router.navigate(['/article', url])
  }

  papers: Paper[] = [];
  public searchTerm: string = ''
  constructor(private service: IeeeApiService, private router : Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.fetch_article('test').subscribe((result) => {
      this.papers = result.articles as Paper[];
      console.log(this.papers);
      this.cdr.detectChanges();
    });
  }

  fetch() {
    this.service.fetch_article('test').subscribe((result) => {
      this.papers = result.articles as Paper[];
    });
  }
}
