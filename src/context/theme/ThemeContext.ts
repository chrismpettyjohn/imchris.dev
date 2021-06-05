import {createContext, Context} from 'react';
import {ThemeContext} from './ThemeContext.types';

export const themeContext: Context<ThemeContext> = createContext<ThemeContext>({
  showSidebar: false,
  toggleSidebar() {},
});
