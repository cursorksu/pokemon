import React, { FC } from 'react';
import './ButtonMore.scss';

interface Props {
  getMore(): void;
}

export const ButtonMore: FC<Props> = ({ getMore }) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block mt25"
      onClick={getMore}
    >
      Load More
    </button>
  );
};
