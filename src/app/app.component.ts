import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-db';
  input: string = '';
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    this.http
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=5ba3487f4d728b9197be75649671030c&query=' +
          this.input
      )
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }
}
