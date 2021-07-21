import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const namesOfItems = Object.keys(options);

  return (
    <ul className={s.btnList}>
      {namesOfItems.map((item) => (
        <li key={item}>
          <button
            className={s.btnFeed}
            type='button'
            onClick={() => onLeaveFeedback(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
