import { Component } from 'react';
import css from '../FeedBack/FeedBackCard.module.css';

class Notification extends Component {
  render() {
    return <h2 className={css.secondary__title}>{this.props.message}</h2>;
  }
}
export default Notification;
