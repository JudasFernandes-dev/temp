
import React, { useState } from 'react';
import './configuser.css';

const ConfigUser = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    projects: true,
    messages: true
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false
  });

  const handleNotificationChange = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePrivacyChange = (setting: keyof typeof privacy) => {
    setPrivacy(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="config-container">
      <h2>Configurações</h2>
      
      <section className="config-section">
        <h3>Notificações</h3>
        <div className="config-options">
          <label>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleNotificationChange('email')}
            />
            Receber notificações por e-mail
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={() => handleNotificationChange('push')}
            />
            Notificações push
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.projects}
              onChange={() => handleNotificationChange('projects')}
            />
            Atualizações de projetos
          </label>
          <label>
            <input
              type="checkbox"
              checked={notifications.messages}
              onChange={() => handleNotificationChange('messages')}
            />
            Mensagens diretas
          </label>
        </div>
      </section>

      <section className="config-section">
        <h3>Privacidade</h3>
        <div className="config-options">
          <label>
            <input
              type="checkbox"
              checked={privacy.profilePublic}
              onChange={() => handlePrivacyChange('profilePublic')}
            />
            Perfil público
          </label>
          <label>
            <input
              type="checkbox"
              checked={privacy.showEmail}
              onChange={() => handlePrivacyChange('showEmail')}
            />
            Mostrar e-mail no perfil
          </label>
          <label>
            <input
              type="checkbox"
              checked={privacy.showPhone}
              onChange={() => handlePrivacyChange('showPhone')}
            />
            Mostrar telefone no perfil
          </label>
        </div>
      </section>

      <button className="save-config">Salvar alterações</button>
    </div>
  );
};

export default ConfigUser;
