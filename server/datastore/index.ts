import { CommentDao } from "./CommentDao";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";
import { LikeDao } from "./LikeDao";
export interface Datastore extends UserDao, PostDao, CommentDao, LikeDao {}
