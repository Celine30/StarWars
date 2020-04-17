import { Input,Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movieTitle: string;
  @Input() moviePtPoster: string;
  @Input() movieDate: string;
  

  title = '3';

  constructor() { }

  ngOnInit(): void {

  }

}
