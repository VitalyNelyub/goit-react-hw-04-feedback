// import { Component } from 'react';
import css from '../FeedBack/FeedBackCard.module.css';
import PropTypes from 'prop-types';

export default function FeedbackStatistics({ good, neutral, bad }) {
  

  const totalFeedback = () => {
    const totalLikes = good + neutral + bad;
    return totalLikes;
  };

  const totalFeedbackPersent = () => {
    return ((good / (totalFeedback())) * 100).toFixed(0);
  };

  return (
    <div className={css.ststistic}>
      <h2 className={css.secondary__title}>Statistics</h2>
      <p className={css.feed__stat}>
        Good:
        <span className={css.raiting}>{good}</span>
      </p>
      <p className={css.feed__stat}>
        Neutral:
        <span className={css.raiting}>{neutral}</span>
      </p>
      <p className={css.feed__stat}>
        Bad:
        <span className={css.raiting}>{bad}</span>
      </p>
      <p className={css.feed__stat}>
        Total:
        <span className={css.raiting}>{totalFeedback()}</span>
      </p>
      <p className={css.feed__stat}>
        Positive feedback:
        <span className={css.raiting}>{totalFeedbackPersent()}%</span>
      </p>
    </div>
  );
}

FeedbackStatistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
