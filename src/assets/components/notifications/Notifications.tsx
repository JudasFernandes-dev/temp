
import React, { useState } from 'react';
import { MdClose, MdNotifications } from 'react-icons/md';
import './notifications.css';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  date: string;
  read: boolean;
}

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Novo Projeto',
      message: 'Você foi convidado para participar do projeto "App Mobile"',
      type: 'info',
      date: '2024-03-01',
      read: false
    },
    {
      id: 2,
      title: 'Hackathon',
      message: 'O hackathon "Inovação Tech" começará em 2 dias',
      type: 'warning',
      date: '2024-03-02',
      read: false
    }
  ]);

  const toggleNotifications = () => setIsOpen(!isOpen);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-container">
      <button className="notifications-trigger" onClick={toggleNotifications}>
        <MdNotifications size={24} />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notificações</h3>
            <button className="close-button" onClick={toggleNotifications}>
              <MdClose size={20} />
            </button>
          </div>
          <div className="notifications-list">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="notification-header">
                  <h4>{notification.title}</h4>
                  <span className="notification-date">{notification.date}</span>
                </div>
                <p className="notification-message">{notification.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  date: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Novo Projeto',
      message: 'Você foi convidado para participar do projeto "App Mobile"',
      type: 'info',
      date: '2024-03-01',
      read: false
    },
    {
      id: 2,
      title: 'Hackathon',
      message: 'O hackathon "Inovação Tech" começará em 2 dias',
      type: 'warning',
      date: '2024-03-02',
      read: false
    },
    {
      id: 3,
      title: 'Conclusão',
      message: 'Parabéns! Você completou todas as tarefas do projeto',
      type: 'success',
      date: '2024-03-03',
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <div className="notifications-panel">
      <h2>Notificações</h2>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-header">
              <h3>{notification.title}</h3>
              <span className="notification-date">{notification.date}</span>
            </div>
            <p className="notification-message">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
