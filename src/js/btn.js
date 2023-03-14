import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faClone} from '@fortawesome/free-solid-svg-icons'

const errorMsg = <div style={{ color: 'red' }}>Error creating button.</div>;

function getTypes(mixed) {
  const items = [];
  { mixed.map((value) => {
    if (typeof (value) === 'string') {
      items.push(`${value} `);
    } else if (typeof (value) === 'number') {
      items.push(`${value} `);
    }
    // icon
    else if (typeof (value) === 'object') {
      items.push(<FontAwesomeIcon icon={value} size="xs" />);
      items.push(' ');
    } else {
      items.push(errorMsg);
    }
  }); }
  return items;
}

export function Btn(props) {
  let numMixedParams = 0;
  if (props.mixed) {
    numMixedParams = props.mixed.length;
  }

  // 1 icon in quadratic button
  if (numMixedParams == 1 && props.color && (typeof (props.mixed[0]) === 'object')) {
    return (
    <button className={`button button--xs button--${props.color}`} style={{ padding: '2px', width: '27px', height: '27px' }}><FontAwesomeIcon icon={props.mixed[0]} size="xs" /></button>);
  }
  if (numMixedParams > 0 && props.color) {
    return (
      <button className={`button button--xs button--${props.color}`} style={{ padding: '2px', height: '27px' }}>
        {getTypes(props.mixed)}
      </button>
    );
  }

  return errorMsg;
}
