import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from './screens/Home';
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Aboutus from './screens/Aboutus';
import Contactus from './screens/Contactus';
import Machineries from './screens/Machineries';
import { Products } from './screens/Products';

function App() {
  const [colorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  const LightenDarkenColor = (col, amt) => {
    var usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    var b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    var g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };
  const [color] = useLocalStorage({
    key: "color",
    defaultValue: "#043c64",
  });
  return (
    <div>
      <ColorSchemeProvider
      colorScheme={colorScheme} 
    >
         <MantineProvider
        theme={{
          "::-webkit-scrollbar": {
            backgroundColor: LightenDarkenColor(color, 120),
            width: "5px",
            height: "10px",
            borderRadius: 5,
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: LightenDarkenColor(color, 120),
            borderRadius: 5,
          },
          fontFamily: "Inter",
          fontWeight: 300,
          colorScheme,
        }}
      >
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/aboutus' element={<Aboutus/>} />
        <Route  path='/contactus' element={<Contactus/>} />
        <Route  path='/machineries' element={<Machineries/>} />
        <Route  path='/products' element={<Products/>} />
      </Routes>
      </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export default App