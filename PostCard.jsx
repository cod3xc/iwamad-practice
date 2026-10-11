import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { SkillBadge } from './SkillBadge';

export function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <Card>
      <div className="post-card__image" aria-hidden="true" />
      <h2 className="post-card__title">{post.title}</h2>
      <p className="text-muted">{post.date}</p>
      <div className="post-card__tags">
        {post.tags.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
      <div>
        <Button variant="primary" onClick={() => navigate(`/posts/${post.id}`)}>
          Read more
        </Button>
      </div>
    </Card>
  );
}
