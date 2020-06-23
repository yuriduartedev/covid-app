import React from 'react';

import './styles.css';

interface Card {
  title: string;
  firstResult: number | string;
  subTitle: string;
  secondResult?: number;
  subClass?: string;
}

const Card = (props: Card) => {
  return (
    <div className={'card ' + props.subClass}>
      <h2>{props.title}</h2>
      <span className="first-result">{props.firstResult}</span>
      <h3>{props.subTitle}</h3>
      <span className="second-result">{props.secondResult}</span>
    </div>
  )
}

export default Card;
