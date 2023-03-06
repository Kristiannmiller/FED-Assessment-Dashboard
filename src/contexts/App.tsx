import { createContext } from 'react';
import { AppContextType } from '../Types';

export const AppContext = createContext<AppContextType | null>(null);
