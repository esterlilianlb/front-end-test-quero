import React from 'react';
import './styles.css';

export default function Button(props) {
    return(
        <button
        className={props.className}
        id={props.id}
        onClick={props.handleClick}
        key={props.key}
        type={props.type}
        >
        {props.title}
        </button>
    )
}
