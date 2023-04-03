import { Component } from 'react';
import css from './FeedBack/FeedBackCard.module.css';
import Buttons from './Buttons/Buttons';
import FeedbackStatistics from 'components/Statistics/Statistics';
import Notification from './Notifi/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalForShowStat = () =>
    this.state.good + this.state.neutral + this.state.bad;

  // handleClickButton = type =>
  //   this.setState(prev => ({ [type]: prev[type] + 1 }));

  handleClickGood = () => this.setState(prev => ({ good: prev.good + 1 }));

  handleClickNeutral = () =>
    this.setState(prev => ({ neutral: prev.neutral + 1 }));

  handleClickBad = () => this.setState(prev => ({ bad: prev.bad + 1 }));

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.title}>Please leave your feedback</h1>
        <Buttons
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
          // handleClickButton={this.handleClickButton}
          // type={this.state}
        />
        {this.totalForShowStat() > 0 ? (
          <FeedbackStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
