import { createReducer, on } from '@ngrx/store';
import { initialState } from './../../../posts/post-list/state/post.state';
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from './post.action';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    console.log(action,"ssssssssssssssssssssssssssssss")
    console.log("state daata ",state)
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSuccess, (state, action) => {
    console.log(state,"ssssssssssssssssssssssssssssss")
       const updatedPosts = state.posts.map((post) => {
         console.log(post,"llllllllllllllllllll")
       return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePostSuccess, (state, { id }) => {
    const updatedPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
on(loadPostsSuccess,(state,action)=>{
    return {
        ...state,
        posts:action.posts,
    }
})
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
