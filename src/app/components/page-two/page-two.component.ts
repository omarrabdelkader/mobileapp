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
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css'],
})
export class PageTwoComponent implements OnInit {
  usersIcon = faUsers;
  codeIcon = faCode;
  gearIcon = faGear;
  commentIcon = faComment;
  rocketIcon = faRocket;
  downloadIcon = faDownload;
  constructor() {}

  ngOnInit(): void {}
}
