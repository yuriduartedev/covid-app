import React from 'react';

import './styles.css';

interface Card {
  title: string;
  label?: string;
  firstResult: number | string;
  subTitle: string;
  secondResult?: number | string;
  subClass?: string;
  thirdTitle?: string;
  thirdResult?: number | string;
  fourthTitle?: string;
  fourthResult?: number | string;
}

const Card = (props: Card) => {
  return (
    <div className={'card ' + props.subClass}>
      <h2>{props.title}</h2>
      <h3>{props.label}</h3>
      <span className="first-result">{props.firstResult}</span>
      <h3>{props.subTitle}</h3>
      <span className="second-result">{props.secondResult}</span>
      <h3>{props.thirdTitle}</h3>
      <span className="second-result">{props.thirdResult}</span>
      <h3>{props.fourthTitle}</h3>
      <span className="second-result">{props.fourthResult}</span>
    </div>
  )
}

export default Card;
