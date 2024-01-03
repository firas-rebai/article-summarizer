import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IeeeApiService {
  API_URL = ' https://ieeexploreapi.ieee.org/api/v1/search/articles';
  key = 'wd346uuddnfjcfd9uvtrp8a8';

  constructor(private http: HttpClient) {}

  
  fetch_article(search_term: string) {
    return this.http.get<any>(
      'https://ieeexploreapi.ieee.org/api/v1/search/articles?apikey=' +
        this.key +
        '&format=json&max_records=25&start_record=1&sort_order=asc&sort_field=article_number&open_access=True'
    );
  }

  fetch_html_page(id: string) {
    return this.http.get(
      'https://ieeexploreapi.ieee.org/api/v1/search/document/' +
        id +
        '/fulltext?apikey=' +
        this.key +
        '&format=xml',
      { responseType: 'text' }
    );
  }

  fetch_summary_xml(doc_id) {
    return this.http.get('http://127.0.0.1:5000/summarize/' + doc_id, {
      responseType: 'text',
    });
  }
}
