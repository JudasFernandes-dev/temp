
import { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    linkedin: '',
    github: '',
    website: '',
    visibility: 'public'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save logic here
    console.log('Profile data saved:', profileData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="edit-profile-container">
      <h1>Configurações do Perfil</h1>
      <form onSubmit={handleSubmit}>
        <section className="profile-section">
          <h2>Informações Básicas</h2>
          
          <div className="form-group">
            <label>Profile</label>
            <div className="profile-upload">
              <input type="file" accept="image/*" />
              <p>Recomendado: Imagem quadrada, JPG ou PNG, máximo 5MB</p>
            </div>
          </div>

          <div className="form-group">
            <label>Nome*</label>
            <input 
              type="text" 
              name="name" 
              value={profileData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Título profissional</label>
            <input 
              type="text" 
              name="title"
              value={profileData.title}
              onChange={handleChange}
              placeholder="Ex: Desenvolvedora de Software"
            />
          </div>
        </section>

        <section className="profile-section">
          <h2>Informações de Contato</h2>
          
          <div className="form-group">
            <label>Email*</label>
            <input 
              type="email" 
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input 
              type="tel" 
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Localização</label>
            <input 
              type="text" 
              name="location"
              value={profileData.location}
              onChange={handleChange}
              placeholder="Ex: São Paulo, Brasil"
            />
          </div>
        </section>

        <section className="profile-section">
          <h2>Sobre</h2>
          <div className="form-group">
            <label>Biografia</label>
            <textarea 
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              rows={4}
            />
          </div>
        </section>

        <section className="profile-section">
          <h2>Links</h2>
          
          <div className="form-group">
            <label>LinkedIn</label>
            <input 
              type="url" 
              name="linkedin"
              value={profileData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/seuperfil"
            />
          </div>

          <div className="form-group">
            <label>GitHub</label>
            <input 
              type="url" 
              name="github"
              value={profileData.github}
              onChange={handleChange}
              placeholder="github.com/seuperfil"
            />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input 
              type="url" 
              name="website"
              value={profileData.website}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="profile-section">
          <h2>Visibilidade do Perfil</h2>
          <div className="form-group">
            <select 
              name="visibility"
              value={profileData.visibility}
              onChange={handleChange}
            >
              <option value="public">Todos podem ver meu perfil</option>
              <option value="connections">Apenas minhas conexões podem ver meu perfil completo</option>
              <option value="private">Apenas eu posso ver meu perfil completo</option>
            </select>
          </div>
        </section>

        <button type="submit" className="save-button">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
