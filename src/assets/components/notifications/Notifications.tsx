
import React, { useState } from 'react';
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
