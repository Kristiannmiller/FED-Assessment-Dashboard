import React from 'react';
import { CardCategory } from '../../Types';

const DashboardCard: React.FC<CardCategory> = ({
  category,
  score,
  totalScore,
}) => {
  return (
    <div className='cardWrap'>
      <div className='cardInner'>
        <div className='cardFront'>
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
        <div className='cardBack'>
          <div className='cardHeader'>
            <h2>{category}</h2>
          </div>
          <div className='cardBody'>
            <ul>
              <li>
                <span>category 1</span>
                <span>10/10</span>
              </li>
              <li>
                <span>category 2</span>
                <span>9/10</span>
              </li>
              <li>
                <span>category 3</span>
                <span>5/10</span>
              </li>
              <li>
                <span>category 4</span>
                <span>10/10</span>
              </li>
              <li>
                <span>category 5</span>
                <span>6/10</span>
              </li>
              <li>
                <span>category 6</span>
                <span>8/10</span>
              </li>
              <li>
                <span>category 7</span>
                <span>7/10</span>
              </li>
              <li>
                <span>category 8</span>
                <span>1/10</span>
              </li>
              <li>
                <span>category 9</span>
                <span>3/10</span>
              </li>
              <li>
                <span>
                  category 10 is super long and will take up two lines
                </span>
                <span>3/10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

