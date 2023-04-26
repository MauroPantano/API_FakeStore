import { createContext, useContext, useState, useEffect } from 'react';
import PrivacyText from './privacyText';
import Footer from './footer';

export const FontContext = createContext(null);
export const ThemeContext = createContext ('light');
export const backgroundTheme = createContext('bisque');
export const colorTheme = createContext('black');

export const Privacy = () => { 
  const [font, setFont] = useState(18);
  const [theme, setTheme] = useState(ThemeContext);
  const [background, setBackground] = useState(backgroundTheme);
  const [color, setColor] = useState(colorTheme);
  
  useEffect(() => {
    if (background === 'black') {
      setColor('white');
    } else {
      setColor('black');
    }
  }, [background]);
  return (
    <ThemeContext.Provider value={theme}>
    <div className='main-container' style={{colorScheme: theme, paddingBottom: 50}}>
      <div className='container-changeFont'>
        <center>
        <h3>PANEL CONTROL</h3>
        </center>
        <label>Zoom in<button onClick={() => setFont(font + 1)} className='container-changeFont-plus'>+</button></label>
        <label>Zoom out<button onClick={() => setFont(font - 1)} className='container-changeFont-less'>-</button></label>
        <label>Change theme button<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='container-changeFont-button' >
          Change Theme
        </button></label>
        <label>Change background color<button onClick={() => setBackground(background === 'black' ? 'bisque' : 'black')} className='container-changeFont-button'>
          Change Theme
        </button></label>
      </div> 
      <FontContext.Provider value={font}>
        <div style={{fontSize: font, backgroundColor: background, color: color}}>
          <PrivacyText></PrivacyText>
        </div>
      </FontContext.Provider>
    </div>

    <Footer></Footer>
    </ThemeContext.Provider>
    
  )
}
