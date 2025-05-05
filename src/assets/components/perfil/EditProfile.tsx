
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdPhoto, MdSave, MdPerson, MdEmail, MdPhone, MdLocationOn, MdLink } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './EditProfile.css';

interface ProfileFormData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  linkedin: string;
  github: string;
  website: string;
  visibility: 'public' | 'connections' | 'private';
}

const EditProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile data:', data);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-content">
        <header className="profile-header">
          <h1>Configurações do Perfil</h1>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile-card">
            <div className="card-header">
              <MdPerson className="card-icon" />
              <h2>Informações Básicas</h2>
            </div>
            
            <div className="avatar-section">
              <div className="avatar-wrapper">
                <img 
                  src={avatar || '/default-avatar.png'} 
                  alt="Profile" 
                  className="avatar-preview"
                />
                <label className="avatar-upload-button">
                  <MdPhoto />
                  <span>Alterar Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    hidden
                  />
                </label>
              </div>
              <p className="avatar-hint">Recomendado: 96x96px, JPG ou PNG</p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>Nome Completo</label>
                <input
                  type="text"
                  {...register('name', { required: true, minLength: 2 })}
                  className="form-input"
                />
                {errors.name && <span className="error-message">Nome é obrigatório</span>}
              </div>

              <div className="form-group">
                <label>Título Profissional</label>
                <input
                  type="text"
                  {...register('title')}
                  className="form-input"
                  placeholder="Ex: Desenvolvedor Full Stack"
                />
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <MdEmail className="card-icon" />
              <h2>Contato</h2>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="form-input"
                />
                {errors.email && <span className="error-message">Email válido é obrigatório</span>}
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  {...register('location')}
                  className="form-input"
                  placeholder="Ex: São Paulo, Brasil"
                />
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <MdLink className="card-icon" />
              <h2>Links Sociais</h2>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label className="input-with-icon">
                  <FaLinkedin className="input-icon" />
                  LinkedIn
                </label>
                <input
                  type="url"
                  {...register('linkedin')}
                  className="form-input"
                  placeholder="https://linkedin.com/in/seuperfil"
                />
              </div>

              <div className="form-group">
                <label className="input-with-icon">
                  <FaGithub className="input-icon" />
                  GitHub
                </label>
                <input
                  type="url"
                  {...register('github')}
                  className="form-input"
                  placeholder="https://github.com/seuperfil"
                />
              </div>

              <div className="form-group">
                <label className="input-with-icon">
                  <MdLink className="input-icon" />
                  Website
                </label>
                <input
                  type="url"
                  {...register('website')}
                  className="form-input"
                  placeholder="https://seusite.com"
                />
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <MdPerson className="card-icon" />
              <h2>Sobre</h2>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>Biografia</label>
                <textarea
                  {...register('bio')}
                  className="form-textarea"
                  rows={4}
                  placeholder="Conte um pouco sobre você..."
                />
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <MdPerson className="card-icon" />
              <h2>Visibilidade</h2>
            </div>

            <div className="form-fields">
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    {...register('visibility')}
                    value="public"
                    defaultChecked
                  />
                  <span>Público - Todos podem ver meu perfil</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    {...register('visibility')}
                    value="connections"
                  />
                  <span>Conexões - Apenas minhas conexões podem ver</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    {...register('visibility')}
                    value="private"
                  />
                  <span>Privado - Apenas eu posso ver</span>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="save-button">
            <MdSave />
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
