
import { useState } from 'react';
import './EditProfile.css';
import { MdPhoto, MdSave } from 'react-icons/md';

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
    languages: [],
    visibility: 'public'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <div className="profile-header">
          <h1>Editar Perfil</h1>
          <button type="submit" className="save-button">
            <MdSave /> Salvar Alterações
          </button>
        </div>

        <div className="profile-sections">
          <section className="profile-section">
            <h2>Informações Básicas</h2>
            
            <div className="avatar-upload">
              <div className="avatar-preview">
                <img src={profileData.avatar || '/default-avatar.png'} alt="Profile" />
                <button type="button" className="upload-button">
                  <MdPhoto /> Alterar Foto
                </button>
              </div>
              <p className="upload-hint">Recomendado: Imagem quadrada, JPG ou PNG, máximo 5MB</p>
            </div>

            <div className="form-group">
              <label>Nome Completo</label>
              <input 
                type="text" 
                name="name" 
                value={profileData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Título Profissional</label>
              <input 
                type="text" 
                name="title"
                value={profileData.title}
                onChange={handleChange}
                placeholder="Ex: Desenvolvedor Full Stack"
              />
            </div>
          </section>

          <section className="profile-section">
            <h2>Contato</h2>
            
            <div className="form-group">
              <label>Email</label>
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
            <h2>Redes Sociais</h2>
            
            <div className="form-group">
              <label>LinkedIn</label>
              <input 
                type="url" 
                name="linkedin"
                value={profileData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/seuperfil"
              />
            </div>

            <div className="form-group">
              <label>GitHub</label>
              <input 
                type="url" 
                name="github"
                value={profileData.github}
                onChange={handleChange}
                placeholder="https://github.com/seuperfil"
              />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input 
                type="url" 
                name="website"
                value={profileData.website}
                onChange={handleChange}
                placeholder="https://seusite.com"
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
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </section>

          <section className="profile-section">
            <h2>Privacidade</h2>
            <div className="form-group">
              <label>Visibilidade do Perfil</label>
              <select 
                name="visibility"
                value={profileData.visibility}
                onChange={handleChange}
              >
                <option value="public">Público - Todos podem ver meu perfil</option>
                <option value="connections">Conexões - Apenas minhas conexões podem ver</option>
                <option value="private">Privado - Apenas eu posso ver</option>
              </select>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
