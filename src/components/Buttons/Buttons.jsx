import { Component } from 'react';
import css from '../FeedBack/FeedBackCard.module.css';

class Buttons extends Component {
  render() {
    // console.log(this.props.handleClickButton)
    // console.log(this.props.type)
    return (
      <div className={css.feedback__buttons}>
        <button
          type="button"
          className={css.btn__success}
          onClick={this.props.handleClickGood}
        >
          Good
        </button>
        <button
          type="button"
          className={css.btn__info}
          onClick={this.props.handleClickNeutral}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.btn__danger}
          onClick={this.props.handleClickBad}
        >
          Bad
        </button>
      </div>
    );
  }
}


export default Buttons;
