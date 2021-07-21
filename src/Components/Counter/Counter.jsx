import React from "react";
import { useState } from "react";
import Statistic from "../Statistic/Statistic";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const setActiveItem = (item) => {
    switch (item) {
      case "good":
        return setGood(good + 1);

      case "neutral":
        return setNeutral(neutral + 1);

      case "bad":
        return setBad(bad + 1);

      default:
        throw new Error("Something went wrong!");
    }
  };
  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, item) => acc + item, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={feedback} onLeaveFeedback={setActiveItem} />{" "}
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() === 0 ? (
          <Notification message='No feedback given'></Notification>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

export default Counter;
