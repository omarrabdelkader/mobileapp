import { Component, OnInit } from '@angular/core';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import {
  faUsers,
  faCode,
  faGear,
  faComment,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent implements OnInit {
  appleIcon = faApple;
  googlePlayIcon = faGooglePlay;
  usersIcon = faUsers;
  codeIcon = faCode;
  gearIcon = faGear;
  commentIcon = faComment;
  rocketIcon = faRocket;
  constructor() {}

  ngOnInit(): void {}
}
