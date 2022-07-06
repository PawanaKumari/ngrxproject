import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`https://gorest.co.in/public/v2/posts`).pipe(map((data)=>{
      const posts:Post[]=[];
      for(let key in data){
        posts.push({...data[key], id: key})
      }
      return posts;
    }))
  }
}
