import React from 'react';
import style from './description.module.css'

const Description = ({info}) => {
    return (
        <div className={style.title}>
            <p>{info.title}</p>
            <p>{info.description}</p>
        </div>
    );
};

export default Description;