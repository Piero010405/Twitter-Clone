import { PostCard } from './post-card'
import { type Post } from '../types/posts'

export function PostsList({ posts }: { posts: Post[] }) {
    return (
        <>
            {
                posts?.map((post) => {
                    const {
                        user_name: userName,
                        avatar_url: avatarUrl,
                        name: userFullName
                    } = post.users
                    return (
                        <PostCard
                            key={post.id}
                            userName={userName}
                            userFullName={userFullName}
                            avatarUrl={avatarUrl}
                            content={post.content}
                        />
                    )
                })
            }
        </>
    )
}
