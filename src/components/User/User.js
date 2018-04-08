import React from 'react';
import './User.css';

const user = (props) => {

    const pStyle = {
        float: 'left',
        marginTop: '12.5px',
        marginBottom: '12.5px',
        marginLeft: '15px'
    };

   return(
       <div className='User'>
           <p style={pStyle} >{props.user}</p>
           <div className='Box'></div>
       </div>
   );     
};

export default user;