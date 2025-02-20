import React from 'react';
import UserPanel from './UserPanel';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';

import en from '../../translations/en.json';
import ru from '../../translations/ru.json';

function UserPanelContainer() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { likes, isLiked, toggleLike } = useLikes();

  const t = language === 'en' ? en : ru;

  return (
    <UserPanel
      theme={theme}
      greeting={t.greeting}
      likesLabel={t.likes}
      likesCount={likes}
      likeButtonLabel={isLiked ? t.likedButton : t.likeButton}
      onLike={toggleLike}
      onToggleTheme={toggleTheme}
      onToggleLanguage={toggleLanguage}
      toggleThemeLabel={t.toggleTheme}
      switchLanguageLabel={t.switchLanguage}
    />
  );
}

export default UserPanelContainer;
