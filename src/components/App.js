import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

// key: 1,
// title: "Delegation",
// content:

function App() {
  return (
    <div>
      <Header />

      {Notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
