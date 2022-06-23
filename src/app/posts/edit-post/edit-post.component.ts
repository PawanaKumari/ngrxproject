import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../post-list/state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post?: Post;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe((data) => {
        this.post = data;
        console.log(this.post, 'this.post');
      });
    });
  }
}
