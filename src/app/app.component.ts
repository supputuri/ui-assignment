import {Component, OnInit} from '@angular/core';
import {RetrievePostsService} from './retrieve-posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RetrievePostsService]

})
export class AppComponent implements OnInit {
  title = 'UI Assignment';
  constructor() {}
  ngOnInit(): void {}
}
