import css from '../FeedBack/FeedBackCard.module.css';

export default function Notification({ message }) {
  return <h2 className={css.secondary__title}>{message}</h2>;
}
