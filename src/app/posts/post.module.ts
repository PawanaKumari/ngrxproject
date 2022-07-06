import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { LOAD_POSTS_SUCCESS } from './post-list/state/post.action';
import { PostEffects } from './post-list/state/post.effect';
import { postsReducer } from './post-list/state/post.reducer';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [PostListComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(LOAD_POSTS_SUCCESS, postsReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostModule {}
