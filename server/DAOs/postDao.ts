import { Post } from "../types";

export interface postDao {
    createPost(post:Post)
}