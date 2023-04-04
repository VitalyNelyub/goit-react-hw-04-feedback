import { useState } from 'react';
import css from './FeedBack/FeedBackCard.module.css';
import Buttons from './Buttons/Buttons';
import FeedbackStatistics from 'components/Statistics/Statistics';
import Notification from './Notifi/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalForShowStat = () => good + neutral + bad;

  const handleClickGood = () => setGood(good + 1);

  const handleClickNeutral = () => setNeutral(neutral + 1);

  const handleClickBad = () => setBad(bad + 1);


  return (
    <div className={css.feedback}>
      <h1 className={css.title}>Please leave your feedback</h1>
      <Buttons
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
      />
      {totalForShowStat() > 0 ? (
        <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

