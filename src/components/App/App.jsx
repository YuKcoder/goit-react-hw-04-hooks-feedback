import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';

import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, amount) => total + amount,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleIncrement}
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
}

export default App;
