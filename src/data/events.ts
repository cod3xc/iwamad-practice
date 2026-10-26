export type CampusEvent = {
  id: number;
  title: string;
  date: string;
  place: string;
  seats: number;
};

export const events: CampusEvent[] = [
  {
    id: 1,
    title: 'KBTU Chess Evening',
    date: '2026-10-30',
    place: 'Coworking 2F',
    seats: 16,
  },
  {
    id: 2,
    title: 'Frontend Code Review',
    date: '2026-11-03',
    place: 'Room 214',
    seats: 12,
  },
  {
    id: 3,
    title: 'Indie Game Showcase',
    date: '2026-11-09',
    place: 'Atrium Hall',
    seats: 25,
  },
  {
    id: 4,
    title: 'Portfolio Pitch Session',
    date: '2026-11-15',
    place: 'Room 405',
    seats: 3,
  },
];
