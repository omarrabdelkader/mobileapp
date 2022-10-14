import { Component, OnInit } from '@angular/core';
import {
  faUsers,
  faCode,
  faGear,
  faComment,
  faRocket,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css'],
})
export class PageFiveComponent implements OnInit {
  usersIcon = faUsers;
  codeIcon = faCode;
  gearIcon = faGear;
  commentIcon = faComment;
  rocketIcon = faRocket;
  constructor() {}

  ngOnInit(): void {}
}
