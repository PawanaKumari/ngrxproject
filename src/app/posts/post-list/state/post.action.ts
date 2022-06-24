
import { Post } from "src/app/model/posts.model";
import { createAction, props } from "@ngrx/store";

export const ADD_POST_ACTION = '[posts page]  add post';
export const UPDATE_POST_ACTTION = '[posts page] update post';
export const DELETE_POST_ACTION = '[posts psge] delete post';
export const addPost=  createAction(ADD_POST_ACTION,props<{ post:Post}>());
export const updatePost=  createAction(UPDATE_POST_ACTTION,props<{ post:Post}>());
export const deletePost = createAction(DELETE_POST_ACTION,props<{id : string}>());