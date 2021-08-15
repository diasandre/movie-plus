import React from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import InsertChartRoundedIcon from '@material-ui/icons/InsertChartRounded';
import { Wrapper } from './style';

const filters = [
  {
    label: 'Actors on same movie',
    type: 'ACTORS_ON_SAME_MOVIE',
  },
  {
    label: 'By name',
    type: 'BY_NAME',
  },
  {
    label: 'By director',
    type: 'BY_DIRECTOR',
  },
  {
    label: 'Combined review note',
    type: 'COMBINED_REVIEW_NOTE',
  },
];

const Buttons = ({ onFilterCallback }) => (
  <Wrapper>
    <div>
      {filters.map(({ label, type }) => (
        <Button
          id={type}
          variant="contained"
          color="primary"
          className="filter-button"
          onClick={() => onFilterCallback(type)}
          disableElevation
        >
          {label}
        </Button>
      ))}
    </div>
    <IconButton color="secondary" aria-label="Statistics" onClick={() => onFilterCallback(null)}>
      <InsertChartRoundedIcon />
    </IconButton>
  </Wrapper>
);

export default Buttons;
