import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <Button
      block
      variant={likes > 0 ? 'like' : 'default'}
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      <span>{likes > 0 ? '❤️' : '🤍'}</span> {likes > 0 ? `Liked (${likes})` : 'Like Profile'}
    </Button>
  );
};