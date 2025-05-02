
import React, { useState, useEffect, useRef } from 'react';
import { MdSend, MdClose, MdMinimize } from 'react-icons/md';
import './Chat.css';

interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        sender: 'Você',
        text: message,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        <h3>Chat</h3>
        <div className="chat-controls">
          <button onClick={toggleMinimize}>
            <MdMinimize size={20} />
          </button>
          <button onClick={toggleChat}>
            <MdClose size={20} />
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className="message">
            <div className="message-header">
              <span className="sender">{msg.sender}</span>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">
          <MdSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
