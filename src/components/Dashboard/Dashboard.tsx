import React from 'react';
import DashboardCard from './DashboardCard';
import { CardCategory } from '../../Types';

const categories = [
  { id: 1, category: 'JS Fundamentals', score: 10, totalScore: 10 },
  { id: 2, category: 'React', score: 7, totalScore: 10 },
  { id: 3, category: 'Angular', score: 3, totalScore: 10 },
  { id: 4, category: 'CSS', score: 10, totalScore: 10 },
  { id: 5, category: 'Web Animations', score: 7, totalScore: 10 },
  { id: 6, category: 'Accessibility', score: 3, totalScore: 10 },
  { id: 7, category: 'TypeScript', score: 10, totalScore: 10 },
  { id: 8, category: 'Solution Architecture', score: 7, totalScore: 10 },
  { id: 9, category: 'Testing (WIP)', score: 3, totalScore: 10 },
];

const Dashboard = () => {
  const displayCards = () => {
    return categories.map((cat: CardCategory) => {
      return (
        <DashboardCard
          key={cat.id}
          id={cat.id}
          category={cat.category}
          score={cat.score}
          totalScore={cat.totalScore}
        />
      );
    });
  };

  return <div className='dashboard'>{displayCards()}</div>;
};

export default Dashboard;

