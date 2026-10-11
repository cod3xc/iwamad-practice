import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { Card } from '../components/ui/Card';
import { LikeButton } from '../components/LikeButton';
import { SkillBadge } from '../components/SkillBadge';
import NotFound from './NotFound';

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);
  const [likes, setLikes] = useState(0);
  if (!post) return <NotFound />;
  return (
    <Card>
      <h1>{post.title}</h1>
      <p className="text-muted">{post.date}</p>
      <div className="post-card__tags">
        {post.tags.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
      <p>{post.body}</p>
      <div>
        <LikeButton count={likes} onLike={() => setLikes(likes + 1)} />
      </div>
      <Link to="/">← Back to posts</Link>
    </Card>
  );
}
