
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header-user.css';

function HeaderUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState(0);

  return (
    <header className="header-user">
      <div className="header-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="header-actions">
          <div className="notification-icon">
            <i className="fas fa-bell fa-lg"></i>
            {notifications > 0 && <span className="badge">{notifications}</span>}
          </div>
          
          <div className="messages-icon">
            <i className="fas fa-envelope fa-lg"></i>
            {messages > 0 && <span className="badge">{messages}</span>}
          </div>

          <div className="user-menu">
            <img src="/default-avatar.png" alt="User" className="user-avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
