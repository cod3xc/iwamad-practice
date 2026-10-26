import { useLikes } from '../context/LikesContext';

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <button
      type="button"
      onClick={addLike}
      className={`w-full py-2 px-4 rounded-lg text-sm font-medium border transition ${
        likes > 0 ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
      }`}
    >
      <span>{likes > 0 ? '❤️' : '🤍'}</span> {likes > 0 ? `Liked (${likes})` : 'Like Profile'}
    </button>
  );
};