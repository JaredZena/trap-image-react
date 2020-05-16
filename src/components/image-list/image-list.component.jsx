import React from 'react';

import {Image} from '../image/image.component';

import './image-list.styles.css';



export const ImageList = props => (
    <div>
    <h1 id='title'>Delta Trap Images</h1>
    <table id='images'>
    <tbody>
    <tr>
        {
            props.images[0] && Object.keys(props.images[0])
            .map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }
    </tr>
    {
        props.images.map((image,index) => {
        const {id, image_name, image_url, timestamp} = image // destructuring
            return (
                <tr key={id}>
                    <td>{index+1}</td>
                    <a href={image_url} target="_blank">{image_name}</a>
                    <td>{timestamp}</td>
                </tr>
            )
        })
    }
    </tbody>
    </table>
    </div>
);