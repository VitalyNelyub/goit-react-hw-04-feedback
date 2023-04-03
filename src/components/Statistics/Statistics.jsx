import { Component } from 'react';
import css from '../FeedBack/FeedBackCard.module.css';

class FeedbackStatistics extends Component {
  totalFeedback = () => {
    // console.log(this.props);
    return this.props.good + this.props.neutral + this.props.bad;
  };

  totalFeedbackPersent = () => {
    //   console.log(this.props)
    return ((this.props.good / this.totalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <div className={css.ststistic}>
        <h2 className={css.secondary__title}>Statistics</h2>
        <p className={css.feed__stat}>
          Good:
          <span className={css.raiting}>{this.props.good}</span>
        </p>
        <p className={css.feed__stat}>
          Neutral:
          <span className={css.raiting}>{this.props.neutral}</span>
        </p>
        <p className={css.feed__stat}>
          Bad:
          <span className={css.raiting}>{this.props.bad}</span>
        </p>
        <p className={css.feed__stat}>
          Total:
          <span className={css.raiting}>{this.totalFeedback()}</span>
        </p>
        <p className={css.feed__stat}>
          Positive feedback:
          <span className={css.raiting}>{this.totalFeedbackPersent()}%</span>
        </p>
      </div>
    );
  }
}

export default FeedbackStatistics;
