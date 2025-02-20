import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LikesProvider } from './context/LikesContext';
import UserPanelContainer from './components/UserPanel/UserPanelContainer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <UserPanelContainer />
          </div>
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
