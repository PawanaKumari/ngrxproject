import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/post-list/state/post.reducer";
import { PostsState } from "../posts/post-list/state/post.state";

export interface AppState{
    counter:CounterState;
    posts:PostsState
}

export const appReducer = {
    counter:counterReducer,
    posts:postsReducer,
}