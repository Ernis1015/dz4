import React from 'react';
import style from './todo.module.css'
function Todo({desc}) {
    return (
        <div className={style.titleTwo}>
            <h1>{desc}</h1>
        </div>
    );
}

export default Todo;