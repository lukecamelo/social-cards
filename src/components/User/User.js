import React from 'react';
import './User.css';

const user = () => {

    const pStyle = {
        float: 'left',
        marginTop: '12.5px',
        marginBottom: '12.5px',
        marginLeft: '15px'
    };

   return(
       <div className='User'>
           <p style={pStyle} >Luke Camelo</p>
           <div className='Box'></div>
       </div>
   );     
};

export default user;