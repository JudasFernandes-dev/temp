
import React, { useState, useEffect, useRef } from 'react';
import { MdSend, MdClose, MdMinimize, MdMessage } from 'react-icons/md';
import './Chat.css';

interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
  avatar: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<Message | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Ana Silva",
      text: "Quando vai estar disponível para discutir o projeto?",
      timestamp: "10m",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      sender: "Pedro Santos",
      text: "Acabei de enviar a documentação atualizada.",
      timestamp: "2h",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      sender: "Carla Oliveira",
      text: "Olá! Gostaria de te convidar para o nosso...",
      timestamp: "1d",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsConversationOpen(false);
  };

  const openConversation = (message: Message) => {
    setSelectedChat(message);
    setIsConversationOpen(true);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        sender: 'Você',
        text: message,
        timestamp: 'agora',
        avatar: "https://i.pravatar.cc/150?img=4"
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <>
      <button className="chat-trigger" onClick={toggleChat}>
        <MdMessage size={24} />
      </button>

      {isOpen && (
        <div className={`chat-container ${isConversationOpen ? 'conversation-open' : ''}`}>
          {!isConversationOpen ? (
            <>
              <div className="chat-header">
                <h3>Mensagens</h3>
                <button onClick={toggleChat}>
                  <MdClose size={20} />
                </button>
              </div>
              <div className="messages-list">
                {messages.map(msg => (
                  <div key={msg.id} className="message-preview" onClick={() => openConversation(msg)}>
                    <img src={msg.avatar} alt={msg.sender} className="avatar" />
                    <div className="message-content">
                      <div className="message-header">
                        <span className="sender">{msg.sender}</span>
                        <span className="timestamp">{msg.timestamp}</span>
                      </div>
                      <p className="preview-text">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="chat-header">
                <div className="header-content">
                  <button onClick={() => setIsConversationOpen(false)} className="back-button">
                    ←
                  </button>
                  <div className="chat-user-info">
                    <img src={selectedChat?.avatar} alt={selectedChat?.sender} className="avatar small" />
                    <span>{selectedChat?.sender}</span>
                  </div>
                </div>
                <button onClick={toggleChat}>
                  <MdClose size={20} />
                </button>
              </div>
              <div className="chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`message ${msg.sender === 'Você' ? 'sent' : 'received'}`}>
                    <p>{msg.text}</p>
                    <span className="timestamp">{msg.timestamp}</span>
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chat;
