import React from 'react';
import { CardCategory } from '../../Types';

const DashboardCard: React.FC<CardCategory> = ({
  category,
  score,
  totalScore,
}) => {
  return (
    <div className='cardWrap'>
      <div className='cardHeader'>
        <h2>{category}</h2>
      </div>
      <div className='cardBody'>
        <h3>overall score</h3>
        <p>
          <span className='score'>{score}</span>/{totalScore}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;

