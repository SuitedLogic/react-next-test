import { createContext } from 'react';

interface AppContextType {
  theme: string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);