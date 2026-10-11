import { Button } from './ui/Button';

export function LikeButton({ count, onLike }) {
  return (
    <Button variant="primary" onClick={onLike} aria-label={`Like (${count} likes)`}>
      ♥ {count}
    </Button>
  );
}
