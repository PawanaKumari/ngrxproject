import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../post-list/state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
postForm:FormGroup|any
  constructor(private router:Router,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    })
  }

//   showDescriptionError(){
//     const descriptionForm =this.postForm.get('description');
//     if(descriptionForm.touched && !descriptionForm.valid){
//       if(descriptionForm?.errors.required){
// return 'Description is reqired'
//       }
//     }
//   }
  onAddPost(){
  if(!this.postForm.valid){
    return;
  }
  const post:Post = {
    title:this.postForm.value.title,
    description:this.postForm.value.description,
  }
  this.store.dispatch(addPost({post}))
  this.router.navigate(['posts'])
  }

}
