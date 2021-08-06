import React from "react";
import "./Result.css";
function Results({ meaning, word, language,darkMode }) {
    console.log(meaning);

  return (
    <div>
      {language == "en" && word && (
        <audio
          className="audio"
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          {"your bbbb "}
        </audio>
      )}

      <div className="meanings">
        {word === "" ? (
          <span className="subTitle">
            Search by typing something in search field
          </span>
        ) : meaning ? (
          meaning.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: darkMode ? "#3b5360" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>example: </b>
                      <span className="example">{def.example}</span>
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>synonyms: </b>
                      {def.synonyms.map((s) => `${s} , `)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        ) : (
          console.log("error")
        )}
      </div>
    </div>
  );
}

export default Results;
