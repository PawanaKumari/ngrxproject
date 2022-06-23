import { Post } from 'src/app/model/posts.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'Sample 1', description: 'sample description 1 ' },
    { id: '2', title: 'Sample 2', description: 'sample description 2 ' },
  ],
};
