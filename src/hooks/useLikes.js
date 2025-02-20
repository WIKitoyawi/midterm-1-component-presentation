import { useContext } from 'react';
import { LikesContext } from '../context/LikesContext';

export function useLikes() {
  return useContext(LikesContext);
}
