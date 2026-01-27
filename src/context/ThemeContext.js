import React from 'react'

const ThemeContext = React.createContext({
  darkthemeChange: () => {},
  darktheme: null,
})

export default ThemeContext
