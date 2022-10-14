import { Component, OnInit } from '@angular/core';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css'],
})
export class PageSixComponent implements OnInit {
  appleIcon = faApple;
  googlePlayIcon = faGooglePlay;
  constructor() {}

  ngOnInit(): void {}
}
