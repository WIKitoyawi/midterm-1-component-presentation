import React from 'react';
import Button from '../Button';

function UserPanel({
  theme,
  greeting,
  likesLabel,
  likesCount,
  likeButtonLabel,
  onLike,
  onToggleTheme,
  onToggleLanguage,
  toggleThemeLabel,
  switchLanguageLabel
}) {
  const panelStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px'
  };

  return (
    <div style={panelStyle}>
      <h1>{greeting}</h1>
      <p>
        {likesLabel}: {likesCount}
      </p>
      <Button onClick={onLike}>{likeButtonLabel}</Button>
      <Button onClick={onToggleTheme}>{toggleThemeLabel}</Button>
      <Button onClick={onToggleLanguage}>{switchLanguageLabel}</Button>
    </div>
  );
}

export default UserPanel;
