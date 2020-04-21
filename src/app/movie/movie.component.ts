import { Input,Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movieTitle: string;
  @Input() moviePtPoster: string;
  @Input() movieTagline : string;
  @Input() movieDate: string;
  @Input() movieNation : string;
  @Input() movieProductor : string;
  @Input() movieDuring : string;
  @Input() movieCredit : string;

  

  constructor() { }

  ngOnInit(): void {

  }

}
