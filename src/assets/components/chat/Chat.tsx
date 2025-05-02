
import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
      
      {isOpen && (
        <>
          <div className="chat-overlay" onClick={() => setIsOpen(false)} />
          <div className="chat-window">
            <div className="chat-header">
              <span>Chat</span>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="chat-messages">
              {/* Messages will go here */}
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Digite sua mensagem..." />
              <button>Enviar</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chat;
