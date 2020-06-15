import React from 'react';
import './Messages.css';
import Message from '../Message/Message';

import ScrollTobottom from 'react-scroll-to-bottom';

const Messages = ({messages,name}) => (

    <ScrollTobottom className="messages">
        {messages.map((message,i)=> <div key={i}><Message message={message} name={name}/></div>)}

        </ScrollTobottom>


)


export default Messages;