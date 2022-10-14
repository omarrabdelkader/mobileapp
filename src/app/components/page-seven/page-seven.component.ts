import { Component, OnInit } from '@angular/core';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.component.html',
  styleUrls: ['./page-seven.component.css'],
})
export class PageSevenComponent implements OnInit {
  checkIcon = faSquareCheck;
  constructor() {}

  ngOnInit(): void {}
}
