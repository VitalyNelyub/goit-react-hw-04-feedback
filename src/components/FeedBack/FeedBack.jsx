// import React from "react";
import { Component } from 'react';
import css from '../FeedBack/FeedBackCard.module.css';

// class FeedBackCard extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickGood = () => {
//     this.setState(prev => ({ good: prev.good + 1 }));
//   };

//   handleClickNeutral = () => {
//     this.setState(prev => ({ neutral: prev.neutral + 1 }));
//   };

//   handleClickBad = () => {
//     this.setState(prev => ({ bad: prev.bad + 1 }));
//   };

//   totalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   totalFeedbackPersent = () => {
//     const total = this.totalFeedback();
//     return ((this.state.good / total) * 100).toFixed(0);
//   };

//   render() {
//     return (
//       <div className={css.feedback}>
//         <h1 className={css.title}>Please leave your feedback</h1>
//         <button
//           type="button"
//           className={css.btn__success}
//           onClick={this.handleClickGood}
//         >
//           Good
//         </button>
//         <button
//           type="button"
//           className={css.btn__info}
//           onClick={this.handleClickNeutral}
//         >
//           Neutral
//         </button>
//         <button
//           type="button"
//           className={css.btn__danger}
//           onClick={this.handleClickBad}
//         >
//           Bad
//         </button>
//         <div className={css.ststistic}>
//           <h2 className={css.secondary__title}>Statistics</h2>
//           <p className={css.feed__stat}>
//             Good:
//             <span className={css.raiting}>{this.state.good}</span>
//           </p>
//           <p className={css.feed__stat}>
//             Neutral:
//             <span className={css.raiting}>{this.state.neutral}</span>
//           </p>
//           <p className={css.feed__stat}>
//             Bad:
//             <span className={css.raiting}>{this.state.bad}</span>
//           </p>
//           <p className={css.feed__stat}>
//             Total:
//             <span className={css.raiting}>{this.totalFeedback()}</span>
//           </p>
//           <p className={css.feed__stat}>
//             Positive feedback:
//             <span className={css.raiting}>{this.totalFeedbackPersent()}%</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default FeedBackCard;

