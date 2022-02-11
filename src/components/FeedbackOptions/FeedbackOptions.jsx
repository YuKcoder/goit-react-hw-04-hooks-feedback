import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(item => (
        <FeedbackItem key={item}>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </Button>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
