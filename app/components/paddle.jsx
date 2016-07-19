import React from 'react';
import {
  boardHeight,
  paddleHeight,
  paddleWidth,
  paddleMovementRadius
} from '../constants/game.js';

const Paddle = ({ attributes }) => {
  console.log(attributes);
  const paddleX = paddleMovementRadius * Math.cos(attributes.position) + (boardHeight / 2);
  const paddleY = paddleMovementRadius * Math.sin(attributes.position) + (boardHeight / 2);
  const rotation = 'rotate(45)';

  return (
    <rect
      x={paddleX}
      y={paddleY}
      width={paddleWidth}
      height={paddleHeight}
      fill="red"
    />
  );
}

export default Paddle;
