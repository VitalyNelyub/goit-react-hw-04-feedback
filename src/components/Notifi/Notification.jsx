import css from '../FeedBack/FeedBackCard.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <h2 className={css.secondary__title}>{message}</h2>;
}

Notification.propType = {
  message: PropTypes.string
};