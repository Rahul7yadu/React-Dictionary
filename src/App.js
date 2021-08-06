import { useEffect, useState, useRef } from "react";
import { Container, Button, withStyles, Switch } from "@material-ui/core";
import Header from "./components/Header/Header";
import "./App.css";
import Results from "./components/results/Results";
import Footer from "./components/Footer/Footer"
import { grey } from "@material-ui/core/colors";

function App() {
  const [meaning, setMeaning] = useState();
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const DarkMode = withStyles({
    switchBase: {
      color: grey[500],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async (props) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
    );

    const data = await response.json();
    if (data.title === "No Definitions Found") {
      setMeaning();
    } else {
      setMeaning(data);
    }
  };

  return (
    <div
      className="App"
      style={{
        height:'100%',
        backgroundColor: darkMode ? "#282c34" : "#fff",
        color: darkMode ? "#fff" : "#282c34",
        transition: "all 0.7s linear",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContents:'space-between'
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 15,
            paddingTop: 10,
            
          }}
          className="mode"
        >
          <span>{darkMode ? "DARK" : "LIGHT"}</span>
          <DarkMode
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></DarkMode>
        </div>
        <Header
          word={word}
          setWord={setWord}
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode}
        ></Header>
        <Button
          variant="contained"
          color="secondary"
          onClick={dictionaryApi}
          className="button"
        >
          Search
        </Button>
        {meaning && (
          <Results
            meaning={meaning}
            word={word}
            language={language}
            darkMode={darkMode}
          >
            {" "}
          </Results>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
