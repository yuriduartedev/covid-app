import React from 'react';

interface Title {
  title: string;
  subTitle?: string;
  updated_at?: Date | string;
}

const PageTitle = (props: Title) => {
  return (
    <>
      <span className="title">covid19</span>
      <h1>{props.title} <span>{props.subTitle}</span></h1>
      <span>Atualizado em: {props.updated_at}</span>
    </>
  )
}

export default PageTitle;
