import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  input: string = '';
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search() {
    this.http
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=5ba3487f4d728b9197be75649671030c&query=' +
          this.input
      )
      .subscribe((response) => {
        this.response = response;

        console.log(response);

        let responses = this.response.results;

        console.log(responses);
      });
  }
}
