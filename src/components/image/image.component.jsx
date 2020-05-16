import React from 'react';

import './image.styles.css';

import Pic from './bug.PNG';

export const Image = (props) => (
    <div className='image-container'>
    <img alt="bug" src={Pic} height="42" width="42"/>
        <h2>{props.image.image_name}</h2>
        <p>{props.image.image_url}</p>
    </div>
);