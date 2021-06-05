import {ReactNode} from 'react';

export interface ThemeContextProps {
  children: ReactNode;
}

export interface ThemeContext {
  showSidebar: boolean;
  toggleSidebar(): void;
}
