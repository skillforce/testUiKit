import React from "react";
import './character_limit_counter.css'

const CharacterLimitCounter = ({
  limit,
  currentAmount,
  containerStyle,
  isHighlightError,
}) => {

  return (
    <div
      className={'character-limit-counter'}
      style={{
        color: isHighlightError ? '#D22F27' : '#141414',
        ...containerStyle,
      }}
    >
      <span>
        {currentAmount < 0 ? 0 : currentAmount} / {limit}
      </span>
    </div>
  );
};

export default CharacterLimitCounter;
