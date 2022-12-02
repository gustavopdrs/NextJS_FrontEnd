import React from 'react'
import Link from 'next/link'
const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default ThemeContext