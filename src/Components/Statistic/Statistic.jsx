import React from "react";
import PropTypes from "prop-types";
import s from "./Statistic.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statisticList}>
      <li className={s.stateItem}>
        Good: <span className={s.titleItem}>{good}</span>
      </li>
      <li className={s.stateItem}>
        Neutral: <span className={s.titleItem}>{neutral}</span>
      </li>
      <li className={s.stateItem}>
        Bad: <span className={s.titleItem}>{bad}</span>
      </li>
      <li className={s.stateItem}>
        Total: <span className={s.titleItem}>{total}</span>
      </li>
      <li className={s.stateItem}>
        Positive feedback:{" "}
        <span className={s.titleItem}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistic;
