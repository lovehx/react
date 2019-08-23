import React from 'react';
import './HelloMessage.css';
function HelloMessage(props){
    return (
        <div>
            <h3 className='h3'>{props.data.name}!</h3>
            <h3 className='h3'>{props.data.age}!</h3>
        </div>
    );
}
export default HelloMessage;
