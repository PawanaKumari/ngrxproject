import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from './post.action';
@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postservice: PostsService) {}

  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        console.log(action, 'action');
        return this.postservice.getPosts().pipe(
          map((posts) => {
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });
  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postservice.addPost(action.post).pipe(
          map((data) => {
            console.log(data,"datataaaa")
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  }
  );

  updatePost$ = createEffect(()=> {
    return this.action$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postservice.updatePost(action.post).pipe(
          map((data) => {
          
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });
  deletePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postservice.deletePost(action.id).pipe(
          map((data) => {
            console.log(data,"dattttttttt")
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

}
