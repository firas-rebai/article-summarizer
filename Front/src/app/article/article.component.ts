import { Component, OnInit } from '@angular/core';
import { IeeeApiService } from '../services/ieee-api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  html_content: SafeHtml | undefined ;
  html_summary_content: SafeHtml | undefined ;

  constructor(private service : IeeeApiService, private route : ActivatedRoute,private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
    let id : string = this.route.snapshot.paramMap.get('id') as string;
    this.service.fetch_html_page(id).subscribe((response: string) => {


      response = response.slice(283);
      response = response.replaceAll("<title>", "<h2>");
      response = response.replaceAll("<label>", "<h2>");
      response = response.replaceAll("</label>", "</h2>");
      response = response.replaceAll("</title>", "</h2>");
      response = response.replaceAll("</h2><h2>", " ");
      response = response.replaceAll("</h2> <h2>", " ");
      response = response.replaceAll("</h2>\n<h2>", " ");

      this.html_content = response
    });

    this.service.fetch_summary_xml(id).subscribe((response: string) => {


      response = response.slice(283);
      response = response.replaceAll("<title>", "<h2>");
      response = response.replaceAll("<label>", "<h2>");
      response = response.replaceAll("</label>", "</h2>");
      response = response.replaceAll("</title>", "</h2>");
      response = response.replaceAll("</h2><h2>", " ");
      response = response.replaceAll("</h2> <h2>", " ");
      response = response.replaceAll("</h2>\n<h2>", " ");

      this.html_summary_content = response
    });

  }




}
