
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme as 'light' | 'dark');
      }
    } catch (error) {
      console.warn('Local storage not available');
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    } catch (error) {
      console.warn('Local storage not available');
    }
  }, [theme]);

  const toggleTheme = () => {
    setShowModal(true);
  };

  const confirmThemeChange = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    setShowModal(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {showModal && (
        <div className="theme-modal">
          <div className="theme-modal-content">
            <h3>Mudar tema?</h3>
            <p>Você deseja alterar para o tema {theme === 'light' ? 'escuro' : 'claro'}?</p>
            <div className="theme-modal-buttons">
              <button onClick={confirmThemeChange}>Sim</button>
              <button onClick={() => setShowModal(false)}>Não</button>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
