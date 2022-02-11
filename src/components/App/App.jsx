import { useState } from 'react';
import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';

import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {total === 0 && <Notification message="There is no feedback" />}
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}
