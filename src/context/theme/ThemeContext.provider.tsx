import React, {useState} from 'react';
import {themeContext} from './ThemeContext';
import {ThemeContextProps} from './ThemeContext.types';

export function ThemeContextProvider({children}: ThemeContextProps) {
  const [showSidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(_ => !_);
  }

  return (
    <themeContext.Provider value={{showSidebar, toggleSidebar}}>
      {children}
    </themeContext.Provider>
  );
}
