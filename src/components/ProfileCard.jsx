import { Card } from './ui/Card';

export function ProfileCard({ user }) {
  return (
    <Card>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </Card>
  );
}
