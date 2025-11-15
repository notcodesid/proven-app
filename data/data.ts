// data.ts
export type Challenge = {
    id: string;
    title: string;
    dateRange: string;
    entryFee: string;
    days: number;
    prizePool: string;
    participants: number;
    image: any; // require(...) or remote URI
  };

  export const challenges: Challenge[] = [
    {
      id: '1',
      title: '21-Day Gym Consistency Challenge',
      dateRange: 'Oct 30 - Nov 30',
      entryFee: '20 USDC',
      days: 31,
      prizePool: '200 USDC',
      participants: 1,
      image:{ uri : 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg'},
    },
    {
      id: '2',
      title: 'Daily Code Sprint',
      dateRange: 'Nov 01 - Nov 30',
      entryFee: '5 USDC',
      days: 30,
      prizePool: '100 USDC',
      participants: 12,
      image:{ uri : 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg'},
    },
  ];

export type MyChallenge = {
  id: string;
  title: string;
  type: string;
  difficulty: 'EASY' | 'MODERATE' | 'HARD';
  progress: number;
  reward: string;
  image: any;
  completedDate?: string;
};

export const myChallenges: MyChallenge[] = [
  {
    id: '1',
    title: '30-Day Photo Challenge',
    type: 'Photo Upload',
    difficulty: 'MODERATE',
    progress: 0,
    reward: '50 USDC',
    image: { uri: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg' },
  },
  {
    id: '2',
    title: 'Morning Workout Streak',
    type: 'Daily Check-in',
    difficulty: 'HARD',
    progress: 35,
    reward: '100 USDC',
    image: { uri: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg' },
  },
  {
    id: '3',
    title: 'Code Every Day',
    type: 'GitHub Commits',
    difficulty: 'MODERATE',
    progress: 67,
    reward: '75 USDC',
    image: { uri: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg' },
  },
  {
    id: '4',
    title: 'Meditation Journey',
    type: 'Daily Practice',
    difficulty: 'EASY',
    progress: 100,
    reward: '30 USDC',
    image: { uri: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg' },
    completedDate: 'Nov 10, 2024',
  },
  {
    id: '5',
    title: 'Reading Challenge',
    type: 'Book Pages',
    difficulty: 'MODERATE',
    progress: 100,
    reward: '60 USDC',
    image: { uri: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg' },
    completedDate: 'Nov 5, 2024',
  },
];

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: any;
  stats: {
    completed: number;
    active: number;
  };
  achievements: Achievement[];
};

export const userProfile: UserProfile = {
  id: '1',
  name: 'sidharth',
  email: 'demo@gmail.com',
  avatar: { uri: 'https://pbs.twimg.com/profile_images/1981777608850149376/8z65B1zT_400x400.jpg' },
  stats: {
    completed: 0,
    active: 3,
  },
  achievements: [],
};