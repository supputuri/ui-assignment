import { Component, OnInit } from '@angular/core';
import {RetrievePostsService} from '../retrieve-posts.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../user';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css'],
  providers: [RetrievePostsService]

})
export class AllpostsComponent implements OnInit {

  user: Observable<User[]>;

  constructor(private service1: RetrievePostsService) {}

  ngOnInit(): void {
    this.user = this.service1.getPosts();
  }
}
