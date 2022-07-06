import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PostsService } from "src/app/services/posts.service";
import { loadPosts, loadPostsSuccess } from "./post.action";
@Injectable()
export class PostEffects{
    constructor(private action$:Actions,private postservice:PostsService){}

    loadPosts$ = createEffect(()=>{
      return this.action$.pipe(ofType(loadPosts),
      mergeMap((action)=>{
          return this.postservice.getPosts().pipe(map((posts)=>{
return loadPostsSuccess({posts})
          }))

      }))  
    },
     
     )
}


