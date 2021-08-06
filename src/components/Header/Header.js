import { Button, createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
 
import React from 'react';
import './Header.css';
import Categories from '../../data/category'
function Header({word,setWord,language,setLanguage,darkMode}) {
  const darkTheme = createTheme({
    palette: {
      primary:{
        main:darkMode? "#fff":'#000'
      },
      type: darkMode?'dark':"light",
    },
  });
 
const languageChangeHandler =(language) =>{
setLanguage(language);
setWord("");
   }


const wordChangeHandler = (word) =>{
setWord(word);
}

    return (
      <div className="header">
        <span className="title">{word ? word : "word search"}</span>
        <div className="inputs">
          {" "}
          <ThemeProvider theme={darkTheme}>
            <TextField
              className="search"
              id="outlined-basic"
              label="search a word"
              variant="outlined"
              value={word}
              onChange={(e) => wordChangeHandler(e.target.value)}
            />
            <TextField
              className="select"
              id="standard-select-currency"
              select
              value={language}
              onChange={(e) => languageChangeHandler(e.target.value)}
              label="Select"
              variant="outlined"

            >
              {Categories.map((data) => (
                <MenuItem key={data.label} value={data.label}>
                  {data.value}
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>
        </div>
        
      </div>
    );
}

export default Header
