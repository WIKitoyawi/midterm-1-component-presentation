import React, { createContext, useState } from 'react';

export const LikesContext = createContext();

export function LikesProvider({ children }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
    setLikes(prevLikes => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  return (
    <LikesContext.Provider value={{ likes, isLiked, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}
