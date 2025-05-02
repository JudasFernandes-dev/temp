
import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <>
      <button 
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdMessage size={24} />
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
