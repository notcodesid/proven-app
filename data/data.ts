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