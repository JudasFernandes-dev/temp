import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './EditProfile.css';

const profileSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  profession: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  about: z.string().optional(),
  linkedin: z.string().url('URL inválida').optional(),
  github: z.string().url('URL inválida').optional(),
  website: z.string().url('URL inválida').optional(),
  visibility: z.enum(['todos', 'conexoes', 'apenas-eu'])
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function EditProfile() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema)
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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
      <h1>Configurações do Perfil</h1>
      <p className="subtitle">Configure as informações principais do seu perfil</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile-card">
          <h2>Foto de Perfil</h2>
          <div className="avatar-section">
            <div className="avatar-preview">
              {avatar && <img src={avatar} alt="Avatar preview" />}
            </div>
            <div className="avatar-upload">
              <input type="file" accept="image/*" onChange={handleAvatarChange} />
              <p>Recomendado: 200x200px, máximo 5MB</p>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h2>Informações Básicas</h2>
          <div className="form-group">
            <label>Nome*</label>
            <input {...register('name')} placeholder="Jane Doe" />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label>Profissão</label>
            <input {...register('profession')} />
          </div>
        </div>

        <div className="profile-card">
          <h2>Contato</h2>
          <div className="form-group">
            <label>Email*</label>
            <input {...register('email')} />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input {...register('phone')} />
          </div>
          <div className="form-group">
            <label>Localização</label>
            <input {...register('location')} />
          </div>
        </div>

        <div className="profile-card">
          <h2>Sobre</h2>
          <div className="form-group">
            <textarea {...register('about')} rows={4} placeholder="Conte um pouco sobre você..." />
          </div>
        </div>

        <div className="profile-card">
          <h2>Links</h2>
          <div className="form-group">
            <label>LinkedIn</label>
            <input {...register('linkedin')} />
            {errors.linkedin && <span className="error">{errors.linkedin.message}</span>}
          </div>
          <div className="form-group">
            <label>GitHub</label>
            <input {...register('github')} />
            {errors.github && <span className="error">{errors.github.message}</span>}
          </div>
          <div className="form-group">
            <label>Website</label>
            <input {...register('website')} />
            {errors.website && <span className="error">{errors.website.message}</span>}
          </div>
        </div>

        <div className="profile-card">
          <h2>Visibilidade do Perfil</h2>
          <div className="radio-group">
            <label>
              <input type="radio" {...register('visibility')} value="todos" />
              Todos
            </label>
            <label>
              <input type="radio" {...register('visibility')} value="conexoes" />
              Apenas Conexões
            </label>
            <label>
              <input type="radio" {...register('visibility')} value="apenas-eu" />
              Apenas Eu
            </label>
          </div>
        </div>

        <button type="submit" className="save-button">Salvar Alterações</button>
      </form>
    </div>
  );
}