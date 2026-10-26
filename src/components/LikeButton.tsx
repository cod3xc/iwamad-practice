import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="primary"
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      ♥ {likes > 0 ? `Liked (${likes})` : 'Like Profile'}
    </Button>
  );
};
