import css from '../FeedBack/FeedBackCard.module.css';

export default function Buttons(
 { handleClickGood,
  handleClickNeutral,
  handleClickBad}
) {
  return (
    <div className={css.feedback__buttons}>
      <button
        type="button"
        className={css.btn__success}
        onClick={() => handleClickGood()}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btn__info}
        onClick={() => handleClickNeutral()}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btn__danger}
        onClick={() => handleClickBad()}
      >
        Bad
      </button>
    </div>
  );
}
